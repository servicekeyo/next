"use client"
import { useMemo, useRef, useEffect } from "react"
import { Star, CaretLeft, CaretRight } from "phosphor-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

type Testimonial = {
  name: string
  message: string
  avatar?: string
  date?: string
  rating?: number
  role?: string
  company?: string
}

export default function TestimonialsCarousel({ items }: { items?: Testimonial[] }) {
  const swiperRef = useRef<any>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
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

  useEffect(() => {
    function equalizeHeights() {
      const heights = cardRefs.current.map(el => (el ? el.offsetHeight : 0))
      const max = heights.length ? Math.max(...heights) : 0
      cardRefs.current.forEach(el => { if (el && max) el.style.minHeight = `${max}px` })
    }
    const id = setTimeout(equalizeHeights, 0)
    window.addEventListener('resize', equalizeHeights)
    return () => { clearTimeout(id as any); window.removeEventListener('resize', equalizeHeights) }
  }, [list])

  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={50}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        onSwiper={(swiper) => { swiperRef.current = swiper }}
        className="px-2"
      >
        {list.map((t, i) => (
          <SwiperSlide key={i} className="h-full">
            <div ref={(el) => { cardRefs.current[i] = el }} className=" bg-white rounded-2xl border border-gray-200 p-6 transition h-full flex flex-col ">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={18} weight={k < (t.rating || 0) ? "fill" : "duotone"} className={k < (t.rating || 0) ? "text-primary" : "text-gray-300"} />
                ))}
              </div>
              <p className="text text-hub mt-4 leading-relaxed" >{t.message}</p>
              <div className="flex items-center gap-4 pt-6">
                <div className="flex-1">
                  <div className="text font-semibold">{t.name}</div>
                  <div className="heading-sub text-hub">
                    {t.company ? t.company : "Client"}{t.role ? ` · ${t.role}` : ""}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt30 flex justify-center gap30">
        <button onClick={() => swiperRef.current?.slidePrev()} className="testimonials-prev l-arrow" aria-label="Previous">
          <CaretLeft />
        </button>
        <button onClick={() => swiperRef.current?.slideNext()} className="testimonials-next r-arrow" aria-label="Next">
          <CaretRight />
        </button>
      </div>
    </div>
  )
}