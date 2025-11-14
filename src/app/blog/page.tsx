import { getbloglist } from '@/lib/wordpress'
import PaginationNav from '@/components/PaginationNav'
import BlogListCSR from '@/components/BlogListCSR'
export const dynamic = 'force-static'
export const revalidate = false
export default async function Blog({
  searchParams,
}: {
  searchParams?: { page?: string }
}) {
  const perPage = 6
  // 静态生成首屏：构建期抓取全部文章并在前端切片
  const allPosts = await getbloglist()
  const initialPosts = Array.isArray(allPosts) ? allPosts.slice(0, perPage) : []
  const initialTotalPages = Array.isArray(allPosts) && allPosts.length > 0 ? Math.ceil(allPosts.length / perPage) : 1
  return (
    <div className="min-h-screen">
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
        <div className='herotitle-w text-center' suppressHydrationWarning data-aos="fade-up" data-aos-duration="800">
          <h1 className="heading-main" data-aos="fade-up" data-aos-delay="200">Custom BBQ Solutions</h1>
          <p className="heading-sub mt30 text-hub" data-aos="fade-up" data-aos-delay="400">From material selection to full-scale manufacturing, we share knowledge that helps you choose the right BBQ supplier and achieve high-quality custom grill production for your market.</p>
        </div>
      </section>

      <section className="section-3 2xl:mt-[-30px]" data-aos="fade-up" data-aos-duration="800">
        <BlogListCSR initialPosts={initialPosts} perPage={perPage} initialTotalPages={initialTotalPages} />
        {/* Pagination */}
        <PaginationNav totalPages={initialTotalPages} />
      </section>

    </div>
  );
}