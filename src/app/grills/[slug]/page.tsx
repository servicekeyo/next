import { getGrillCategories, getGrillsByCategory, getPageBySlug } from '@/lib/wordpress'
import PaginationNav from '@/components/PaginationNav'
import GrillListCSR from '@/components/GrillListCSR'
import { QuoteButtonPrimary } from '@/components/QuoteButton'
import PackagingShipping from '@/components/PackagingShipping'
import FooterContact from '@/components/FooterContact'
import YouTubeLite from '@/components/YouTubeLite'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import GalleryCarousel from '@/components/GalleryCarousel'
import ProductionProcess from '@/components/ProductionProcess'
import { getMetadataFromRankMath } from '@/lib/seoServer'

export const dynamic = 'force-static'
export const dynamicParams = false
export const revalidate = 600

// 服务器端 generateMetadata 获取 RankMath SEO 数据



function safeArray<T>(v: any, fallback: T[] = []): T[] {
  return Array.isArray(v) ? v : fallback
}
function humanTitle(slug: string) {
  return String(slug || '')
    .split('-')
    .filter(Boolean)
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ')
}

// 服务器端静态生成页面 Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const wpUrl = `https://admin.keyfirebbq.com/grills/${slug}`
  return await getMetadataFromRankMath(wpUrl, {
    title: 'Custom BBQ Grills - Keyo Customize',
    description: 'Professional custom BBQ grill manufacturer in China. High-quality charcoal, gas, electric grills and smokers with OEM/ODM services.'
  })
}

export default async function GrillCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const perPage = 8
  const { slug } = await params

  const page = await getPageBySlug(slug)
  const faq = safeArray<any>(page?.acf?.faq)

  const cats = await getGrillCategories()
  const cat = (Array.isArray(cats) ? cats : []).find((c: any) => c?.slug === slug)
  const hero_title = (page?.acf?.hero?.title || page?.title?.rendered || cat?.name || humanTitle(slug) || 'Custom BBQ Grills')
  const allPosts = cat ? await getGrillsByCategory(cat.id, 100) : []
  const initialPosts = Array.isArray(allPosts) ? allPosts.slice(0, perPage) : []
  const initialTotalPages = Array.isArray(allPosts) && allPosts.length > 0 ? Math.ceil(allPosts.length / perPage) : 1

  return (
    <div className="min-h-screen">
      {/*
      <SEO 
        wpUrl={`https://admin.keyfirebbq.com/grills/${slug}`} 
        fallbackTitle="Custom BBQ Grills - Keyo Customize" 
        fallbackDescription="Professional custom BBQ grill manufacturer in China. High-quality charcoal, gas, electric grills and smokers with OEM/ODM services."
      />
      */}
      <section className="section-1 relative isolate " data-aos="fade-in">
        <svg aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-70 xl:h-110 w-full mask-[radial-gradient(70rem_70rem_at_center,white,transparent)] stroke-gray-200">
          <defs>
            <pattern x="50%" y={-1} id="grid-pattern" width={200} height={200} patternUnits="userSpaceOnUse">
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" strokeWidth={0} />
          </svg>
          <svg x="100%" y={0} className="overflow-visible fill-gray-50">
            <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z" strokeWidth={0} />
          </svg>
          <rect fill="url(#grid-pattern)" width="100%" height="100%" strokeWidth={0} />
        </svg>
        <div className='herotitle-w text-center' suppressHydrationWarning data-aos="fade-up" data-aos-duration="800">
          <h1 className="heading-main" data-aos="fade-up" data-aos-delay="200">{hero_title}</h1>
          <div className="heading-sub mt30 text-hub" data-aos="fade-up" data-aos-delay="300" dangerouslySetInnerHTML={{ __html: page?.acf?.hero?.p || '' }} />
          <div className="mt50" data-aos="fade-up" data-aos-delay="400"><QuoteButtonPrimary>Get a Free Quote</QuoteButtonPrimary></div>
        </div>
      </section>

      <section className="section-3 2xl:mt-[-50px]" data-aos="fade-up">
        <GrillListCSR initialPosts={initialPosts} perPage={perPage} initialTotalPages={initialTotalPages} categorySlug={slug} />
        <PaginationNav totalPages={initialTotalPages} basePath={`/grills/${slug}`} />
      </section>

      <section className="section-1 bg-foreground">
        <div className='container flex-col md:flex-row items-center flex gap160'>
          <div className='w-full md:w-1/2' data-aos="fade-right" data-aos-delay="200">
            <YouTubeLite
              embedUrl={page?.acf?.['3d_video']?.video_url || ''}
              title={page?.acf?.['3d_video']?.video_alt || ''}
              poster={page?.acf?.['3d_video']?.video_image || ''}
            />
          </div>
          <div className='md:w-1/2 flex flex-col' data-aos="fade-left" data-aos-delay="400">
            <h2 className="heading-main2">3D Installation Support</h2>
            <p className="heading-sub mt20 text-hub">We provide comprehensive 3D installation videos tailored for business partners. These videos offer precise, step-by-step visual guidance to fully understand product assembly, functionality, and key features.</p>
            <div className="grid grid-cols-1 gap-8 mt40">
              <div className="flex  gap-3 "><div className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div><p className="text">Simplifies product demonstration and sales presentations.</p></div>
              <div className="flex  gap-3"><div className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div><p className="text">Reduces installation questions and training time.</p></div>
              <div className="flex gap-3"><div className="flex-shrink-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div><p className="text">Enhances customer confidence and purchase experience.</p></div>
            </div>
          </div>
        </div>
      </section>

      <ProductionProcess />

      <section className="section-1 bg-foreground" data-aos="fade-up">
        <div className="herotitle-w" data-aos="fade-in">
          <h2 className="heading-main2">Market Reference, Our Customization Power</h2>
          <p className="text text-hub mt20">We can reproduce or modify popular models on the market — with your logo, finish, and branding details.</p>
        </div>
        <div className="container">
          {(() => {
            const ref = Array.isArray(page?.acf?.market_reference) ? page.acf.market_reference : []
            const imgs = ref.length > 0
              ? ref.map((it: any) => ({ url: it?.url, alt: it?.alt })).filter((x: any) => x.url)
              : [
                  { url: '/images/about/indx_one1.jpg', alt: 'Reference' },
                  { url: '/images/about/indx_one2.jpg', alt: 'Reference' },
                  { url: '/images/about/indx_one3.jpg', alt: 'Reference' },
                ]
            return <GalleryCarousel images={imgs} />
          })()}
        </div>
        <div className='mt-15 xl:mt-20 text-center'><a href="/odmoem" className="btn-secondary">Explore Customization</a></div>
      </section>

      <PackagingShipping />

      <section className="section-1 bg-foreground">
        <div className="herotitle-w" data-aos="fade-in">
          <h2 className="heading-main2">What Our Customers Say About Us</h2>
          <p className="text text-hub mt20">We’ve served hundreds of satisfied customers. Here are some of their reviews.</p>
        </div>
        <div className="container">
          {(() => {
            const src = Array.isArray(page?.acf?.testimonials)
              ? page.acf.testimonials
              : Array.isArray(page?.acf?.testimonials?.items)
                ? page.acf.testimonials.items
                : []
            const items = src.map((t: any) => ({
              name: t?.name || t?.title || 'Client',
              message: t?.message || t?.text || t?.content || '',
              rating: Number((t?.rating ?? t?.stars ?? t?.rate ?? 5)),
              role: t?.country || t?.position || '',
              company: t?.company || t?.org || '',
              date: t?.date || t?.time || ''
            }))
            return <TestimonialsCarousel items={items} />
          })()}
        </div>
        
      </section>

      <section className="section-1" data-aos="fade-up">
        <div className="herotitle-w" data-aos="fade-in">
          <h2 className="heading-main2">Frequently Asked Questions</h2>
          <p className="text text-hub mt20">Find answers to common questions about our BBQ grills, customization services, and ordering process.</p>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2  gap80" data-aos="fade-in" data-aos-delay="400">
          {(() => {
            const src = Array.isArray(page?.acf?.faq)
              ? page.acf.faq
              : Array.isArray(page?.acf?.faq?.items)
                ? page.acf.faq.items
                : faq
            const list = src.map((q: any) => ({
              question: q?.questions || q?.title || q?.q || '',
              answer: q?.answer || q?.a || q?.content || q?.body || ''
            }))
            return list.length > 0 ? (
              list.map((q: any, i: number) => (
                <div key={i} className='flex flex-col gap30'>
                  <h3 className="heading-main3">{q.question || 'Question'}</h3>
                  <div className="text text-hub" dangerouslySetInnerHTML={{ __html: q.answer || '' }} />
                </div>
              ))
            ) : (
              <div className='flex flex-col gap30'><h3 className="heading-main3">Can I get samples before ordering?</h3><p className="text text-hub">Yes, we offer samples for all custom box orders.</p></div>
            )
          })()}
        </div>
      </section>

      
      <FooterContact />
    </div>
  )
}

export async function generateStaticParams() {
  const cats = await getGrillCategories()
  const list = Array.isArray(cats) ? cats : []
  return list.map((c: any) => ({ slug: String(c?.slug || '') })).filter(p => p.slug)
}