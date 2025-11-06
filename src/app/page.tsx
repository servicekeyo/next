"use client";
import { QuoteButtonPrimary} from '@/components/QuoteButton';
import Image from "next/image";
import { Scroll,CalendarCheck,Factory,Handshake,Aperture,Bell,Lightbulb,Ruler,Cube,Flask,Package } from 'phosphor-react';
import FooterContact from '@/components/FooterContact';
import GrillTabs from '@/components/GrillTabs';
import ProductAccessorySwitcher from '@/components/ProductAccessorySwitcher';

export default function Home() {
  
  return (
    <div className="min-h-screen">
      <main className="section-1 bg-foreground">
        <div className="container flex-col md:flex-row flex items-center gap160">
          <div className="sm:w-[570px] md:w-1/2">
            <h1 className="heading-main">Your Trusted Custom BBQ Grill Manufacturer in China</h1>
            <div className="heading-sub mt30 text-hub">
              <p>
              Leading OEM & ODM BBQ grill manufacturer in China, providing custom charcoal, gas, and electric grills tailored for your brand and market.
            </p>
            </div>
            
            <div className="flex flex-col lg:flex-row  gap-5 mt40">
              <QuoteButtonPrimary>
                <span className="flex items-center gap-2">
                  <Bell size={20}/>
                  Get a Free Quote
                </span>
              </QuoteButtonPrimary>
              <button className="btn-secondary">
                <span className="flex items-center gap-2">
                  <Aperture size={20} />
                  Explore Customization
                </span>
              </button>
            </div>
            
          </div>
          <div className="sm:w-1/2 flex justify-end">
            <Image src="/images/index_banner3.jpg" alt="Keyo Customize" width={600} height={400} className="rounded-lg xl:rounded-tl-[100px]"
            />
          </div>
        </div>
      </main>

      <section className="section-1">
        <div className='w-2/3 mx-auto text-center '>
          <h2 className="heading-main2">Share your idea, we’ll make it real</h2>
          <p className="heading-sub mt20 text-hub">
            From concept to production, we turn your ideas into visual designs, structural plans, and manufacturing solutions. Each stage is clear, adjustable, and transparent — ensuring the final product perfectly matches your expectations.
          </p>
        </div>

          <div className="container grid md:grid-cols-2 lg:grid-cols-4 gap50">
            {/* Step 1 */}
            <div className="step-item text-center space-y-3">
              <Ruler size={64} weight="duotone" className="mx-auto" />
              <h3 className="heading-main3">2D Drawing</h3>
              <p className="heading-sub">
                Based on your ideas, we create detailed 2D drawings to clearly define dimensions, structure, and layout for easy confirmation.
              </p>
            </div>

            {/* Step 3 */}
            <div className="step-item text-center space-y-3">
              <Cube size={64} weight="duotone" className="mx-auto" />
              <h3 className="heading-main3">3D Design</h3>
              <p className="heading-sub">
                Transform the approved 2D drawings into realistic 3D models, showing appearance, materials, and functional details.
              </p>
            </div>

            {/* Step 4 */}
            <div className="step-item text-center space-y-3">
              <Flask size={64} weight="duotone" className="mx-auto" />
              <h3 className="heading-main3">Modeling & Production</h3>
              <p className="heading-sub">
                Build production-ready models and molds, preparing for efficient and precise manufacturing.
              </p>
            </div>

            {/* Step 5 */}
            <div className="step-item text-center space-y-3">
              <Factory size={64} weight="duotone" className="mx-auto" />
              <h3 className="heading-main3">Sample Approval</h3>
              <p className="heading-sub">
                Produce the final sample for your inspection, ensuring every detail meets your specifications before full-scale production.
              </p>
            </div>
          </div>
      </section>
      
      <ProductAccessorySwitcher />

      <div className="section-1">
        <div className="container flex flex-col gap80">
          <div className="max-w-4xl">
            <h2 className="heading-main2"></h2>
          </div>
          <div className='flex flex-row gap80  align-center'>
            <div className="w-1/2">
              <img alt="" src="/images/indx_one4.jpg" className="rounded-xl shadow-md" />
            </div>
            <div className='w-1/2 flex flex-col gap30 justify-center'>
                <h2 className="heading-main3">Why Choose Us</h2>
                <p className='text'>
                    At KEYO, we deliver One-Stop OEM & ODM solution—from R&D and customization to manufacturing, quality control, packaging, and logistics. Our expert team ensures a smooth journey, enabling businesses to turn their BBQ grill concepts into market-ready products successfully.
                </p>
                <dl className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 mt50">
                  <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6 dark:border-white/10">
                    <dt className="text-sm/6 text-gray-600 dark:text-gray-400">Units Annually</dt>
                      <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">2.4 Million</dd>
                  </div>
                  <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6 dark:border-white/10">
                    <dt className="text-sm/6 text-gray-600 dark:text-gray-400">Manufacturing Facility</dt>
                      <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">40,000㎡</dd>
                  </div>
                  <div className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6 dark:border-white/10">
                    <dt className="text-sm/6 text-gray-600 dark:text-gray-400">Warehouse</dt>
                      <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">20,000㎡</dd>
                  </div>
                </dl>
            </div>
          </div>
      </div>
      </div>

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

      <section className="section-1">
        <div>
          <h2 className='heading-main2 text-center'>Frequently Asked Questions</h2>
          <p className="heading-sub mt20 text-center">Below you can find some frequently asked questions regarding custom packaging and print. Please feel free to contact us if you have any other questions.</p>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2  gap80">
          <div className='flex flex-col gap30'>
            <h3 className="heading-main3">Can I get samples before ordering?</h3>
            <p>Yes, we offer samples for all custom box orders. This allows you to verify the dimensions, structure, and print quality before proceeding with full production. To request a sample, don’t hesitate to get in touch with our team. We’ll be happy to assist you.</p>
          </div>
          <div className='flex flex-col gap30'>
            <h3 className="heading-main3">What format should I send my artwork in?</h3>
            <p>Please send us your artwork in a dieline file (PDF or AI format) that is editable in Adobe Illustrator. Make sure the dieline is placed on a separate layer in your AI file, and follow our dieline design guidelines to ensure your file is ready for production.</p>
          </div>
          <div className='flex flex-col gap30'>
            <h3 className="heading-main3">Can I customize the size, material, and design of the packaging?</h3>
            <p>Yes, every aspect of your packaging can be tailored to your brand’s needs. From structure, dimensions, and materials to finishes, coatings, and full-color printing, we work closely with you to bring your vision to life. Send us your packaging idea now.</p>
          </div>
          <div className='flex flex-col gap30'>
            <h3 className="heading-main3">What is the minimum number of packages I can order?</h3>
            <p>Our MOQs are flexible and designed to support both startups and growing brands. For most packaging types, the MOQ starts at just 500 units. Regardless of the quantity you need, we’ll do our best to support you. Contact us to discuss your project and get a quote now.</p>
          </div>
          <div className='flex flex-col gap30'>
            <h3 className="heading-main3">What’s the typical lead time for custom packaging?</h3>
            <p>Once your artwork is confirmed, standard production takes 10–15 business days. Shipping times vary by region, but we’ll always provide a clear timeline upfront. Urgent deadline? Let us know — we often accommodate rush orders.</p>
          </div>
          <div className='flex flex-col gap30'>
            <h3 className="heading-main3">Do you offer eco-friendly or recyclable packaging options?</h3>
            <p>Absolutely. We offer sustainable materials, including recycled paperboard, FSC-certified kraft, soy-based inks, and biodegradable coatings. Whether you’re a clean beauty or DTC brand, we help align your packaging with your sustainability goals.</p>
          </div>
        </div>
      </section>

      

       <FooterContact />

    </div>
  );
}
