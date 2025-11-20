import { getMetadataFromRankMath } from '@/lib/seoServer';
import { QuoteButtonPrimary} from '@/components/QuoteButton';
import Image from "next/image";
import {Factory,Aperture,Bell,Package,Cube,Flask } from '@/components/Icons';
import FooterContact from '@/components/FooterContact';
import GrillTabs from '@/components/GrillTabs';
import ProductAccessorySwitcher from '@/components/ProductAccessorySwitcher';
import YouTubeLite from '@/components/YouTubeLite';
import BlogListCSR from '@/components/BlogListCSR';
import { getbloglist } from '@/lib/wordpress';
import AOSWrapper from '@/components/AOSWrapper';
export const dynamic = 'force-static'
export const revalidate = 600

// 服务器端静态生成页面 Metadata
export async function generateMetadata() {
  const wpUrl = 'https://admin.keyfirebbq.com/home'
  return await getMetadataFromRankMath(wpUrl, {
    title: 'Keyo Customize | Custom BBQ Grill Manufacturer in China',
    description: 'Leading OEM & ODM BBQ grill manufacturer in China, providing custom charcoal, gas, and electric grills tailored for your brand and market.'
  })
}

// 移除服务端 SEO，改用客户端 SEO 组件

export default async function Home() {
  const perPage = 3
  const allPosts = await getbloglist()
  const initialPosts = Array.isArray(allPosts) ? allPosts.slice(0, perPage) : []
  const initialTotalPages = Array.isArray(allPosts) && allPosts.length > 0 ? Math.ceil(allPosts.length / perPage) : 1

  return (

    <div className="min-h-screen">
      {/* <SEO 
        wpUrl="https://admin.keyfirebbq.com/home" 
        fallbackTitle="Keyo Customize | Custom BBQ Grill Manufacturer in China" 
        fallbackDescription="Leading OEM & ODM BBQ grill manufacturer in China, providing custom charcoal, gas, and electric grills tailored for your brand and market."
      /> */}
      <AOSWrapper>
      <main className="section-1 bg-foreground">
        <div className="container flex-col md:flex-row items-center flex gap160">
          <div className="sm:w-[570px] md:w-1/2" data-aos="fade-right">
            <h1 className="heading-main">Your Trusted Custom BBQ Grill Manufacturer in China</h1>
            <div className="heading-sub mt30 text-hub">
              <p>
              Leading OEM & ODM BBQ grill manufacturer in China, providing custom charcoal, gas, and electric grills tailored for your brand and market.
            </p>
            </div>
            
            <div className="flex flex-col lg:flex-row  gap-5 mt50">
              <QuoteButtonPrimary className="group">
                <span className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                  <Bell size={20} className="group-hover:rotate-12 transition-transform duration-300"/>
                  Get a Free Quote
                </span>
              </QuoteButtonPrimary>
              <a href="/about" className="btn-secondary group">
                <span className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                  <Aperture size={20} className="group-hover:rotate-12 transition-transform duration-300"/>
                  Know More About Us
                </span>
              </a>
            </div>
            
          </div>
          <div className="sm:w-1/2 flex justify-end" data-aos="fade-left">
            <Image src="/images/home/index_banner3.jpg" alt="Keyo Customize" width={720} height={400} className="rounded-lg xl:rounded-tl-[100px] hover:scale-105 transition-transform duration-500 ease-out" loading="eager" priority/>
          </div>
        </div>
      </main>

      
      <section className="section-1">
        <div className='herotitle-w' data-aos="fade-in">
          <h2 className="heading-main2">Custom Your BBQ Grill</h2>
          <p className="heading-sub mt20 text-hub">
            Delivering high-quality, eco-friendly custom packaging with flexible designs and reliable manufacturing to help your brand stand out with confidence and sustainability.
          </p>
        </div>
        <div data-aos="fade-up"><GrillTabs /></div>
      </section>  

      <section className="section-1 bg-foreground flex flex-col">
        <div className='herotitle-w' data-aos="fade-in">
          <h2 className="heading-main2">Share your idea, we’ll make it real</h2>
          <p className="heading-sub mt20 text-hub">
            From concept to production, we turn your ideas into visual designs, structural plans, and manufacturing solutions. Each stage is clear, adjustable, and transparent — ensuring the final product perfectly matches your expectations.
          </p>
        </div>

          <div className="container grid md:grid-cols-2 xl:grid-cols-4 gap50">
            {/* Step 1 */}
            <div data-aos="fade-up" data-aos-delay="0" >
              <div className="step-item" >
                <Package size={64} weight="duotone" className="mx-auto transition-transform duration-300 ease-out group-hover:scale-105" />
                <h3 className="heading-main3">2D Drawing</h3>
                <p className="heading-sub">
                  Based on your ideas, we create detailed 2D drawings to clearly define dimensions, structure, and layout for easy confirmation.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="step-item">
                <Cube size={64} weight="duotone" className="mx-auto transition-transform duration-300 ease-out group-hover:scale-105" />
                <h3 className="heading-main3">3D Design</h3>
                <p className="heading-sub">
                  Transform the approved 2D drawings into realistic 3D models, showing appearance, materials, and functional details.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="step-item">
                <Flask size={64} weight="duotone" className="mx-auto transition-transform duration-300 ease-out group-hover:scale-105" />
                <h3 className="heading-main3">Modeling & Production</h3>
                <p className="heading-sub">
                  Build production-ready models and molds, preparing for efficient and precise manufacturing.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="step-item">
              <Factory size={64} weight="duotone" className="mx-auto transition-transform duration-300 ease-out group-hover:scale-105" />
                <h3 className="heading-main3">Sample Approval</h3>
                <p className="heading-sub">
                  Produce the final sample for your inspection, ensuring every detail meets your specifications before full-scale production.
                </p>
              </div>
            </div>
          </div>
          <div className='mt-15 xl:mt-30 text-center'><a href="/odmoem" className="btn-secondary">Explore Customization</a></div>
          
      </section>

      <section className="section-1">
        <div className='container flex-col md:flex-row items-center flex gap160'>
          <div className='w-full md:w-3/5' data-aos="zoom-in">
            <YouTubeLite
              embedUrl="https://www.youtube.com/embed/qCE2ZXcQSY0"
              title="China BBQ Grill Manufacturer and Supplier-KEYO automatic production line"
              poster="https://img.youtube.com/vi/NS7Ndh6BNpk/hqdefault.jpg"
            />
          </div>
          <div className='md:w-2/5 flex flex-col' data-aos="fade-left" data-aos-delay="100">
              <h2 className="heading-main2">Innovation That Shapes Your Brand</h2>
              <p className="heading-sub mt30 text-hub">
                Behind every custom BBQ grill is our relentless pursuit of innovation.
From intelligent design to precision manufacturing, we turn your ideas into market-ready products — with superior craftsmanship, reliable quality, and faster delivery.
              </p>
              <div className='mt50'><a href="/about" className="btn-secondary">Learn More</a></div>
          </div>
        </div>
      </section>
      
      <ProductAccessorySwitcher />

      <section className='section-1 relative isolate'>
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
      </section>

      <section className="section-1 bg-foreground">
        <div className='herotitle-w' data-aos="fade-in">
          <h2 className='heading-main2'>Frequently Asked Questions</h2>
          <p className="heading-sub mt30 text-hub">Below you can find some frequently asked questions regarding custom packaging and print. Please feel free to contact us if you have any other questions.</p>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2  gap80">
          <div className='flex flex-col gap30' data-aos="fade-up" data-aos-delay="0">
            <h3 className="heading-main3">Can I get samples before ordering?</h3>
            <p>Yes, we offer samples for all custom box orders. This allows you to verify the dimensions, structure, and print quality before proceeding with full production. To request a sample, don’t hesitate to get in touch with our team. We’ll be happy to assist you.</p>
          </div>
          <div className='flex flex-col gap30' data-aos="fade-up" data-aos-delay="100">
            <h3 className="heading-main3">What format should I send my artwork in?</h3>
            <p>Please send us your artwork in a dieline file (PDF or AI format) that is editable in Adobe Illustrator. Make sure the dieline is placed on a separate layer in your AI file, and follow our dieline design guidelines to ensure your file is ready for production.</p>
          </div>
          <div className='flex flex-col gap30' data-aos="fade-up" data-aos-delay="200">
            <h3 className="heading-main3">Can I customize the size, material, and design of the packaging?</h3>
            <p>Yes, every aspect of your packaging can be tailored to your brand’s needs. From structure, dimensions, and materials to finishes, coatings, and full-color printing, we work closely with you to bring your vision to life. Send us your packaging idea now.</p>
          </div>
          <div className='flex flex-col gap30' data-aos="fade-up" data-aos-delay="300">
            <h3 className="heading-main3">What is the minimum number of packages I can order?</h3>
            <p>Our MOQs are flexible and designed to support both startups and growing brands. For most packaging types, the MOQ starts at just 500 units. Regardless of the quantity you need, we’ll do our best to support you. Contact us to discuss your project and get a quote now.</p>
          </div>
          <div className='flex flex-col gap30' data-aos="fade-up" data-aos-delay="400">
            <h3 className="heading-main3">What’s the typical lead time for custom packaging?</h3>
            <p>Once your artwork is confirmed, standard production takes 10–15 business days. Shipping times vary by region, but we’ll always provide a clear timeline upfront. Urgent deadline? Let us know — we often accommodate rush orders.</p>
          </div>
          <div className='flex flex-col gap30' data-aos="fade-up" data-aos-delay="500">
            <h3 className="heading-main3">Do you offer eco-friendly or recyclable packaging options?</h3>
            <p>Absolutely. We offer sustainable materials, including recycled paperboard, FSC-certified kraft, soy-based inks, and biodegradable coatings. Whether you’re a clean beauty or DTC brand, we help align your packaging with your sustainability goals.</p>
          </div>
        </div>
        <div className='mt50 text-center'><a href="/faq" className="btn-secondary">Learn More</a></div>
      </section>

      <section className="section-1">
        <div className='herotitle-w'>
          <h2 className='heading-main2'>Custom BBQ Solutions</h2>
          <p className="heading-sub mt30 text-hub">From material selection to full-scale manufacturing, we share knowledge that helps you choose the right BBQ supplier and achieve high-quality custom grill production for your market.</p>
        </div>

          <BlogListCSR initialPosts={initialPosts} perPage={perPage} initialTotalPages={initialTotalPages} />

        <div className='mt50 text-center'><a href="/blog" className="btn-secondary">Learn More</a></div>
      </section>

       <FooterContact />
      </AOSWrapper>
    </div>

  );
}
