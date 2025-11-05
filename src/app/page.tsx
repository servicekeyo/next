"use client";
import { QuoteButtonPrimary} from '@/components/QuoteButton';
import Image from "next/image";
import { Scroll,CalendarCheck,Factory,Handshake,Aperture,Bell } from 'phosphor-react';
import FooterContact from '@/components/FooterContact';
import GrillTabs from '@/components/GrillTabs';
export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="section-1 bg-foreground">
        <div className="container flex-col md:flex-row flex items-center gap160">
          <div className="sm:w-[570px] md:w-1/2">
            <h1 className="heading-main">Your Trusted OEM & ODM BBQ Grill Manufacturer in China</h1>
            <div className="heading-sub mt30 text-hub">
              <p>
              KEYO Barbecue specializes in designing and manufacturing high-quality BBQ grills for global brands, importers, and distributors.
            </p>
            <p>
              We provide full customization service—from product design to packaging—helping you build your own BBQ brand with confidence.
            </p>
            </div>
            
            <div className="flex flex-col lg:flex-row  gap-4 mt40">
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
        <div className='w-2/3 mx-auto'>
          <h2 className='heading-main2 text-center'>Custom Your BBQ Grill</h2>
          <p className="heading-sub mt30 text-hub text-center">
            Delivering high-quality, eco-friendly custom packaging with flexible designs and reliable manufacturing to help your brand stand out with confidence and sustainability.
          </p>
        </div>
        <div className="container flex-col md:flex-row flex items-center gap80">
          <GrillTabs limit={6} />
        </div>
      </section>

      <section className="section-1 bg-foreground">
        <div>
          <h2 className='heading-main2 text-center'>Hassle-Free Custom Packaging Ordering</h2>
          <p className="heading-sub mt20 text-center">Only four simple steps. Fast response. Reliable delivery. Get the custom packaging you need for your brand, without the headaches.</p>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap80">
          <div className='space-y-5 text-center'>
            <Scroll size={80} weight="duotone" className="mx-auto" />
            <h3 className="heading-main3">Get Instant Quote</h3>
            <p>Send us your packaging needs. We’ll get back quickly with a clear, no-obligation quote.</p>
          </div>
          <div className='space-y-5 text-center'>
            <CalendarCheck size={80} weight="duotone" className="mx-auto" />
            <h3 className="heading-main3">Confirm Specs</h3>
            <p>Review materials, size, and design. We’ll finalize every detail before production begins.</p>
          </div>
          <div className='space-y-5 text-center'>
            <Factory size={80} weight="duotone" className="mx-auto" />
            <h3 className="heading-main3">Track Your Order</h3>
            <p>Once your order is processed, we’ll send you a tracking number to keep you updated on the delivery status.</p>
          </div>
          <div className='space-y-5 text-center'>
            <Handshake size={80} weight="duotone" className="mx-auto" />
            <h3 className="heading-main3">Receive Your Custom Packaging</h3>
            <p>Once your order is processed, we’ll send you a tracking number to keep you updated on the delivery status.</p>
          </div>
        </div>
      </section>
      
      <section className="section-1">
        <div>
          <h2 className='heading-main2 text-center'>Types of Packaging and Print We Offer</h2>
          <p className="heading-sub mt20 text-center">We provide businesses with a range of packaging and printing solutions. Packoi is a certified one-stop shop for custom boxes, custom bags, and marketing materials.</p>
        </div>
        <div className='flex flex-col gap80'>
          <div className="container flex-col md:flex-row flex items-center gap80">
            <div className="sm:w-1/2">
              <Image src="https://packoi.com/wp-content/uploads/2022/08/Custom-Boxes.avif" alt="Keyo Customize" width={800} height={600} />
            </div>
            <div className="sm:w-1/2 space-y-5 xl:space-y-8">
              <h3 className="heading-main3">Custom Printed Boxes</h3>
              <p className="text">We print and design custom boxes for mailing, shipping, and displaying products. Our solutions target all types of businesses, ensuring your needs and expectations are addressed. No matter where you are located, you can always rely on us.</p>
              <QuoteButtonPrimary className='mt20'>Get A Instant Quote Now</QuoteButtonPrimary>
            </div>
          </div>
          <div className="container flex-col-reverse md:flex-row flex items-center gap80">
            <div className="sm:w-1/2 space-y-5 xl:space-y-8">
              <h3 className="heading-main3">Custom Printed Bags</h3>
              <p className="text">Custom bags are multipurpose. They can be used for packaging gifts and shopping, among other uses. Bags are made from sturdy materials to guarantee the safety of your goods. You can always rely on us for the best experience.</p>
              <QuoteButtonPrimary className='mt20'>Get A Instant Quote Now</QuoteButtonPrimary>
            </div>
            <div className="sm:w-1/2">
              <Image src="https://packoi.com/wp-content/uploads/2022/08/Custom-Bags.avif" alt="Keyo Customize" width={800} height={600} />
            </div>
          </div>
          <div className="container flex-col md:flex-row flex items-center gap80">
            <div className="sm:w-1/2">
              <Image src="https://packoi.com/wp-content/uploads/2022/08/Custom-Printed-Marketing-Materials.avif" alt="Keyo Customize" width={800} height={600} />
            </div>
            <div className="sm:w-1/2 space-y-5 xl:space-y-8">
              <h3 className="heading-main3">Custom Printed Marketing Materials</h3>
              <p className="text">If you want to promote your brand, we have the right materials to help you implement your marketing strategy effectively. We print brochures, catalogs, and booklets that capture brand information effectively. We design and print with your brand at heart.</p>
              <QuoteButtonPrimary className='mt20'>Get A Instant Quote Now</QuoteButtonPrimary>
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

       <FooterContact />

    </div>
  );
}
