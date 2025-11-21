'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Thumbs, FreeMode } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

export interface SwiperImage {
  src: string;
  alt: string;
}

export interface SwiperCarouselProps {
  images: SwiperImage[];
  showThumbs?: boolean;
  thumbsPerView?: number;
  autoplayDelay?: number;
  fadeEffect?: boolean;
  className?: string;
  thumbsClassName?: string;
}

export default function SwiperCarousel({
  images,
  showThumbs = true,
  thumbsPerView = 5,
  autoplayDelay = 4000,
  fadeEffect = false,
  className = "rounded-xl shadow-md w-full max-w-[720px] mx-auto",
  thumbsClassName = "thumbs-swiper h-24 w-full max-w-[720px] mx-auto [&_.swiper-slide]:opacity-50 [&_.swiper-slide]:transition-opacity [&_.swiper-slide-thumb-active]:opacity-100"
}: SwiperCarouselProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="space-y-4">
      {/* 主轮播 */}
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as any}
        spaceBetween={10}
        modules={[ Thumbs, Autoplay, FreeMode]}
        effect={fadeEffect ? 'fade' : 'slide'}
        fadeEffect={fadeEffect ? { crossFade: true } : undefined}
        thumbs={{ swiper: thumbsSwiper }}
        autoplay={{
          delay: autoplayDelay,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className={className}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* 缩略图轮播 */}
      {showThumbs && images.length > 1 && (
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={Math.min(thumbsPerView, images.length)}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Thumbs]}
          className={thumbsClassName}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300 rounded-lg overflow-hidden h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}