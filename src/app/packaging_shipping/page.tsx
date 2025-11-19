'use client';

import FooterContact from '@/components/FooterContact';
import Image from 'next/image';
import YouTubeLite from '@/components/YouTubeLite';
import SEO from '@/components/SEO';

export default function packaging_shipping() {

  return (
    <div className="min-h-screen">
      <SEO 
        wpUrl="https://admin.keyfirebbq.com/packaging_shipping"
        fallbackTitle="Packaging & Shipping Services - BBQ Grill Logistics | Keyo Customize"
        fallbackDescription="Professional packaging and shipping services for BBQ grills. Safe, secure, and timely delivery of your custom grill orders worldwide."
      />
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
          <h1 className="heading-main" data-aos="fade-up" data-aos-delay="200">Packaging & Shipping</h1>
          <p className="heading-sub mt30 text-hub" data-aos="fade-up" data-aos-delay="400">Our packaging and shipping process is designed to ensure every charcoal grill arrives safely, meets your quality expectations, and complies with international export standards. From automated packing lines to final container loading, each step follows strict quality control procedures to support your business and protect your brand reputation.</p>
        </div>
      </section>

      <section className="section-3">
        <div className="container flex flex-col gap160" data-aos="fade-up" data-aos-duration="800">

          {/* Step 1 */}
          <div className="flex flex-col-reverse md:flex-row gap160">
            <div className="md:w-3/5" data-aos="fade-right">
              <YouTubeLite
                embedUrl="https://www.youtube.com/embed/fFjgEXOu0v0?list=PLyLZfD9mW35KgvIHkVhRef1shmiFPn2cg&index=7"
                title="Custom Color Box Packaging"
                poster="https://img.youtube.com/vi/fFjgEXOu0v0/hqdefault.jpg"
              />
            </div>
            <div className="md:w-2/5 flex flex-col justify-center" data-aos="fade-left">
              <span className="heading-sub text-primary font-bold">Step1</span>
              <h2 className="heading-main3 my-3">Packing Line Operations</h2>
              <p className="heading-sub text-hub ">Our automated packing line is optimized for charcoal grills and outdoor cooking equipment.</p>
              <ul className='mt30 text list-inside list-disc'>
                <li>Components sorting & protection</li>
                <li>Foam/EPE cushioning</li>
                <li>Retail color box assembly</li>
                <li>Export carton sealing & palletizing</li>
              </ul>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row justify-between gap160">
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-right">
              <span className="heading-sub text-primary font-bold">Step2</span>
              <h2 className="heading-main3 my-3">Product Inspection (AQL Standard)</h2>
              <p className="heading-sub text-hub ">Each batch goes through strict sampling inspection before export.</p>
              <ul className='mt30 text list-inside list-disc'>
                <li>Surface finish check</li>
                <li>Welding and structure testing</li>
                <li>Accessories completeness</li>
                <li>Label & barcode verification</li>
              </ul>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <YouTubeLite
                embedUrl="https://www.youtube.com/embed/XkweGqjslzA"
                title="KEYO Product inspection procedure"
                poster="https://img.youtube.com/vi/XkweGqjslzA/hqdefault.jpg"
              />
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col-reverse md:flex-row gap160">
            <div className="md:w-1/2" data-aos="fade-right">
              <YouTubeLite
                embedUrl="https://www.youtube.com/embed/UvtQQjRReEk"
                title="Easy installation guide for our Trolley Charcoal BBQ Grill"
                poster="https://img.youtube.com/vi/UvtQQjRReEk/hqdefault.jpg"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
              <span className="heading-sub text-primary font-bold">Step3</span>
              <h2 className="heading-main3 my-3">Assembly & Functional Testing</h2>
              <p className="heading-sub text-hub ">We perform installation and performance testing to ensure a smooth user experience.</p>
              <ul className='mt30 text list-inside list-disc'>
                <li>Complete assembly fitting</li>
                <li>Structural stability testing</li>
                <li>Heat/airflow structure verification</li>
              </ul>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row justify-between gap160">
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-right">
              <span className="heading-sub text-primary font-bold">Step4</span>
              <h2 className="heading-main3 my-3">Container Loading & Shipping</h2>
              <p className="heading-sub text-hub ">We use professional loading techniques to ensure safe global delivery.</p>
              <ul className='mt30 text list-inside list-disc'>
                <li>Optimized container layout</li>
                <li>Anti-shift stacking protection</li>
                <li>Moisture-proof treatment for sea freight</li>
              </ul>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <Image src="/images/packaging/zhuanggui.jpg" className='rounded-xl box-shadow-xl' alt="Container Loading" width={720} height={500} />
            </div>
          </div>

        </div>
      </section>
      <FooterContact />

     </div>
  );
}