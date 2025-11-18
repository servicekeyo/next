'use client'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function GrillListCSR({ initialPosts, perPage = 6, initialTotalPages, categorySlug }: { initialPosts: any[]; perPage?: number; initialTotalPages: number; categorySlug?: string }) {
  const searchParams = useSearchParams()
  const pageFromUrl = useMemo(() => Math.max(1, parseInt(searchParams.get('page') || '1', 10) || 1), [searchParams])
  const [posts, setPosts] = useState<any[]>(initialPosts || [])
  const [loading, setLoading] = useState(false)

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
        let url = ''
        if (categorySlug) {
          url = `/api/grills-by-category?slug=${encodeURIComponent(categorySlug)}&page=${pageFromUrl}&per_page=${perPage}`
        } else {
          url = `/api/blog?page=${pageFromUrl}&per_page=${perPage}`
        }
        const res = await fetch(url, { cache: 'no-store', signal: controller.signal })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        if (!cancelled) {
          const next = categorySlug ? (Array.isArray(data?.items) ? data.items : []) : (Array.isArray(data?.posts) ? data.posts : [])
          setPosts(next)
        }
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

  return (
    <div className="container relative"  data-aos="fade-up">
      <div className="grid gap30 md:grid-cols-2 lg:grid-cols-4" data-aos="fade-up" data-aos-delay="100">
        {posts.map((post: any, index) => {
          const title = (post?.title?.rendered || post?.title || '').replace(/<[^>]+>/g, '')
          const media = post?._embedded?.['wp:featuredmedia']?.[0]
          const imgFrom = (v: any) => (typeof v === 'string' ? v : v?.url || v?.source_url || '')
          const front = imgFrom(post?.acf?.front_image)
          const back = imgFrom(post?.acf?.back_image)
          const fallback = media?.source_url || media?.media_details?.sizes?.medium?.source_url || post?.yoast_head_json?.og_image?.[0]?.url || post?.jetpack_featured_media_url || '/images/home/index_banner3.jpg'
          const href = categorySlug ? `/grills/${post.slug}` : `/blog/${post.slug}`
          return (
            <a key={post.id ?? index} href={href} className="group rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition">
              <div className="relative pt-[100%]">
                {front ? (
                  <img src={front} alt={title} className={`absolute inset-0 w-full h-full object-cover ${back ? 'transition-opacity duration-300 group-hover:opacity-0' : ''}`} />
                ) : (
                  <img src={fallback} alt={title} className="absolute inset-0 w-full h-full object-cover" />
                )}
                {back ? (
                  <img src={back} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                ) : null}
              </div>
              <div className="p-4">
                <div className="text text-center">{title}</div>
              </div>
            </a>
          )
        })}
        {!loading && posts.length === 0 && (
          <div className="mt20 md:col-span-2 lg:col-span-4 text-center text-gray-600">No items</div>
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
