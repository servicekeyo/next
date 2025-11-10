import { NextResponse } from 'next/server'
import { getPostsPaged } from '@/lib/wordpress'

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10) || 1)
    const perPage = Math.max(1, parseInt(searchParams.get('per_page') || '3', 10) || 3)
    const { posts, totalPages, total } = await getPostsPaged(page, perPage)
    return NextResponse.json({ posts, totalPages, total, page, perPage }, { status: 200 })
  } catch (err) {
    return NextResponse.json({ posts: [], totalPages: 1, total: 0, page: 1, perPage: 3, error: String(err) }, { status: 500 })
  }
}