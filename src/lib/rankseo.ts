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
    const res = await fetch(endpoint, { 
      cache: 'no-store',
      next: { revalidate: 60 } // 60秒后重新验证缓存
    })
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

export function hasNoIndex(head: string | null): boolean {
  if (!head) return false
  
  // 检查meta robots标签
  const robotsMatch = head.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*)["'][^>]*>/i)
  if (robotsMatch) {
    const content = robotsMatch[1].toLowerCase()
    return content.includes('noindex')
  }
  
  // 检查X-Robots-Tag header
  const xRobotsMatch = head.match(/x-robots-tag:[^<]*noindex/i)
  if (xRobotsMatch) return true
  
  return false
}

export function extractCanonicalUrl(head: string | null): string | null {
  if (!head) return null
  
  const canonicalMatch = head.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["'][^>]*>/i)
  return canonicalMatch?.[1] || null
}