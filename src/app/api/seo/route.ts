import { NextRequest, NextResponse } from 'next/server'
import { fetchRankHead, extractJsonLd } from '@/lib/rankseo'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const url = searchParams.get('url')
    
    if (!url) {
      return NextResponse.json({ error: 'URL parameter is required' }, { status: 400 })
    }

    // 获取WordPress的SEO数据
    const head = await fetchRankHead(url)
    
    if (!head) {
      return NextResponse.json({ error: 'Failed to fetch SEO data' }, { status: 404 })
    }

    // 解析meta标签
    const parseMeta = (html: string, name: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name'
      const re = new RegExp(`<meta[^>]*${attr}=["']${name}["'][^>]*content=["']([^"']+)["']`, 'i')
      const m = html.match(re)
      return m?.[1] || null
    }

    const parseCanonical = (html: string) => {
      const re = /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i
      const m = html.match(re)
      return m?.[1] || null
    }

    const seoData = {
      title: parseMeta(head, 'og:title', true) || parseMeta(head, 'twitter:title') || null,
      description: parseMeta(head, 'description') || parseMeta(head, 'og:description', true) || parseMeta(head, 'twitter:description') || null,
      canonical: parseCanonical(head) || url,
      og: {
        title: parseMeta(head, 'og:title', true),
        description: parseMeta(head, 'og:description', true),
        url: parseMeta(head, 'og:url', true),
        siteName: parseMeta(head, 'og:site_name', true),
        locale: parseMeta(head, 'og:locale', true),
        type: parseMeta(head, 'og:type', true),
        image: parseMeta(head, 'og:image', true)
      },
      twitter: {
        card: parseMeta(head, 'twitter:card'),
        title: parseMeta(head, 'twitter:title'),
        description: parseMeta(head, 'twitter:description'),
        image: parseMeta(head, 'twitter:image')
      },
      schema: extractJsonLd(head)
    }

    return NextResponse.json(seoData)
  } catch (error) {
    console.error('SEO API Error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}