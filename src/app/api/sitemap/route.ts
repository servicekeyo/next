import { NextResponse } from 'next/server'

const WORDPRESS_API_URL = 'https://admin.keyfirebbq.com/wp-json/wp/v2'
const SITE_URL = 'https://keyfirebbq.com'

export async function GET() {
  try {
    // 获取posts和pages的URL
    const postSitemap = `${SITE_URL}/sitemap_post.xml`
    const pageSitemap = `${SITE_URL}/sitemap_page.xml`

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${postSitemap}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${pageSitemap}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
      },
    })
  } catch (error) {
    console.error('Sitemap generation error:', error)
    return NextResponse.json({ error: 'Failed to generate sitemap' }, { status: 500 })
  }
}