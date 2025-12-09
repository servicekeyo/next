"use client"
import { useMemo, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { CaretLeft, CaretRight } from 'phosphor-react'

type Props = {
  categories: any[]
  itemsByCat: Record<number, any[]>
}

export default function GrillTabsClient({ categories, itemsByCat }: Props) {
  const initialId = categories?.[0]?.id ?? null
  const [active, setActive] = useState<number | null>(initialId)
  const activeItems = useMemo(() => (active ? itemsByCat?.[active] ?? [] : []), [active, itemsByCat])
  const activeCat = useMemo(() => (categories || []).find((c: any) => c.id === active) || null, [categories, active])
  const [swiperInst, setSwiperInst] = useState<any>(null)

  return (
    <div className="flex flex-col gap80">
      <div className="tab-group gap-5">
        {(categories || []).map((c: any) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`tab-btn ${active === c.id ? 'tab-btn-active' : ''} hover:scale-105 transition-transform duration-200 ease-out`}
          >
            {c?.name ?? c?.slug ?? 'Category'}
          </button>
        ))}
      </div>

      <div className="relative">
        <Swiper
          modules={[Autoplay]}
          onSwiper={setSwiperInst}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={60}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
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
              <div className="rounded-lg overflow-hidden bg-white transition-all duration-500 ease-out hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                <div className="relative group pt-[100%]">
                  {front ? (
                    <img src={front} alt={title} className={`absolute inset-0 w-full h-full object-cover ${back ? 'transition-opacity duration-300 group-hover:opacity-0' : ''}`} />
                  ) : null}
                  {back ? (
                    <img src={back} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  ) : null}
                </div>
                <div className="p-4">
                  <div className="text font-semibold group-hover:text-hover transition-colors duration-300">{title}</div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
        </Swiper>
        <div className="absolute inset-y-0 -left-0 xl:-left-16 flex items-center z-10">  
            <CaretLeft size={48} className='hover:text-primary' weight="bold" onClick={() => swiperInst?.slidePrev()} aria-label="Previous"/>
        </div>
        <div className="absolute inset-y-0 -right-0 xl:-right-16 flex items-center z-10">
            <CaretRight size={48} className='hover:text-primary' weight="bold" onClick={() => swiperInst?.slideNext()} aria-label="Next"/>
        </div>
      </div>
      {activeCat ? (
        <div className="flex justify-center">
          <a href={activeCat?.slug ? `/grills/${activeCat.slug}` : `/grills/`} className="btn-secondary">View All {activeCat?.name ?? activeCat?.slug ?? 'Category'}s</a>
        </div>
      ) : null}
    </div>
  )
}
