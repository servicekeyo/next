// WordPress REST API service for posts and grills
function logMsg(message: string) {
  // 在不同运行时（构建/服务器/客户端）统一使用控制台日志
  try {
    console.log(`[wp] ${message}`)
  } catch {}
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
      next: { revalidate: 600 },
    })
    

    if (!res.ok) return [];

    const posts = await res.json()

    if (!Array.isArray(posts)) {
      //console.error('❌ [getbloglist] 返回格式错误:', posts)
      return []
    }

   // console.log('✅ [getbloglist] 成功获取文章数量:', posts.length)
    return posts
  } catch (err) {
    //console.error('❌ [getbloglist] 抓取异常:', err)
    return []
  }
}

// 运行时分页：使用 offset 方案规避置顶文章对 page 的干扰
export async function getPostsPaged(post:"posts", page: number = 1, perPage: number = 6): Promise<{ posts: any[]; totalPages: number; total: number }> {
  try {
    const safePer = Math.max(1, perPage | 0)
    const safePage = Math.max(1, page | 0)
    const offset = (safePage - 1) * safePer
    const url = `${WORDPRESS_API_URL}/${post}?_embed&per_page=${safePer}&offset=${offset}&orderby=date&order=desc&status=publish&sticky=false&ignore_sticky_posts=true`
    const res = await fetch(url, { cache: 'no-store' })
    if (!res.ok) {
      //console.error('❌ [getPostsPaged] 请求失败:', res.status, url)
      return { posts: [], totalPages: 1, total: 0 }
    }
    const posts = await res.json()
    const totalHeader = res.headers.get('X-WP-Total')
    const total = Math.max(0, parseInt(totalHeader || '0', 10) || (Array.isArray(posts) ? posts.length : 0))
    const totalPages = Math.max(1, Math.ceil(total / safePer))
    //console.log(`✅ [getPostsPaged] page=${safePage} perPage=${safePer} posts=${Array.isArray(posts) ? posts.length : 0} total=${total}`)
    return { posts: Array.isArray(posts) ? posts : [], totalPages, total }
  } catch (err) {
    //console.error('❌ [getPostsPaged] 异常:', err)
    return { posts: [], totalPages: 1, total: 0 }
  }
}

/**
 * 🔹 根据 slug 获取单篇文章
 * - 用于详情页静态渲染
 */
export async function getPostBySlug(slug: string) {
  if (!slug || typeof slug !== 'string') {
    //console.warn('⚠️ [getPostBySlug] slug 无效:', slug)
    return null
  }

  try {
    const res = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`, {
      next: { revalidate: 600 },
    })

    if (!res.ok) {
     // console.error('❌ [getPostBySlug] 请求失败:', res.status, res.statusText)
      return null
    }

    const data = await res.json()

    if (!Array.isArray(data) || data.length === 0) {
      console.warn('⚠️ [getPostBySlug] 未找到文章:', slug)
      return null
    }

    //console.log('✅ [getPostBySlug] 成功获取文章:', slug)
    return data[0]
  } catch (err) {
    //console.error('❌ [getPostBySlug] 抓取异常:', err)
    return null
  }
}

export async function getGrillCategories(): Promise<any[]> {
  try {
    const res = await fetch(`${WORDPRESS_API_URL}/grill_category?per_page=100`, { next: { revalidate: 600 } })
    if (!res.ok) return []
    const data = await res.json()
    return Array.isArray(data) ? data : []
  } catch {
    return []
  }
}

export async function getGrills(page: number = 1, perPage: number = 6): Promise<any[]> {
  try {
    const res = await fetch(`${WORDPRESS_API_URL}/grill?per_page=100&_embed`, { next: { revalidate: 600 } })
    if (!res.ok) return []
    const data = await res.json()
    return Array.isArray(data) ? data : []
  } catch {
    return []
  }
}

export async function getGrillsByCategory(categoryId: number, perPage: number = 100): Promise<any[]> {
  if (!categoryId || typeof categoryId !== 'number') return []
  try {
    const res = await fetch(`${WORDPRESS_API_URL}/grill?per_page=${perPage}&grill_category=${categoryId}&_embed`, { next: { revalidate: 600 } })
    if (!res.ok) return []
    const data = await res.json()
    return Array.isArray(data) ? data : []
  } catch {
    return []
  }
}

export type Product = {
  id: number
  name: string
  slug: string
  image: string
  description?: string
  price?: string
  category: string
}

export async function fetchProductsByCategory(categorySlug: string, limit: number = 12): Promise<Product[]> {
  try {
    const cats = await getGrillCategories()
    const cat = (Array.isArray(cats) ? cats : []).find((c: any) => c?.slug === categorySlug)
    if (!cat) return []
    const grills = await getGrillsByCategory(cat.id, limit)
    return (Array.isArray(grills) ? grills : []).slice(0, limit).map((item: any) => {
      const title = item?.title?.rendered ?? item?.title ?? ''
      const media = item?._embedded?.['wp:featuredmedia']?.[0]
      const image = media?.source_url || media?.media_details?.sizes?.medium?.source_url || ''
      const description = (item?.excerpt?.rendered || '').replace(/<[^>]+>/g, '')
      return {
        id: item?.id ?? 0,
        name: title,
        slug: item?.slug ?? String(item?.id ?? ''),
        image,
        description,
        category: categorySlug,
      } as Product
    })
  } catch {
    return []
  }
}
