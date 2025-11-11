import { getbloglist, getPostBySlug } from '@/lib/wordpress'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params?.slug
  const post: any = await getPostBySlug(slug)
  const strip = (html: string = '') => html.replace(/<[^>]+>/g, '').trim()

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://keyfirebbq.com/'
  const canonical = post?.yoast_head_json?.canonical || `${siteUrl}/blog/${slug}`
  const featured = post?._embedded?.['wp:featuredmedia']?.[0]?.source_url || post?.jetpack_featured_media_url || post?.yoast_head_json?.og_image?.[0]?.url || undefined
  const title = post?.rank_math_title || post?.yoast_head_json?.title || strip(post?.title?.rendered) || slug
  const description = post?.rank_math_description || post?.yoast_head_json?.description || post?.yoast_head_json?.og_description || strip(post?.excerpt?.rendered || post?.content?.rendered || '') || undefined
  const tagTerms: any[] = Array.isArray(post?._embedded?.['wp:term']) ? (post._embedded['wp:term'].flat().filter((t: any) => t?.taxonomy === 'post_tag')) : []
  const tagKeywords = tagTerms.map((t: any) => t?.name).filter(Boolean)
  const keywordsStr = (typeof post?.rank_math_focus_keyword === 'string' && post.rank_math_focus_keyword.trim()) ? post.rank_math_focus_keyword : (tagKeywords.join(', '))

  return {
    title,
    description,
    keywords: keywordsStr ? keywordsStr.split(/,\s*/) : undefined,
    alternates: { canonical },
    openGraph: {
      type: 'article',
      url: canonical,
      title,
      description,
      images: featured ? [{ url: featured }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: featured ? [featured] : undefined,
    },
  }
}
export const dynamic = 'force-static'
export const dynamicParams = false
export const revalidate = false


export async function generateStaticParams() {
  const posts = await getbloglist()
  return posts.map(p => ({ slug: p.slug }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {

 const { slug } = await params  // ✅ 这里要 await
  console.log('[DEBUG] slug =', slug)

  const post = await getPostBySlug(slug)
  console.log('[DEBUG] post =', post)

  const strip = (html: string = '') => html.replace(/<[^>]+>/g, '').trim()
  const title = post ? (strip(post.title?.rendered) || slug) : 'Article Not Found'
  const html = post?.content?.rendered || post?.excerpt?.rendered || '<p>Article content is unavailable.</p>'
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://keyfirebbq.com/'
  const canonical = post?.yoast_head_json?.canonical || `${siteUrl}/blog/${slug}`
  const featured = post?._embedded?.['wp:featuredmedia']?.[0]?.source_url || post?.jetpack_featured_media_url || post?.yoast_head_json?.og_image?.[0]?.url || '/images/home/index_banner3.jpg'
  const author = post?._embedded?.author?.[0]?.name || 'Keyo Barbecue'
  const keywords = (typeof post?.rank_math_focus_keyword === 'string' && post.rank_math_focus_keyword.trim())
    ? post.rank_math_focus_keyword
    : (Array.isArray(post?._embedded?.['wp:term'])
        ? post._embedded['wp:term'].flat().filter((t: any) => t?.taxonomy === 'post_tag').map((t: any) => t?.name).filter(Boolean).join(', ')
        : '')
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    name: title,
    description: strip(html),
    image: featured ? [featured] : undefined,
    datePublished: post?.date,
    dateModified: post?.modified || post?.date,
    author: { '@type': 'Person', name: author },
    publisher: {
      '@type': 'Organization',
      name: 'Keyo Barbecue',
      logo: { '@type': 'ImageObject', url: `${siteUrl}/images/LOGO1.png` },
    },
    mainEntityOfPage: canonical,
    articleSection: (Array.isArray(post?._embedded?.['wp:term'])
      ? post._embedded['wp:term'].flat().filter((t: any) => t?.taxonomy === 'category').map((t: any) => t?.name).filter(Boolean)
      : []),
    keywords,
  }
  const schema = post?.rank_math_schema || post?.yoast_head_json?.schema || defaultSchema
  return (
    <div className="min-h-screen">
      <section className="section-1 relative isolate -z-10">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-80 xl:h-90 w-full mask-[radial-gradient(70rem_70rem_at_center,white,transparent)] stroke-gray-200"
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
        <div className='w-4/5 xl:w-3/5 mx-auto text-center'  data-aos="fade-in">
          <h1 className="heading-main">{title}</h1>
          <p className="heading-sub text-hub mt20"> {new Date(post.date).toLocaleDateString('en-US', {month: 'short',day: 'numeric',year: 'numeric',})}</p>
        </div>
      </section>
      <section className="section-3 pt-0">
        <div className="container relative flex gap80 items-start">
          <div className="w-2/3" dangerouslySetInnerHTML={{ __html: html }} />
          <div className="w-1/3 border border-gray-200 rounded-2xl p-6 sticky top-24">
            <h2 className="text-2xl font-bold text-gray-800">Related Posts</h2>
          </div>
          {/* SEO JSON-LD Schema */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        </div>
      </section>
    </div>

  )
}