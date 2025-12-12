import { NextResponse } from 'next/server'

const WORDPRESS_API_URL = 'https://admin.keyfirebbq.com/wp-json/wp/v2'
const SITE_URL = 'https://keyfirebbq.com'

export async function GET() {
  try {
    // 从WordPress REST API获取所有pages
    const pagesResponse = await fetch(`${WORDPRESS_API_URL}/pages?per_page=100&_embed`, {
      next: { revalidate: 1800 } // 30分钟缓存
    })
    
    if (!pagesResponse.ok) {
      throw new Error(`Failed to fetch pages: ${pagesResponse.status}`)
    }
    
    const pages = await pagesResponse.json()
    
    if (!Array.isArray(pages)) {
      throw new Error('Invalid pages response')
    }

    // 生成pages sitemap
    const sitemapEntries = pages.map((page: any) => {
      let url = ''
      
      // 根据页面类型生成正确的URL
      if (page.slug === 'home') {
        url = SITE_URL
      } else if (page.slug === 'grills' || page.slug.includes('grill')) {
        // 烤架分类页面
        url = `${SITE_URL}/grills/${page.slug.replace(/^grills[-_]/, '').replace(/^grill[-_]/, '')}`
      } else {
        url = `${SITE_URL}/${page.slug}`
      }
      
      const lastmod = page.modified_gmt || page.date_gmt || new Date().toISOString()
      
      // 设置优先级
      let priority = '0.6'
      if (page.slug === 'home') priority = '1.0'
      else if (page.slug === 'about' || page.slug === 'contact') priority = '0.8'
      else if (page.slug.includes('grill') || page.slug === 'grills') priority = '0.9'
      
      return `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date(lastmod).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
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
    console.error('Pages sitemap generation error:', error)
    return NextResponse.json({ error: 'Failed to generate pages sitemap' }, { status: 500 })
  }
}