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
          <h1 className="heading-main" data-aos="fade-up" data-aos-delay="200">BBQ Grill Packaging & Shipping Process</h1>
          <p className="heading-sub mt30 text-hub" data-aos="fade-up" data-aos-delay="400">Delivering <strong>custom BBQ grills</strong> safely across the globe requires meticulous 
  packaging and logistics expertise. Our professional <strong>BBQ grill packaging and shipping</strong> 
  process protects your investment from factory floor to customer doorstep. Every 
  <strong>charcoal grill</strong>, <strong>gas grill</strong>, and <strong>smoker</strong> 
  undergoes automated packing line operations, rigorous AQL quality inspections, functional 
  testing, and expert container loading - all designed to ensure your products arrive in 
  perfect condition, meeting international export standards and safeguarding your brand reputation.</p>
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
                Our state-of-the-art automated packing line is specifically engineered for 
  <strong>BBQ grills</strong> and outdoor cooking equipment. Designed to handle the unique 
  requirements of <strong>charcoal grills</strong>, <strong>gas grills</strong>, and heavy 
  steel components, our packaging process ensures every product is retail-ready and 
  export-safe.
              </p>
              <ul className='mt30 text list-inside list-disc'>
                <li><strong>Components sorting & protection</strong> - Grill grates, burners, and accessories 
  individually wrapped to prevent scratching</li>
                <li><strong>Foam/EPE cushioning</strong> - Multi-layer protection for fragile parts like 
  glass lids and temperature gauges</li>
                <li><strong>Retail color box assembly</strong> - Custom branded packaging that showcases 
  your BBQ grill on store shelves</li>
                <li><strong>Export carton sealing & palletizing</strong> - Heavy-duty corrugated boxes 
  optimized for international shipping and container loading</li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row justify-between gap160">
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-right">
              <span className="heading-sub text-primary font-bold">Step2</span>
              <h2 className="heading-main3 my-3">BBQ Grill Quality Inspection (AQL Standard)</h2>
              <p className="heading-sub text-hub ">
                Quality is non-negotiable when manufacturing <strong>custom BBQ grills</strong> for 
  international markets. Every production batch undergoes strict AQL (Acceptable Quality Limit) 
  sampling inspection conducted by certified QC inspectors before export approval. This 
  industry-standard protocol protects your brand reputation and ensures consistent quality 
  across every shipment of <strong>gas grills</strong>, <strong>charcoal grills</strong>, 
  and <strong>smokers</strong>.
              </p>
              <ul className='mt30 text list-inside list-disc'>
                <li><strong>Surface finish check</strong> - Inspecting powder coating, stainless steel 
  polishing, and paint quality for premium appearance</li>
                <li><strong>Welding and structure testing</strong> - Verifying structural integrity, 
  weld strength, and frame stability for safe operation</li>
                <li><strong>Accessories completeness</strong> - Confirming all grill grates, burners, 
  thermometers, and hardware are included per specifications</li>
                <li><strong>Label & barcode verification</strong> - Ensuring correct branding, safety 
  labels, and traceability codes for retail compliance</li>
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
              <h2 className="heading-main3 my-3">BBQ Grill Assembly & Functional Testing</h2>
              <p className="heading-sub text-hub ">
                Before any <strong>BBQ grill</strong> leaves our factory, it must pass hands-on assembly 
  and functional testing. Our QC team builds random samples from each production batch to 
  verify installation clarity, part compatibility, and real-world performance. This critical 
  step ensures your customers receive <strong>custom BBQ grills</strong> that are easy to 
  assemble and perform flawlessly from the first cookout.  
              </p>
              <ul className='mt30 text list-inside list-disc'>
                <li><strong>Complete assembly fitting</strong> - Testing all connections, fasteners, and 
  component compatibility following included instructions</li>
                <li><strong>Structural stability testing</strong> - Verifying cart stability, leg strength, 
  and overall durability under normal use conditions</li>
                <li><strong>Heat/airflow structure verification</strong> - For <strong>gas grills</strong>: 
  testing burner ignition and heat distribution; For <strong>charcoal grills</strong>: 
  confirming ventilation controls and airflow efficiency</li>
              </ul>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row justify-between gap160">
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-right">
              <span className="heading-sub text-primary font-bold">Step4</span>
              <h2 className="heading-main3 my-3">BBQ Grill Container Loading & Global Shipping</h2>
              <p className="heading-sub text-hub ">
                Shipping <strong>BBQ grills</strong> internationally requires expertise in container optimization 
  and cargo protection. Our logistics team has shipped thousands of containers to 50+ countries, 
  mastering the art of maximizing space while protecting your <strong>custom BBQ grills</strong> 
  during long ocean voyages and multiple handling points. From Foshan to your warehouse, we 
  ensure safe arrival.
              </p>
              <ul className='mt30 text list-inside list-disc'>
                <li><strong>Optimized container layout</strong> - 3D loading plans that maximize cubic 
  capacity, fitting more <strong>charcoal grills</strong> and <strong>gas grills</strong> 
  per 20ft/40ft container to reduce your shipping costs</li>
                <li><strong>Anti-shift stacking protection</strong> - Strategic placement with blocking, 
  bracing, and securing methods that prevent movement during transport</li>
                <li><strong>Moisture-proof treatment for sea freight</strong> - Desiccant packs, moisture 
  barrier wraps, and ventilation considerations to protect against humidity damage during 
  long ocean crossings</li>
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