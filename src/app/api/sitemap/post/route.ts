import { NextResponse } from 'next/server'

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

    // 生成posts sitemap
    const sitemapEntries = posts.map((post: any) => {
      const url = post.link || post.slug ? `${SITE_URL}/blog/${post.slug}` : null
      if (!url) return null
      
      const lastmod = post.modified_gmt || post.date_gmt || new Date().toISOString()
      
      return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date(lastmod).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    }).filter(Boolean).join('\n')

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