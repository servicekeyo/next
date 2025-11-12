import Script from 'next/script'
import { fetchRankHead, extractJsonLd } from '@/lib/rankseo'

type Props = {
  wpUrl: string
  id?: string
}

export default async function RankSchema({ wpUrl, id }: Props) {
  const head = await fetchRankHead(wpUrl)
  const json = head ? extractJsonLd(head) : null
  if (!json) return null
  const scriptId = id || `rank-schema-${Buffer.from(wpUrl).toString('hex').slice(0, 8)}`
  return (
    <Script id={scriptId} type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: json }} />
  )
}