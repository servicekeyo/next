"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

export default function GalleryCarousel({ images }: { images: string[] }) {
  return (
    <Swiper
      modules={[Autoplay]}
      loop
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="px-6"
   >
      {images.map((src, i) => (
        <SwiperSlide key={i}>
          <div className="group relative overflow-hidden rounded-2xl shadow hover:shadow-xl transition">
            <img src={src} alt="Reference Grill" className="w-full h-64 object-cover group-hover:scale-110 transition-transform" />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <p className="text text-white font-medium">We can customize this style</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

