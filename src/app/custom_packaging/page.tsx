// (removed "use client" to enable server-side generateMetadata)


import FooterContact from '@/components/FooterContact';
import Image from 'next/image';
import { getMetadataFromRankMath } from '@/lib/seoServer';

export const dynamic = 'force-static'
export const revalidate = 600

// 服务器端静态生成页面 Metadata
export async function generateMetadata() {
  const wpUrl = 'https://admin.keyfirebbq.com/custom_packaging'
  return await getMetadataFromRankMath(wpUrl, {
    title: 'Custom Packaging Services - BBQ Grill Packaging Solutions | Keyo Customize',
    description: 'Professional custom packaging services for BBQ grills. Branded packaging solutions with your logo, design, and specifications. OEM/ODM packaging available.'
  })
}

export default function CustomPackagingPage() {

  return (
    <div className="min-h-screen">
      {/*
      <SEO 
        wpUrl="https://admin.keyfirebbq.com/custom_packaging"
        fallbackTitle="Custom Packaging Services - BBQ Grill Packaging Solutions | Keyo Customize"
        fallbackDescription="Professional custom packaging services for BBQ grills. Branded packaging solutions with your logo, design, and specifications. OEM/ODM packaging available."
      />
      */}
      {/* Hero Section */}
      
      <section className="section-1 relative isolate -z-10">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-80 xl:h-110 w-full mask-[radial-gradient(70rem_70rem_at_center,white,transparent)] stroke-gray-200"
            data-aos="fade-in"
            data-aos-duration="1000"
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
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <svg x="100%" y={0} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
          </svg>
        <div className='w-4/5 xl:w-3/5 mx-auto text-center' data-aos="fade-up" data-aos-duration="800">
          <h1 className="heading-main" data-aos="fade-up" data-aos-delay="200">Custom Packaging Solutions</h1>
          <p className="heading-sub mt30 text-hub" data-aos="fade-up" data-aos-delay="400">As a professional OEM/ODM charcoal grill manufacturer, we provide complete custom packaging solutions designed to strengthen your brand identity, optimize retail presentation, and ensure safe international shipping.</p>
        </div>
      </section>

      <section className="section-3">
        <div className="container flex flex-col gap160" data-aos="fade-up" data-aos-duration="800">

          {/* Step 1 */}
          <div className="flex flex-col-reverse md:flex-row gap160">
            <div className="md:w-1/2" data-aos="fade-right"><Image className='rounded-xl box-shadow-xl' src="/images/packaging/baozhuang.jpg" alt="odmoem" width={720} height={500} /></div>
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
              <h2 className="heading-main3 my-5">Custom Color Box Packaging</h2>
              <p className="heading-sub text-hub ">Perfect for retail and e-commerce sales, our custom color boxes enhance your brand presence and communicate key product features clearly:</p>
              <ul className='mt30 text list-inside list-disc'>
                <li>Full-color CMYK printing</li>
                <li>UV varnish, matte or glossy finish</li>
                <li>Custom layout and brand guidelines</li>
                <li>Optimized box structure for heavy charcoal grills</li>
              </ul>
              <p className="heading-sub mt30 text-hub">This type of packaging improves shelf appeal and increases conversion in online listings.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row justify-between gap160">
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-right">
              <h2 className="heading-main3 my-5">Custom Carton Boxes for Export Shipping</h2>
              <p className="heading-sub text-hub ">We engineer export-grade carton boxes that provide maximum protection during international transport.</p>
              <ul className='mt30 text list-inside list-disc'>
                <li>3-ply / 5-ply / 7-ply corrugated cardboard</li>
                <li>Heavy-duty reinforced structure</li>
                <li>Moisture-resistant coating</li>
                <li>Custom carton marks, model numbers, and pallet specs</li>
              </ul>
              <p className="heading-sub mt30 text-hub">Ideal for sea freight, air freight, and mixed logistics.</p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left"><Image className='rounded-xl box-shadow-xl' src="/images/packaging/hezi.jpg" alt="odmoem" width={720} height={500} /></div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col-reverse md:flex-row gap160">
            <div className="md:w-1/2" data-aos="fade-right"><Image className='rounded-xl box-shadow-xl' src="/images/packaging/shouce.jpg" alt="odmoem" width={720} height={500} /></div>
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
              <h2 className="heading-main3 my-5">Custom Installation Manual</h2>
              <p className="heading-sub text-hub ">We create detailed and fully branded installation manuals tailored to your charcoal grill model.
Our manuals support multilingual layouts (EN/DE/FR/ES, etc.) and include:</p>
              <ul className='mt30 text list-inside list-disc'>
                <li>Exploded structure diagrams</li>
                <li>Step-by-step assembly instructions</li>
                <li>Safety and maintenance guidelines</li>
                <li>QR codes or video installation links</li>
              </ul>
              <p className="heading-sub mt30 text-hub">This reduces end-user confusion, lowers after-sales issues, and aligns with EU/US documentation requirements.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row justify-between gap160">
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-right">
              <h2 className="heading-main3 my-5">Custom Product Labels</h2>
              <p className="heading-sub text-hub ">We produce high-quality, durable custom labels for charcoal grills and outdoor cooking products. Available options include:</p>
              <ul className='mt30 text list-inside list-disc'>
                <li>Logo branding labels</li>
                <li>Safety warning labels</li>
                <li>Material and specification labels</li>
                <li>Barcode / UPC / EAN codes</li>
                <li>Compliance marks (RoHS, CE, etc.)</li>
              </ul>
              <p className="heading-sub mt30 text-hub">Labels can be waterproof, UV-resistant, or heat-resistant—ideal for outdoor grill environments.</p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left"><Image className='rounded-xl box-shadow-xl' src="/images/packaging/biaoqian.jpg" alt="odmoem" width={720} height={500} /></div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col-reverse md:flex-row gap160">
            <div className="md:w-1/2" data-aos="fade-right"><Image className='rounded-xl box-shadow-xl' src="/images/packaging/peijian.jpg" alt="odmoem" width={720} height={500} /></div>
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
              <h2 className="heading-main3 my-5">Full Accessory Set Packaging</h2>
              <p className="heading-sub text-hub ">To ensure every charcoal grill arrives complete, we provide full accessory packaging, including:</p>
              <ul className='mt30 text list-inside list-disc'>
                <li>Hardware kits packed by category</li>
                <li>Screws and fasteners labeled individually</li>
                <li>Grates, ash pans, and heat plates with protective layers</li>
                <li>Accessory sets arranged for faster assembly</li>
              </ul>
              <p className="heading-sub mt30 text-hub">This reduces missing-part issues and improves the customer’s installation experience.</p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex flex-col md:flex-row justify-between gap160">
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-right">
              <h2 className="heading-main3 my-5">Anti-Drop & Surface Protection Packaging</h2>
              <p className="heading-sub text-hub ">We implement strict protective packaging to prevent damage during long-distance shipping:</p>
              <ul className='mt30 text list-inside list-disc'>
                <li>Anti-scratch protective film</li>
                <li>Foam boards / EPE cushioning</li>
                <li>Corner protectors for metal parts</li>
                <li>ISTA-standard drop-test compliant packaging</li>
              </ul>
              <p className="heading-sub mt30 text-hub">Your charcoal grills arrive in perfect condition with no dents, scratches, or coating damage.</p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left"><Image className='rounded-xl box-shadow-xl' src="/images/packaging/hezi2.jpg" alt="odmoem" width={720} height={500} /></div>
          </div>
          
        </div>
      </section>
      <FooterContact />

     </div>
  );
}