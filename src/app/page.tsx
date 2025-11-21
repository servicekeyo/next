import { getMetadataFromRankMath } from '@/lib/seoServer';
import { QuoteButtonPrimary} from '@/components/QuoteButton';
import Image from "next/image";
import {Factory,Aperture,Bell,Palette  ,Cube,Flask } from '@/components/Icons';
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
    title: 'Keyfire Customize | Custom BBQ Grill Manufacturer in China',
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
      <AOSWrapper>
      <main className="section-1 bg-foreground">
        <div className="container flex-col md:flex-row items-center flex gap160">
          <div className="sm:w-[570px] md:w-1/2" data-aos="fade-right">
            <h1 className="heading-main">Your Trusted Custom BBQ Grill Manufacturer in China</h1>
            <div className="heading-sub mt30 text-hub">
              <p>
              Partner with a trusted <strong>custom BBQ grill manufacturer</strong> in China. 
  We specialize in <strong>OEM and ODM services</strong> for gas grills, charcoal grills, 
  and electric grills - all tailored to your brand positioning and target market. 
  With 15+ years of manufacturing experience and CE certifications, we've helped over 
  500 brands launch their custom grill products across 50+ countries.
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
                  earn About Our Factory
                </span>
              </a>
            </div>
            
          </div>
          <div className="sm:w-1/2 flex justify-end" data-aos="fade-left">
            <Image src="/images/home/index_banner3.jpg" alt="Custom BBQ grill manufacturing factory - Keyfire China OEM ODM service" title="Professional BBQ Grill Manufacturer" width={720} height={400} className="rounded-lg xl:rounded-tl-[100px] hover:scale-105 transition-transform duration-500 ease-out" loading="eager" priority/>
          </div>
        </div>
      </main>

      
      <section className="section-1">
        <div className='herotitle-w' data-aos="fade-in">
          <h2 className="heading-main2">Custom BBQ Grill Manufacturing Solutions</h2>
          <p className="heading-sub mt20 text-hub">
            Your brand deserves BBQ grills that stand out. As a specialized <strong>BBQ grill manufacturer</strong>, 
  we offer complete <strong>custom manufacturing</strong> for charcoal, gas, electric, kettle grills, 
  and smokers. Whether you need <strong>OEM manufacturing</strong> based on your designs or full 
  <strong>ODM development</strong> from concept to production, our Foshan factory handles every detail - 
  from material selection and branding integration to quality control and global shipping.
          </p>
        </div>
        <div data-aos="fade-up"><GrillTabs /></div>
      </section>  

      <section className="section-1 bg-foreground flex flex-col">
        <div className='herotitle-w' data-aos="fade-in">
          <h2 className="heading-main2">Custom BBQ Grill Development Process</h2>
          <p className="heading-sub mt20 text-hub">
            From your initial concept to finished <strong>custom BBQ grills</strong> ready for market, 
  our proven development process ensures transparency at every stage. Whether you're launching 
  a new brand or expanding your product line, our <strong>OEM and ODM manufacturing</strong> 
  process turns your vision into reality - with adjustments welcomed throughout the journey.
          </p>
        </div>

          <div className="container grid md:grid-cols-2 xl:grid-cols-4 gap50">
            {/* Step 1 */}
            <div data-aos="fade-up" data-aos-delay="0" >
              <div className="step-item" >
                <Palette  size={64} alt="2D technical drawing for custom BBQ grill" weight="duotone" className="mx-auto transition-transform duration-300 ease-out group-hover:scale-105" />
                <h3 className="heading-main3">2D Drawing</h3>
                <p className="heading-sub mt20">
                  Based on your ideas, we create detailed 2D drawings to clearly define dimensions, structure, and layout for easy confirmation.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="step-item">
                <Cube size={64} weight="duotone" alt="3D rendering of custom BBQ grill design" className="mx-auto transition-transform duration-300 ease-out group-hover:scale-105" />
                <h3 className="heading-main3">3D Design</h3>
                <p className="heading-sub mt20">
                  Transform the approved 2D drawings into realistic 3D models, showing appearance, materials, and functional details.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="step-item">
                <Flask size={64} weight="duotone" alt="BBQ grill manufacturing and production preparation" className="mx-auto transition-transform duration-300 ease-out group-hover:scale-105" />
                <h3 className="heading-main3">Modeling & Production</h3>
                <p className="heading-sub mt20">
                  Build production-ready models and molds, preparing for efficient and precise manufacturing.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="step-item">
              <Factory size={64} weight="duotone" alt="BBQ grill sample testing and approval process" className="mx-auto transition-transform duration-300 ease-out group-hover:scale-105" />
                <h3 className="heading-main3"> Sample Approval</h3>
                <p className="heading-sub mt20">
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
              title="China BBQ Grill Manufacturer and Supplier-Keyfire automatic production line"
              poster="https://img.youtube.com/vi/NS7Ndh6BNpk/hqdefault.jpg"
            />
          </div>
          <div className='md:w-2/5 flex flex-col' data-aos="fade-left" data-aos-delay="100">
              <h2 className="heading-main2">Manufacturing Excellence for Your BBQ Brand</h2>
              <p className="heading-sub mt20 text-hub">
                Building a successful BBQ brand requires more than good designs - it demands manufacturing 
  expertise that consistently delivers quality. As a specialized <strong>BBQ grill manufacturer</strong>, 
  we've invested in advanced equipment, skilled craftsmen, and proven processes that turn your 
  brand vision into products customers love. Our <strong>custom manufacturing capabilities</strong> 
  include stainless steel fabrication, precision welding, powder coating, and comprehensive 
  quality control - all under one roof at our Foshan facility.
              </p>
              <div className='mt30'><a href="/about" className="btn-secondary">Learn More</a></div>
          </div>
        </div>
      </section>
      
      <ProductAccessorySwitcher />

      <section className='section-1 relative isolate'>
        <div className='herotitle-w' data-aos="fade-in">
            <h2 className="heading-main2">Certifications & Quality Standards for Global Markets</h2>
            <p className="heading-sub mt30 text-hub">FCCA, Higg Index, BSCI, SEDEX, BEPI, Ecovadis - validating ethical manufacturing and 
    environmental responsibility.</p>
            <p className="heading-sub text-hub">CE, REACH, ROHS, LFGB, UKCA, ISO 9001, ISO 14000, Intertek - ensuring your 
    <strong>custom BBQ grills</strong> meet international safety and quality standards for 
    key export markets.
            </p>
        </div>
        <div className="container flex flex-col items-center justify-center gap30">
          <div className='grid grid-cols-3 md:grid-cols-6 gap-5 items-center' data-aos="fade-in">
            <Image src="/images/logo/walmart.jpg" alt="Walmart FCCA factory audit certification - Keyfire BBQ manufacturer" title="FCCA Certification" width={300} height={200}/>
            <Image src="/images/logo/higg.jpg" alt="Higg Index sustainability certification for BBQ grill factory" title="Higg Index Certification" width={300} height={200}/>
            <Image src="/images/logo/bsci.jpg" alt="BSCI social compliance audit - ethical BBQ grill manufacturing" title="BSCI Audit Certificate" width={300} height={200}/>
            <Image src="/images/logo/sedex.jpg" alt="SEDEX member - responsible BBQ grill supplier" title="SEDEX Certification" width={300} height={200}/>
            <Image src="/images/logo/bepi.jpg" alt="BEPI audit certificate - Keyfire BBQ factory" title="BEPI Certified Manufacturer" width={300} height={200}/>
            <Image src="/images/logo/eco.jpg" alt="Ecovadis sustainability rating for BBQ grill manufacturer" title="Ecovadis Certified" width={300} height={200}/>
          </div>
          <div className='grid grid-cols-6 md:grid-cols-9 gap-5 items-center' data-aos="fade-in" data-aos-delay="100">
            <Image src="/images/logo/ce.jpg" alt="CE marking for BBQ grills - European safety compliance" title="CE Certified BBQ Grills" width={200} height={200}/>
            <Image src="/images/logo/reach.jpg" alt="REACH compliance for BBQ grill materials - EU chemical regulation" title="REACH Compliant" width={200} height={200}/>
            <Image src="/images/logo/ccrf.jpg" alt="CCRF certification for BBQ grill manufacturer" title="CCRF Certified" width={200} height={200}/>
            <Image src="/images/logo/intertek.jpg" alt="Intertek tested BBQ grills - quality assurance" title="Intertek Testing" width={200} height={200}/>
            <Image src="/images/logo/rohs.jpg" alt="RoHS compliant electric BBQ grills - no hazardous substances" title="RoHS Certification" width={200} height={200}/>
            <Image src="/images/logo/lfgb.jpg" alt="LFGB food safe certification for BBQ grill cooking surfaces" title="LFGB Food Safe" width={200} height={200}/>
            <Image src="/images/logo/ukca.jpg" alt="UKCA marking for BBQ grills sold in UK market" title="UKCA Certified" width={200} height={200}/>
            <Image src="/images/logo/iso.jpg" alt="ISO 14000 environmental management - BBQ grill factory" title="ISO 14000 Certified" width={200} height={200}/>
            <Image src="/images/logo/iso9001.jpg" alt="ISO 9001 quality management system - custom BBQ grill manufacturer" title="ISO 9001 Certification" width={200} height={200}/>
          </div>
        </div>
      </section>

      <section className="section-1 bg-foreground">
        <div className='herotitle-w' data-aos="fade-in">
          <h2 className='heading-main2'>Frequently Asked Questions</h2>
          <p className="heading-sub mt30 text-hub">
            Common questions from brands and distributors about our <strong>custom BBQ grill manufacturing</strong>, 
  <strong>OEM/ODM services</strong>, and ordering process. Can't find your answer? Contact our team directly.
          </p>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2  gap80">
          <div className='flex flex-col gap30' data-aos="fade-up" data-aos-delay="0">
            <h3 className="heading-main3">What is your minimum order quantity for custom BBQ grills?</h3>
            <p>For standard <strong>OEM BBQ grill manufacturing</strong> with your branding, our MOQ starts 
    at 50 units per model. Completely new designs requiring custom tooling typically need 100-200 
    units to make production economical. If you're testing a market with smaller volumes, we can 
    discuss sample order options starting from 20 units, though per-unit costs will be higher.</p>
          </div>
          <div className='flex flex-col gap30' data-aos="fade-up" data-aos-delay="100">
            <h3 className="heading-main3">Do you offer both OEM and ODM services for BBQ grills?</h3>
            <p>Yes, we provide complete flexibility. <strong>OEM manufacturing</strong> means you provide 
    designs and specifications - we manufacture exactly what you've engineered. <strong>ODM service</strong> 
    means you share your requirements and target market, and our team designs the <strong>custom BBQ grill</strong> 
    for you. Most clients fall somewhere in between, collaborating with our engineers to optimize 
    designs for manufacturability and market fit.</p>
          </div>
          <div className='flex flex-col gap30' data-aos="fade-up" data-aos-delay="200">
            <h3 className="heading-main3">What types of BBQ grills can you manufacture?</h3>
            <p>Our <strong>BBQ grill factory</strong> produces the complete range: gas grills (propane and 
    natural gas), charcoal grills (including kamado styles), electric grills, kettle grills, 
    smokers (offset and vertical), and specialty designs like barrel grills. We handle everything 
    from compact portable models to large commercial units. If you have a unique design concept, 
    our engineering team can evaluate feasibility.</p>
          </div>
          <div className='flex flex-col gap30' data-aos="fade-up" data-aos-delay="300">
            <h3 className="heading-main3">How long does the custom BBQ grill development process take?</h3>
            <p>For first-time orders, expect 60-90 days total: design and engineering (1-2 weeks), prototype 
    manufacturing (2-3 weeks), your review and approval (timeline varies), mass production (3-5 weeks), 
    and shipping (1-4 weeks depending on destination). Repeat orders are faster since design work 
    is complete - typically 4-6 weeks from order to shipment.</p>
          </div>
          <div className='flex flex-col gap30' data-aos="fade-up" data-aos-delay="400">
            <h3 className="heading-main3">Can I customize the branding, colors, and components?</h3>
            <p>Absolutely - that's what <strong>custom BBQ grill manufacturing</strong> means. You can customize 
    logo placement (laser engraving or metal badges), powder coat colors to match your brand, 
    swap components like lids and side tables, choose materials and finishes, and design custom 
    packaging. We work with your brand guidelines to ensure the final product perfectly represents 
    your positioning.</p>
          </div>
          <div className='flex flex-col gap30' data-aos="fade-up" data-aos-delay="500">
            <h3 className="heading-main3">What certifications do your BBQ grills include?</h3>
            <p>All our <strong>BBQ grills</strong> can be certified to meet requirements for your target markets. 
    Standard certifications include CE marking (European markets), REACH compliance, RoHS (for 
    electric components), and LFGB (food safety). Our factory also holds ISO 9001, BSCI, and SEDEX 
    certifications. Additional certifications like UL (USA) or CSA (Canada) can be arranged with 
    slightly longer timelines.</p>
          </div>
        </div>
        <div className='mt50 text-center'><a href="/faq" className="btn-secondary">Learn More</a></div>
      </section>

      <section className="section-1">
        <div className='herotitle-w'>
          <h2 className='heading-main2'>BBQ Grill Manufacturing Insights & Industry Knowledge</h2>
          <p className="heading-sub mt30 text-hub">
            Expert insights from our <strong>BBQ grill manufacturing</strong> team. Learn about material 
  selection, design trends, compliance requirements, and what makes quality <strong>custom BBQ grills</strong> 
  that your customers will love. We share real manufacturing knowledge to help you make informed 
  decisions for your brand.
          </p>
        </div>

          <BlogListCSR initialPosts={initialPosts} perPage={perPage} initialTotalPages={initialTotalPages} />

        <div className='mt50 text-center'><a href="/blog" className="btn-secondary">Learn More</a></div>
      </section>

       <FooterContact />
      </AOSWrapper>
    </div>

  );
}
