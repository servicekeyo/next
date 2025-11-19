


'use client';

import { useState } from 'react';
import FooterContact from '@/components/FooterContact';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import SEO from '@/components/SEO';
import AOSPageWrapper from '@/components/AOSPageWrapper';

export default function AboutPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [thumbsSwiper2, setThumbsSwiper2] = useState<any>(null);

  // 第一个轮播图片数据（Why Choose Us部分）
  const mainImages = [
    { src: '/images/about/indx_one1.jpg', alt: 'Factory overview' },
    { src: '/images/about/indx_one2.jpg', alt: 'Manufacturing process' },
    { src: '/images/about/indx_one3.jpg', alt: 'Quality control' },
    { src: '/images/about/indx_one4.jpg', alt: 'Product showcase' },
    { src: '/images/about/indx_one5.jpg', alt: 'Team collaboration' },
    { src: '/images/about/indx_one6.jpg', alt: 'Production facility' },
    { src: '/images/about/indx_one7.jpg', alt: 'Production facility' }
  ];

  // 第二个轮播图片数据（Reliable Supply部分）
  const logisticsImages = [
    { src: '/images/about/indx_one8.jpg', alt: 'Logistics center' },
    { src: '/images/about/indx_one9.jpg', alt: 'Shipping containers' },
    { src: '/images/about/indx_one10.jpg', alt: 'Delivery trucks' },
    { src: '/images/about/indx_one11.jpg', alt: 'Warehouse operations' }
  ];

  return (
    <AOSPageWrapper>
    <div className="min-h-screen">
      <SEO 
        wpUrl="https://admin.keyfirebbq.com/about"
        fallbackTitle="About Us - Keyo Customize | BBQ Grill Manufacturer China"
        fallbackDescription="Learn about Keyo Customize, a leading BBQ grill manufacturer in China with years of experience in custom grill design and production."
      />
      {/* Hero Section */}
      <section className="section-1 relative isolate -z-10">
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 h-80 xl:h-110 w-full mask-[radial-gradient(70rem_70rem_at_center,white,transparent)] stroke-gray-200"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
        </svg>
        <div className='herotitle-w' data-aos="fade-in">
          <h1 className="heading-main">About Keyfire</h1>
          <p className="heading-sub mt30 text-hub">Whether it starts with a sketch, a photo, or simply an idea, our team turns your vision into a real, manufacturable product. A clear process, step by step — making customization simple and efficient.</p>
        </div>
      </section>

      <div className="section-3">
        <div className='container flex flex-col gap160'>
          {/* 第一个轮播区域 - Why Choose Us */}
          <div className='container flex flex-col lg:flex-row gap160' data-aos="fade-up" data-aos-duration="800">
            <div className="lg:w-1/2" data-aos="fade-right" data-aos-delay="200">
              <div className="space-y-4">
                {/* 主轮播 */}
                <Swiper
                  style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                  } as any}
                  spaceBetween={10}
                  navigation={{
                    nextEl: '.swiper-button-next-logistics',
                    prevEl: '.swiper-button-prev-logistics',
                  }}
                  modules={[ Thumbs, Autoplay, FreeMode]}
                  effect={'fade'}
                  fadeEffect={{ crossFade: true }}
                  thumbs={{ swiper: thumbsSwiper }}
                  autoplay={{
                    delay: 4000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  className="rounded-xl shadow-md w-full max-w-[720px] mx-auto"
                >
                  {mainImages.map((image, index) => (
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
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={5}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Thumbs]}
                  className="thumbs-swiper h-24 w-full max-w-[720px] mx-auto [&_.swiper-slide]:opacity-50 [&_.swiper-slide]:transition-opacity [&_.swiper-slide-thumb-active]:opacity-100"
                >
                  {mainImages.map((image, index) => (
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
              </div>
            </div>
            <div className='lg:w-1/2 flex flex-col gap30 justify-center' data-aos="fade-left" data-aos-delay="400">
              <h2 className="heading-main2" data-aos="fade-left" data-aos-delay="600">Why Choose Us</h2>
              <p className='text text-hub' data-aos="fade-left" data-aos-delay="800">
                At Keyfire, we deliver One-Stop OEM & ODM solution—from R&D and customization to manufacturing, quality control, packaging, and logistics. Our expert team ensures a smooth journey, enabling businesses to turn their BBQ grill concepts into market-ready products successfully.
              </p>
              <dl className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 mt50" data-aos="fade-up" data-aos-delay="1000">
                <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6 dark:border-white/10">
                  <dt className="text-sm/6 text-gray-600 dark:text-gray-400">Units Annually</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">2.4 Million</dd>
                </div>
                <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6 dark:border-white/10">
                  <dt className="text-sm/6 text-gray-600 dark:text-gray-400">Manufacturing Facility</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">40,000㎡</dd>
                </div>
                <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6 dark:border-white/10">
                  <dt className="text-sm/6 text-gray-600 dark:text-gray-400">Warehouse</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">20,000㎡</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Professional Team Section */}
          <div className="flex flex-col gap80" data-aos="fade-up" data-aos-duration="800">
            <div className="max-w-4xl" data-aos="fade-up" data-aos-delay="200">
              <h2 className="heading-main2" data-aos="fade-up" data-aos-delay="400">Professional Team</h2>
              <p className="heading-sub mt20 text-hub" data-aos="fade-up" data-aos-delay="600">
                20+ Years Of Manufacturing experience
                Keyfire has over 20 years of experience serving 2,000+ customers across 100+ countries, delivering reliable, high-quality production solution
              </p>
            </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap80'>
              <div className="text flex flex-col gap30">
                <p><strong>400 Skilled Workers</strong> – Ensuring stable, high-volume production capacity.</p>
                <p><strong>20 Account Managers</strong> – Dedicated support for seamless global communication.</p>
                <p><strong>10 Professional R&D</strong> – Creative solutions for product and packaging customization.</p>
                <p><strong>12 Quality Control Specialists</strong> – Strict inspections guaranteeing reliable performance.</p>
                <p>
                  we offer marketing support with catalogs and manuals.Our design team ensures your brand stands out with professional visuals that help grow your presence in the market.
                </p>
              </div>
              <div className="xl:pt-16 lg:row-span-2">
                <div className=" grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8">
                  <div className="">
                    <Image alt="" src="/images/home/a7.jpg" className="block object-cover rounded-md" width={400} height={210}/>
                  </div>
                  <div className="xl:-mt-24 ">
                    <Image alt="" src="/images/home/a2.jpg" className="block object-cover rounded-md" width={400} height={210}/>
                  </div>
                  <div className="">
                    <Image alt="" src="/images/home/a1.jpg" className="block object-cover rounded-md" width={400} height={210}/>
                  </div>
                  <div className="xl:-mt-24 ">
                    <Image alt="" src="/images/home/a8.jpg" className="block object-cover rounded-md" width={400} height={210}/>
                  </div>
                  <div className="hidden xl:block">
                    
                  </div>
                  <div className="xl:-mt-24 ">
                    <Image alt="" src="/images/home/a10.jpg" className="block object-cover rounded-md" width={400} height={210}/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 第二个轮播区域 - Reliable Supply */}
          <div className='container flex flex-col lg:flex-row gap160'>
            <div className="lg:w-1/2" data-aos="fade-right" data-aos-delay="200">
              <div className="space-y-4">
                {/* 第二个主轮播 */}
                <Swiper
                  modules={[ Pagination, Autoplay, Thumbs]}
                  spaceBetween={20}
                  effect={'fade'}
                  fadeEffect={{ crossFade: true }}
                  thumbs={{ swiper: thumbsSwiper2 }}
                  autoplay={{
                    delay: 4000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  navigation={{
                    nextEl: '.swiper-button-next-logistics2',
                    prevEl: '.swiper-button-prev-logistics2',
                  }}
                  className="rounded-xl shadow-md w-full max-w-[720px] mx-auto"
                >
                  {logisticsImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-auto object-cover rounded-xl" 
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                
                {/* 第二个缩略图轮播 */}
                <Swiper
                  onSwiper={setThumbsSwiper2}
                  spaceBetween={10}
                  slidesPerView={5}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Thumbs]}
                  className="thumbs-swiper h-24 w-full max-w-[720px] mx-auto [&_.swiper-slide]:opacity-50 [&_.swiper-slide]:transition-opacity [&_.swiper-slide-thumb-active]:opacity-100"
                >
                  {logisticsImages.map((image, index) => (
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
              </div>
            </div>
            <div className='lg:w-1/2 flex flex-col gap30 justify-center' data-aos="fade-left" data-aos-delay="200">
              <h2 className="heading-main2">Reliable Supply, Efficient Delivery</h2>
              <p className='text text-hub'>
                With 3,000 containers of annual capacity, KEYO ensures reliable and efficient fulfillment of bulk orders.Orders are shipped within 30–40 days after payment, helping you keep your products on the market without delay.
              </p>
            </div>
          </div>

          {/* Compliance Section */}
          <div className='container flex flex-col gap80'>
            <div className='herotitle-w' data-aos="fade-in">
              <h1 className="heading-main2">Keyfire has established a robust compliance system</h1>
              <p className="heading-sub mt30 text-hub">Factory Audit Report: FCCA,Higg Index, BSCI,Sedex,BEPI,Ecoadis.
              Product Testing Certification: CE,REACH,CCRF,Intertek,ROHS,LFGB,UKCA,ISO14000,ISO9001.</p>
            </div>
            <div className="container flex flex-col items-center justify-center gap30">
              <div className='grid grid-cols-3 md:grid-cols-6 gap-5 items-center' data-aos="fade-in">
                <Image alt="" src="/images/logo/walmart.jpg" width={300} height={200}/>
                <Image alt="" src="/images/logo/higg.jpg" width={300} height={200}/>
                <Image alt="" src="/images/logo/bsci.jpg" width={300} height={200}/>
                <Image alt="" src="/images/logo/sedex.jpg" width={300} height={200}/>
                <Image alt="" src="/images/logo/bepi.jpg" width={300} height={200}/>
                <Image alt="" src="/images/logo/eco.jpg" width={300} height={200}/>
              </div>
              <div className='grid grid-cols-6 md:grid-cols-9 gap-5 items-center' data-aos="fade-in" data-aos-delay="100">
                <Image alt="" src="/images/logo/ce.jpg" width={200} height={200}/>
                <Image alt="" src="/images/logo/reach.jpg" width={200} height={200}/>
                <Image alt="" src="/images/logo/ccrf.jpg" width={200} height={200}/>
                <Image alt="" src="/images/logo/intertek.jpg" width={200} height={200}/>
                <Image alt="" src="/images/logo/rohs.jpg" width={200} height={200}/>
                <Image alt="" src="/images/logo/lfgb.jpg" width={200} height={200}/>
                <Image alt="" src="/images/logo/ukca.jpg" width={200} height={200}/>
                <Image alt="" src="/images/logo/iso.jpg" width={200} height={200}/>
                <Image alt="" src="/images/logo/iso9001.jpg" width={200} height={200}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterContact />
    </div>
    </AOSPageWrapper>
  );
}
