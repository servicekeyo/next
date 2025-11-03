"use client";
import { QuoteButtonPrimary} from '@/components/QuoteButton';
import { Check } from "phosphor-react";
import Image from "next/image";

export default function PublicCategory() {
  return (
    <div>
      <section className="section-1 bg-foreground">
        <div>
          <h2 className='heading-main2 text-center '>Manufacturing and Shipping Time Comparing</h2>
          <p className="heading-sub mt20 text-center">Our barbecue grills are made of high-quality materials available on the market, with strict selection of materials from the main body to detailed accessories. It is worth mentioning that we have a significant advantage in production efficiency, almost surpassing most manufacturers in the same industry nationwide. Here is our estimated production cycle for your reference.</p>
        </div>
        <div className="container">
            <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold"></th>
                  <th className="px-6 py-4 text-center font-semibold">KEYO</th>
                  <th className="px-6 py-4 text-center font-semibold"> Other Traditional Factories</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">Delivery Time</td>
                  <td className="px-6 py-4 text-center text-gray-700">30-45 Days</td>
                  <td className="px-6 py-4 text-center text-gray-700">45-60 Days</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">Efficiency</td>
                  <td className="px-6 py-4 text-center text-gray-700">6000+ Pcs/Day</td>
                  <td className="px-6 py-4 text-center text-gray-700">3000+ Pcs/Day</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">Template</td>
                  <td className="px-6 py-4 text-center text-gray-700">7 Days</td>
                  <td className="px-6 py-4 text-center text-gray-700">15 Days</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">Inspect Packaging</td>
                  <td className="px-6 py-4 text-center text-gray-700">1-2 Days</td>
                  <td className="px-6 py-4 text-center text-gray-700">3+ Days</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">Transit</td>
                  <td className="px-6 py-4 text-center text-gray-700">5-30 Days</td>
                  <td className="px-6 py-4 text-center text-gray-700">5-30 Days</td>
                </tr>
              </tbody>
            </table>
        </div>
      </section>
      <section className="section-1">
        <div>
          <h2 className='heading-main2 text-center '>Why Choose KEYO?</h2>
          <p className="heading-sub mt20 text-center">We pride ourselves on providing excellent customer service as a BBQ grill manufacturer. For your company, we want to create, manufacture, and deliver premium custom BBQ grills.​</p>
        </div>
        <div className="container flex-col md:flex-row flex items-center gap80">
          <div className="sm:w-1/2">
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/why.webp" alt="Keyo Customize" width={800} height={600} />
          </div>
          <div className="sm:w-1/2 space-y-5 xl:space-y-8">
            <p className='text'>At KEYO, we have spent over two decades perfecting our box services. This includes selecting the finest materials available and growing your business. Look no further than us if you want rapid manufacturing, unbeatable prices, and exceptional customer service. Here’s what else you get when you use us:</p>
             <ul className="text font-bold space-y-2">
                <li className="flex items-center gap-2"><Check size={24} weight="bold" />Free dieline design for your gift boxes</li>
                <li className="flex items-center gap-2"><Check size={24} weight="bold" />Low MOQ to help you start your business</li>
                <li className="flex items-center gap-2"><Check size={24} weight="bold" />The fastest turn-around in market</li>
                <li className="flex items-center gap-2"><Check size={24} weight="bold" />Competitively priced for production</li>
             </ul>
             <QuoteButtonPrimary>Get A Instant Quote Now</QuoteButtonPrimary>
          </div>
        </div>
      </section>

      <section className="section-1 banner bg-fixed  bg-[url('https://packoi.com/wp-content/uploads/2022/03/custom-printed-boxes.jpg')]">
        <div>
        <h2 className='heading-main2 text-center '>What Our Customers Say About Us</h2>
        <p className="heading-sub mt20 text-center">We’ve served hundreds of satisfied customers. Here are some of their reviews.</p>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap80">
          
          {/* 客户评价卡片 1 */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-700 leading-relaxed">
              "Keyo Customize delivered exactly what we needed for our product packaging. The quality exceeded our expectations and the turnaround time was impressive. Our customers love the professional look!"
            </p>
            <div className="flex items-center my-6 justify-center">
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">Sarah Johnson</h4>
                <p className="text-sm text-gray-600">E-commerce Store Owner</p>
              </div>
            </div>
            <div className="flex mb-4 justify-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            
          </div>

          {/* 客户评价卡片 2 */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-700 leading-relaxed">
              "Working with Keyo has been a game-changer for our brand. Their custom bags are not only beautiful but also eco-friendly. The team was responsive and helped us through every step of the process."
            </p>
            <div className="flex items-center my-6 justify-center">
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">Michael Chen</h4>
                <p className="text-sm text-gray-600">Startup Founder</p>
              </div>
            </div>
            <div className="flex mb-4 justify-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            
          </div>

          {/* 客户评价卡片 3 */}
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-700 leading-relaxed">
              "The marketing materials from Keyo helped us stand out at trade shows. The print quality is outstanding and the design perfectly captured our brand identity. Highly recommended!"
            </p>
            <div className="flex items-center my-6 justify-center">
              <div className="ml-4">
                <h4 className="font-semibold text-gray-900">Lisa Rodriguez</h4>
                <p className="text-sm text-gray-600">Marketing Director</p>
              </div>
            </div>
            <div className="flex mb-4 justify-center">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">★</span>
              ))}
            </div>
            
          </div>

        </div>
      </section>
      
  </div>
  );
}