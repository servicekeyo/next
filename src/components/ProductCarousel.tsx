"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { fetchProductsByCategory, Product } from '@/lib/wordpress';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProductCarouselProps {
  category: string;
  limit?: number;
  title?: string;
  description?: string;
}

export default function ProductCarousel({ 
  category, 
  limit = 12, 
  title = "Multiple Styles Suitable for Multiple Purposes",
  description = "Explore our diverse range of high-quality grills designed to meet various cooking needs and preferences."
}: ProductCarouselProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedProducts = await fetchProductsByCategory(category, limit);
        setProducts(fetchedProducts);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products');
        // 如果API调用失败，使用示例数据作为后备
        const sampleProducts: Product[] = [
          {
            id: 1,
            name: "Premium Charcoal Grill",
            slug: "premium-charcoal-grill",
            image: "/images/sample-grill-1.jpg",
            description: "High-quality charcoal grill perfect for outdoor cooking",
            price: "$299.99",
            category: category
          },
          {
            id: 2,
            name: "Deluxe Gas Grill",
            slug: "deluxe-gas-grill",
            image: "/images/sample-grill-2.jpg",
            description: "Professional gas grill with multiple burners",
            price: "$499.99",
            category: category
          },
      {
        id: 3,
        name: "Portable BBQ Grill",
        slug: "portable-bbq-grill",
        image: "/images/sample-grill-3.jpg",
        description: "Compact and portable grill for camping",
        price: "$149.99",
        category: category
      },
      {
        id: 4,
        name: "Electric Indoor Grill",
        slug: "electric-indoor-grill",
        image: "/images/sample-grill-4.jpg",
        description: "Perfect for indoor grilling all year round",
        price: "$199.99",
        category: category
      }
        ];
        setProducts(sampleProducts.slice(0, limit));
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [category, limit]);

  if (loading) {
    return (
      <div className="w-full">
        {/* Section Header Skeleton */}
        <div className="text-center mb-12">
          <div className="h-8 bg-gray-200 rounded-lg w-96 mx-auto mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-80 mx-auto animate-pulse"></div>
        </div>

        {/* Product Skeleton Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 text-gray-600">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
            <span>Loading products...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error || products.length === 0) {
    return (
      <div className="w-full py-16">
        <div className="text-center">
          <p className="text-gray-600">{error || 'No products found for this category.'}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full">
      {/* Product Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="product-carousel [&_.swiper-pagination-bullet]:bg-blue-600 [&_.swiper-pagination-bullet]:opacity-50 [&_.swiper-pagination-bullet-active]:opacity-100 [&_.swiper-button-next]:text-blue-600 [&_.swiper-button-prev]:text-blue-600 [&_.swiper-button-next:after]:text-xl [&_.swiper-button-prev:after]:text-xl [&_.swiper-button-next:after]:font-bold [&_.swiper-button-prev:after]:font-bold"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-4">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}