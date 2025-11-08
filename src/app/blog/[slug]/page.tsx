import { getbloglist, getPostBySlug } from '@/lib/wordpress'
import { notFound } from 'next/navigation'

export const revalidate = 3600 // ISR (cache 1h per page)
export const dynamic = 'force-dynamic' // always generate on demand (with ISR cache)

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  // 如果文章已删除，返回404（自动清理旧页面）
  if (!post) return notFound()

  return (
    <article className="prose mx-auto py-16 px-6">
      <h1
        className="text-3xl font-bold text-gray-900"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <p className="text-gray-500 text-sm mt-2">
        {new Date(post.date).toLocaleDateString()}
      </p>
      <div
        className="mt-6 prose-lg"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </article>
  )
}
