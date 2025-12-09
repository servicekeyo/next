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
          <h1 className="heading-main" data-aos="fade-up" data-aos-delay="200">Frequently Asked Questions About Our BBQ Grill OEM Services</h1>
          <p className="heading-sub mt30 text-hub" data-aos="fade-up" data-aos-delay="400">
            Find clear answers to common questions about our BBQ grills, OEM and ODM services, order process, lead time, materials and shipping. If you still need more details for your project, you can always contact the Keyfire team directly.
          </p>
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
                    Do you provide OEM and ODM services for BBQ grills?
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
                  <p className="text" data-aos="fade-up" data-aos-delay="200">
                    Yes. Most of our orders are OEM or ODM for overseas brands, importers and retailers. For OEM projects we follow your drawings, specifications and packaging artwork; for ODM work we develop new BBQ grill designs based on your brief, including structure, materials, finish, logo position and carton layout.
                  </p>
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
                    What is the MOQ for wholesale BBQ grill orders?
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
                  <p className="text" data-aos="fade-up" data-aos-delay="200">
                    For standard BBQ grill models, the typical MOQ starts from around 500 units per item. For higher-value products or more complex customizations, we can discuss flexible quantities case by case, especially if you have a long‑term plan or a mixed‑container order.
                  </p>
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
                    How long is your lead time for samples and bulk orders?
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
                  <p className="text" data-aos="fade-up" data-aos-delay="200">
                    Sample lead time is usually about 7–10 days after we confirm the design details. Mass production normally takes 30–45 days after deposit and final approval, depending on the season, order quantity and product mix. Ocean shipping time will be added on top of this and varies by destination port.
                  </p>
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
                    What payment terms do you accept for BBQ grill orders?
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
                  <p className="text" data-aos="fade-up" data-aos-delay="200">
                    For regular orders we usually work with T/T – 30% deposit and 70% balance against copy of shipping documents. For larger programs, L/C at sight can be discussed with your purchasing team. Samples and small trial orders can be paid by PayPal or bank transfer.
                  </p>
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
                    Can you ship BBQ grills directly to the US, EU and other regions?
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
                  <p className="text" data-aos="fade-up" data-aos-delay="200">
                    Yes. We ship regularly to Europe, North America and the Middle East from South China ports. Standard terms are FOB China, but we can also quote CIF, DAP or DDP to your warehouse or appointed logistics partner if needed.
                  </p>
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
                    What is your production capacity for BBQ grills?
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
                  <p className="text" data-aos="fade-up" data-aos-delay="200">
                    Our factory can produce around 200,000 BBQ grills per month, with annual output of more than 2.4 million units depending on the product mix. This capacity allows us to support seasonal demand peaks and long‑term programs for brands, importers and retail chains.
                  </p>
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
                    What materials and thickness do you use for your BBQ grills?
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
                  <p className="text" data-aos="fade-up" data-aos-delay="200">
                    Most of our BBQ grills are made from cold‑rolled steel with high‑temperature powder coating for heat and corrosion resistance. Stainless steel such as 430 or 304 can be used for burners, grates or full bodies when required. Typical thickness ranges from about 0.6–1.2 mm, and can be adjusted to match your positioning and budget.
                  </p>
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
                    Can I customize the color, handles and other visible parts?
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
                  <p className="text" data-aos="fade-up" data-aos-delay="200">
                    Yes. You can choose custom powder‑coat colors, handle designs, knob styles, lid shapes, side tables, wheels and more. We can match your brand colors or recommend combinations that fit your target market and price level.
                  </p>
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
                    Do your BBQ grills require assembly? Is it difficult for end users?
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
                  <p className="text" data-aos="fade-up" data-aos-delay="200">
                    Most models are supplied in knock‑down form to save freight and display space, so basic assembly is required. We keep the structure straightforward and include clear manuals with photos or drawings. For key items we can also provide video or QR‑code guides to make assembly easier for your customers.
                  </p>
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
                    What does your OEM/ODM service include from start to finish?
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
                  <p className="text" data-aos="fade-up" data-aos-delay="200">
                    Our OEM/ODM service covers the full process: project discussion and quotation, design and engineering, tooling and pilot runs, sample confirmation, mass production, packaging and export documentation. During the project our sales and engineering teams work together with you to balance design, cost, certification requirements and delivery time.
                  </p>
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
                    Can you add my logo and make private label BBQ grills?
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
                  <p className="text" data-aos="fade-up" data-aos-delay="200">
                    Yes. We can add your logo on the grill by metal badge, stamping, laser engraving or printing, depending on the part and material. Your branding can also be applied to control panels, labels, color boxes, manuals and master cartons so the whole program looks consistent.
                  </p>
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
                    What is the sample production process for new BBQ grill projects?
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
                  <p className="text" data-aos="fade-up" data-aos-delay="200">
                    In general there are four main steps: quotation, confirmation of structure and details, sample production and your evaluation, then adjustment if needed before mass production. Our design and QC teams follow each stage to keep communication clear and avoid surprises when the bulk order starts.
                  </p>
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
                    Is there a tooling or mold fee for new BBQ grill designs?
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
                  <p className="text" data-aos="fade-up" data-aos-delay="200">
                    It depends on how different the new design is from our existing platforms. Small changes that can be made on current tooling may not require extra mold charges, or only a minor fee. Completely new structures usually need dedicated tooling; we will quote this separately and, in some cases, can amortize the cost over a certain order quantity.
                  </p>
                </div>
              </div>
            </details>
          </div>
          {/* FAQ Item 14 */}
          <div data-aos="fade-up" data-aos-delay="1200">
            <details className="group">
              <summary className="flex items-center justify-between w-full text-left cursor-pointer list-none">
                <div className="flex-1">
                  <h2 className="heading-main3" data-aos="fade-right">
                    What is the typical MOQ for customized BBQ grill products?
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
                  <p className="text" data-aos="fade-up" data-aos-delay="200">
                    The MOQ for customized grills depends on the product type, unit price and level of change. For standard models with custom color and logo only, the MOQ is often around 500 units. For more complex or premium designs, we will recommend a suitable MOQ after understanding your target specification and market.
                  </p>
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