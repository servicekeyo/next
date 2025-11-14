import { NextResponse } from 'next/server'

const WORDPRESS_API_URL = process.env.WORDPRESS_API_URL || 'https://admin.keyfirebbq.com/wp-json/wp/v2'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const slug = searchParams.get('slug') || ''
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10) || 1)
    const perPage = Math.max(1, parseInt(searchParams.get('per_page') || searchParams.get('limit') || '6', 10) || 6)
    if (!slug) return NextResponse.json({ items: [], error: 'missing slug' }, { status: 400 })

    const catRes = await fetch(`${WORDPRESS_API_URL}/grill_category?per_page=100`, { cache: 'no-store' })
    if (!catRes.ok) return NextResponse.json({ items: [], error: 'category fetch failed' }, { status: 500 })
    const cats = await catRes.json()
    const cat = (Array.isArray(cats) ? cats : []).find((c: any) => c?.slug === slug)
    if (!cat) return NextResponse.json({ items: [], error: 'category not found' }, { status: 404 })

    const offset = (page - 1) * perPage
    const url = `${WORDPRESS_API_URL}/grill?_embed&per_page=${perPage}&offset=${offset}&orderby=date&order=desc&status=publish&grill_category=${cat.id}`
    const itemsRes = await fetch(url, { cache: 'no-store' })
    if (!itemsRes.ok) return NextResponse.json({ items: [], error: 'items fetch failed' }, { status: 500 })
    const data = await itemsRes.json()
    const totalHeader = itemsRes.headers.get('X-WP-Total')
    const total = Math.max(0, parseInt(totalHeader || '0', 10) || (Array.isArray(data) ? data.length : 0))
    const totalPages = Math.max(1, Math.ceil(total / perPage))
    const items = (Array.isArray(data) ? data : [])
    return NextResponse.json({ items, total, totalPages, page, perPage }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ items: [], error: String(err), total: 0, totalPages: 1, page: 1, perPage: 6 }, { status: 500 })
  }
}
