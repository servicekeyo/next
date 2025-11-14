"use client"
import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import Pagination from "@/components/PaginationNav"

type Props = { categorySlug: string; title?: string; limit?: number; className?: string; basePath?: string }

export default function GrillCategoryGridClient({ categorySlug, title, limit = 6, basePath }: Props) {
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [totalPages, setTotalPages] = useState(1)
  const sp = useSearchParams()
  const pageFromUrl = useMemo(() => Math.max(1, parseInt(sp.get('page') || '1', 10) || 1), [sp])
  const path = basePath || `/grills/${categorySlug}`
  const router = useRouter()
  const [page, setPage] = useState(pageFromUrl)

  useEffect(() => {
    let cancelled = false
    const controller = new AbortController()
    async function load() {
      setLoading(true)
      try {
        const res = await fetch(`/api/grills-by-category?slug=${encodeURIComponent(categorySlug)}&per_page=${limit}&page=${page}`, { cache: 'no-store', signal: controller.signal })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        if (!cancelled) {
          setItems(Array.isArray(data?.items) ? data.items : [])
          setTotalPages(Math.max(1, parseInt(String(data?.totalPages || 1), 10)))
        }
      } catch (err) {
        if (!cancelled) setItems([])
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true; controller.abort() }
  }, [categorySlug, limit, page])

  useEffect(() => {
    setPage(pageFromUrl)
  }, [pageFromUrl])

  return (
    <div className="container">
        {items.map((item: any) => {
          const name = item?.title?.rendered ?? item?.title ?? ""
          const media = item?._embedded?.["wp:featuredmedia"]?.[0]
          const fallback = media?.source_url || media?.media_details?.sizes?.medium?.source_url || ""
          const imgFrom = (v: any) => (typeof v === "string" ? v : v?.url || v?.source_url || "")
          const front = imgFrom(item?.acf?.front_image) || fallback
          const back = imgFrom(item?.acf?.back_image) || ""
          return (
            <a key={item?.id ?? name} href={item?.slug ? `/grills/${item.slug}` : "#"} className="group rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition">
              <div className="relative pt-[100%]">
                {front ? (
                  <Image src={front} alt={name} fill sizes="(max-width: 768px) 100vw, 33vw" className={`object-cover ${back ? "transition-opacity duration-300 group-hover:opacity-0" : ""}`} />
                ) : null}
                {back ? (
                  <Image src={back} alt={name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                ) : null}
              </div>
              <div className="p-4">
                <div className="text font-semibold">{name}</div>
              </div>
            </a>
          )
        })}

      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={page <= 1 || loading}
          onClick={() => {
            const nextPage = Math.max(1, page - 1)
            setPage(nextPage)
            router.replace(nextPage === 1 ? `${path}` : `${path}?page=${nextPage}`)
          }}
        >
          ← Prev
        </button>
        <span className="text-sm text-hub">Page {page} / {totalPages}</span>
        <button
          className="px-3 py-1 border rounded disabled:opacity-50"
          disabled={page >= totalPages || loading}
          onClick={() => {
            const nextPage = Math.min(totalPages, page + 1)
            setPage(nextPage)
            router.replace(nextPage === 1 ? `${path}` : `${path}?page=${nextPage}`)
          }}
        >
          Next →
        </button>
        <button
          className="ml-4 px-3 py-1 border rounded"
          disabled={loading}
          onClick={() => {
            setPage(p => p)
          }}
        >
          Refresh
        </button>
      </div>
      {loading && (
        <div className="mt20 text-center text-gray-600">Loading...</div>
      )}
      {!loading && items.length === 0 && (
        <div className="mt20 text-center text-gray-600">No items</div>
      )}
    </div>
  )
}
