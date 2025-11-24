import FooterContact from '@/components/FooterContact';

import { getMetadataFromRankMath } from '@/lib/seoServer';
import { getPageBySlug } from '@/lib/wordpress';
import React from 'react';

// 生成静态 metadata
export async function generateMetadata() {
  const wpUrl = 'https://admin.keyfirebbq.com/faq';
  
  try {
    // 从 RankMath 获取 SEO 数据
    const metadata = await getMetadataFromRankMath(wpUrl, {
      title: 'FAQ - Frequently Asked Questions | Keyo Customize',
      description: 'Find answers to common questions about our BBQ grill manufacturing, OEM/ODM services, ordering process, MOQ, lead times, and more.'
    });
    
    return metadata;
  } catch (error) {
    // 返回默认 metadata
    return {
      title: 'FAQ - Frequently Asked Questions | Keyo Customize',
      description: 'Find answers to common questions about our BBQ grill manufacturing, OEM/ODM services, ordering process, MOQ, lead times, and more.',
    };
  }
}

export default async function FAQPage() {
  // 获取FAQ页面数据（用于SEO和备用数据）
  let faqData = [];
  try {
    const pageData = await getPageBySlug('faq');
    if (pageData?.meta_data && pageData.meta_data.faq_items) {
      faqData = Array.isArray(pageData.meta_data.faq_items) 
        ? pageData.meta_data.faq_items.map((item: any, index: number) => ({
            id: item.id || index + 1,
            question: item.question || item.title || '',
            answer: item.answer || item.content || '',
            category: item.category || undefined
          }))
        : [];
    }
  } catch (error) {
    console.log('Using default FAQ data - WordPress data fetch failed:', error);
  }
  
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-1 relative isolate -z-10">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-60 xl:h-110 w-full mask-[radial-gradient(70rem_70rem_at_center,white,transparent)] stroke-gray-200"
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
          <h1 className="heading-main" data-aos="fade-up" data-aos-delay="200">Frequently Asked Questions</h1>
          <p className="heading-sub mt30 text-hub" data-aos="fade-up" data-aos-delay="400">Find answers to common questions about our BBQ grills, customization services, and ordering process.</p>
        </div>
      </section>

      {/* FAQ Content - 直接硬编码在HTML中 */}
      <section className="section-3">
        <div className="container flex flex-col gap80" data-aos="fade-up" data-aos-duration="800">
          {/* FAQ Item 1 */}
          <div data-aos="fade-up" data-aos-delay="0">
            <details className="group" open>
              <summary className="flex items-center justify-between w-full text-left cursor-pointer list-none">
                <div className="flex-1">
                  <h2 className="heading-main3" data-aos="fade-right">
                    Do you provide OEM/ODM services?
                  </h2>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg 
                    className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="pt-6 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="">
                  <p className="text" data-aos="fade-up" data-aos-delay="200">Yes. Our OEM/ODM services cover logo design, custom packaging, and tailored product designs.</p>
                </div>
              </div>
            </details>
          </div>

          {/* FAQ Item 2 */}
          <div data-aos="fade-up" data-aos-delay="100">
            <details className="group">
              <summary className="flex items-center justify-between w-full text-left cursor-pointer list-none">
                <div className="flex-1">
                  <h2 className="heading-main3" data-aos="fade-right">
                    What Is The MOQ For Your Wholesale Order?
                  </h2>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg 
                    className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="pt-6 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="">
                  <p className="text" data-aos="fade-up" data-aos-delay="200">The standard MOQ is 500 pieces. We can discuss flexibility for certain products or high-value orders.</p>
                </div>
              </div>
            </details>
          </div>

          {/* FAQ Item 3 */}
          <div data-aos="fade-up" data-aos-delay="200">
            <details className="group">
              <summary className="flex items-center justify-between w-full text-left cursor-pointer list-none">
                <div className="flex-1">
                  <h2 className="heading-main3" data-aos="fade-right">
                    How long is the lead time?
                  </h2>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg 
                    className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="pt-6 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="">
                  <p className="text" data-aos="fade-up" data-aos-delay="200">Samples: 7 days. Bulk orders: 30–45 days depending on season.</p>
                </div>
              </div>
            </details>
          </div>

          {/* FAQ Item 4 */}
          <div data-aos="fade-up" data-aos-delay="300">
            <details className="group">
              <summary className="flex items-center justify-between w-full text-left cursor-pointer list-none">
                <div className="flex-1">
                  <h2 className="heading-main3" data-aos="fade-right">
                    What payment terms do you accept?
                  </h2>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg 
                    className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="pt-6 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="">
                  <p className="text" data-aos="fade-up" data-aos-delay="200">T/T, L/C, PayPal (for samples).</p>
                </div>
              </div>
            </details>
          </div>

          {/* FAQ Item 5 */}
          <div data-aos="fade-up" data-aos-delay="400">
            <details className="group">
              <summary className="flex items-center justify-between w-full text-left cursor-pointer list-none">
                <div className="flex-1">
                  <h2 className="heading-main3" data-aos="fade-right">
                    Can you ship to the US/EU directly?
                  </h2>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg 
                    className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="pt-6 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="">
                  <p className="text" data-aos="fade-up" data-aos-delay="200">Yes, we provide FOB and DDP shipping terms.</p>
                </div>
              </div>
            </details>
          </div>

          {/* FAQ Item 6 */}
          <div data-aos="fade-up" data-aos-delay="500">
            <details className="group">
              <summary className="flex items-center justify-between w-full text-left cursor-pointer list-none">
                <div className="flex-1">
                  <h2 className="heading-main3" data-aos="fade-right">
                    What is your production capacity?
                  </h2>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg 
                    className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="pt-6 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="">
                  <p className="text" data-aos="fade-up" data-aos-delay="200">200,000 pieces per month, with flexible capacity to accommodate large orders.</p>
                </div>
              </div>
            </details>
          </div>

          {/* FAQ Item 7 */}
          <div data-aos="fade-up" data-aos-delay="600">
            <details className="group">
              <summary className="flex items-center justify-between w-full text-left cursor-pointer list-none">
                <div className="flex-1">
                  <h2 className="heading-main3" data-aos="fade-right">
                    What material and how thick is your bbq grills?
                  </h2>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg 
                    className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="pt-6 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="">
                  <p className="text" data-aos="fade-up" data-aos-delay="200">The material of our barbecue grill is generally iron, and the thickness is customized according to your requirements.</p>
                </div>
              </div>
            </details>
          </div>

          {/* FAQ Item 8 */}
          <div data-aos="fade-up" data-aos-delay="700">
            <details className="group">
              <summary className="flex items-center justify-between w-full text-left cursor-pointer list-none">
                <div className="flex-1">
                  <h2 className="heading-main3" data-aos="fade-right">
                    Can I customize the color and handles?
                  </h2>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg 
                    className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="pt-6 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="">
                  <p className="text" data-aos="fade-up" data-aos-delay="200">Yes, both are customizable. We have flexible options to meet your design.</p>
                </div>
              </div>
            </details>
          </div>

          {/* FAQ Item 9 */}
          <div data-aos="fade-up" data-aos-delay="800">
            <details className="group">
              <summary className="flex items-center justify-between w-full text-left cursor-pointer list-none">
                <div className="flex-1">
                  <h2 className="heading-main3" data-aos="fade-right">
                    Is it necessary to assemble it? Is it difficult?
                  </h2>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg 
                    className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="pt-6 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="">
                  <p className="text" data-aos="fade-up" data-aos-delay="200">Yes. It needs to be assembled. We provide you with detailed manuals and step-by-step videos, making assembly simple and convenient.</p>
                </div>
              </div>
            </details>
          </div>

          {/* FAQ Item 10 */}
          <div data-aos="fade-up" data-aos-delay="900">
            <details className="group">
              <summary className="flex items-center justify-between w-full text-left cursor-pointer list-none">
                <div className="flex-1">
                  <h2 className="heading-main3" data-aos="fade-right">
                    Can you print my logo on it?
                  </h2>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg 
                    className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="pt-6 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="">
                  <p className="text" data-aos="fade-up" data-aos-delay="200">Yes, we can print the logo on the product.</p>
                </div>
              </div>
            </details>
          </div>

          {/* FAQ Item 11 */}
          <div data-aos="fade-up" data-aos-delay="1000">
            <details className="group">
              <summary className="flex items-center justify-between w-full text-left cursor-pointer list-none">
                <div className="flex-1">
                  <h2 className="heading-main3" data-aos="fade-right">
                    What is the sample production process?
                  </h2>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg 
                    className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="pt-6 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="">
                  <p className="text" data-aos="fade-up" data-aos-delay="200">Sample production process is divided into four steps: quotation-sample confirmation-mass production-delivery. We have design and QC teams to support each stage of the process, to ensure a smooth process.</p>
                </div>
              </div>
            </details>
          </div>

          {/* FAQ Item 12 */}
          <div data-aos="fade-up" data-aos-delay="1100">
            <details className="group">
              <summary className="flex items-center justify-between w-full text-left cursor-pointer list-none">
                <div className="flex-1">
                  <h2 className="heading-main3" data-aos="fade-right">
                    Is there a tooling/mold fee?
                  </h2>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg 
                    className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="pt-6 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="">
                  <p className="text" data-aos="fade-up" data-aos-delay="200">It depends on the design. If it is a simple change, it may not be charged, but if the structure is more complicated, there will be a mold fee.</p>
                </div>
              </div>
            </details>
          </div>

          {/* FAQ Item 13 */}
          <div data-aos="fade-up" data-aos-delay="1200">
            <details className="group">
              <summary className="flex items-center justify-between w-full text-left cursor-pointer list-none">
                <div className="flex-1">
                  <h2 className="heading-main3" data-aos="fade-right">
                    What is the typical MOQ for customized products?
                  </h2>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg 
                    className="w-5 h-5 text-gray-500 transition-transform duration-300 group-open:rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </summary>
              <div className="pt-6 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="">
                  <p className="text" data-aos="fade-up" data-aos-delay="200">It depends on the product. If the unit price of the product is low, then the minimum order quantity is generally 500 or more.</p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>
      <FooterContact />
    </div>
  );
}