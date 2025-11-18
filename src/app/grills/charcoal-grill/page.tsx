import { getGrillCategories, getGrillsByCategory } from '@/lib/wordpress'
import PaginationNav from '@/components/PaginationNav'
import GrillListCSR from '@/components/GrillListCSR'
import { QuoteButtonPrimary} from '@/components/QuoteButton';
import { Package, Truck } from '@/components/Icons'
import PackagingShipping from '@/components/PackagingShipping'
import FooterContact from '@/components/FooterContact';
import YouTubeLite from '@/components/YouTubeLite';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import ProductionProcess from '@/components/ProductionProcess'
export const dynamic = 'force-static'
export const revalidate = false
export default async function charcoal_grill({
  searchParams,
}: {
  searchParams?: { page?: string }
}) {
  const perPage = 8
  const slug = 'charcoal-grill'
  const cats = await getGrillCategories()
  const cat = (Array.isArray(cats) ? cats : []).find((c: any) => c?.slug === slug)
  const allPosts = cat ? await getGrillsByCategory(cat.id, 100) : []
  const initialPosts = Array.isArray(allPosts) ? allPosts.slice(0, perPage) : []
  const initialTotalPages = Array.isArray(allPosts) && allPosts.length > 0 ? Math.ceil(allPosts.length / perPage) : 1
  return (
    <div className="min-h-screen">
      <section className="section-1 relative isolate ">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-70 xl:h-110 w-full mask-[radial-gradient(70rem_70rem_at_center,white,transparent)] stroke-gray-200"
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
        <div className='herotitle-w text-center' suppressHydrationWarning data-aos="fade-up" data-aos-duration="800">
          <h1 className="heading-main" data-aos="fade-up" data-aos-delay="200">Custom Charcoal BBQ Grills</h1>
          <p className="heading-sub mt30 text-hub" data-aos="fade-up" data-aos-delay="400">From classic kettle designs to innovative outdoor smokers — we customize charcoal grills for your brand and market.</p>
          <div className="mt50"><QuoteButtonPrimary>Get a Free Quote</QuoteButtonPrimary></div>
        </div>
      </section>

      <section className="section-3 2xl:mt-[-50px]" data-aos="fade-up" data-aos-duration="800">
        <GrillListCSR initialPosts={initialPosts} perPage={perPage} initialTotalPages={initialTotalPages} categorySlug={slug} />
        {/* Pagination */}
        <PaginationNav totalPages={initialTotalPages} basePath="/grills/charcoal-grill" />
      </section>

      <section className="section-1">
        <div className='container flex-col md:flex-row items-center flex gap160'>
          <div className='w-full md:w-1/2' data-aos="zoom-in">
            <YouTubeLite
              embedUrl="https://www.youtube.com/embed/y_qAaMNv-qg?list=PLyLZfD9mW35JQCpU_dcWmZtBUnp3cWSK6&index=13"
              title="China BBQ Grill Manufacturer and Supplier-KEYO automatic production line"
              poster="https://img.youtube.com/vi/y_qAaMNv-qg/hqdefault.jpg"
            />
          </div>
          <div className='md:w-1/2 flex flex-col' data-aos="fade-left" data-aos-delay="100">
            <h2 className="heading-main2">3D Installation Support</h2>
            <p className="heading-sub mt20 text-hub">
              We provide comprehensive 3D installation videos tailored for business partners. These videos offer precise, step-by-step visual guidance to fully understand product assembly, functionality, and key features.
            </p>
            <div className="grid grid-cols-1 gap-8 mt40">
              <div className="flex  gap-3 ">
                <div className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <p className="text">Simplifies product demonstration and sales presentations.</p>
                </div>

                <div className="flex  gap-3">
                  <div className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <p className="text">Reduces installation questions and training time.</p>
                </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                <p className="text">Enhances customer confidence and purchase experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductionProcess />

      <section className="section-1">
        <div className="herotitle-w">
          <h2 className="heading-main2">Market Reference, Our Customization Power</h2>
          <p className="text text-hub mt20">We can reproduce or modify popular models on the market — with your logo, finish, and branding details.</p>
        </div>
        <div className="container">
          {(() => {
            const imgs = ['/images/about/indx_one1.jpg','/images/about/indx_one2.jpg','/images/about/indx_one3.jpg','/images/about/indx_one1.jpg','/images/about/indx_one2.jpg','/images/about/indx_one3.jpg']
            const GalleryCarousel = require('@/components/GalleryCarousel').default
            return <GalleryCarousel images={imgs} />
          })()}
        </div>
      </section>

      <PackagingShipping />

      <section className="section-1 bg-foreground">
        <div className="herotitle-w">
          <h2 className="heading-main2">What Our Customers Say About Us</h2>
          <p className="text text-hub mt20">We’ve served hundreds of satisfied customers. Here are some of their reviews.</p>
        </div>
        <div className="container">
          {(() => {
            const items = [
              { name: 'Product Development Lead,', message: '“We worked with the manufacturer on a private-label charcoal grill project for our spring promotion. Tooling, samples, and bulk production were completed as scheduled, with transparent communication at every stage.”', rating: 5, role: 'Horizon Gardenware Group', company: 'UK' },
              { name: 'Category Manager', message: '“The factory supported our customization requirements, including grate thickness, color, and packaging specifications. Their technical adjustments helped us optimize the product for our target market.”', rating: 5, role: 'VerdeCamp Outdoor Solutions', company: 'Italy' },
              { name: 'Operations Manager', message: '“We collaborated on a series of portable charcoal grills for our regional distributors. The supplier provided structural improvements that enhanced durability and reduced manufacturing costs without affecting performance.”', rating: 4, role: 'Summit Outdoor Supply Co.', company: 'Canada' },
              { name: 'Supply Chain Director', message: '“Their ability to handle multi-size SKUs and maintain stable quality across all models was a major benefit. Incoming inspection showed consistent welding, coating, and material thickness.”', rating: 5, role: 'Pacific Outdoor Retail Group', company: 'Australia' },
              { name: 'Import & Compliance Manager', message: '“The supplier supported us with both 2D/3D drawings and pre-production samples. All technical specifications were achieved, and export documentation was complete and accurate for customs clearance.”', rating: 5, role: 'Nordic Home Products AS,', company: 'Norway' },
              { name: 'Brand Manager', message: '“Our charcoal grill customization project was delivered with high efficiency. Lead times were met, and the final products aligned well with our brand requirements and POS packaging design.”', rating: 4, role: 'SunVale Home & Garden Corporation', company: 'Brazil' },
            ]
            return <TestimonialsCarousel items={items} />
          })()}
        </div>
      </section>

      <section className="section-1">
        <div className="herotitle-w">
          <h2 className="heading-main2">Frequently Asked Questions</h2>
          <p className="text text-hub mt20">Find answers to common questions about our BBQ grills, customization services, and ordering process.</p>
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
      </section>

      <FooterContact />
    </div>
  );
}
