import { getbloglist, getPostBySlug } from '@/lib/wordpress'
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
  return (
    <article className="prose mx-auto py-16 px-6">
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
      <div className="mt-6" dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  )
}