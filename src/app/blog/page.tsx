"use client";
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  link: string;
  slug?: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/wordpress?endpoint=posts&per_page=9&_embed=1');
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const result = await res.json();
        
        if (!result.success || !result.data) {
          throw new Error('API response invalid');
        }
        
        const mapped: BlogPost[] = result.data.map((post: any) => ({
          id: post.id,
          title: post.title?.rendered?.replace(/<[^>]*>/g, '') || 'Untitled',
          excerpt: (post.excerpt?.rendered || post.content?.rendered || '')
            .replace(/<[^>]*>/g, '')
            .trim()
            .substring(0, 180) + '...',
          image:
            post._embedded?.['wp:featuredmedia']?.[0]?.source_url ||
            post.jetpack_featured_media_url ||
            post.featured_media_url ||
            'https://keyobarbecue.com/wp-content/uploads/2025/09/ch_banner3-2.webp',
          slug: post.slug,
          link: post.slug ? `/blog/${post.slug}` : (post.link || `https://keyobarbecue.com/blog/`)
        }));
        setPosts(mapped);
      } catch (e: any) {
        setError(e?.message || 'Failed to fetch');
        // Fallback static posts with proper slugs
        setPosts([
          {
            id: 1,
            title: 'How Packaging Drives Retail Impact',
            excerpt:
              "Walk down any supermarket aisle and you'll see it instantly: some products pull the eye, others blend...",
            image: 'https://keyobarbecue.com/wp-content/uploads/2025/09/ch_banner3-2.webp',
            slug: 'a-complete-design-guide-to-shelf-ready-packaging-formats-features-use-cases',
            link: '/blog/a-complete-design-guide-to-shelf-ready-packaging-formats-features-use-cases'
          },
          {
            id: 2,
            title: 'Jute: The Golden Fiber in Modern Packaging',
            excerpt:
              'Jute has been called the "golden fiber" for good reason. Strong, breathable, and fully biodegradable,...',
            image: 'https://keyobarbecue.com/wp-content/uploads/2025/09/ch_banner3-2.webp',
            slug: 'jute-golden-fiber-modern-packaging',
            link: '/blog/jute-golden-fiber-modern-packaging'
          },
          {
            id: 3,
            title: 'First Impressions: B2B Packaging That Converts',
            excerpt:
              'In packaging, first impressions shape how a product and the brand behind it is remembered. For B2B companies,...',
            image: 'https://keyobarbecue.com/wp-content/uploads/2025/09/ch_banner3-2.webp',
            slug: 'first-impressions-b2b-packaging-converts',
            link: '/blog/first-impressions-b2b-packaging-converts'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Head>
        <title>KEYO Blog | Insights on BBQ, Manufacturing & Packaging</title>
        <meta
          name="description"
          content="Read KEYO's latest insights on BBQ grills, outdoor cooking, OEM/ODM manufacturing, and packaging best practices."
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="KEYO Barbecue" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="KEYO Blog | Insights on BBQ, Manufacturing & Packaging" />
        <meta property="og:description" content="Thoughts and updates from KEYO on grills and manufacturing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://keyobarbecue.com/blog" />
        <meta property="og:image" content="https://keyobarbecue.com/wp-content/uploads/2025/09/ch_banner3-2.webp" />
        <link rel="canonical" href="https://keyobarbecue.com/blog" />
      </Head>

      <div className="min-h-screen">
        <main className="section-1 relative pro-banner bg-[url('https://keyobarbecue.com/wp-content/uploads/2025/09/ch_banner3-2.webp')] min-h-[220px] ">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/100 from-40% to-transparent to-100% z-10"></div>
          <div className="container flex-col md:flex-row flex items-center gap80 z-20 relative">
            <div className="md:w-5/7 lg:w-4/7 2xl:w-3/7 text-white">
              <h1 className="heading-main2">KEYO Blog</h1>
              <p className="text mt20">Updates, tips, and insights from our team.</p>
            </div>
          </div>
        </main>

        <section className="section-1">
          <div className="container">

            {loading && (
              <p className="heading-sub">Loading posts...</p>
            )}

            {!loading && posts.length === 0 && (
              <p className="heading-sub">No posts available at the moment.</p>
            )}

            {!loading && posts.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <article key={post.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                    <Link href={post.link}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={600}
                        height={360}
                        className="w-full h-[200px] object-cover"
                      />
                    </Link>
                    <div className="p-5">
                      <Link href={post.link}>
                        <h3 className="text-base md:text-lg font-semibold hover:text-primary transition-colors duration-200">{post.title}</h3>
                      </Link>
                      <p className="heading-sub mt20">{post.excerpt}</p>
                      <div className="mt-4">
                        <Link href={post.link} className="text-primary hover:underline">
                          Read more →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {error && (
              <p className="text-red-600 mt-4">Note: Failed to fetch live posts, showing fallback content.</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
}