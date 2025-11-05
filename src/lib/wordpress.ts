// WordPress GraphQL API service for fetching products by category

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price?: string;
  slug: string;
  category: string;
  frontImage?: string;
  backImage?: string;
  frontAlt?: string | null;
  backAlt?: string | null;
}

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  description?: string;
}

// WordPress REST API configuration
// Note: Default to admin.keyfirebbq.com REST API; can be overridden via env
const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'https://admin.keyfirebbq.com/wp-json/wp/v2';
const WORDPRESS_ORIGIN = (() => {
  try {
    const u = new URL(WORDPRESS_API_URL);
    return `${u.protocol}//${u.host}`;
  } catch {
    return 'https://admin.keyfirebbq.com';
  }
})();

// In-memory cache (10 minutes TTL)
const CACHE_TTL_MS = 10 * 60 * 1000;
let categoriesCache: { data: ProductCategory[]; ts: number } | null = null;
const productsCache = new Map<string, { data: Product[]; ts: number }>();
const mediaResolveCache = new Map<number, { url: string; alt: string | null }>();
const mediaByUrlAltCache = new Map<string, string | null>();

function normalizeMediaUrl(raw: any): string | null {
  if (typeof raw !== 'string') return null;
  let s = raw.trim();
  // Remove leading/trailing quotes/backticks
  s = s.replace(/^\s*["'`]+/, '').replace(/["'`]+\s*$/, '');
  // Final trim
  s = s.trim();
  if (!s) return null;
  return s;
}

function normalizeAltText(raw: any): string | null {
  if (typeof raw !== 'string') return null;
  let s = raw.trim();
  s = s.replace(/^\s*["'`]+/, '').replace(/["'`]+\s*$/, '');
  s = s.trim();
  return s || null;
}

// Precise ACF grill group keys (adaptable in one place)
const ACF_GRILL_KEYS = {
  frontImage: 'front_image',
  backImage: 'back_image',
  // Optional separate alt fields if present
  frontAlt: ['front_alt'],
  backAlt: ['back_alt'],
} as const;

function isFresh(ts: number, ttl: number = CACHE_TTL_MS) {
  return Date.now() - ts < ttl;
}

async function resolveMedia(input: any): Promise<{ url: string | null; alt: string | null }> {
  try {
    if (!input) return null;
    if (typeof input === 'string') {
      // If already URL
      const normalized = normalizeMediaUrl(input);
      if (normalized && /^https?:\/\//.test(normalized)) {
        const cachedAlt = mediaByUrlAltCache.get(normalized);
        if (cachedAlt !== undefined) return { url: normalized, alt: cachedAlt };
        const alt = await resolveAltViaREST(normalized);
        mediaByUrlAltCache.set(input, alt ?? null);
        return { url: normalized, alt: alt ?? null };
      }
      // Handle relative paths like "/wp-content/..." or "wp-content/..."
      const trimmed = (normalized ?? '').trim();
      if (trimmed.startsWith('/')) {
        const abs = `${WORDPRESS_ORIGIN}${trimmed}`;
        const cachedAlt = mediaByUrlAltCache.get(abs);
        if (cachedAlt !== undefined) return { url: abs, alt: cachedAlt };
        const alt = await resolveAltViaREST(abs);
        mediaByUrlAltCache.set(abs, alt ?? null);
        return { url: abs, alt: alt ?? null };
      }
      if (trimmed.startsWith('wp-content') || trimmed.startsWith('uploads')) {
        const abs = `${WORDPRESS_ORIGIN}/${trimmed}`;
        const cachedAlt = mediaByUrlAltCache.get(abs);
        if (cachedAlt !== undefined) return { url: abs, alt: cachedAlt };
        const alt = await resolveAltViaREST(abs);
        mediaByUrlAltCache.set(abs, alt ?? null);
        return { url: abs, alt: alt ?? null };
      }
      return { url: null, alt: null };
    }
    if (typeof input === 'number') {
      // Numeric media ID
      if (mediaResolveCache.has(input)) return mediaResolveCache.get(input)!;
      const url = `${WORDPRESS_API_URL}/media/${input}`;
      const res = await fetch(url);
      if (!res.ok) return { url: null, alt: null };
      const data = await res.json();
      const src = data?.source_url || data?.guid?.rendered || null;
      const alt = data?.alt_text || null;
      const payload = { url: src, alt };
      if (src) mediaResolveCache.set(input, payload);
      return payload;
    }
    if (typeof input === 'object') {
      // ACF image object or WP media object
      let directRaw = input?.url || input?.source_url || input?.sourceUrl || input?.mediaItemUrl || input?.guid?.rendered || null;
      let direct = typeof directRaw === 'string' ? normalizeMediaUrl(directRaw) : null;
      if (typeof direct === 'string' && !/^https?:\/\//.test(direct)) {
        const d = direct.trim();
        direct = d.startsWith('/') ? `${WORDPRESS_ORIGIN}${d}` : `${WORDPRESS_ORIGIN}/${d}`;
      }
      let alt = normalizeAltText(input?.alt || input?.alt_text || input?.altText || input?.title || null);
      if (direct) {
        if (!alt) {
          const cachedAlt = mediaByUrlAltCache.get(direct);
          if (cachedAlt !== undefined) alt = cachedAlt;
          else {
            const fetchedAlt = await resolveAltViaREST(direct);
            mediaByUrlAltCache.set(direct, fetchedAlt ?? null);
            alt = fetchedAlt ?? null;
          }
        }
        return { url: direct, alt: alt ?? null };
      }
      if (typeof input?.id === 'number') {
        return await resolveMedia(input.id);
      }
      if (typeof input?.ID === 'number') {
        return await resolveMedia(input.ID);
      }
      return { url: null, alt: null };
    }
    return { url: null, alt: null };
  } catch {
    return { url: null, alt: null };
  }
}
// Resolve alt text for a media URL via WordPress REST API
async function resolveAltViaREST(url: string): Promise<string | null> {
  try {
    const basename = (() => {
      try {
        const u = new URL(url);
        const parts = u.pathname.split('/');
        return parts[parts.length - 1];
      } catch {
        const parts = url.split('?')[0].split('/');
        return parts[parts.length - 1];
      }
    })();
    // Search media by filename (best-effort)
    const api = `${WORDPRESS_API_URL}/media?search=${encodeURIComponent(basename)}&per_page=5`;
    const res = await fetch(api);
    if (!res.ok) return null;
    const items = await res.json();
    if (Array.isArray(items)) {
      // Prefer exact source_url match, otherwise first candidate
      const exact = items.find((m: any) => m?.source_url === url);
      const pick = exact || items[0];
      return pick?.alt_text || null;
    }
    return null;
  } catch {
    return null;
  }
}

// GraphQL query to fetch posts by category (treating posts as products)
const GET_PRODUCTS_BY_CATEGORY = `
  query GetProductsByCategory($categoryName: String!, $first: Int!) {
    posts(where: {categoryName: $categoryName}, first: $first) {
      nodes {
        id
        databaseId
        title
        slug
        excerpt
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            slug
            name
            parent {
              node {
                slug
                name
              }
            }
          }
        }
      }
    }
  }
`;

// GraphQL query to fetch posts by subcategory under grill_category
const GET_PRODUCTS_BY_GRILL_SUBCATEGORY = `
  query GetProductsByGrillSubcategory($subcategorySlug: String!, $first: Int!) {
    posts(where: {categoryName: $subcategorySlug}, first: $first) {
      nodes {
        id
        databaseId
        title
        slug
        excerpt
        content
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            slug
            name
            parent {
              node {
                slug
                name
              }
            }
          }
        }
      }
    }
  }
`;

// GraphQL query to get all categories
const GET_PRODUCT_CATEGORIES = `
  query GetProductCategories {
    categories {
      nodes {
        id
        databaseId
        name
        slug
        description
      }
    }
  }
`;

// Execute GraphQL query
async function executeGraphQLQuery(query: string, variables: any = {}) {
  const response = await fetch(WORDPRESS_API_URL.replace('/wp-json/wp/v2', '/graphql'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.status}`);
  }

  const result = await response.json();
  
  if (result.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(result.errors)}`);
  }

  return result.data;
}

// Try fetching products via WPGraphQL to read ACF grill group images
async function fetchProductsByCategoryGraphQL(categorySlug: string, limit: number = 12): Promise<Product[] | null> {
  // Query variant 1: ACF group with snake_case fields
  const QUERY_SNAKE = `
    query GetGrillByCategory($categorySlug: String!, $first: Int!) {
      posts(where: {categoryName: $categorySlug}, first: $first) {
        nodes {
          id
          databaseId
          title
          slug
          excerpt
          content
          featuredImage { node { sourceUrl altText } }
          acf {
            grill {
              front_image { ... on MediaItem { sourceUrl altText mediaItemUrl } }
              back_image { ... on MediaItem { sourceUrl altText mediaItemUrl } }
            }
          }
          categories { nodes { slug name } }
        }
      }
    }
  `;
  // Query variant 2: ACF group with camelCase fields
  const QUERY_CAMEL = `
    query GetGrillByCategoryCamel($categorySlug: String!, $first: Int!) {
      posts(where: {categoryName: $categorySlug}, first: $first) {
        nodes {
          id
          databaseId
          title
          slug
          excerpt
          content
          featuredImage { node { sourceUrl altText } }
          acf {
            grill {
              frontImage { ... on MediaItem { sourceUrl altText mediaItemUrl } }
              backImage { ... on MediaItem { sourceUrl altText mediaItemUrl } }
            }
          }
          categories { nodes { slug name } }
        }
      }
    }
  `;

  const variables = { categorySlug, first: limit };
  try {
    // Try snake_case first
    const snakeResult = await executeGraphQLQuery(QUERY_SNAKE, variables);
    const nodes1 = snakeResult?.posts?.nodes || [];
    if (Array.isArray(nodes1) && nodes1.length > 0) {
      const mapped: Product[] = await Promise.all(nodes1.map(async (node: any) => {
        const featured = node?.featuredImage?.node?.sourceUrl || '/placeholder-product.jpg';
        const frontRaw = node?.acf?.grill?.front_image || null;
        const backRaw = node?.acf?.grill?.back_image || null;
        const frontResolved = await resolveMedia(frontRaw);
        const backResolved = await resolveMedia(backRaw);
        return {
          id: node?.databaseId || node?.id || 0,
          name: node?.title || 'Untitled Product',
          description: node?.excerpt || node?.content || '',
          image: featured,
          slug: node?.slug || '',
          category: categorySlug,
          frontImage: frontResolved.url || featured,
          backImage: backResolved.url || frontResolved.url || featured,
          frontAlt: frontResolved.alt ?? null,
          backAlt: backResolved.alt ?? null,
        } as Product;
      }));
      return mapped;
    }
  } catch (e1) {
    // fallthrough to camelCase variant
  }
  try {
    const camelResult = await executeGraphQLQuery(QUERY_CAMEL, variables);
    const nodes2 = camelResult?.posts?.nodes || [];
    if (Array.isArray(nodes2) && nodes2.length > 0) {
      const mapped: Product[] = await Promise.all(nodes2.map(async (node: any) => {
        const featured = node?.featuredImage?.node?.sourceUrl || '/placeholder-product.jpg';
        const frontRaw = node?.acf?.grill?.frontImage || null;
        const backRaw = node?.acf?.grill?.backImage || null;
        const frontResolved = await resolveMedia(frontRaw);
        const backResolved = await resolveMedia(backRaw);
        return {
          id: node?.databaseId || node?.id || 0,
          name: node?.title || 'Untitled Product',
          description: node?.excerpt || node?.content || '',
          image: featured,
          slug: node?.slug || '',
          category: categorySlug,
          frontImage: frontResolved.url || featured,
          backImage: backResolved.url || frontResolved.url || featured,
          frontAlt: frontResolved.alt ?? null,
          backAlt: backResolved.alt ?? null,
        } as Product;
      }));
      return mapped;
    }
  } catch (e2) {
    // ignore and fallback
  }
  // Query variant 3: Custom Post Type grills with search
  const QUERY_GRILLS_SEARCH = `
    query GetGrillsBySearch($term: String!, $first: Int!) {
      grills(where: { search: $term }, first: $first) {
        nodes {
          id
          databaseId
          title
          slug
          excerpt
          content
          featuredImage { node { sourceUrl altText } }
          acf {
            grill {
              front_image { ... on MediaItem { sourceUrl altText mediaItemUrl } }
              back_image { ... on MediaItem { sourceUrl altText mediaItemUrl } }
            }
          }
        }
      }
    }
  `;
  try {
    const data = await executeGraphQLQuery(QUERY_GRILLS_SEARCH, { term: categorySlug, first: limit });
    const nodes3 = data?.grills?.nodes || [];
    if (Array.isArray(nodes3) && nodes3.length > 0) {
      const mapped: Product[] = await Promise.all(nodes3.map(async (node: any) => {
        const featured = node?.featuredImage?.node?.sourceUrl || '/placeholder-product.jpg';
        const frontRaw = node?.acf?.grill?.front_image || null;
        const backRaw = node?.acf?.grill?.back_image || null;
        const frontResolved = await resolveMedia(frontRaw);
        const backResolved = await resolveMedia(backRaw);
        return {
          id: node?.databaseId || node?.id || 0,
          name: node?.title || 'Untitled Product',
          description: node?.excerpt || node?.content || '',
          image: featured,
          slug: node?.slug || '',
          category: categorySlug,
          frontImage: frontResolved.url || featured,
          backImage: backResolved.url || frontResolved.url || featured,
          frontAlt: frontResolved.alt ?? null,
          backAlt: backResolved.alt ?? null,
        } as Product;
      }));
      return mapped;
    }
  } catch (e3) {
    // ignore and fallback to REST
  }
  return null;
}
/**
 * Fetch Grill posts from WordPress REST API using local proxy to avoid CORS issues
 */
async function fetchPostsByCategory(categorySlug: string, limit: number = 12): Promise<Product[]> {
  try {
    // Try different methods through our proxy API
    const methods = ['search', 'taxonomy', 'categories', 'all'];
    
    for (const method of methods) {
      try {
        const response = await fetch(`/api/wordpress?endpoint=${method}&category=${categorySlug}&limit=${limit}`);
        
        if (response.ok) {
          const result = await response.json();
          
          if (result.success && result.data && result.data.length > 0) {
            let posts = result.data;
            
            // If method is 'all', filter the posts
            if (method === 'all') {
              posts = result.data.filter((post: any) => {
                const title = post.title?.rendered?.toLowerCase() || '';
                const content = post.content?.rendered?.toLowerCase() || '';
                const excerpt = post.excerpt?.rendered?.toLowerCase() || '';
                const searchTerm = categorySlug.toLowerCase().replace('-', ' ');
                
                return title.includes(searchTerm) || 
                       content.includes(searchTerm) || 
                       excerpt.includes(searchTerm) ||
                       title.includes(categorySlug) ||
                       content.includes(categorySlug);
              });
            }
            
            if (posts.length > 0) {
              const products: Product[] = posts.map((post: any) => ({
                id: post.id,
                name: post.title?.rendered || 'Untitled Product',
                description: post.excerpt?.rendered?.replace(/<[^>]*>/g, '') || 
                            post.content?.rendered?.replace(/<[^>]*>/g, '').substring(0, 150) + '...' || 
                            'No description available',
                image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder-product.jpg',
                slug: post.slug,
                category: categorySlug,
              }));
              
              return products;
            }
          }
        }
      } catch (methodError) {
        continue;
      }
    }
    
    throw new Error(`No posts found for category '${categorySlug}' using any proxy method`);
  } catch (error) {
    console.error('Proxy API error:', error);
    throw error;
  }
}

/**
 * Fetch Grill products from WordPress by category using direct API calls for static export
 * @param categorySlug - The category slug (e.g., 'charcoal-grill', 'gas-grill')
 * @param limit - Number of products to fetch (default: 12)
 */
export async function fetchProductsByCategory(categorySlug: string, limit: number = 12): Promise<Product[]> {
  try {
    // Cache lookup
    const cacheKey = `${categorySlug}|${limit}`;
    const cached = productsCache.get(cacheKey);
    if (cached && isFresh(cached.ts)) {
      return cached.data;
    }
    // 仅使用 REST（ACF to REST 已安装）
    // 对于静态导出，直接调用WordPress API
    const taxonomyUrl = `https://admin.keyfirebbq.com/wp-json/wp/v2/grill_category?slug=${categorySlug}`;
    const taxonomyResponse = await fetch(taxonomyUrl);
    
    if (!taxonomyResponse.ok) {
      throw new Error(`Taxonomy fetch failed: ${taxonomyResponse.status}`);
    }
    
    const taxonomyData = await taxonomyResponse.json();
    
    if (!taxonomyData || taxonomyData.length === 0) {
      return getFallbackProducts(categorySlug);
    }
    
    const categoryId = taxonomyData[0].id;
    const postsUrl = `https://admin.keyfirebbq.com/wp-json/wp/v2/grill?grill_category=${categoryId}&per_page=${limit}&_embed`;
    
    const postsResponse = await fetch(postsUrl);
    
    if (!postsResponse.ok) {
      throw new Error(`Posts fetch failed: ${postsResponse.status}`);
    }
    
    const posts = await postsResponse.json();
    
    if (posts && Array.isArray(posts)) {
      const mapped: Product[] = await Promise.all(posts.map(async (post: any) => {
        const acf = post.acf || {};
        const grill = acf?.grill || {};
        const featured = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder-product.jpg';
        // 兼容读取：优先 grill 分组，其次 acf 顶层
        const frontSrcRaw = grill?.[ACF_GRILL_KEYS.frontImage] ?? acf?.[ACF_GRILL_KEYS.frontImage] ?? featured;
        const backSrcRaw = grill?.[ACF_GRILL_KEYS.backImage] ?? acf?.[ACF_GRILL_KEYS.backImage] ?? frontSrcRaw;
        // 画廊用于智能回退：优先 grill.gallery，其次 acf.gallery
        const galleryRaw = grill?.gallery ?? acf?.gallery ?? null;
        // 可选：独立 alt 字段（兼容分组与顶层）
        const frontAltRaw = ACF_GRILL_KEYS.frontAlt
          .map((k) => grill?.[k] ?? acf?.[k])
          .find((v) => typeof v === 'string');
        const backAltRaw = ACF_GRILL_KEYS.backAlt
          .map((k) => grill?.[k] ?? acf?.[k])
          .find((v) => typeof v === 'string');
        
        const frontResolved = await resolveMedia(frontSrcRaw);
        let backResolved = await resolveMedia(backSrcRaw);
        // 如果后图缺失或与前图相同，尝试使用 gallery 的第二张/不同于前图的下一张
        if ((!backResolved?.url) || (frontResolved?.url && backResolved?.url === frontResolved.url)) {
          if (Array.isArray(galleryRaw)) {
            for (let i = 0; i < galleryRaw.length; i++) {
              const candidate = await resolveMedia(galleryRaw[i]);
              if (candidate?.url && candidate.url !== frontResolved.url) {
                backResolved = candidate;
                break;
              }
            }
          }
        }
        const front = frontResolved.url || featured;
        const back = backResolved.url || front;
        const frontAlt = (frontAltRaw as string | undefined) ?? frontResolved.alt ?? null;
        const backAlt = (backAltRaw as string | undefined) ?? backResolved.alt ?? null;
        return {
          id: post.id || 0,
          name: post.title?.rendered || 'Untitled Product',
          description: post.excerpt?.rendered || post.content?.rendered || '',
          image: featured,
          price: acf?.price || '',
          slug: post.slug || '',
          category: categorySlug,
          frontImage: front,
          backImage: back,
          frontAlt,
          backAlt,
        } as Product;
      }));
      productsCache.set(cacheKey, { data: mapped, ts: Date.now() });
      return mapped;
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching products:', error);
    
    // 如果API调用失败，返回fallback数据
    const fallback = getFallbackProducts(categorySlug).map(p => ({
      ...p,
      frontImage: p.frontImage || p.image,
      backImage: p.backImage || p.image,
      frontAlt: p.frontAlt ?? p.name ?? null,
      backAlt: p.backAlt ?? p.name ?? null,
    }));
    const cacheKey = `${categorySlug}|${limit}`;
    productsCache.set(cacheKey, { data: fallback, ts: Date.now() });
    return fallback;
  }
}

/**
 * Fetch grill categories (custom taxonomy: grill_category) via WordPress REST API
 */
export async function fetchGrillCategories(): Promise<ProductCategory[]> {
  try {
    if (categoriesCache && isFresh(categoriesCache.ts)) {
      return categoriesCache.data;
    }
    const url = `${WORDPRESS_API_URL}/grill_category?per_page=100&_fields=id,name,slug,description`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Grill categories fetch failed: ${res.status}`);
    }
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      const mapped = data.map((cat: any) => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        description: cat.description,
      }));
      categoriesCache = { data: mapped, ts: Date.now() };
      return mapped;
    }
    // Fallback to common categories if API returns empty
    const fallbackCats = [
      { id: 1, name: 'Charcoal Grill', slug: 'charcoal-grill' },
      { id: 2, name: 'Gas Grill', slug: 'gas-grill' },
      { id: 3, name: 'Kettle Grill', slug: 'kettle-grill' },
      { id: 4, name: 'Electrical Grill', slug: 'electrical-grill' },
    ];
    categoriesCache = { data: fallbackCats, ts: Date.now() };
    return fallbackCats;
  } catch (error) {
    console.error('Error fetching grill categories:', error);
    const fallbackCats = [
      { id: 1, name: 'Charcoal Grill', slug: 'charcoal-grill' },
      { id: 2, name: 'Gas Grill', slug: 'gas-grill' },
      { id: 3, name: 'Kettle Grill', slug: 'kettle-grill' },
      { id: 4, name: 'Electrical Grill', slug: 'electrical-grill' },
    ];
    categoriesCache = { data: fallbackCats, ts: Date.now() };
    return fallbackCats;
  }
}

/**
 * Fallback products when WordPress API is unavailable
 */
function getFallbackProducts(categorySlug: string): Product[] {
  const charcoalGrillProducts: Product[] = [
    {
      id: 1,
      name: "Extra Large Charcoal Grill",
      description: "Perfect for large gatherings with spacious cooking area and premium build quality.",
      image: "https://keyobarbecue.com/wp-content/uploads/2025/09/ch1.webp",
      slug: "extra-large-charcoal-grill",
      category: "charcoal-grill"
    },
    {
      id: 2,
      name: "Outdoor Charcoal Grill",
      description: "Durable outdoor charcoal grill designed for backyard barbecue enthusiasts.",
      image: "https://keyobarbecue.com/wp-content/uploads/2025/09/ch2.webp",
      slug: "outdoor-charcoal-grill",
      category: "charcoal-grill"
    },
    {
      id: 3,
      name: "Lightweight Charcoal Grill",
      description: "Portable and lightweight design perfect for camping and outdoor adventures.",
      image: "https://keyobarbecue.com/wp-content/uploads/2025/09/ch3.webp",
      slug: "lightweight-charcoal-grill",
      category: "charcoal-grill"
    },
    {
      id: 4,
      name: "Portable Charcoal Grill",
      description: "Compact and portable charcoal grill for on-the-go grilling experiences.",
      image: "https://keyobarbecue.com/wp-content/uploads/2025/09/ch4.webp",
      slug: "portable-charcoal-grill",
      category: "charcoal-grill"
    },
    {
      id: 5,
      name: "Foldable Charcoal Grill",
      description: "Space-saving foldable design with excellent heat distribution.",
      image: "https://keyobarbecue.com/wp-content/uploads/2025/09/ch5.webp",
      slug: "foldable-charcoal-grill",
      category: "charcoal-grill"
    },
    {
      id: 6,
      name: "Heavy-duty Charcoal Grill",
      description: "Built to last with heavy-duty construction for professional use.",
      image: "https://keyobarbecue.com/wp-content/uploads/2025/09/ch6.webp",
      slug: "heavy-duty-charcoal-grill",
      category: "charcoal-grill"
    },
    {
      id: 7,
      name: "22-Inch Heavy Duty Kettle Grill",
      description: "Classic kettle design with 22-inch cooking surface for versatile grilling.",
      image: "https://keyobarbecue.com/wp-content/uploads/2025/09/ch7.webp",
      slug: "22-inch-kettle-grill",
      category: "charcoal-grill"
    },
    {
      id: 8,
      name: "Barrel Grill with Offset Smoker",
      description: "Combination barrel grill and offset smoker for authentic BBQ flavor.",
      image: "https://keyobarbecue.com/wp-content/uploads/2025/09/ch8.webp",
      slug: "barrel-grill-offset-smoker",
      category: "charcoal-grill"
    },
    {
      id: 9,
      name: "Double Charcoal Barrel Grill",
      description: "Double barrel design for increased cooking capacity and efficiency.",
      image: "https://keyobarbecue.com/wp-content/uploads/2025/09/ch9.webp",
      slug: "double-charcoal-barrel-grill",
      category: "charcoal-grill"
    }
  ];

  const gasGrillProducts: Product[] = [
    {
      id: 10,
      name: "Professional Gas Grill",
      description: "High-performance gas grill with multiple burners for precise temperature control.",
      image: "https://keyobarbecue.com/wp-content/uploads/2025/09/g1.webp",
      slug: "professional-gas-grill",
      category: "gas-grill"
    },
    {
      id: 11,
      name: "Outdoor Gas BBQ Grill",
      description: "Premium outdoor gas grill with stainless steel construction.",
      image: "https://keyobarbecue.com/wp-content/uploads/2025/09/g2.webp",
      slug: "outdoor-gas-bbq-grill",
      category: "gas-grill"
    },
    {
      id: 12,
      name: "Portable Gas Grill",
      description: "Compact portable gas grill perfect for tailgating and camping.",
      image: "https://keyobarbecue.com/wp-content/uploads/2025/09/g3.webp",
      slug: "portable-gas-grill",
      category: "gas-grill"
    },
    {
      id: 13,
      name: "Multi-Burner Gas Grill",
      description: "Advanced multi-burner system for versatile cooking options.",
      image: "https://keyobarbecue.com/wp-content/uploads/2025/09/g4.webp",
      slug: "multi-burner-gas-grill",
      category: "gas-grill"
    },
    {
      id: 14,
      name: "Commercial Gas Grill",
      description: "Heavy-duty commercial grade gas grill for restaurant use.",
      image: "https://keyobarbecue.com/wp-content/uploads/2025/09/g5.webp",
      slug: "commercial-gas-grill",
      category: "gas-grill"
    },
    {
      id: 15,
      name: "Infrared Gas Grill",
      description: "Advanced infrared technology for even heat distribution.",
      image: "https://keyobarbecue.com/wp-content/uploads/2025/09/g6.webp",
      slug: "infrared-gas-grill",
      category: "gas-grill"
    }
  ];

  const list = categorySlug === 'charcoal-grill' ? charcoalGrillProducts : gasGrillProducts;
  return list.map(p => ({ ...p, frontImage: p.image, backImage: p.image }));
}

/**
 * Get all available product categories using GraphQL
 */
export async function getProductCategories(): Promise<ProductCategory[]> {
  try {
    const data = await executeGraphQLQuery(GET_PRODUCT_CATEGORIES);

    if (!data?.categories?.nodes) {
      throw new Error('No categories found');
    }

    return data.categories.nodes.map((category: any) => ({
      id: category.databaseId || category.id,
      name: category.name,
      slug: category.slug,
      description: category.description
    }));
    
  } catch (error) {
    console.error('Error fetching categories via GraphQL:', error);
    return [
      { id: 1, name: 'Charcoal Grill', slug: 'charcoal-grill' },
      { id: 2, name: 'Gas Grill', slug: 'gas-grill' }
    ];
  }
}