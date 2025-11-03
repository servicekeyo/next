"use client";
import { Scroll, CalendarCheck, Factory, Handshake } from 'phosphor-react';
import Image from "next/image";
import { QuoteButtonPrimary} from '@/components/QuoteButton';
import ProductCarousel from '@/components/ProductCarousel';
import PublicCategory from '@/components/PublicCategory';
import FooterContact from '@/components/FooterContact';
import { useState } from 'react';
import { CaretDown, CaretUp } from 'phosphor-react';
import Head from 'next/head';

export default function CharcoalGrillPage() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0])); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };
  return (
    <>
      <Head>
        <title>Professional Charcoal Grill Manufacturer | Wholesale BBQ Grills | KEYO</title>
        <meta name="description" content="Leading charcoal grill manufacturer offering wholesale BBQ grills for restaurants, retailers & distributors. Custom sizes, commercial-grade quality, fast delivery. MOQ 300 units." />
        <meta name="keywords" content="charcoal grill manufacturer, wholesale BBQ grills, commercial charcoal grills, kettle grills, barbecue equipment, restaurant grills, custom BBQ grills, charcoal barbecue wholesale" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="KEYO Barbecue" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Professional Charcoal Grill Manufacturer | Wholesale BBQ Grills | KEYO" />
        <meta property="og:description" content="Leading charcoal grill manufacturer offering wholesale BBQ grills for restaurants, retailers & distributors. Custom sizes, commercial-grade quality, fast delivery." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://keyobarbecue.com/wholesale/charcoal-grill" />
        <meta property="og:image" content="https://keyobarbecue.com/wp-content/uploads/2025/09/ch_banner3-2.webp" />
        <meta property="og:site_name" content="KEYO Barbecue" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Charcoal Grill Manufacturer | Wholesale BBQ Grills" />
        <meta name="twitter:description" content="Leading charcoal grill manufacturer offering wholesale BBQ grills for restaurants, retailers & distributors." />
        <meta name="twitter:image" content="https://keyobarbecue.com/wp-content/uploads/2025/09/ch_banner3-2.webp" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="CN" />
        <meta name="geo.placename" content="China" />
        <meta name="language" content="en" />
        <link rel="canonical" href="https://keyobarbecue.com/wholesale/charcoal-grill" />
        
        {/* Product Schema Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Professional Charcoal Grill",
              "description": "High-quality charcoal grills for wholesale, featuring kettle grills with spherical baking chambers for even heat circulation. Perfect for restaurants, retailers, and commercial use.",
              "category": "Barbecue Equipment",
              "brand": {
                "@type": "Brand",
                "name": "KEYO"
              },
              "manufacturer": {
                "@type": "Organization",
                "name": "KEYO Barbecue",
                "url": "https://keyobarbecue.com",
                "address": {
                  "@type": "PostalAddress",
                  "addressCountry": "CN"
                }
              },
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "USD",
                "seller": {
                  "@type": "Organization",
                  "name": "KEYO Barbecue"
                },
                "businessFunction": "https://schema.org/Sell",
                "eligibleQuantity": {
                  "@type": "QuantitativeValue",
                  "minValue": 300,
                  "unitText": "units"
                }
              },
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Minimum Order Quantity",
                  "value": "300 units"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Production Capacity",
                  "value": "6000+ units per day"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Delivery Time",
                  "value": "30-45 days"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Material",
                  "value": "High-quality steel"
                },
                {
                  "@type": "PropertyValue",
                  "name": "Features",
                  "value": "Temperature control, portable design, corrosion resistant"
                }
              ],
              "audience": {
                "@type": "BusinessAudience",
                "audienceType": "Wholesale Buyers, Restaurants, Retailers, Distributors"
              }
            })
          }}
        />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "KEYO Barbecue",
              "url": "https://keyobarbecue.com",
              "logo": "https://keyobarbecue.com/logo.png",
              "description": "Professional charcoal grill manufacturer specializing in wholesale BBQ equipment for restaurants, retailers, and distributors worldwide.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "sales",
                "availableLanguage": ["English", "Chinese"]
              },
              "makesOffer": {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Product",
                  "name": "Charcoal Grills",
                  "category": "Barbecue Equipment"
                }
              }
            })
          }}
         />
         
         {/* FAQ Schema */}
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{
             __html: JSON.stringify({
               "@context": "https://schema.org",
               "@type": "FAQPage",
               "mainEntity": [
                 {
                   "@type": "Question",
                   "name": "What size charcoal grill should I order for my business?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "It depends on your typical volume. For restaurants serving 20-40 guests per service, a 22-inch kettle grill or standard barrel grill (around 400-500 sq in) works well. Catering operations or high-volume restaurants should look at our heavy-duty models with 600-800+ square inches of cooking space. If you're a retailer, the 22-inch size tends to be the sweet spot - big enough for family cookouts but not overwhelming for storage or price point."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "Can these charcoal grills handle commercial/restaurant use?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Our heavy-duty and commercial-grade models are specifically built for restaurant environments. They feature thicker steel construction (12-gauge vs. 16-gauge on consumer models), reinforced legs, commercial-grade casters, and components designed for daily use. We have customers running these grills 5-6 days a week for years. Consumer models work great for personal use but aren't engineered for that kind of constant operation."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "What's your minimum order quantity for wholesale?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "For our standard charcoal grill models, the MOQ starts at 300 units. If you're looking at custom specifications - different sizes, colors, or branded features - the MOQ is typically 200-500 units depending on the level of customization. We're flexible with first-time customers and can discuss options that work for your market entry strategy."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "How do you handle customization for charcoal grills?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "We offer three main customization levels: • Size adjustments - Modify cooking surface dimensions to fit your market needs • Shape variations - Different leg designs, side table configurations, or body styles• Color & finish - Custom powder coat colors, branded logos, or specific finishesThe process typically takes 7-10 days for design confirmation, then standard production time. We provide samples before full production runs to ensure everything matches your specifications."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "What sets your manufacturing apart from other suppliers?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Three things make a difference: production speed, quality control, and flexibility. Our daily output (6,000+ units) means we can handle large orders with 30-45 day turnaround instead of the industry standard 45-60 days. We also control the entire process in-house - from steel cutting to powder coating - so quality stays consistent. And because we manufacture everything ourselves, we can adapt designs or make modifications that other suppliers who assemble components can't easily do."
                   }
                 }
               ]
             })
           }}
         />
      </Head>
      
    <div className="min-h-screen">
      {/* Hero Section */}
      <main className="section-1 relative pro-banner bg-[url('https://keyobarbecue.com/wp-content/uploads/2025/09/ch_banner3-2.webp')] min-h-[200px] ">
        {/* Background Overlay - Left to Right Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/100 from-40% to-transparent to-100% z-10"></div>
        
        <div className="container flex-col md:flex-row flex items-center gap80 z-20 relative">
          <div className="md:w-5/7 lg:w-4/7 2xl:w-3/7 text-white">
            <h1 className="heading-main2">Charcoal Grill Professional Manufacturer - Quality You Can Trust</h1>
            <p className="text mt20">
              Kettle Grill， Featuring a classic spherical baking chamber, the heat is evenly circulated and the ingredients are heated uniformly. Equipped with wheels, the courtyard and terrace can be moved freely to easily meet different venue needs. The ventilation control device can accurately control the temperature and meet the temperature requirements for baking various types of ingredients. Made of high-quality steel, it is resistant to high temperatures and corrosion, and durable.
            </p>
          </div>
        </div>
      </main>

      <section className="section-1 xl:mt-[-250px] relative z-30">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap30">
          <div className='space-y-5 text-center bg-white p-8 rounded-lg shadow-lg'>
            <Scroll size={80} weight="duotone" className="mx-auto" />
            <h3 className="heading-main3">Get Instant Quote</h3>
            <p>Send us your packaging needs. We’ll get back quickly with a clear, no-obligation quote.</p>
          </div>
          <div className='space-y-5 text-center bg-white p-8 rounded-lg shadow-lg'>
            <CalendarCheck size={80} weight="duotone" className="mx-auto" />
            <h3 className="heading-main3">Confirm Specs</h3>
            <p>Review materials, size, and design. We’ll finalize every detail before production begins.</p>
          </div>
          <div className='space-y-5 text-center bg-white p-8 rounded-lg shadow-lg'>
            <Factory size={80} weight="duotone" className="mx-auto" />
            <h3 className="heading-main3">Track Your Order</h3>
            <p>Once your order is processed, we’ll send you a tracking number to keep you updated on the delivery status.</p>
          </div>
          <div className='space-y-5 text-center bg-white p-8 rounded-lg shadow-lg'>
            <Handshake size={80} weight="duotone" className="mx-auto" />
            <h3 className="heading-main3">Receive Your Custom Packaging</h3>
            <p>Once your order is processed, we’ll send you a tracking number to keep you updated on the delivery status.</p>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="section-1">
        <div>
          <h2 className='heading-main2 text-center'>Multiple Styles Suitable for Multiple Purposes</h2>
          <p className="heading-sub mt20 text-center">Our charcoal barbecue grill covers multiple designs, accurately matching different outdoor usage needs</p>
        </div>
        <div className="container mt20">
          <ProductCarousel 
            category="charcoal-grill"
            limit={9}
          />
        </div>
      </section>

      <section className="section-1 bg-foreground">
        <div>
          <h2 className='heading-main2 text-center'>Types of Packaging and Print We Offer</h2>
          <p className="heading-sub mt20 text-center">We provide businesses with a range of packaging and printing solutions. Packoi is a certified one-stop shop for custom boxes, custom bags, and marketing materials.</p>
        </div>
        <div className="container flex-col lg:flex-row flex items-center gap80">
          <div className="lg:w-1/2 space-y-5 xl:space-y-16">
            <div>
              <h3 className="heading-main3">Custom Sizes</h3>
              <p className="text mt20">Tailor-made dimensions for wholesale, optimized for diverse markets and sales scenarios</p>
            </div>
            <div>
              <h3 className="heading-main3">Custom Shapes</h3>
              <p className="text mt20">Flexible design options to differentiate your product line and capture more shelf attention</p>
            </div>
            <div>
              <h3 className="heading-main3">Custom Colors</h3>
              <p className="text mt20">Wide range of color and finish choices to enhance brand identity and boost end-user appeal</p>
            </div>
            <QuoteButtonPrimary>Get A Instant Quote Now</QuoteButtonPrimary>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-2 md:gap-5">
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/10/charcoal_size1.webp" alt="Keyo Customize" width={360} height={250} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/10/charcoal_size3.webp" alt="Keyo Customize" width={360} height={250} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/10/charcoal_size5.webp" alt="Keyo Customize" width={360} height={250} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/10/charcoal_size2.webp" alt="Keyo Customize" width={360} height={250} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/10/charcoal_size4.webp" alt="Keyo Customize" width={360} height={250} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/10/charcoal_size6.webp" alt="Keyo Customize" width={360} height={250} />
          </div>
        </div>
      </section>

      <section className="section-1">
        <div>
          <h2 className='heading-main2 text-center'>Adapt to various outdoor scenes</h2>
          <p className="heading-sub mt20 text-center">To meet different outdoor needs such as camping, courtyard gatherings, and self driving picnics, we have carefully crafted multiple outdoor barbecue grills.</p>
        </div>
        <div className="container flex-col lg:flex-row flex items-center gap80">
          <div className="lg:w-1/2 grid grid-cols-2 gap-2 md:gap-5">
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/scene_17.webp" alt="Keyo Customize" width={350} height={235} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/scene_2.webp" alt="Keyo Customize" width={350} height={235} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/scene_18.webp" alt="Keyo Customize" width={350} height={235} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/scene_1.webp" alt="Keyo Customize" width={350} height={235} />
          </div>
          <div className="lg:w-1/2 space-y-5 xl:space-y-10">
            <div className=" grid grid-cols-2 gap-2 md:gap-5">
              <div>
                <h3 className="text font-bold">Family gathering</h3>
                <p className="heading-sub mt20">Large grilling area perfect for group sharing, keeping the party going.</p>
              </div>
              <div>
                <h3 className="text font-bold">Camping in the wild</h3>
                <p className="heading-sub mt20">Portable and easy to carry, adds fun and flavor to any outdoor adventure.</p>
              </div>
              <div>
                <h3 className="text font-bold">Outdoor picnic</h3>
                <p className="heading-sub mt20">Compact and space-saving, fits flexibly on any table for relaxed outdoor dining.</p>
              </div>
              <div>
                <h3 className="text font-bold">Rooftop party</h3>
                <p className="heading-sub mt20">Eye-catching design stands out and sparks conversation, making it the center of any party.</p>
              </div>
            </div>
            <QuoteButtonPrimary>Get A Instant Quote Now</QuoteButtonPrimary>
          </div>
        </div>
      </section>

      <PublicCategory />

      <section className="section-1">
        <div>
          <h2 className='heading-main2 text-center'>Frequently Asked Questions</h2>
          <p className="heading-sub mt20 text-center">Below you can find some frequently asked questions regarding custom packaging and print. Please feel free to contact us if you have any other questions.</p>
        </div>
        <div className="container">
            {/* FAQ Items */}
            <div className="space-y-10">
              {/* FAQ Item 1 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <button
                  onClick={() => toggleItem(0)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold">
                      What size charcoal grill should I order for my business?
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <CaretDown 
                      size={20} 
                      className={`text-gray-500 transition-transform duration-300 ${
                        openItems.has(0) ? 'rotate-180' : 'rotate-0'
                      }`} 
                    />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.has(0) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-5 xl:pb-10">
                    <div className="pt-5 xl:pt-10 border-t border-gray-100">
                      <p className="text">It depends on your typical volume. For restaurants serving 20-40 guests per service, a 22-inch kettle grill or standard barrel grill (around 400-500 sq in) works well. Catering operations or high-volume restaurants should look at our heavy-duty models with 600-800+ square inches of cooking space. If you're a retailer, the 22-inch size tends to be the sweet spot - big enough for family cookouts but not overwhelming for storage or price point.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <button
                  onClick={() => toggleItem(1)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold">
                      Can these charcoal grills handle commercial/restaurant use?
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <CaretDown 
                      size={20} 
                      className={`text-gray-500 transition-transform duration-300 ${
                        openItems.has(1) ? 'rotate-180' : 'rotate-0'
                      }`} 
                    />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.has(1) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-5 xl:pb-10">
                    <div className="pt-5 xl:pt-10 border-t border-gray-100">
                      <p className="text">Our heavy-duty and commercial-grade models are specifically built for restaurant environments. They feature thicker steel construction (12-gauge vs. 16-gauge on consumer models), reinforced legs, commercial-grade casters, and components designed for daily use. We have customers running these grills 5-6 days a week for years. Consumer models work great for personal use but aren't engineered for that kind of constant operation.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <button
                  onClick={() => toggleItem(2)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold">
                      What's your minimum order quantity for wholesale?
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <CaretDown 
                      size={20} 
                      className={`text-gray-500 transition-transform duration-300 ${
                        openItems.has(2) ? 'rotate-180' : 'rotate-0'
                      }`} 
                    />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.has(2) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-5 xl:pb-10">
                    <div className="pt-5 xl:pt-10 border-t border-gray-100">
                      <p className="text">For our standard charcoal grill models, the MOQ starts at 300 units. If you're looking at custom specifications - different sizes, colors, or branded features - the MOQ is typically 200-500 units depending on the level of customization. We're flexible with first-time customers and can discuss options that work for your market entry strategy.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <button
                  onClick={() => toggleItem(3)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold">
                      How do you handle customization for charcoal grills?
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <CaretDown 
                      size={20} 
                      className={`text-gray-500 transition-transform duration-300 ${
                        openItems.has(3) ? 'rotate-180' : 'rotate-0'
                      }`} 
                    />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.has(3) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-5 xl:pb-10">
                    <div className="pt-5 xl:pt-10 border-t border-gray-100">
                      <p className="text">We offer three main customization levels: • Size adjustments - Modify cooking surface dimensions to fit your market needs • Shape variations - Different leg designs, side table configurations, or body styles• Color & finish - Custom powder coat colors, branded logos, or specific finishesThe process typically takes 7-10 days for design confirmation, then standard production time. We provide samples before full production runs to ensure everything matches your specifications.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <button
                  onClick={() => toggleItem(4)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold">
                      What sets your manufacturing apart from other suppliers?
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <CaretDown 
                      size={20} 
                      className={`text-gray-500 transition-transform duration-300 ${
                        openItems.has(4) ? 'rotate-180' : 'rotate-0'
                      }`} 
                    />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.has(4) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-5 xl:pb-10">
                    <div className="pt-5 xl:pt-10 border-t border-gray-100">
                      <p className="text">Three things make a difference: production speed, quality control, and flexibility. Our daily output (6,000+ units) means we can handle large orders with 30-45 day turnaround instead of the industry standard 45-60 days. We also control the entire process in-house - from steel cutting to powder coating - so quality stays consistent. And because we manufacture everything ourselves, we can adapt designs or make modifications that other suppliers who assemble components can't easily do.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>

      <FooterContact />

    </div>
    </>
  )
}