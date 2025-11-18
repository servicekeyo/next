"use client"
import { useMemo } from "react"
import { Star } from "phosphor-react"

type Testimonial = {
  name: string
  message: string
  avatar?: string
  date?: string
  rating?: number
}

export default function TestimonialsMasonry({ items }: { items?: Testimonial[] }) {
  const list = useMemo(() => {
    if (items && items.length > 0) return items
    return [
      { name: "James Liu", message: "The charcoal grill quality is superb. Stable heat distribution and durable materials. Packaging was neat and arrived on time.", rating: 5, date: "2025-08-12" },
      { name: "Maria Gomez", message: "Our brand ordered 500 units. Custom logo and carton printing were done exactly as requested. Communication with the engineering team was smooth.", rating: 5, date: "2025-09-03" },
      { name: "Omar Khan", message: "Assembly instructions were clear. After-sales support helped us adapt local regulations. Will place another order.", rating: 4, date: "2025-09-18" },
      { name: "Sophia Chen", message: "Surface treatment is excellent. No scratches, uniform coating. Accessories fit perfectly.", rating: 5, date: "2025-10-02" },
      { name: "David Park", message: "Requested special burner layout. Prototype was delivered fast. The performance matches specification.", rating: 5, date: "2025-10-20" },
      { name: "Elena Rossi", message: "We loved the OEM flexibility and documentation. Logistics coordination was efficient.", rating: 4, date: "2025-11-01" },
    ]
  }, [items])

  return (
    <div className="container">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-gap:1.25rem]">
        {list.map((t, i) => (
          <div key={i} className="break-inside-avoid rounded-2xl bg-white shadow hover:shadow-md transition p-6 space-y-4">
            <div className="flex items-center gap-4">
              {t.avatar ? (
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              ) : (
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary grid place-items-center text-lg font-semibold">
                  {t.name.slice(0, 1).toUpperCase()}
                </div>
              )}
              <div className="flex-1">
                <div className="text font-semibold">{t.name}</div>
                {t.date ? <div className="text-sm text-hub">{t.date}</div> : null}
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={18} weight={k < (t.rating || 0) ? "fill" : "duotone"} className={k < (t.rating || 0) ? "text-primary" : "text-gray-300"} />
                ))}
              </div>
            </div>
            <p className="text text-hub leading-relaxed">{t.message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

