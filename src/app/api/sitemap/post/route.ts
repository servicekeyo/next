import { NextResponse } from 'next/server'
import { fetchRankHead, hasNoIndex } from '@/lib/rankseo'

const WORDPRESS_API_URL = 'https://admin.keyfirebbq.com/wp-json/wp/v2'
const SITE_URL = 'https://keyfirebbq.com'

export async function GET() {
  try {
    // 从WordPress REST API获取所有posts
    const postsResponse = await fetch(`${WORDPRESS_API_URL}/posts?per_page=100&_embed`, {
      next: { revalidate: 1800 } // 30分钟缓存
    })
    
    if (!postsResponse.ok) {
      throw new Error(`Failed to fetch posts: ${postsResponse.status}`)
    }
    
    const posts = await postsResponse.json()
    
    if (!Array.isArray(posts)) {
      throw new Error('Invalid posts response')
    }

    // 过滤并处理文章，过滤掉noindex文章
    const validPosts = await Promise.all(
      posts.map(async (post: any) => {
        const url = post.link || post.slug ? `${SITE_URL}/blog/${post.slug}` : null
        if (!url) return null
        
        // 检查RankMath SEO设置
        try {
          const wpUrl = post.link || `https://admin.keyfirebbq.com/?p=${post.id}`
          const headData = await fetchRankHead(wpUrl)
          
          // 如果有noindex设置，跳过该文章
          if (hasNoIndex(headData)) {
            return null
          }
        } catch (error) {
          // 如果无法获取SEO数据，保留文章
          console.warn(`Failed to fetch SEO data for post ${post.slug}:`, error)
        }
        
        return {
          url,
          lastmod: post.modified_gmt || post.date_gmt || new Date().toISOString(),
          slug: post.slug
        }
      })
    )

    // 过滤掉null值
    const filteredPosts = validPosts.filter(Boolean)

    // 生成posts sitemap
    const sitemapEntries = filteredPosts.map((post: any) => {
      return `  <url>
    <loc>${post.url}</loc>
    <lastmod>${new Date(post.lastmod).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    }).join('\n')

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600'
      },
    })
  } catch (error) {
    console.error('Posts sitemap generation error:', error)
    return NextResponse.json({ error: 'Failed to generate posts sitemap' }, { status: 500 })
  }
}