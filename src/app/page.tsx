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
            <p className="heading-sub mt30 text-hub">
              Partner with Keyfire, a custom BBQ grill manufacturer and factory based in Foshan, China. We focus on OEM and ODM production for gas grills, charcoal grills and electric grills, all tailored to your price level, sales channels and local safety standards. With more than 15 years of manufacturing and export experience, plus CE and related certifications, we have supported over 500 brands, importers and retailers to build their own BBQ grill ranges in 50+ countries.
            </p>
            
            <div className="flex flex-col lg:flex-row  gap-5 mt30">
              <QuoteButtonPrimary className="group">
                <span className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                  <Bell size={20} className="group-hover:rotate-12 transition-transform duration-300"/>
                  Get a Free Quote
                </span>
              </QuoteButtonPrimary>
              <a href="/about" className="btn-secondary group">
                <span className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                  <Aperture size={20} className="group-hover:rotate-12 transition-transform duration-300"/>
                  Learn About Our Factory
                </span>
              </a>
            </div>
            
          </div>
          <div className="sm:w-1/2 flex justify-end" data-aos="fade-left">
            <Image src="/images/home/index_banner3.jpg" alt="Keyfire custom BBQ grill factory in Foshan, China providing OEM and ODM services" title="Custom BBQ Grill Manufacturer in China – Keyfire" width={720} height={400} className="rounded-lg xl:rounded-tl-[100px] hover:scale-105 transition-transform duration-500 ease-out" loading="eager" priority/>
          </div>
        </div>
      </main>

      
      <section className="section-1">
        <div className='herotitle-w' data-aos="fade-in">
          <h2 className="heading-main2">Custom BBQ Grill Manufacturing Solutions</h2>
          <p className="heading-sub mt20 text-hub">
            Every market has different expectations on price, style and performance. As a specialized BBQ grill manufacturer in China, Keyfire offers full custom manufacturing for charcoal grills, gas grills, electric grills, kettle grills and smokers. You can choose pure OEM production based on your own drawings, or work with us on ODM development from initial brief to mass production. Our Foshan BBQ grill factory controls material sourcing, tooling, branding details, packaging and final inspection, then arranges export to your warehouse or appointed forwarder.
          </p>
        </div>
        <div data-aos="fade-up"><GrillTabs /></div>
      </section>  

      <section className="section-1 bg-foreground flex flex-col">
        <div className='herotitle-w' data-aos="fade-in">
          <h2 className="heading-main2">Custom BBQ Grill Development Process</h2>
          <p className="heading-sub mt20 text-hub">
            From your first idea to finished custom BBQ grills packed on pallets, we follow a clear development process so you always know what is happening. This flow works for both new brands and established BBQ programs and helps keep design, costing and timing under control.
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
          <div className='w-full md:w-1/2' data-aos="zoom-in">
            <YouTubeLite
              embedUrl="https://www.youtube.com/embed/qCE2ZXcQSY0"
              title="China BBQ Grill Manufacturer and Supplier-Keyfire automatic production line"
              poster="https://img.youtube.com/vi/NS7Ndh6BNpk/hqdefault.jpg"
            />
          </div>
          <div className='md:w-1/2 flex flex-col' data-aos="fade-left" data-aos-delay="100">
              <h2 className="heading-main2">Manufacturing Excellence for Your BBQ Brand</h2>
              <p className="heading-sub mt20 text-hub">
                A successful BBQ range needs more than a nice brochure. It depends on a factory that understands outdoor products, seasonal demand and strict quality control. Keyfire is a dedicated BBQ grill manufacturer with laser cutting, stamping, automatic welding, powder-coating lines and trained assembly teams in Foshan. Our custom manufacturing capabilities cover stainless steel and coated steel fabrication, precise welding, surface treatment, final packing and function testing, helping brands, importers and retail chains reduce complaints and build repeat business.
              </p>
              <div className='mt30'><a href="/about" className="btn-secondary">Learn More</a></div>
          </div>
        </div>
      </section>
      
      <ProductAccessorySwitcher />

      <section className='section-1 relative isolate'>
        <div className='herotitle-w' data-aos="fade-in">
            <h2 className="heading-main2">Certifications & Quality Standards for Global Markets</h2>
            <p className="heading-sub mt30 text-hub">Our factory has passed FCCA, Higg Index, BSCI, SEDEX, BEPI and Ecovadis audits, giving you a socially compliant and environmentally responsible BBQ grill supplier that meets the requirements of major retailers and international brands.</p>
            <p className="heading-sub text-hub">
              For product-level compliance, we can support CE, REACH, RoHS, LFGB, UKCA, ISO 9001, ISO 14000 and Intertek testing. This helps your custom BBQ grills enter key export markets such as Europe, the UK and the Middle East with the right documentation in place.
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
            Here are some of the questions we often receive from brands, importers and distributors about our custom BBQ grill manufacturing, OEM/ODM services and ordering process. If you need more details, our sales team can walk you through each step.
          </p>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2  gap80">
          <div className='flex flex-col gap30' data-aos="fade-up" data-aos-delay="0">
            <h3 className="heading-main3">What is your minimum order quantity for custom BBQ grills?</h3>
            <p>
              For standard OEM BBQ grills with your logo and packaging, our usual MOQ starts from 500 units per model. New designs that need fresh tooling are normally more cost-effective from 100–200 units and above, depending on how complex the structure is. If you want to test a new market or channel, we can look at a smaller pilot order, with a higher unit price and a limited set of options.
            </p>
          </div>
          <div className='flex flex-col gap30' data-aos="fade-up" data-aos-delay="100">
            <h3 className="heading-main3">Do you offer both OEM and ODM services for BBQ grills?</h3>
            <p>
              Yes. With OEM, you provide drawings, specifications and branding files and we follow your design closely. With ODM, you share your target market, price level and feature list, and our engineers propose a custom BBQ grill solution for your brand. Many customers start from one of our existing platforms and then adjust materials, features and appearance together with our team.
            </p>
          </div>
          <div className='flex flex-col gap30' data-aos="fade-up" data-aos-delay="200">
            <h3 className="heading-main3">What types of BBQ grills can you manufacture?</h3>
            <p>
              Our BBQ grill factory covers gas grills (LPG and natural gas), charcoal grills, kettle grills, smokers (offset and vertical), electric grills and related outdoor cooking products such as fire pits and pizza ovens. We produce compact portable units for e-commerce as well as larger models for supermarkets and DIY chains. If you have a special idea, our engineers can check feasibility and suggest changes where needed.
            </p>
          </div>
          <div className='flex flex-col gap30' data-aos="fade-up" data-aos-delay="300">
            <h3 className="heading-main3">How long does the custom BBQ grill development process take?</h3>
            <p>
              For a completely new model, you should plan roughly 60 days from project start to goods ready for shipment. As a reference, 7 days are used for design and drawing confirmation, 2–3 weeks for prototype and sample, time on your side for review, and around 3–5 weeks for mass production after everything is approved. Shipping time depends on destination port and route. Repeat orders are faster because design and tooling are already prepared.
            </p>
          </div>
          <div className='flex flex-col gap30' data-aos="fade-up" data-aos-delay="400">
            <h3 className="heading-main3">Can I customize the branding, colors and components?</h3>
            <p>
              Yes. Branding is one of the main reasons customers choose a custom BBQ grill factory instead of buying stock items. You can define logo position and method, powder-coat colors, lid style, side tables, wheels, thermometers, handle shapes and other details. We also help with artwork for manuals, color boxes and master cartons when needed, so your range looks consistent from packaging to the grill itself.
            </p>
          </div>
          <div className='flex flex-col gap30' data-aos="fade-up" data-aos-delay="500">
            <h3 className="heading-main3">What certifications do your BBQ grills include?</h3>
            <p>
              We design and build BBQ grills according to the rules of your target markets. Common requirements include CE for Europe, REACH and RoHS for materials and electronic parts, and LFGB for food-contact components. Our factory also holds ISO 9001 and social audits such as BSCI and SEDEX. If you need UL, CSA or other local approvals, we can work with testing labs and plan this into the project timing.
            </p>
          </div>
        </div>
        <div className='mt50 text-center'><a href="/faq" className="btn-secondary">Learn More</a></div>
      </section>

      <section className="section-1">
        <div className='herotitle-w'>
          <h2 className='heading-main2'>BBQ Grill Manufacturing Insights & Industry Knowledge</h2>
          <p className="heading-sub mt30 text-hub">
            Short notes and articles from our BBQ grill manufacturing team to support your product planning. Topics include materials, design trends, safety and certification updates and practical details that affect cost and lead time. The goal is to give brands, importers and designers a clearer view of what is happening inside a real BBQ grill factory in China.
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
