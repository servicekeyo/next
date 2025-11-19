import { getbloglist, getPostBySlug } from '@/lib/wordpress'
import SEO from '@/components/SEO'
import ShareButton from '@/components/ShareButton'
import TableOfContents from '@/components/TableOfContents'
import FooterContact from '@/components/FooterContact';
export const dynamic = 'force-static'
export const dynamicParams = false
export const revalidate = false


export async function generateStaticParams() {
  const posts = await getbloglist()
  return posts.map(p => ({ slug: p.slug }))
}

// 移除服务端 SEO，改用客户端 SEO 组件

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = await params
 // console.log('[DEBUG] slug =', slug)

  const post = await getPostBySlug(slug)
  //console.log('[DEBUG] post =', post)

  const formatDate = (dateString?: string) => {
    try {
      if (!dateString) return ''
      const d = new Date(dateString)
      if (isNaN(d.getTime())) return ''
      return d.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) // e.g., "Mar 16, 2020"
    } catch {
      return ''
    }
  }

  const strip = (html: string = '') => html.replace(/<[^>]+>/g, '').trim()
  const title = post ? (strip(post.title?.rendered) || slug) : 'Article Not Found'
  const publishDate = formatDate(post?.date) || formatDate(post?.date_gmt) || ''
  const html = post?.content?.rendered || post?.excerpt?.rendered || '<p>Article content is unavailable.</p>'

  // WordPress permalink: prefer post.link if available to fetch RankMath SEO data accurately
  const wpUrl = typeof post?.link === 'string' && post.link ? post.link : `https://admin.keyfirebbq.com/blog/${slug}`
  const slugify = (text: string) => {
    return (text || '')
      .toLowerCase()
      .replace(/&amp;|&/g, 'and')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
  }

  const extractHeadingsAndInjectIds = (sourceHtml: string) => {
    const items: { id: string; text: string; level: number }[] = []
    const used = new Map<string, number>()
    const regex = /<h([2-4])(\s[^>]*)?>([\s\S]*?)<\/h\1>/gi
    let result = ''
    let lastIndex = 0
    let m: RegExpExecArray | null
    while ((m = regex.exec(sourceHtml)) !== null) {
      const level = Number(m[1])
      const attrs = m[2] || ''
      const inner = m[3] || ''
      const start = m.index
      const end = regex.lastIndex
      const text = strip(inner)
      if (!text) {
        result += sourceHtml.slice(lastIndex, end)
        lastIndex = end
        continue
      }
      let base = slugify(text)
      if (!base) base = `section-${items.length + 1}`
      const count = (used.get(base) || 0) + 1
      used.set(base, count)
      const id = count > 1 ? `${base}-${count}` : base
      const cleanAttrs = attrs.replace(/\s*id="[^"]*"/i, '')
      const replaced = `<h${level}${cleanAttrs} id="${id}">${inner}</h${level}>`
      result += sourceHtml.slice(lastIndex, start) + replaced
      lastIndex = end
      items.push({ id, text, level })
    }
    result += sourceHtml.slice(lastIndex)
    return { html: result, items }
  }

  const { html: htmlWithIds, items: tocItems } = extractHeadingsAndInjectIds(html)

  // 计算上一篇/下一篇（按日期降序：最新在前）
  const list = await getbloglist()
  const sorted = Array.isArray(list)
    ? list.slice().sort((a: any, b: any) => {
        const da = a?.date ? new Date(a.date).getTime() : 0
        const db = b?.date ? new Date(b.date).getTime() : 0
        return db - da
      })
    : []
  const index = sorted.findIndex((p: any) => p?.slug === slug)
  const prevPost = index >= 0 && index < sorted.length - 1 ? sorted[index + 1] : null
  const nextPost = index > 0 ? sorted[index - 1] : null
  const prev = prevPost ? { slug: prevPost.slug as string, title: strip(prevPost?.title?.rendered || '') } : null
  const next = nextPost ? { slug: nextPost.slug as string, title: strip(nextPost?.title?.rendered || '') } : null
  return (
    <div className="min-h-screen">
      <SEO 
        wpUrl={wpUrl}
        fallbackTitle="Blog Post - BBQ Grill Manufacturing Insights | Keyo Customize" 
        fallbackDescription="Read our latest blog post about BBQ grill manufacturing, customization tips, and industry insights from Keyo Customize."
      />
      <section className="section-1 relative isolate">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 pointer-events-none h-70 xl:h-110 w-full mask-[radial-gradient(70rem_70rem_at_center,white,transparent)] stroke-gray-200"
            data-aos="fade-in"
            data-aos-duration="1000"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <svg x="100%" y={0} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
        </svg>
        <div className='w-4/5 xl:w-3/5 mx-auto text-center' suppressHydrationWarning data-aos="fade-up" data-aos-duration="800">
          <h1 className="heading-main transition-all duration-500 ease-out" data-aos="fade-up" data-aos-delay="200">{title}</h1>
          <div className="mt30 text-hub flex items-center justify-center gap-4 relative z-50" data-aos="fade-up" data-aos-delay="400">
            <p className="heading-sub hover:scale-105 transition-all duration-300 ease-out">{publishDate ? `${publishDate}` : ''}</p>
            <ShareButton
              title={title}
              url={post?.link || `https://admin.keyfirebbq.com/${slug}`}
              className='relative z-50 hover:scale-110 transition-all duration-300 ease-out'
            />
          </div>
        </div>
        <div className="container py-10 flex flex-col md:flex-row gap160" data-aos="fade-up" data-aos-duration="800">
          <div className="md:w-2/3" data-aos="fade-right" data-aos-delay="200">
            <div className="detail" dangerouslySetInnerHTML={{ __html: htmlWithIds }}/>
            <hr className='pt-10 transition-all duration-500 ease-out' data-aos="fade-in" data-aos-delay="600"/>
            <div className="mt30 flex items-center justify-between" data-aos="fade-up" data-aos-delay="800">
              {prev ? (
                <a href={`/blog/${prev.slug}`} title={prev.title} className="btn-secondary hover:scale-105 transition-all duration-300 ease-out">Previous</a>
              ) : <span />}
              {next ? (
                <a href={`/blog/${next.slug}`} title={next.title} className="btn-secondary hover:scale-105 transition-all duration-300 ease-out">Next</a>
              ) : <span />}
            </div>
          </div>
          <div className="md:w-1/3" data-aos="fade-left" data-aos-delay="400">
            {tocItems.length > 0 ? (
              <TableOfContents items={tocItems} />
            ) : null}
          </div>
        </div>
      </section>
      <FooterContact />
    </div>
  )
}