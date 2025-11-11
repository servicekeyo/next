// WordPress REST API service for posts and grills
function logMsg(message: string) {
  // 在不同运行时（构建/服务器/客户端）统一使用控制台日志
  try {
    console.log(`[wp] ${message}`)
  } catch {}
}

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
/* - 若你的 WordPress 使用自定义类型（例如 blog），改成 `${WORDPRESS_API_URL}/blog`
 * - 构建时调用，用于生成静态路径
 */
export async function getbloglist(page: number = 1, perPage: number = 6): Promise<any[]> {
  try {
    const res = await fetch(`${WORDPRESS_API_URL}/posts?per_page=100&_embed`, {
      // 'force-cache' 保证构建期抓取，运行时不再请求
      cache: 'force-cache',
    })
    

    if (!res.ok) return [];

    const posts = await res.json()

    if (!Array.isArray(posts)) {
      console.error('❌ [getbloglist] 返回格式错误:', posts)
      return []
    }

    console.log('✅ [getbloglist] 成功获取文章数量:', posts.length)
    return posts
  } catch (err) {
    console.error('❌ [getbloglist] 抓取异常:', err)
    return []
  }
}

// 运行时分页：使用 offset 方案规避置顶文章对 page 的干扰
export async function getPostsPaged(page: number = 1, perPage: number = 6): Promise<{ posts: any[]; totalPages: number; total: number }> {
  try {
    const safePer = Math.max(1, perPage | 0)
    const safePage = Math.max(1, page | 0)
    const offset = (safePage - 1) * safePer
    const url = `${WORDPRESS_API_URL}/posts?_embed&per_page=${safePer}&offset=${offset}&orderby=date&order=desc&status=publish&sticky=false&ignore_sticky_posts=true`
    const res = await fetch(url, { cache: 'no-store' })
    if (!res.ok) {
      console.error('❌ [getPostsPaged] 请求失败:', res.status, url)
      return { posts: [], totalPages: 1, total: 0 }
    }
    const posts = await res.json()
    const totalHeader = res.headers.get('X-WP-Total')
    const total = Math.max(0, parseInt(totalHeader || '0', 10) || (Array.isArray(posts) ? posts.length : 0))
    const totalPages = Math.max(1, Math.ceil(total / safePer))
    console.log(`✅ [getPostsPaged] page=${safePage} perPage=${safePer} posts=${Array.isArray(posts) ? posts.length : 0} total=${total}`)
    return { posts: Array.isArray(posts) ? posts : [], totalPages, total }
  } catch (err) {
    console.error('❌ [getPostsPaged] 异常:', err)
    return { posts: [], totalPages: 1, total: 0 }
  }
}

/**
 * 🔹 根据 slug 获取单篇文章
 * - 用于详情页静态渲染
 */
export async function getPostBySlug(slug: string) {
  if (!slug || typeof slug !== 'string') {
    console.warn('⚠️ [getPostBySlug] slug 无效:', slug)
    return null
  }

  try {
    const res = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`, {
      cache: 'force-cache',
    })

    if (!res.ok) {
      console.error('❌ [getPostBySlug] 请求失败:', res.status, res.statusText)
      return null
    }

    const data = await res.json()

    if (!Array.isArray(data) || data.length === 0) {
      console.warn('⚠️ [getPostBySlug] 未找到文章:', slug)
      return null
    }

    console.log('✅ [getPostBySlug] 成功获取文章:', slug)
    return data[0]
  } catch (err) {
    console.error('❌ [getPostBySlug] 抓取异常:', err)
    return null
  }
}

/**
 * 🔹 获取相关文章（按分类优先，其次标签；都为空时返回最新文章）
 * - 会排除当前文章 ID
 */
export async function getRelatedPosts(
  currentId: number,
  categories: number[] = [],
  tags: number[] = [],
  limit: number = 3,
): Promise<any[]> {
  try {
    const safeLimit = Math.max(1, limit | 0)
    const params = new URLSearchParams({
      _embed: '1',
      per_page: String(safeLimit),
      orderby: 'date',
      order: 'desc',
      status: 'publish',
    })
    if (currentId) params.set('exclude', String(currentId))

    let url = `${WORDPRESS_API_URL}/posts?${params.toString()}`
    if (Array.isArray(categories) && categories.length > 0) {
      url += `&categories=${categories.filter(Boolean).join(',')}`
    } else if (Array.isArray(tags) && tags.length > 0) {
      url += `&tags=${tags.filter(Boolean).join(',')}`
    }

    const res = await fetch(url, { cache: 'force-cache' })
    if (!res.ok) {
      console.error('❌ [getRelatedPosts] 请求失败:', res.status, url)
      return []
    }
    const posts = await res.json()
    console.log(`✅ [getRelatedPosts] limit=${safeLimit} got=${Array.isArray(posts) ? posts.length : 0}`)
    return Array.isArray(posts) ? posts : []
  } catch (err) {
    console.error('❌ [getRelatedPosts] 异常:', err)
    return []
  }
}


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
    if (!input) return { url: null, alt: null };
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

// End of REST helpers