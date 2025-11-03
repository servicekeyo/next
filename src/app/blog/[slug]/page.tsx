import Image from 'next/image';
import Link from 'next/link';
import ShareBar from '@/components/ShareBar';
import ContactForm from '@/components/ContactForm';
import TableOfContents from '@/components/TableOfContents';

type WPPost = {
  id: number;
  slug: string;
  link: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    ['wp:featuredmedia']?: Array<{
      source_url: string;
      alt_text?: string;
    }>;
    author?: Array<{
      name?: string;
    }>;
  };
};

async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    // First try to get post by slug
    const res = await fetch(
      `${process.env.NODE_ENV === 'development' ? 'http://localhost:3009' : ''}/api/wordpress?endpoint=posts&slug=${encodeURIComponent(slug)}&_embed=1`,
      { next: { revalidate: 600 } }
    );
    
    if (res.ok) {
      const result = await res.json();
      if (result.success && result.data && Array.isArray(result.data) && result.data.length > 0) {
        return result.data[0] as WPPost;
      }
    }
    
    // Fallback: get recent posts and find by slug
    const fallbackRes = await fetch(
      `${process.env.NODE_ENV === 'development' ? 'http://localhost:3009' : ''}/api/wordpress?endpoint=posts&per_page=50&_embed=1`,
      { next: { revalidate: 600 } }
    );
    
    if (fallbackRes.ok) {
      const fallbackResult = await fallbackRes.json();
      if (fallbackResult.success && fallbackResult.data && Array.isArray(fallbackResult.data)) {
        const post = fallbackResult.data.find((p: WPPost) => p.slug === slug);
        if (post) return post as WPPost;
      }
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const title = post?.title?.rendered?.replace(new RegExp('<[^>]*>', 'g'), '') || 'Blog Detail';
  const description = post?.excerpt?.rendered?.replace(new RegExp('<[^>]*>', 'g'), '').trim() || 'KEYO Blog article';
  const image = post?._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://keyobarbecue.com/wp-content/uploads/2025/09/ch_banner3-2.webp';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      type: 'article',
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  // If no post found, show a simple fallback referencing the original blog
  if (!post) {
    return (
      <div className="min-h-screen">
        <main className="section-1 relative pro-banner bg-[url('https://keyobarbecue.com/wp-content/uploads/2025/09/ch_banner3-2.webp')] min-h-[220px] ">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/100 from-40% to-transparent to-100% z-10"></div>
          <div className="container flex-col md:flex-row flex items-center gap80 z-20 relative">
            <div className="md:w-5/7 lg:w-4/7 2xl:w-3/7 text-white">
              <h1 className="heading-main2">Blog Article</h1>
              <p className="text mt20">The requested article is not available.</p>
            </div>
          </div>
        </main>
        <section className="section-1">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="heading-sub mb-4">We couldn't load the article</h2>
              <p className="text mb-6">This might be due to a temporary network issue or the article may have been moved. Here are some options:</p>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Link href="/blog" className="btn-primary">
                    ← Back to Blog List
                  </Link>
                  <Link 
                    href={`https://keyobarbecue.com/blog/${slug}/`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    View on Official Blog →
                  </Link>
                </div>
                
                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Tip:</strong> You can also visit our{' '}
                    <Link href="https://keyobarbecue.com/blog/" target="_blank" className="text-primary hover:underline">
                      official blog
                    </Link>{' '}
                    to browse all articles directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const featured = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 'https://keyobarbecue.com/wp-content/uploads/2025/09/ch_banner3-2.webp';
  const titleText = post.title?.rendered || 'Untitled';
  const authorName = post._embedded?.author?.[0]?.name || 'KEYO Team';
  const publishedDate = new Date(post.date).toLocaleDateString();
  // Avoid TSX parser issue with literal regex containing `</`; use RegExp
  const plainTitle = titleText.replace(new RegExp('<[^>]*>', 'g'), '');
  const canonicalUrl = `${process.env.NODE_ENV === 'development' ? 'http://localhost:3009' : 'https://keyobarbecue.com'}/blog/${slug}`;

  // TOC helpers: extract headings and add ids
  const slugify = (text: string) => {
    const withoutTags = text.replace(new RegExp('<[^>]*>', 'g'), '');
    return withoutTags
      .toLowerCase()
      .trim()
      .replace(new RegExp('&[a-z]+;','g'), '')
      .replace(new RegExp('[^a-z0-9\s-]','g'), '')
      .replace(new RegExp('\s+','g'), '-')
      .replace(new RegExp('-+','g'), '-');
  };

  const extractHeadings = (html: string) => {
    const re = new RegExp('<h([1-6])(?:\\s[^>]*)?>([\\s\\S]*?)<\\/h\\1>', 'gi');
    const items: { id: string; text: string; level: number }[] = [];
    let match: RegExpExecArray | null;
    while ((match = re.exec(html)) !== null) {
      const level = parseInt(match[1], 10);
      const inner = match[2].replace(new RegExp('<[^>]*>', 'g'), '').trim();
      const id = slugify(inner);
      items.push({ id, text: inner, level });
    }
    return items;
  };

  const addHeadingIds = (html: string) => {
    const re = new RegExp('<h([1-6])([^>]*)>([\\s\\S]*?)<\\/h\\1>', 'gi');
    return html.replace(re, (m, lvl, attrs, inner) => {
      const plain = inner.replace(new RegExp('<[^>]*>', 'g'), '').trim();
      const id = slugify(plain);
      const hasId = new RegExp('id\\s*=', 'i').test(attrs as string);
      const newAttrs = hasId ? attrs : `${attrs} id="${id}"`;
      return `<h${lvl}${newAttrs}>${inner}</h${lvl}>`;
    });
  };

  const tocItems = extractHeadings(post.content?.rendered || '');
  const processedHtml = addHeadingIds(post.content?.rendered || '');

  return (
    <div className="min-h-screen">
      {/* Header closer to reference layout: breadcrumb, title, meta */}
      <header className="section-1">
        <div className="container max-w-5xl mx-auto">
          <nav className="text-sm text-gray-500 mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:underline">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Article</span>
          </nav>
          <h1 className="heading-main2" dangerouslySetInnerHTML={{ __html: titleText }} />
          <p className="text mt10 text-gray-600">{authorName} · {publishedDate}</p>
        </div>
      </header>

      {/* Content area with featured image and two-column layout */}
      <section className="section-1">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main content */}
            <div className="lg:col-span-8">
              {featured && (
                <div className="mt-6">
                  <Image
                    src={featured}
                    alt={post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || 'Featured image'}
                    width={1200}
                    height={675}
                    priority
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              )}

              <article className="prose max-w-none prose-h2:mt-8 prose-p:leading-7 mt-8">
                <div
                  className="content"
                  dangerouslySetInnerHTML={{ __html: processedHtml }}
                />
              </article>

              {/* Contact form inside main content */}
              <div className="mt-10">
                <ContactForm />
              </div>

              {/* Share section placed under the contact form */}
              <div className="mt-6">
                <ShareBar title={plainTitle} url={canonicalUrl} />
              </div>

              {/* Actions similar to reference site footer area */}
              <div className="mt40 flex flex-wrap items-center gap-4">
                <Link href={post.link || `https://keyobarbecue.com/blog/`} target="_blank" className="text-primary hover:underline">
                  View on keyobarbecue.com →
                </Link>
                <Link href="/blog" className="text-gray-600 hover:underline">Back to Blog</Link>
              </div>
            </div>

            {/* Sidebar: Table of Contents only */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <TableOfContents items={tocItems} />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}