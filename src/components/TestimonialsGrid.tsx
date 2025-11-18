"use client"
import { useMemo } from "react"
import { Star } from "phosphor-react"

type Testimonial = {
  name: string
  message: string
  avatar?: string
  date?: string
  rating?: number
  role?: string
  company?: string
}

export default function TestimonialsGrid({ items }: { items?: Testimonial[] }) {
  const list = useMemo(() => {
    if (items && items.length > 0) return items
    return [
      { name: "James Liu", message: "The charcoal grill quality is superb. Stable heat distribution and durable materials.", rating: 5, date: "2025-08-12", role: "Purchasing Manager", company: "Shanghai BBQ Co." },
      { name: "Maria Gomez", message: "Custom logo and carton printing were done exactly as requested.", rating: 5, date: "2025-09-03", role: "Brand Owner", company: "EuroGrill" },
      { name: "Omar Khan", message: "After-sales support helped us adapt local regulations.", rating: 4, date: "2025-09-18", role: "Operations", company: "Desert Flame" },
      { name: "Sophia Chen", message: "Surface treatment is excellent. No scratches, uniform coating.", rating: 5, date: "2025-10-02", role: "QA Lead", company: "NorthEast Retail" },
      { name: "David Park", message: "Prototype was delivered fast. Performance matches specification.", rating: 5, date: "2025-10-20", role: "Product Manager", company: "K-Seoul Home" },
      { name: "Elena Rossi", message: "OEM flexibility and documentation were great. Logistics coordination efficient.", rating: 4, date: "2025-11-01", role: "Buyer", company: "Italia Casa" },
    ]
  }, [items])

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((t, i) => (
          <div key={i} className="rounded-2xl border border-gray-200 bg-white/90 backdrop-blur p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} size={18} weight={k < (t.rating || 0) ? "fill" : "duotone"} className={k < (t.rating || 0) ? "text-primary" : "text-gray-300"} />
              ))}
            </div>
            <p className="text text-hub mt-4 leading-relaxed">{t.message}</p>
            <div className="mt-6 flex items-center gap-4">
              {t.avatar ? (
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
              ) : (
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary grid place-items-center text-lg font-semibold">
                  {t.name.slice(0, 1).toUpperCase()}
                </div>
              )}
              <div className="flex-1">
                <div className="text font-semibold">{t.name}</div>
                <div className="text-sm text-hub">
                  {t.role ? t.role : "Client"}{t.company ? ` · ${t.company}` : ""}{t.date ? ` · ${t.date}` : ""}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

