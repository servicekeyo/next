import { NextResponse } from 'next/server'
import { fetchRankHead, hasNoIndex } from '@/lib/rankseo'

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

    // 过滤并处理页面，过滤掉noindex页面
    const validPages = await Promise.all(
      pages.map(async (page: any) => {
        // 生成对应的URL
        let url = ''
        if (page.slug === 'home') {
          url = SITE_URL
        } else if (page.slug === 'grills') {
          // grills页面不存在，跳过
          return null
        } else if (page.slug.includes('grill') || page.slug === 'smoker') {
          // 烤架分类页面（包括smoker）
          const categorySlug = page.slug.replace(/^grills[-_]/, '').replace(/^grill[-_]/, '')
          url = `${SITE_URL}/grills/${categorySlug}`
        } else {
          url = `${SITE_URL}/${page.slug}`
        }
        
        // 检查RankMath SEO设置
        try {
          const wpUrl = page.link || `${page.slug === 'home' ? '' : `/${page.slug}`}`
          const headData = await fetchRankHead(wpUrl.startsWith('http') ? wpUrl : `https://admin.keyfirebbq.com${wpUrl}`)
          
          // 如果有noindex设置，跳过该页面
          if (hasNoIndex(headData)) {
            return null
          }
        } catch (error) {
          // 如果无法获取SEO数据，保留页面
          console.warn(`Failed to fetch SEO data for page ${page.slug}:`, error)
        }
        
        return {
          url,
          lastmod: page.modified_gmt || page.date_gmt || new Date().toISOString(),
          slug: page.slug
        }
      })
    )

    // 过滤掉null值
    const filteredPages = validPages.filter(Boolean)

    // 生成sitemap条目
    const sitemapEntries = filteredPages.map((page: any) => {
      // 设置优先级
      let priority = '0.6'
      if (page.slug === 'home') priority = '1.0'
      else if (page.slug === 'about' || page.slug === 'contact') priority = '0.8'
      else if (page.slug.includes('grill') || page.slug === 'smoker') priority = '0.9'
      
      return `  <url>
    <loc>${page.url}</loc>
    <lastmod>${new Date(page.lastmod).toISOString()}</lastmod>
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