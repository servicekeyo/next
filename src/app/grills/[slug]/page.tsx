import Image from 'next/image';
import Link from 'next/link';


type PageProps = {
  params: { slug: string };
};

export default async function GrillCategoryPage({ params }: PageProps) {
  const slug = params.slug;
  const products: any[] = [];
  const error: string | null = null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">分类：{slug}</h1>
        <Link href="/" className="text-blue-600 hover:text-blue-700">返回首页</Link>
      </div>

      {error ? (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded">
          {error}
        </div>
      ) : products.length === 0 ? (
        <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 text-yellow-800 rounded">
          暂无该分类的产品。
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {products.map((product) => (
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