// WordPress GraphQL API service for fetching products by category

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price?: string;
  slug: string;
  category: string;
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
      return posts.map((post: any) => ({
        id: post.id || 0,
        name: post.title?.rendered || 'Untitled Product',
        description: post.excerpt?.rendered || post.content?.rendered || '',
        image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/placeholder-product.jpg',
        price: post.acf?.price || '',
        slug: post.slug || '',
        category: categorySlug
      }));
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching products:', error);
    
    // 如果API调用失败，返回fallback数据
    return getFallbackProducts(categorySlug);
  }
}

/**
 * Fetch grill categories (custom taxonomy: grill_category) via WordPress REST API
 */
export async function fetchGrillCategories(): Promise<ProductCategory[]> {
  try {
    const url = `${WORDPRESS_API_URL}/grill_category?per_page=100&_fields=id,name,slug,description`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Grill categories fetch failed: ${res.status}`);
    }
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      return data.map((cat: any) => ({
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        description: cat.description,
      }));
    }
    // Fallback to common categories if API returns empty
    return [
      { id: 1, name: 'Charcoal Grill', slug: 'charcoal-grill' },
      { id: 2, name: 'Gas Grill', slug: 'gas-grill' },
      { id: 3, name: 'Kettle Grill', slug: 'kettle-grill' },
      { id: 4, name: 'Electrical Grill', slug: 'electrical-grill' },
    ];
  } catch (error) {
    console.error('Error fetching grill categories:', error);
    return [
      { id: 1, name: 'Charcoal Grill', slug: 'charcoal-grill' },
      { id: 2, name: 'Gas Grill', slug: 'gas-grill' },
      { id: 3, name: 'Kettle Grill', slug: 'kettle-grill' },
      { id: 4, name: 'Electrical Grill', slug: 'electrical-grill' },
    ];
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

  return categorySlug === 'charcoal-grill' ? charcoalGrillProducts : gasGrillProducts;
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