"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { fetchGrillCategories, fetchProductsByCategory, Product, ProductCategory } from '@/lib/wordpress';

interface GrillTabsProps {
  limit?: number;
}

export default function GrillTabs({ limit = 12 }: GrillTabsProps) {
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);
  const [loadingCategories, setLoadingCategories] = useState<boolean>(true);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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
        setLoadingProducts(true);
        setError(null);
        const items = await fetchProductsByCategory(activeCategory, limit);
        setProducts(items);
      } catch (e) {
        console.error('Failed to load products', e);
        setError('无法加载产品');
      } finally {
        setLoadingProducts(false);
      }
    };
    loadProducts();
  }, [activeCategory, limit]);

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex gap-2 md:gap-4 overflow-x-auto no-scrollbar py-2">
        {loadingCategories ? (
          Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-10 w-24 bg-gray-200 rounded animate-pulse" />
          ))
        ) : (
          categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-4 py-2 rounded border transition-colors whitespace-nowrap ${
                activeCategory === cat.slug
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'
              }`}
            >
              {cat.name}
            </button>
          ))
        )}
      </div>

      {/* Products Grid */}
      {loadingProducts ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
              <div className="h-48 bg-gray-200" />
              <div className="p-4">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-3 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="text-center text-gray-600 mt-10">{error}</div>
      ) : products.length === 0 ? (
        <div className="text-center text-gray-600 mt-10">暂无该分类产品</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
              <div className="relative h-48 bg-gray-100">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3" dangerouslySetInnerHTML={{ __html: product.description }} />
                <div className="mt-4">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200">
                    了解更多
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}