// RankMath SEO integration helpers for API only
// Contains only the functions needed by the SEO API route

const WP_API_BASE = process.env.WORDPRESS_API_URL || 'https://admin.keyfirebbq.com/wp-json/wp/v2'

const WP_ORIGIN = (() => {
  try {
    const u = new URL(WP_API_BASE)
    return `${u.protocol}//${u.host}`
  } catch {
    return 'https://admin.keyfirebbq.com'
  }
})()

const RANKMATH_ENDPOINT_BASE = process.env.WORDPRESS_RANKMATH_ENDPOINT_BASE || `${WP_ORIGIN}/wp-json/rankmath/v1/getHead?url=`

export async function fetchRankHead(wpUrl: string): Promise<string | null> {
  if (!wpUrl) return null
  try {
    const endpoint = `${RANKMATH_ENDPOINT_BASE}${encodeURIComponent(wpUrl)}`
    const res = await fetch(endpoint, { cache: 'force-cache' })
    if (!res.ok) return null
    const data = await res.json().catch(() => null)
    const head = data?.head as string | undefined
    return head || null
  } catch {
    return null
  }
}

export function extractJsonLd(head: string): string | null {
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i
  const m = head.match(re)
  const raw = m?.[1]?.trim()
  return raw || null
}