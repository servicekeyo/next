import React from 'react'

export interface TocItem {
  id: string
  text: string
  level: number
}

export default function TableOfContents({ items, className = '' }: { items: TocItem[]; className?: string }) {
  if (!items || items.length === 0) return null
  return (
    <nav aria-label="Table of Contents" className={`sticky top-[100px] bg-gray-50 border border-gray-200 rounded-lg p-5 xl:p-8 shadow-sm ${className}`}>
      <h2 className="text font-bold pb-3">Table of Contents</h2>
      <ul className="space-y-5 text-sm">
        {items.map((item) => (
          <li key={item.id} className={item.level === 2 ? 'pl-0' : item.level === 3 ? 'pl-3' : 'pl-6'}>
            <a href={`#${item.id}`} className="text-hub heading-sub hover:text-primary transition-colors">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}