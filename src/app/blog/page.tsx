'use client';

import { useState, useEffect, useLayoutEffect } from 'react';
import { Suspense } from 'react';
import { getbloglist } from '@/lib/wordpress'
import PaginationNav from '@/components/PaginationNav'
import BlogListCSR from '@/components/BlogListCSR'
import SEO from '@/components/SEO'
import AOS from 'aos';
import 'aos/dist/aos.css';

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
export default function Blog() {
  const perPage = 6
  // 静态生成首屏：构建期抓取全部文章并在前端切片
  const [initialPosts, setInitialPosts] = useState<any[]>([]);
  const [initialTotalPages, setInitialTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  // 初始化AOS动画
  useLayoutEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      delay: 0,
      easing: 'ease-out-cubic',
      mirror: false,
      anchorPlacement: 'top-bottom'
    });
  }, []);

  useEffect(() => {
    async function fetchPosts() {
      console.log('[Blog Page] 开始获取文章数据...')
      try {
        const posts = await getbloglist();
        console.log('[Blog Page] 获取到的文章数据:', posts)
        if (Array.isArray(posts) && posts.length > 0) {
          const slicedPosts = posts.slice(0, perPage);
          console.log('[Blog Page] 切片后的文章:', slicedPosts)
          setInitialPosts(slicedPosts);
          setInitialTotalPages(Math.ceil(posts.length / perPage));
        } else {
          console.log('[Blog Page] 没有获取到文章数据或数据格式错误')
          setInitialPosts([]);
          setInitialTotalPages(1);
        }
      } catch (error) {
        console.error('[Blog Page] 获取文章数据失败:', error)
        setInitialPosts([]);
        setInitialTotalPages(1);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen">
      <SEO 
        wpUrl="https://admin.keyfirebbq.com/blog"
        fallbackTitle="Blog - BBQ Grill Manufacturing Tips & Industry News | Keyo Customize"
        fallbackDescription="Read our latest blog posts about BBQ grill manufacturing, customization tips, industry trends, and business insights from Keyo Customize."
      />
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
        {loading ? (
          <div className="flex justify-center mt-10">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            <span className="ml-2">Loading blog posts...</span>
          </div>
        ) : (
          <Suspense fallback={<div className="flex justify-center mt-10">Loading blog content...</div>}>
            <BlogContent initialPosts={initialPosts} initialTotalPages={initialTotalPages} />
          </Suspense>
        )}
      </section>

    </div>
  );
}