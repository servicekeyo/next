import { fetchRankHead } from '@/lib/rankseo'
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
  // 提取 title/description/canonical 的工具方法
  const pick = (re: RegExp) => head?.match(re)?.[1] || null
  const title = pick(/<title[^>]*>([^<]+)<\/title>/i) ||
                pick(/property=["']og:title["'][^>]*content=["']([^"']+)/i) ||
                fallback.title
  const description =
    pick(/name=["']description["'][^>]*content=["']([^"']+)/i) ||
    pick(/property=["']og:description["'][^>]*content=["']([^"']+)/i) ||
    fallback.description
  const canonical =
    pick(/rel=["']canonical["'][^>]*href=["']([^"']+)/i) || wpUrl

  const meta: Metadata = {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
    },
  }
  return meta
}