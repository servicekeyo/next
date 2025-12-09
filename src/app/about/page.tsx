


import FooterContact from '@/components/FooterContact';
import Image from 'next/image';
import SwiperCarousel, { SwiperImage } from '@/components/SwiperCarousel';
import { getMetadataFromRankMath } from '@/lib/seoServer';

// 生成静态 metadata
export async function generateMetadata() {
  const wpUrl = 'https://admin.keyfirebbq.com/about';
  
  try {
    // 从 RankMath 获取 SEO 数据
    const metadata = await getMetadataFromRankMath(wpUrl, {
      title: 'About Us - Keyo Customize | BBQ Grill Manufacturer China',
      description: 'Learn about Keyo Customize, a leading BBQ grill manufacturer in China with years of experience in custom grill design and production.'
    });
    
    return metadata;
  } catch (error) {
    console.error('Error generating metadata:', error);
    // 返回默认 metadata
    return {
      title: 'About Us - Keyo Customize | BBQ Grill Manufacturer China',
      description: 'Learn about Keyo Customize, a leading BBQ grill manufacturer in China with years of experience in custom grill design and production.',
    };
  }
}

export default function AboutPage() {
  // Why Choose Us section images
  const whyChooseUsImages: SwiperImage[] = [
    { src: '/images/about/indx_one1.jpg', alt: 'Keyfire BBQ grill factory overview in Foshan, China' },
    { src: '/images/about/indx_one2.jpg', alt: 'Gas and charcoal BBQ grill production line at Keyfire factory' },
    { src: '/images/about/indx_one3.jpg', alt: 'Quality control team inspecting finished BBQ grills' },
    { src: '/images/about/indx_one4.jpg', alt: 'Showroom of gas, charcoal and electric BBQ grills at Keyfire' },
    { src: '/images/about/indx_one5.jpg', alt: 'Engineering and sales teams collaborating on custom BBQ grill projects' },
    { src: '/images/about/indx_one6.jpg', alt: 'Stamping and welding workshop for BBQ grill components' },
    { src: '/images/about/indx_one7.jpg', alt: 'Powder-coating and assembly area at Keyfire BBQ grill factory' }
  ];

  // Reliable Supply section images  
  const reliableSupplyImages: SwiperImage[] = [
    { src: '/images/about/indx_one8.jpg', alt: 'Keyfire logistics center and finished BBQ grill storage' },
    { src: '/images/about/indx_one9.jpg', alt: 'BBQ grill containers loading area at Foshan factory' },
    { src: '/images/about/indx_one10.jpg', alt: 'Trucks ready for dispatch of BBQ grill shipments' },
    { src: '/images/about/indx_one11.jpg', alt: 'Warehouse operations for export BBQ grills and accessories' }
  ];

  return (
      <div className="min-h-screen" suppressHydrationWarning>
      
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
              id="1f932ae7-37de-4c0a-a6e3b4d44b84"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d=".5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <rect fill="url(#1f932ae7-37de-4c0a-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
        </svg>
        <div className='herotitle-w' data-aos="fade-in">
          <h1 className="heading-main">About Keyfire BBQ</h1>
          <p className="heading-sub mt30 text-hub">
            Keyfire BBQ is a dedicated BBQ grill manufacturer based in Foshan, China. For more than 20 years we have focused on OEM and ODM charcoal grills, gas grills, electric grills, kettle grills and smokers for international brands and importers. From early sketches to mass production, we turn ideas into reliable, market-ready products through a clear and practical development process.
          </p>
        </div>
      </section>

      {/* About Content with SwiperCarousel */}
      <div className="section-3">
        <div className='container flex flex-col gap160'>
          <div className='container flex flex-col lg:flex-row gap160' data-aos="fade-up" data-aos-duration="800">
            <div className="lg:w-1/2" data-aos="fade-right" data-aos-delay="200">
              <div className="space-y-4">
                <SwiperCarousel 
                  images={whyChooseUsImages}
                  fadeEffect={true}
                  className="rounded-xl shadow-md w-full max-w-[720px] mx-auto"
                />
              </div>
            </div>
            <div className='lg:w-1/2 flex flex-col gap30 justify-center' data-aos="fade-left" data-aos-delay="400">
              <h2 className="heading-main2" data-aos="fade-left" data-aos-delay="600">Why Work With Keyfire BBQ</h2>
              <p className='text text-hub' data-aos="fade-left" data-aos-delay="800">
                Keyfire offers a one-stop OEM and ODM solution for BBQ grills. Our team handles product design support, engineering, tooling, manufacturing, quality control, packaging design and export logistics under one roof. With 2.4 million units annual capacity and large warehouse space, we support long-term programs for brands, importers, retail chains and e-commerce sellers who need a stable BBQ grill factory partner in China.
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
              <h2 className="heading-main2" data-aos="fade-up" data-aos-delay="400">Professional Team Behind Your BBQ Grill Projects</h2>
              <p className="heading-sub mt20 text-hub" data-aos="fade-up" data-aos-delay="600">
                Keyfire has more than 20 years of manufacturing experience, serving over 2,000 customers in 100+ countries. Our team understands how to balance design, cost, certification and delivery time so that your charcoal, gas and electric grills arrive on schedule and perform as expected in the field.
              </p>
            </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap80'>
              <div className="text flex flex-col gap30">
                <p><strong>400 Skilled Workers</strong> – Support stable, high-volume BBQ grill production across peak seasons.</p>
                <p><strong>20 Account Managers</strong> – Handle daily communication, samples, orders and shipment follow-up for global customers.</p>
                <p><strong>10 R&amp;D Engineers</strong> – Focus on structure, safety and packaging customization for different markets.</p>
                <p><strong>12 Quality Control Specialists</strong> – Inspect incoming materials, in-line production and finished BBQ grills before loading.</p>
                <p>
                  In addition to manufacturing, we offer marketing support with catalogs, manuals and basic visual assets. Our design team helps your brand present BBQ grills clearly on packaging, websites and online listings.
                </p>
              </div>
              <div className="xl:pt-16 lg:row-span-2">
                <div className=" grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8">
                  <div className="">
                    <Image alt="Keyfire BBQ grill factory welding and assembly workshop" src="/images/home/a7.jpg" className="block object-cover rounded-md" width={400} height={210}/>
                  </div>
                  <div className="xl:-mt-24 ">
                    <Image alt="Stamping and forming lines for BBQ grill components at Keyfire" src="/images/home/a2.jpg" className="block object-cover rounded-md" width={400} height={210}/>
                  </div>
                  <div className="">
                    <Image alt="Finished gas and charcoal BBQ grills ready for inspection" src="/images/home/a1.jpg" className="block object-cover rounded-md" width={400} height={210}/>
                  </div>
                  <div className="xl:-mt-24 ">
                    <Image alt="Outdoor BBQ grill display area at Keyfire Foshan factory" src="/images/home/a8.jpg" className="block object-cover rounded-md" width={400} height={210}/>
                  </div>
                  <div className="hidden xl:block">
                    
                  </div>
                  <div className="xl:-mt-24 ">
                    <Image alt="Packing and palletizing area for export BBQ grill orders" src="/images/home/a10.jpg" className="block object-cover rounded-md" width={400} height={210}/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 第二个轮播区域 - Reliable Supply */}
          <div className='container flex flex-col lg:flex-row gap160'>
            <div className="lg:w-1/2" data-aos="fade-right" data-aos-delay="200">
              <div className="space-y-4">
                <SwiperCarousel 
                  images={reliableSupplyImages}
                  fadeEffect={true}
                  className="rounded-xl shadow-md w-full max-w-[720px] mx-auto"
                />
              </div>
            </div>
            <div className='lg:w-1/2 flex flex-col gap30 justify-center' data-aos="fade-left" data-aos-delay="200">
              <h2 className="heading-main2">Reliable Supply, Efficient Delivery</h2>
              <p className='text text-hub'>
                With logistics and warehousing in the same industrial zone as our production, Keyfire can ship around 3,000 containers of BBQ grills and related outdoor products each year. For regular orders, the usual lead time is about 30–40 days after deposit, depending on season and model mix. This helps you keep shelves filled and online listings in stock during peak BBQ seasons.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Compliance Section - Static content */}
      <div className='section-3'>
        <div className='container flex flex-col gap160'>
          <div className='container flex flex-col gap80'>
            <div className='herotitle-w' data-aos="fade-in">
              <h1 className="heading-main2">Keyfire has established a robust compliance system</h1>
              <p className="heading-sub mt30 text-hub">Factory Audit Report: FCCA,Higg Index, BSCI,Sedex,BEPI,Ecoadis.
              Product Testing Certification: CE,REACH,CCRF,Intertek,ROHS,LFGB,UKCA,ISO14000,ISO9001.</p>
            </div>
            <div className="container flex flex-col items-center justify-center gap30">
              <div className='grid grid-cols-3 md:grid-cols-6 gap-5 items-center' data-aos="fade-in">
                <Image alt="Walmart FCCA factory audit report for Keyfire BBQ grill manufacturer" src="/images/logo/walmart.jpg" width={300} height={200}/>
                <Image alt="Higg Index audit for Keyfire BBQ grill factory sustainability performance" src="/images/logo/higg.jpg" width={300} height={200}/>
                <Image alt="BSCI social compliance audit for Keyfire BBQ grill manufacturer" src="/images/logo/bsci.jpg" width={300} height={200}/>
                <Image alt="Sedex membership for responsible BBQ grill supply chain" src="/images/logo/sedex.jpg" width={300} height={200}/>
                <Image alt="BEPI environmental performance program for Keyfire factory" src="/images/logo/bepi.jpg" width={300} height={200}/>
                <Image alt="Ecovadis rating for Keyfire BBQ grill manufacturer" src="/images/logo/eco.jpg" width={300} height={200}/>
              </div>
              <div className='grid grid-cols-6 md:grid-cols-9 gap-5 items-center' data-aos="fade-in" data-aos-delay="100">
                <Image alt="CE certification support for gas and electric BBQ grills" src="/images/logo/ce.jpg" width={200} height={200}/>
                <Image alt="REACH compliant materials for BBQ grill parts in EU markets" src="/images/logo/reach.jpg" width={200} height={200}/>
                <Image alt="CCRF testing for BBQ grill products" src="/images/logo/ccrf.jpg" width={200} height={200}/>
                <Image alt="Intertek tested BBQ grills for safety and performance" src="/images/logo/intertek.jpg" width={200} height={200}/>
                <Image alt="RoHS compliant electric BBQ grill components" src="/images/logo/rohs.jpg" width={200} height={200}/>
                <Image alt="LFGB food-contact certification for BBQ grill cooking surfaces" src="/images/logo/lfgb.jpg" width={200} height={200}/>
                <Image alt="UKCA marking support for BBQ grills sold in the UK" src="/images/logo/ukca.jpg" width={200} height={200}/>
                <Image alt="ISO 14000 environmental management certification for Keyfire factory" src="/images/logo/iso.jpg" width={200} height={200}/>
                <Image alt="ISO 9001 quality management certification for Keyfire BBQ grill manufacturer" src="/images/logo/iso9001.jpg" width={200} height={200}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterContact />
    </div>
  );
}
