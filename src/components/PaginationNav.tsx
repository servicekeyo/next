"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface PaginationProps {
  currentPage?: number
  totalPages: number
  basePath?: string
}

export default function Pagination({
  currentPage,
  totalPages,
  basePath = '/blog',
}: PaginationProps) {
  const sp = useSearchParams()
  const pageFromUrl = Math.max(1, parseInt(sp.get('page') || '1', 10) || 1)
  const curr = typeof currentPage === 'number' ? currentPage : pageFromUrl
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav className="flex justify-center mt-10 space-x-2">
      {curr > 1 && (
        <Link prefetch={false} href={curr - 1 === 1 ? `${basePath}` : `${basePath}?page=${curr - 1}`} className="px-3 py-1 border rounded hover:bg-gray-100">
          ← Prev
        </Link>
      )}

      {pages.map(page => (
        <Link
          key={page}
          prefetch={false}
          href={page === 1 ? `${basePath}` : `${basePath}?page=${page}`}
          className={`px-3 py-1 border rounded ${page === curr ? 'bg-gray-200 font-semibold' : 'hover:bg-gray-100'}`}
        >
          {page}
        </Link>
      ))}

      {curr < totalPages && (
        <Link prefetch={false} href={`${basePath}?page=${curr + 1}`} className="px-3 py-1 border rounded hover:bg-gray-100">
          Next →
        </Link>
      )}
    </nav>
  )
}
