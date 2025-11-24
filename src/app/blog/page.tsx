import { Suspense } from 'react';
import { getbloglist } from '@/lib/wordpress'
import PaginationNav from '@/components/PaginationNav'
import BlogListCSR from '@/components/BlogListCSR'
import { getMetadataFromRankMath } from '@/lib/seoServer';
import FooterContact from '@/components/FooterContact';

export const dynamic = 'force-static'
export const revalidate = 600

export async function generateMetadata() {
  const wpUrl = 'https://admin.keyfirebbq.com/blog'
  return await getMetadataFromRankMath(wpUrl, {
    title: 'Blog - BBQ Grill Manufacturing Tips & Industry News | Keyo Customize',
    description: 'Read our latest blog posts about BBQ grill manufacturing, customization tips, industry trends, and business insights from Keyo Customize.'
  })
}

// Wrapper component for Suspense
function BlogContent({ initialPosts, initialTotalPages }: { initialPosts: any[]; initialTotalPages: number }) {
  console.log('[BlogContent] 接收到的初始数据:', initialPosts)
  console.log('[BlogContent] 总页数:', initialTotalPages)
  return (
    <>
      {initialPosts.length > 0 ? (
        <>
          <BlogListCSR initialPosts={initialPosts} perPage={6} initialTotalPages={initialTotalPages} />
          <Suspense fallback={<div className="flex justify-center mt-10">Loading pagination...</div>}>
            <PaginationNav totalPages={initialTotalPages} />
          </Suspense>
        </>
      ) : (
        <div className="flex justify-center mt-10 text-gray-600">No blog posts available</div>
      )}
    </>
  );
}

export default async function Blog() {
  const perPage = 6
  let initialPosts = [];
  let initialTotalPages = 1;
  try {
    const posts = await getbloglist();
    if (Array.isArray(posts) && posts.length > 0) {
      initialPosts = posts.slice(0, perPage);
      initialTotalPages = Math.ceil(posts.length / perPage);
    }
  } catch (error) {
    console.error('[Blog Page] 获取文章数据失败:', error)
  }

  return (
    <div className="min-h-screen" suppressHydrationWarning>
      {/*
      <SEO 
        wpUrl="https://admin.keyfirebbq.com/blog"
        fallbackTitle="Blog - BBQ Grill Manufacturing Tips & Industry News | Keyo Customize"
        fallbackDescription="Read our latest blog posts about BBQ grill manufacturing, customization tips, industry trends, and business insights from Keyo Customize."
      />
      */}
      <section className="section-1 relative isolate -z-10">
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
        <div className='herotitle-w text-center' data-aos="fade-up" data-aos-duration="800">
          <h1 className="heading-main" data-aos="fade-up" data-aos-delay="200">Custom BBQ Solutions</h1>
          <p className="heading-sub mt30 text-hub" data-aos="fade-up" data-aos-delay="400">From material selection to full-scale manufacturing, we share knowledge that helps you choose the right BBQ supplier and achieve high-quality custom grill production for your market.</p>
        </div>
      </section>

      <section className="section-3 2xl:mt-[-30px]" data-aos="fade-up" data-aos-duration="800">
        <Suspense fallback={<div className="flex justify-center mt-10">Loading blog content...</div>}>
          <BlogContent initialPosts={initialPosts} initialTotalPages={initialTotalPages} />
        </Suspense>
      </section>
      <FooterContact />
    </div>
  );
}