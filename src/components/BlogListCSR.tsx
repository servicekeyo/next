'use client'
import { useLayoutEffect, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import AOS from 'aos'

export default function BlogListCSR({ initialPosts, perPage = 6, initialTotalPages }: { initialPosts: any[]; perPage?: number; initialTotalPages: number }) {
  const searchParams = useSearchParams()
  const pageFromUrl = useMemo(() => Math.max(1, parseInt(searchParams.get('page') || '1', 10) || 1), [searchParams])
  const [posts, setPosts] = useState<any[]>(initialPosts || [])
  const [loading, setLoading] = useState(false)
  

  // 调试信息
  useEffect(() => {
    // Debug logs removed
  }, [initialPosts, posts, pageFromUrl])

  useEffect(() => {
    let cancelled = false
    const controller = new AbortController()
    async function load() {
      if (pageFromUrl <= 1) {
        setPosts(initialPosts || [])
        return
      }
      setLoading(true)
      try {
        const res = await fetch(`/api/blog?page=${pageFromUrl}&per_page=${perPage}`,
          { cache: 'no-store', signal: controller.signal })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        if (!cancelled) setPosts(Array.isArray(data?.posts) ? data.posts : [])
      } catch (err: any) {
        // 忽略中止错误，避免 dev 环境 ERR_ABORTED 噪音
        if (err?.name === 'AbortError') return
        if (!cancelled) setPosts([])
        console.error('[BlogListCSR] fetch error:', err)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
      controller.abort()
    }
  }, [pageFromUrl, perPage, initialPosts])

  useLayoutEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    })
    AOS.refresh()
  }, [])

  return (
    <div className="container relative" data-aos="fade-up" suppressHydrationWarning>
      <div className="grid gap30 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: any, index) => (
          <div key={post.id} className="flex flex-col mb-5 xl:mb-10 hover:shadow-xl rounded-xl hover:scale-[1.02] transition-all duration-500 ease-out p-6 group cursor-pointer">
          <article 
            data-aos="fade-up" data-aos-delay={`${index * 100}`}
          >
            <img
              alt={
                post?._embedded?.['wp:featuredmedia']?.[0]?.alt_text ||
                post?.title?.rendered?.replace(/<[^>]+>/g, '') ||
                'Blog Post'
              }
              src={
                post?._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
                post?.yoast_head_json?.og_image?.[0]?.url ||
                post?.jetpack_featured_media_url ||
                '/images/home/index_banner3.jpg'
              }
              loading="lazy"
              className="w-full rounded-xl bg-gray-100 object-cover h-[250px] xl:h-[310px]"
            />
            <time dateTime={post.date} className='text-sm text-hub mt30'>
                {new Date(post.date).toLocaleDateString('en-US', {month: 'short',day: 'numeric',year: 'numeric',})}
            </time>
            <div className="group relative mt20"> 
             <h3 className="text font-bold text-gray-900 group-hover:text-hover transition-colors duration-300">
              <Link href={`/blog/${post.slug}`} target="_blank" prefetch={false}>
                {post?.title?.rendered ? post.title.rendered.replace(/<[^>]+>/g, '') : 'Untitled Post'}
              </Link>
             </h3> 
              <p
                className="heading-sub text-hub mt20"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {(post?.excerpt?.rendered || '').replace(/<[^>]+>/g, '')}
              </p>
            </div>
          </article>
          </div>
        ))}
        {!loading && posts.length === 0 && (
          <div className="mt20 md:col-span-2 lg:col-span-3 text-center text-gray-600">No posts found.</div>
        )}
      </div>
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900" aria-label="Loading" />
        </div>
      )}
    </div>
  )
}