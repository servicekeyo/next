import FooterContact from '@/components/FooterContact';
import Image from 'next/image';
import YouTubeLite from '@/components/YouTubeLite';
import { getMetadataFromRankMath } from '@/lib/seoServer';

export const dynamic = 'force-static'
export const revalidate = 600

export async function generateMetadata() {
  const wpUrl = 'https://admin.keyfirebbq.com/packaging-shipping'
  return await getMetadataFromRankMath(wpUrl, {
    title: 'Packaging & Shipping Services - BBQ Grill Logistics | Keyo Customize',
    description: 'Professional packaging and shipping services for BBQ grills. Safe, secure, and timely delivery of your custom grill orders worldwide.'
  })
}

export default function PackagingShippingPage() {

  return (
    <div className="min-h-screen">
      {/*
      <SEO 
        wpUrl="https://admin.keyfirebbq.com/packaging_shipping"
        fallbackTitle="Packaging & Shipping Services - BBQ Grill Logistics | Keyo Customize"
        fallbackDescription="Professional packaging and shipping services for BBQ grills. Safe, secure, and timely delivery of your custom grill orders worldwide."
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
          <h1 className="heading-main" data-aos="fade-up" data-aos-delay="200">BBQ Grill Packaging &amp; Shipping Process from China</h1>
          <p className="heading-sub mt30 text-hub" data-aos="fade-up" data-aos-delay="400">
            Shipping <strong>custom BBQ grills</strong> worldwide means handling heavy metal products the right way. Our <strong>BBQ grill packaging and shipping</strong> process covers the full journey from packing line to container loading. Every <strong>charcoal grill</strong>, <strong>gas grill</strong> and <strong>smoker</strong> is protected with inner packing, checked under AQL standards, test‑assembled and loaded carefully into containers so your goods reach Europe, North America and the Middle East in good condition.
          </p>
        </div>
      </section>

      <section className="section-3">
        <div className="container flex flex-col gap160" data-aos="fade-up" data-aos-duration="800">

          {/* Step 1 */}
          <div className="flex flex-col-reverse md:flex-row gap160">
            <div className="md:w-1/2" data-aos="fade-right">
              <YouTubeLite
                embedUrl="https://www.youtube.com/embed/fFjgEXOu0v0?list=PLyLZfD9mW35KgvIHkVhRef1shmiFPn2cg&index=7"
                title="BBQ Grill Packing Process Video"
                poster="https://img.youtube.com/vi/fFjgEXOu0v0/hqdefault.jpg"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
              <span className="heading-sub text-primary font-bold">Step1</span>
              <h2 className="heading-main3 my-3">BBQ Grill Packing Line Operations</h2>
              <p className="heading-sub text-hub ">
                Our packing line is set up for <strong>BBQ grills</strong> and outdoor cooking equipment. It handles <strong>charcoal grills</strong>, <strong>gas grills</strong> and smokers with standard steps so each unit is protected inside the box and ready for export.
              </p>
              <ul className='mt30 text list-inside list-disc'>
                <li><strong>Components sorting &amp; protection</strong> – Grates, burners and accessories wrapped separately to avoid scratches</li>
                <li><strong>Foam / EPE cushioning</strong> – Multi‑layer protection for glass, thermometers and other fragile parts</li>
                <li><strong>Retail color box assembly</strong> – Branded boxes so your BBQ grill is ready for store shelves or e‑commerce</li>
                <li><strong>Export carton sealing &amp; palletizing</strong> – Heavy‑duty cartons and pallets optimized for international shipping</li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row justify-between gap160">
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-right">
              <span className="heading-sub text-primary font-bold">Step2</span>
              <h2 className="heading-main3 my-3">BBQ Grill Quality Inspection (AQL Standard)</h2>
              <p className="heading-sub text-hub ">
                For <strong>custom BBQ grills</strong> exported from China, stable quality is essential. Each batch follows an AQL sampling plan before shipment so your <strong>gas grills</strong>, <strong>charcoal grills</strong> and <strong>smokers</strong> match the agreed standard.
              </p>
              <ul className='mt30 text list-inside list-disc'>
                <li><strong>Surface finish check</strong> – Powder coating, stainless surfaces and paint checked for a clean appearance</li>
                <li><strong>Welding and structure</strong> – Frame, welds and main joints inspected for safe use</li>
                <li><strong>Accessories completeness</strong> – Grates, burners, thermometers and hardware counted and checked</li>
                <li><strong>Label &amp; barcode</strong> – Branding, safety labels and barcodes verified for retail requirements</li>
              </ul>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <YouTubeLite
                embedUrl="https://www.youtube.com/embed/XkweGqjslzA"
                title="BBQ Grill AQL Inspection Video"
                poster="https://img.youtube.com/vi/XkweGqjslzA/hqdefault.jpg"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col-reverse md:flex-row gap160">
            <div className="md:w-1/2" data-aos="fade-right">
              <YouTubeLite
                embedUrl="https://www.youtube.com/embed/UvtQQjRReEk"
                title="BBQ Grill Assembly Testing Video"
                poster="https://img.youtube.com/vi/UvtQQjRReEk/hqdefault.jpg"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
              <span className="heading-sub text-primary font-bold">Step3</span>
              <h2 className="heading-main3 my-3">BBQ Grill Assembly &amp; Functional Testing</h2>
              <p className="heading-sub text-hub ">
                Before shipping, our QC team completes random <strong>BBQ grill</strong> assemblies from each batch. This makes sure your <strong>custom BBQ grills</strong> are easy to build and work as designed in real use.
              </p>
              <ul className='mt30 text list-inside list-disc'>
                <li><strong>Complete assembly fitting</strong> – All screws, brackets and parts fitted following the manual</li>
                <li><strong>Structural stability</strong> – Carts, legs and frames checked for stability during normal operation</li>
                <li><strong>Heat / airflow check</strong> – For <strong>gas grills</strong>: burner ignition and flame distribution; for <strong>charcoal grills</strong>: ventilation and airflow</li>
              </ul>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row justify-between gap160">
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-right">
              <span className="heading-sub text-primary font-bold">Step4</span>
              <h2 className="heading-main3 my-3">BBQ Grill Container Loading &amp; Global Shipping</h2>
              <p className="heading-sub text-hub ">
                As a <strong>BBQ grill manufacturer in China</strong>, we load containers every week for Europe, North America and the Middle East. Our team plans <strong>BBQ grill container loading</strong> to protect cartons and control your freight cost.
              </p>
              <ul className='mt30 text list-inside list-disc'>
                <li><strong>Optimized container layout</strong> – Loading plans to fit more <strong>charcoal grills</strong> and <strong>gas grills</strong> per 20ft / 40ft container</li>
                <li><strong>Anti‑shift stacking</strong> – Blocking and bracing methods that keep BBQ grill cartons from moving at sea</li>
                <li><strong>Moisture protection</strong> – Desiccants and wrapping to reduce humidity impact during long ocean shipping</li>
              </ul>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <Image src="/images/packaging/zhuanggui.jpg" className='rounded-xl box-shadow-xl' alt="Professional BBQ grill container loading - optimized stacking and moisture protection for international shipping" title="BBQ Grill Container Loading Process" width={720} height={500} />
            </div>
          </div>

        </div>
      </section>
      <FooterContact />

     </div>
  );
}