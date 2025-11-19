"use client"
import Link from 'next/link'
import { CaretLeft, CaretRight } from 'phosphor-react'
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
    <div className="flex justify-center  mt50 space-x-2 ">
      {curr > 1 && (
        <Link prefetch={false} href={curr - 1 === 1 ? `${basePath}` : `${basePath}?page=${curr - 1}`} className="flex items-center justify-center px-3 py-1 transition-all border border-gray-300 rounded hover:bg-hover hover:text-white">
          <CaretLeft  />
        </Link>
      )}

      {pages.map(page => (
        <Link
          key={page}
          prefetch={false}
          href={page === 1 ? `${basePath}` : `${basePath}?page=${page}`}
          className={`px-3 py-1 border border-gray-300 heading-sub transition rounded ${page === curr ? 'bg-primary text-white' : 'hover:bg-hover hover:text-white'}`}
        >
          {page}
        </Link>
      ))}

      {curr < totalPages && (
        <Link prefetch={false} href={`${basePath}?page=${curr + 1}`} className="flex items-center justify-center px-3 py-1 transition-all border border-gray-300 rounded hover:bg-hover hover:text-white">
          <CaretRight  />
        </Link>
      )}
    </div>
  )
}
