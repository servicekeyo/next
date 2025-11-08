import { getbloglist } from '@/lib/wordpress'
import Link from 'next/link'
export const revalidate = 3600 // ISR
export default async function Blog() {
  const posts = await getbloglist()
  return (
    <div className="min-h-screen">
      <section className="section-1 relative isolate -z-10">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-60 xl:h-110 w-full mask-[radial-gradient(70rem_70rem_at_center,white,transparent)] stroke-gray-200"
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
        <div className='w-4/5 xl:w-3/5 mx-auto text-center'  data-aos="fade-in">
          <h1 className="heading-main">Custom BBQ Solutions</h1>
          <p className="heading-sub mt30 text-hub">From material selection to full-scale manufacturing, we share knowledge that helps you choose the right BBQ supplier and achieve high-quality custom grill production for your market.</p>
        </div>
      </section>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {posts.map((post: any) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between rounded-2xl bg-gray-50 p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-center gap-x-4 text-xs text-gray-500">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString()}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-indigo-600">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title.rendered.replace(/<[^>]+>/g, '')}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.excerpt.rendered.replace(/<[^>]+>/g, '')}
                </p>
              </div>
            </article>
          ))}
        </div>

    </div>
  );
}