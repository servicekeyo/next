import type { Metadata } from 'next'

// RankMath SEO integration helpers
// Fetches and parses RankMath head HTML from WordPress and maps to Next.js Metadata

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

function pickMetaByName(head: string, name: string): string | undefined {
  const re = new RegExp(`<meta[^>]*name=["']${name}["'][^>]*content=["']([^"']+)["']`, 'i')
  const m = head.match(re)
  return m?.[1] || undefined
}

function pickMetaByProperty(head: string, property: string): string | undefined {
  const re = new RegExp(`<meta[^>]*property=["']${property}["'][^>]*content=["']([^"']+)["']`, 'i')
  const m = head.match(re)
  return m?.[1] || undefined
}

function pickLinkCanonical(head: string): string | undefined {
  const re = /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i
  const m = head.match(re)
  return m?.[1] || undefined
}

export function extractJsonLd(head: string): string | null {
  const re = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i
  const m = head.match(re)
  const raw = m?.[1]?.trim()
  return raw || null
}

function parseRobots(content: string | null | undefined): Metadata['robots'] | undefined {
  if (!content) return undefined
  const lower = content.toLowerCase()
  const index = !/noindex/.test(lower)
  const follow = !/nofollow/.test(lower)
  return { index, follow }
}

export async function getRankMetadata(wpUrl: string, defaults?: { title?: string; description?: string }): Promise<Metadata> {
  const head = await fetchRankHead(wpUrl)
  const title = (head && (pickMetaByProperty(head, 'og:title') || pickMetaByName(head, 'twitter:title'))) || defaults?.title || undefined
  const description = (head && (pickMetaByName(head, 'description') || pickMetaByProperty(head, 'og:description') || pickMetaByName(head, 'twitter:description'))) || defaults?.description || undefined
  const canonical = head ? pickLinkCanonical(head) : undefined
  const robots = head ? parseRobots(pickMetaByName(head, 'robots')) : undefined

  const og: Metadata['openGraph'] | undefined = head
    ? {
        title: pickMetaByProperty(head, 'og:title') || title,
        description: pickMetaByProperty(head, 'og:description') || description,
        url: pickMetaByProperty(head, 'og:url') || canonical,
        siteName: pickMetaByProperty(head, 'og:site_name') || undefined,
        locale: pickMetaByProperty(head, 'og:locale') || undefined,
        type: (pickMetaByProperty(head, 'og:type') as any) || undefined,
        images: (() => {
          const img = pickMetaByProperty(head, 'og:image')
          return img ? [img] : undefined
        })(),
      }
    : undefined

  const twitter: Metadata['twitter'] | undefined = head
    ? {
        card: (pickMetaByName(head, 'twitter:card') as any) || undefined,
        title: pickMetaByName(head, 'twitter:title') || title,
        description: pickMetaByName(head, 'twitter:description') || description,
        images: (() => {
          const img = pickMetaByName(head, 'twitter:image')
          return img ? [img] : undefined
        })(),
      }
    : undefined

  const metadata: Metadata = {
    title: title,
    description: description,
    robots,
    alternates: canonical ? { canonical } : undefined,
    openGraph: og,
    twitter,
  }

  return metadata
}

// One-liner helper to wire generateMetadata across pages/layouts
export function withRankMetadata(
  wpUrlOrFn: string | ((ctx: { params: any; searchParams: any }) => string | Promise<string>),
  defaults?: { title?: string; description?: string }
) {
  return async (ctx: { params: any; searchParams: any }) => {
    // Next 15 makes params/searchParams async (Promises). Unwrap before use.
    const params = await ctx.params
    const searchParams = await ctx.searchParams
    const wpUrl = typeof wpUrlOrFn === 'function' ? await wpUrlOrFn({ params, searchParams }) : wpUrlOrFn
    return getRankMetadata(wpUrl, defaults)
  }
}