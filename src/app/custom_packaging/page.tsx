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
          <h1 className="heading-main" data-aos="fade-up" data-aos-delay="200">Custom Packaging Solutions for BBQ Grills</h1>
          <p className="heading-sub mt30 text-hub" data-aos="fade-up" data-aos-delay="400">
            Your <strong>custom BBQ grill</strong> deserves packaging that matches its quality. 
  As a professional <strong>OEM/ODM BBQ grill manufacturer</strong>, Keyfire provides 
  complete <strong>custom packaging solutions</strong> designed to strengthen your brand 
  identity, optimize retail presentation, and ensure safe international shipping. From 
  eye-catching color boxes to heavy-duty export cartons, we handle every detail so your 
  <strong>charcoal grills</strong>, <strong>gas grills</strong>, and outdoor cooking 
  products arrive in perfect condition while looking their best on shelves.
          </p>
        </div>
      </section>

      <section className="section-3">
        <div className="container flex flex-col gap160" data-aos="fade-up" data-aos-duration="800">

          {/* Step 1 */}
          <div className="flex flex-col-reverse md:flex-row gap160">
            <div className="md:w-1/2" data-aos="fade-right"><Image className='rounded-xl box-shadow-xl' src="/images/packaging/baozhuang.jpg" alt="Custom color box packaging for BBQ grills - retail ready design with brand printing" title="BBQ Grill Color Box Packaging - Keyfire OEM Service" width={720} height={500} /></div>
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
              <h2 className="heading-main3 my-5">Custom Color Box Packaging for BBQ Grills</h2>
              <p className="heading-sub text-hub ">Make your <strong>BBQ grill brand</strong> stand out on retail shelves and online 
  marketplaces. Our <strong>custom color box packaging</strong> transforms your 
  <strong>charcoal grills</strong>, <strong>gas grills</strong>, and outdoor cooking 
  products into visually compelling purchases that communicate quality and professionalism:</p>
              <ul className='mt30 text list-inside list-disc'>
                <li>Full-color CMYK printing with your BBQ brand design</li>
                <li>UV varnish, matte or glossy finish options</li>
                <li>Custom layout following your brand guidelines</li>
                <li>Reinforced box structure for heavy charcoal and gas grills</li>
              </ul>
              <p className="heading-sub mt30 text-hub">Professional <strong>BBQ grill packaging</strong> improves shelf appeal, increases 
  conversion rates in online listings, and builds customer confidence in your 
  <strong>outdoor cooking brand</strong>. Perfect for Amazon, Home Depot, and retail 
  store distribution.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row justify-between gap160">
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-right">
              <h2 className="heading-main3 my-5">Export-Grade Carton Boxes for BBQ Grill Shipping</h2>
              <p className="heading-sub text-hub ">
                Shipping <strong>BBQ grills</strong> internationally requires packaging that survives 
  rough handling across oceans. Our engineering team designs <strong>export-grade carton 
  boxes</strong> specifically for heavy <strong>charcoal grills</strong>, 
  <strong>gas grills</strong>, and outdoor cooking equipment - providing maximum protection 
  during sea freight, air cargo, and cross-border logistics.
              </p>
              <ul className='mt30 text list-inside list-disc'>
                <li>3-ply / 5-ply / 7-ply corrugated cardboard for different grill weights</li>
                <li>Heavy-duty reinforced structure for charcoal and gas grills</li>
                <li>Moisture-resistant coating for ocean freight protection</li>
                <li>Custom carton marks, model numbers, and pallet specifications</li>
              </ul>
              <p className="heading-sub mt30 text-hub">
                Our <strong>BBQ grill export packaging</strong> meets international shipping standards 
  and is ideal for sea freight, air freight, and mixed logistics to Europe, North America, 
  Australia, and worldwide markets. We handle large volume <strong>wholesale BBQ grill</strong> 
  shipments daily.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left"><Image className='rounded-xl box-shadow-xl' src="/images/packaging/hezi.jpg" alt="Heavy-duty export carton boxes for BBQ grill international shipping - 5-ply corrugated packaging"  title="BBQ Grill Export Carton - Keyfire Packaging" width={720} height={500} /></div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col-reverse md:flex-row gap160">
            <div className="md:w-1/2" data-aos="fade-right"><Image className='rounded-xl box-shadow-xl' src="/images/packaging/shouce.jpg" alt="Custom BBQ grill installation manual with exploded diagrams and multilingual instructions"  title="BBQ Grill Assembly Manual - Keyfire Design Service" width={720} height={500} /></div>
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
              <h2 className="heading-main3 my-5">Custom BBQ Grill Installation Manual Design</h2>
              <p className="heading-sub text-hub ">
                A clear installation manual reduces customer frustration and after-sales support costs. 
  Our design team creates detailed, fully branded <strong>BBQ grill assembly guides</strong> 
  tailored to your specific <strong>charcoal grill</strong>, <strong>gas grill</strong>, 
  or <strong>smoker</strong> model. All manuals support multilingual layouts (EN/DE/FR/ES/IT) 
  for global markets and include:
              </p>
              <ul className='mt30 text list-inside list-disc'>
                <li>Exploded structure diagrams showing all grill components</li>
                <li>Step-by-step assembly instructions with numbered parts</li>
                <li>Safety warnings and maintenance guidelines for BBQ grills</li>
                <li>QR codes linking to video assembly tutorials</li>
              </ul>
              <p className="heading-sub mt30 text-hub">
                Professional <strong>BBQ grill documentation</strong> reduces end-user confusion, 
  lowers after-sales support tickets, and ensures compliance with EU/US product 
  documentation requirements. Your customers will appreciate the clarity when assembling 
  their new <strong>outdoor grill</strong>.
  </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row justify-between gap160">
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-right">
              <h2 className="heading-main3 my-5">Custom Product Labels for BBQ Grills & Accessories</h2>
              <p className="heading-sub text-hub ">
                Every detail counts when building a <strong>BBQ grill brand</strong>. We produce 
  high-quality, durable <strong>custom labels</strong> for <strong>charcoal grills</strong>, 
  <strong>gas grills</strong>, <strong>electric grills</strong>, and outdoor cooking 
  accessories. Our labeling solutions include:
              </p>
              <ul className='mt30 text list-inside list-disc'>
                <li>Logo branding labels with your BBQ brand identity</li>
                <li>Safety warning labels meeting international standards</li>
                <li>Material and specification labels for grill components</li>
                <li>Barcode / UPC / EAN codes for retail distribution</li>
                <li>Compliance marks (RoHS, CE, UKCA, etc.) for global markets</li>
              </ul>
              <p className="heading-sub mt30 text-hub">
                All <strong>BBQ grill labels</strong> can be waterproof, UV-resistant, or heat-resistant 
  - engineered specifically for outdoor cooking environments where grills face sun, rain, 
  and high temperatures. Your branding stays visible throughout the product's lifetime.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left"><Image className='rounded-xl box-shadow-xl' src="/images/packaging/biaoqian.jpg" alt="Custom product labels for BBQ grills - waterproof UV-resistant branding labels"  title="BBQ Grill Product Labels - Keyfire OEM Service" width={720} height={500} /></div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col-reverse md:flex-row gap160">
            <div className="md:w-1/2" data-aos="fade-right"><Image className='rounded-xl box-shadow-xl' src="/images/packaging/peijian.jpg" alt="Complete BBQ grill accessory set packaging - organized hardware kits and labeled components"  title="BBQ Grill Accessory Packaging - Keyfire Service" width={720} height={500} /></div>
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
              <h2 className="heading-main3 my-5">Complete BBQ Grill Accessory Set Packaging</h2>
              <p className="heading-sub text-hub ">
                Missing parts frustrate customers and damage your brand reputation. To ensure every 
  <strong>BBQ grill</strong> arrives complete and ready to assemble, we provide 
  comprehensive <strong>accessory packaging solutions</strong> for <strong>charcoal 
  grills</strong>, <strong>gas grills</strong>, and outdoor cooking equipment:
              </p>
              <ul className='mt30 text list-inside list-disc'>
                <li>Hardware kits organized by assembly stage</li>
                <li>Screws, bolts, and fasteners labeled individually</li>
                <li>Cooking grates, ash pans, and heat plates with protective layers</li>
                <li>BBQ grill accessories arranged for faster, error-free assembly</li>
              </ul>
              <p className="heading-sub mt30 text-hub">
                Professional <strong>BBQ grill accessory packaging</strong> eliminates missing-part 
  complaints, speeds up assembly time, and creates a positive unboxing experience that 
  customers share in reviews. Your <strong>outdoor grill brand</strong> benefits from 
  higher satisfaction ratings.
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="flex flex-col md:flex-row justify-between gap160">
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-right">
              <h2 className="heading-main3 my-5">Anti-Drop & Surface Protection for BBQ Grill Shipping</h2>
              <p className="heading-sub text-hub ">
                <strong>BBQ grills</strong> are heavy metal products that require serious protection 
  during international shipping. We implement strict <strong>protective packaging 
  protocols</strong> to ensure your <strong>charcoal grills</strong>, <strong>gas 
  grills</strong>, and smokers arrive without dents, scratches, or coating damage:
  </p>
              <ul className='mt30 text list-inside list-disc'>
                <li>Anti-scratch protective film for powder-coated surfaces</li>
                <li>Foam boards / EPE cushioning for impact absorption</li>
                <li>Corner protectors for metal grill frames and edges</li>
                <li>ISTA-standard drop-test compliant packaging design</li>
              </ul>
              <p className="heading-sub mt30 text-hub">
                With Keyfire's <strong>BBQ grill protective packaging</strong>, your products arrive 
  in perfect condition - no dents, scratches, or coating damage. This reduces damage 
  claims, return rates, and negative reviews, while protecting your 
  <strong>outdoor grill brand</strong> reputation.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left"><Image className='rounded-xl box-shadow-xl' src="/images/packaging/hezi2.jpg" alt="Anti-drop protective packaging for BBQ grills - foam cushioning and corner protectors"  title="BBQ Grill Protective Packaging - Keyfire" width={720} height={500} /></div>
          </div>
          
        </div>
      </section>
      <FooterContact />

     </div>
  );
}