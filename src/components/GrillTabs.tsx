"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import { fetchGrillCategories, fetchProductsByCategory, Product, ProductCategory } from '@/lib/wordpress';

interface GrillTabsProps {
  limit?: number;
}

export default function GrillTabs({ limit = 6 }: GrillTabsProps) {
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);
  const [productsCache, setProductsCache] = useState<Record<string, Product[]>>({});
  const [loadingCategories, setLoadingCategories] = useState<boolean>(true);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const preloadedImages = useRef<Set<string>>(new Set());
  const prefetchedCategories = useRef<Set<string>>(new Set());
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center', loop: false });
  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const preloadImage = (url: string) => {
    if (!url || preloadedImages.current.has(url)) return;
    const img = new window.Image();
    img.src = url;
    preloadedImages.current.add(url);
  };

  useEffect(() => {
    const loadCategories = async () => {
      try {
        setLoadingCategories(true);
        const cats = await fetchGrillCategories();
        setCategories(cats);
        if (cats.length > 0) {
          setActiveCategory(cats[0].slug);
        }
      } catch (e) {
        console.error('Failed to load grill categories', e);
        setError('无法加载分类');
      } finally {
        setLoadingCategories(false);
      }
    };
    loadCategories();
  }, []);

  useEffect(() => {
    const loadProducts = async () => {
      if (!activeCategory) return;
      try {
        setError(null);
        // Use cached products if available
        if (productsCache[activeCategory]) {
          setProducts(productsCache[activeCategory]);
          setLoadingProducts(false);
          return;
        }
        setLoadingProducts(true);
        const items = await fetchProductsByCategory(activeCategory, limit);
        setProducts(items);
        setProductsCache(prev => ({ ...prev, [activeCategory]: items }));
        // Prefetch images for faster subsequent renders
        items.forEach(p => {
          preloadImage(p.image);
          if (p.frontImage) preloadImage(p.frontImage);
          if (p.backImage) preloadImage(p.backImage);
        });
      } catch (e) {
        console.error('Failed to load products', e);
        setError('无法加载产品');
      } finally {
        setLoadingProducts(false);
      }
    };
    loadProducts();
  }, [activeCategory, limit]);

  // Prefetch products for all categories in background so tab switches are instant
  useEffect(() => {
    const prefetchAll = async () => {
      if (!categories || categories.length === 0) return;
      const tasks = categories.map((cat) => (async () => {
        if (productsCache[cat.slug] || prefetchedCategories.current.has(cat.slug)) return;
        try {
          const items = await fetchProductsByCategory(cat.slug, limit);
          setProductsCache(prev => ({ ...prev, [cat.slug]: items }));
          items.forEach(p => {
            preloadImage(p.image);
            if (p.frontImage) preloadImage(p.frontImage);
            if (p.backImage) preloadImage(p.backImage);
          });
          prefetchedCategories.current.add(cat.slug);
        } catch (e) {
          // ignore prefetch errors; normal flow will use fallback/cache
        }
      })());
      await Promise.all(tasks);
    };
    prefetchAll();
  }, [categories, limit]);

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-5 py-2">
        {loadingCategories ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-10 w-24 bg-gray-200 rounded animate-pulse" />
          ))
        ) : (
          categories.map((cat) => (
            <div key={cat.slug} className="flex items-center gap-2">
              <button
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-4 py-2 rounded border transition-colors whitespace-nowrap ${
                  activeCategory === cat.slug
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {cat.name}
              </button>
            </div>
          ))
        )}
      </div>

      {/* Products Grid / Mobile Slider */}
      {loadingProducts ? (
        <>
          {/* Mobile slider skeleton */}
          <div className="md:hidden mt-6">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-4 px-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="snap-center shrink-0 w-[85%] bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-200" />
                  <div className="p-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                    <div className="h-3 bg-gray-200 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Desktop grid skeleton */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200" />
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : error ? (
        <div className="text-center text-gray-600 mt-10">{error}</div>
      ) : products.length === 0 ? (
        <div className="text-center text-gray-600 mt-10">暂无该分类产品</div>
      ) : (
        <>
          {/* Mobile: Embla slider (one-per-view) */}
          <div className="md:hidden mt-6">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4">
                {products.slice(0, 6).map((product) => (
                  <div key={product.id} className="shrink-0 w-[85%] bg-white rounded-lg shadow-lg overflow-hidden h-full">
                    <div className="relative h-48 bg-gray-100 group">
                      <Image
                        src={product.frontImage || product.image}
                        alt={product.frontAlt || product.name}
                        fill
                        unoptimized
                        className="object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                      />
                      <Image
                        src={product.backImage || product.image}
                        alt={product.backAlt || product.name}
                        fill
                        unoptimized
                        className="object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{product.name}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3" dangerouslySetInnerHTML={{ __html: product.description }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex justify-between px-2">
              <button onClick={scrollPrev} className="px-3 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300">上一张</button>
              <button onClick={scrollNext} className="px-3 py-2 rounded bg-gray-200 text-gray-800 hover:bg-gray-300">下一张</button>
            </div>
          </div>
          {/* Desktop: 2x3 grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {products.slice(0, 6).map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                <div className="relative h-48 bg-gray-100 group">
                  <Image
                    src={product.frontImage || product.image}
                    alt={product.frontAlt || product.name}
                    fill
                    unoptimized
                    className="object-cover transition-opacity duration-300 opacity-100 group-hover:opacity-0"
                  />
                  <Image
                    src={product.backImage || product.image}
                    alt={product.backAlt || product.name}
                    fill
                    unoptimized
                    className="object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3" dangerouslySetInnerHTML={{ __html: product.description }} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <Link
              href={`/grills/${activeCategory}`}
              className="inline-flex items-center gap-2 bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-black transition-colors"
            >
              View More
            </Link>
          </div>
        </>
      )}
    </div>
  );
}