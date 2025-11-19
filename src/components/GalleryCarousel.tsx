"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

type ImageItem = string | { url: string; alt?: string }

export default function GalleryCarousel({ images }: { images: ImageItem[] }) {
  const display = (images || [])
    .map((item) => (typeof item === 'string' ? { url: item, alt: 'Reference Grill' } : { url: item.url, alt: item.alt || 'Reference Grill' }))
    .filter((x) => !!x.url)
  const fallback = ['/images/about/indx_one1.jpg','/images/about/indx_one2.jpg','/images/about/indx_one3.jpg']
  const imgs = display.length ? display : fallback.map((u) => ({ url: u, alt: 'Reference' }))
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      loop
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      spaceBetween={24}
      grabCursor
      slidesPerView={1}
      breakpoints={{ 640: { slidesPerView: 2 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
      pagination={{ clickable: true }}
      className="px-6 gallery-diff-swiper"
    >
      {imgs.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="group relative overflow-hidden rounded-xl shadow hover:shadow-xl transition" >
            <img src={item.url} alt={item.alt || 'Reference Grill'} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <p className="text text-white font-medium">We can customize this style</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

