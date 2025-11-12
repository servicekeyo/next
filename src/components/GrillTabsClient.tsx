"use client"
import { useEffect, useMemo, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

type Props = {
  categories: any[]
  itemsByCat: Record<number, any[]>
}

export default function GrillTabsClient({ categories, itemsByCat }: Props) {
  const initialId = categories?.[0]?.id ?? null
  const [active, setActive] = useState<number | null>(initialId)
  const activeItems = useMemo(() => (active ? itemsByCat?.[active] ?? [] : []), [active, itemsByCat])
  const activeCat = useMemo(() => (categories || []).find((c: any) => c.id === active) || null, [categories, active])
  const prevRef = useRef<HTMLButtonElement | null>(null)
  const nextRef = useRef<HTMLButtonElement | null>(null)
  const [swiperInst, setSwiperInst] = useState<any>(null)

  useEffect(() => {
    if (!swiperInst || !prevRef.current || !nextRef.current) return
    swiperInst.params.navigation.prevEl = prevRef.current
    swiperInst.params.navigation.nextEl = nextRef.current
    if (swiperInst.navigation) {
      swiperInst.navigation.destroy()
      swiperInst.navigation.init()
      swiperInst.navigation.update()
    }
  }, [swiperInst, active])

  return (
    <div className="flex flex-col gap50">
      <div className="tab-group gap-5">
        {(categories || []).map((c: any) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`tab-btn ${active === c.id ? 'tab-btn-active' : ''}`}
          >
            {c?.name ?? c?.slug ?? 'Category'}
          </button>
        ))}
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{ enabled: true }}
          onSwiper={setSwiperInst}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={60}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="[&_.swiper-button-prev]:hidden [&_.swiper-button-next]:hidden"
        >
        {activeItems.map((item: any) => {
          const title = item?.title?.rendered ?? item?.title ?? ''
          const media = item?._embedded?.['wp:featuredmedia']?.[0]
          const fallback = media?.source_url ?? media?.media_details?.sizes?.medium?.source_url ?? ''
          const imgFrom = (v: any) => (typeof v === 'string' ? v : v?.url || v?.source_url || '')
          const front = imgFrom(item?.acf?.front_image) || fallback
          const back = imgFrom(item?.acf?.back_image) || ''
          return (
            <SwiperSlide key={item?.id ?? title}>
              <div className="rounded-lg overflow-hidden bg-white transition">
                <div className="relative group pt-[100%]">
                  {front ? (
                    <img src={front} alt={title} className={`absolute inset-0 w-full h-full object-cover ${back ? 'transition-opacity duration-300 group-hover:opacity-0' : ''}`} />
                  ) : null}
                  {back ? (
                    <img src={back} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  ) : null}
                </div>
                <div className="p-4">
                  <div className="text font-semibold">{title}</div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
        </Swiper>
        <div className="absolute inset-y-0 left-0 flex items-center z-10">
          <button ref={prevRef} aria-label="Previous" className="btn-secondary btn-small rounded-full">‹</button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center z-10">
          <button ref={nextRef} aria-label="Next" className="btn-secondary btn-small rounded-full">›</button>
        </div>
      </div>
      {activeCat ? (
        <div className="flex justify-center">
          <a href={activeCat?.slug ? `/grills/${activeCat.slug}` : `/grills/`} className="btn-secondary">View More</a>
        </div>
      ) : null}
    </div>
  )
}
