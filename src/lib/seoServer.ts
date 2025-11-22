import { fetchRankHead, extractJsonLd } from '@/lib/rankseo'
import type { Metadata } from 'next'

/**
 * 从 RankMath 获取页面 SEO 头信息并转换为 Next.js Metadata
 * 如果获取失败，则使用 fallback 信息
 */
export async function getMetadataFromRankMath(
  wpUrl: string,
  fallback: { title: string; description: string }
): Promise<Metadata> {
  const head = await fetchRankHead(wpUrl)
  if (!head) {
    // 如果无法获取head数据，使用fallback
    return {
      title: fallback.title,
      description: fallback.description,
      alternates: { canonical: wpUrl },
      openGraph: {
        title: fallback.title,
        description: fallback.description,
        url: wpUrl,
      },
    }
  }

  // 提取 title/description/canonical 的工具方法
  const pick = (re: RegExp) => head.match(re)?.[1] || null
  const title = pick(/<title[^>]*>([^<]+)<\/title>/i) ||
                pick(/property=["']og:title["'][^>]*content=["']([^"']+)/i) ||
                fallback.title
  const description =
    pick(/name=["']description["'][^>]*content=["']([^"']+)/i) ||
    pick(/property=["']og:description["'][^>]*content=["']([^"']+)/i) ||
    fallback.description
  const canonical =
    pick(/rel=["']canonical["'][^>]*href=["']([^"']+)/i) || wpUrl

  // 提取其他Open Graph标签
  const ogImage = pick(/property=["']og:image["'][^>]*content=["']([^"']+)/i)
  const ogType = pick(/property=["']og:type["'][^>]*content=["']([^"']+)/i)
  const twitterCard = pick(/name=["']twitter:card["'][^>]*content=["']([^"']+)/i)
  const twitterTitle = pick(/name=["']twitter:title["'][^>]*content=["']([^"']+)/i)
  const twitterDescription = pick(/name=["']twitter:description["'][^>]*content=["']([^"']+)/i)
  const twitterImage = pick(/name=["']twitter:image["'][^>]*content=["']([^"']+)/i)

  // 提取JSON-LD schema数据
  const jsonLd = extractJsonLd(head)

  const meta: Metadata = {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: title || twitterTitle || fallback.title,
      description: description || twitterDescription || fallback.description,
      url: canonical,
      type: ogType as any,
      images: ogImage || twitterImage ? [{ 
        url: ogImage || twitterImage,
        alt: title || fallback.title 
      }] : undefined,
    },
    twitter: {
      card: (twitterCard as any) || 'summary_large_image',
      title: twitterTitle || title || fallback.title,
      description: twitterDescription || description || fallback.description,
      images: twitterImage ? [twitterImage] : undefined,
    },
    other: jsonLd ? {
      'ld+json': jsonLd
    } : undefined,
  }
  return meta
}