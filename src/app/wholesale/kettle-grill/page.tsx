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
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
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
      <main className="section-1 relative pro-banner bg-[url('https://keyobarbecue.com/wp-content/uploads/2025/09/kettle_banner5.webp')] min-h-[200px] ">
        {/* Background Overlay - Left to Right Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/100 from-40% to-transparent to-100% z-10"></div>
        
        <div className="container flex-col md:flex-row flex items-center gap80 z-20 relative">
          <div className="md:w-5/7 lg:w-4/7 2xl:w-3/7 text-white">
            <h1 className="heading-main2">Kettle Grill Professional Manufacturer & Wholesale Supplier</h1>
            <p className="text mt20">
              Custom 18"/22"/26" Kettle Charcoal Grills | OEM/ODM Services | Fast Delivery
            </p>
          </div>
        </div>
      </main>

      <section className="section-1 xl:mt-[-250px] relative z-30">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap30">
          <div className='space-y-5 text-center bg-white p-8 rounded-lg shadow-lg'>
            <Scroll size={80} weight="duotone" className="mx-auto" />
            <h3 className="heading-main3">Special Design1</h3>
            <p>The distinctive dome shaped design is one of the remarkable designs of the barbecue grills.</p>
          </div>
          <div className='space-y-5 text-center bg-white p-8 rounded-lg shadow-lg'>
            <CalendarCheck size={80} weight="duotone" className="mx-auto" />
            <h3 className="heading-main3">Durable and practical</h3>
            <p>Through the enamel plating technology, it has a high temperature and good corrosion resistance.</p>
          </div>
          <div className='space-y-5 text-center bg-white p-8 rounded-lg shadow-lg'>
            <Factory size={80} weight="duotone" className="mx-auto" />
            <h3 className="heading-main3">Venue adjustment</h3>
            <p>Kettle grill is able to fit in different outdoor locations.</p>
          </div>
          <div className='space-y-5 text-center bg-white p-8 rounded-lg shadow-lg'>
            <Handshake size={80} weight="duotone" className="mx-auto" />
            <h3 className="heading-main3">Trendy Style</h3>
            <p>A richly colored design is the choice of the youth in their gatherings with the Kettle grill.</p>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="section-1">
        <div className="container">
          <h2 className='heading-main2 text-center'>Kettle Grill Product Series - Multiple Sizes Available</h2>
          <p className="heading-sub mt20 text-center">Our kettle barbecue grill covers multiple designs, accurately matching different outdoor usage needs</p>
        </div>
        <div className="container mt20">
          <ProductCarousel 
            category="kettle-grill"
            limit={9}
          />
        </div>
      </section>

      <section className="section-1 bg-foreground">
        <div>
          <h2 className='heading-main2 text-center'>Support multiple-dimensional customization</h2>
          <p className="heading-sub mt20 text-center">We also do professional customization of barbecue grills including the flexibility of color, size and shape. The procurement needs allow us to align the different market positioning and usage scenarios to generate product differentiation and supply efficiency.</p>
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
          <div className="lg:w-1/2 grid grid-cols-1 gap-2 md:gap-5">
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/10/kettle-size-1.webp" alt="Keyo Customize" width={720} height={480} />
          </div>
        </div>
      </section>

      <section className="section-1">
        <div>
          <h2 className='heading-main2 text-center'>Application Scenarios for Kettle Charcoal Grill</h2>
          <p className="heading-sub mt20 text-center">To meet different outdoor needs such as camping, courtyard gatherings, and self driving picnics, we have carefully crafted multiple outdoor barbecue grills.</p>
        </div>
        <div className="container flex-col lg:flex-row flex items-center gap80">
          <div className="lg:w-1/2 grid grid-cols-2 gap-2 md:gap-5">
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/scene_6-2.webp" alt="Keyo Customize" width={350} height={235} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/scene_5.webp" alt="Keyo Customize" width={350} height={235} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/scene_7.webp" alt="Keyo Customize" width={350} height={235} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/scene_8.webp" alt="Keyo Customize" width={350} height={235} />
          </div>
          <div className="lg:w-1/2 space-y-5 xl:space-y-10">
            <div className=" grid grid-cols-2 gap-2 md:gap-5">
              <div>
                <h3 className="text font-bold">Family Backyard BBQ Gatherings</h3>
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
                      What sizes of kettle grills does KEYO manufacture？
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
                      <p className="text">KEYO also produces kettle charcoal grills that are available in three sizes that are popular: 18-inch, 22-inch and 26-inch diameter. Our most popular grill is the 22-inch kettle grill with the optimal balance of areas to cook and portability. Wholesale is offered in all sizes with the choice of OEM/ODM customization.</p>
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
                      Why is a kettle grill different to the regular charcoal grill?
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
                      <p className="text">The kettle grill has a unique dome shape design thus offers better heat circulation and temperature control over the traditional charcoal grills. The main strengths are that it is able to control accurate temperatures with adjustable vents, has an effective system of ash catcher, has high levels of retention of the heat and it has the ability to cook in multiple ways including direct grill, indirect cooking and even smoking.</p>
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
                      Are KEYO kettle grills controlled in terms of temperature?
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
                      <p className="text">Yes! Every KEYO kettle grill has enhanced temperature control features such as design with dual ventilation with adjustable dampers, inbuilt thermometer on high-quality models and control of heat zones to meet various temperature demands. With our system, you can keep a stable heat temperature of 225 F in order to smoke and 600 F and above in order to sear.</p>
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
                      What are the accessories to KEYO kettle grills?
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
                      <p className="text">KEYO kettle grills are supplied with the necessary accessories, such as inbuilt ash catcher, heavy-duty cooking grate, hinged grate on some models, protective weather resistant cover, and side table on some models. Other accessories such as rotisseries, pizza stones and charcoal baskets can be bought in large quantities.</p>
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
                      Do KEYO kettle grills make outdoor activities manageable?
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
                      <p className="text">Absolutely! KEYO also has a few portable kettle grill models such as tabletop kettle grill of construction made of lightweight carbon steel, portable kettle grill made of compact design, and 22 inch heavy duty kettle grill with wheels. All the portable models are ideal in camps, picnics, roof-top party, and outdoor events.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Item 6 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <button
                  onClick={() => toggleItem(5)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold">
                      What is the minimum order quantity (MOQ) of kettle grill wholesale?
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <CaretDown 
                      size={20} 
                      className={`text-gray-500 transition-transform duration-300 ${
                        openItems.has(5) ? 'rotate-180' : 'rotate-0'
                      }`} 
                    />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.has(5) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-5 xl:pb-10">
                    <div className="pt-5 xl:pt-10 border-t border-gray-100">
                      <p className="text">KEYO provides the lowest MOQ in the industry: 100-200 units with regular models, 300-500 units with custom/OEM order based on the complexity of customization. To ensure the flexibility of MOQ, we have developed tiers of MOQ that can serve small retailers, e-commerce sellers, and large distributors.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Item 7 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <button
                  onClick={() => toggleItem(6)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold">
                      Does KEYO provide OEM/ODM services of kettle grills?
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <CaretDown 
                      size={20} 
                      className={`text-gray-500 transition-transform duration-300 ${
                        openItems.has(6) ? 'rotate-180' : 'rotate-0'
                      }`} 
                    />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.has(6) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-5 xl:pb-10">
                    <div className="pt-5 xl:pt-10 border-t border-gray-100">
                      <p className="text">Yes! KEYO offers full OEM/ODM such as custom sizes, shapes, colors, private labeling and free dieline design on gift box packaging. We have combined services in R&D, customization, production, quality control, packaging and logistics. </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Item 8 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <button
                  onClick={() => toggleItem(7)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold">
                      How long do the orders of wholesale kettle grills take to be produced and delivered?
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <CaretDown 
                      size={20} 
                      className={`text-gray-500 transition-transform duration-300 ${
                        openItems.has(7) ? 'rotate-180' : 'rotate-0'
                      }`} 
                    />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.has(7) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-5 xl:pb-10">
                    <div className="pt-5 xl:pt-10 border-t border-gray-100">
                      <p className="text">KEYO has the shortest turnaround in the market of 30-45 days total delivery time (compared to 45-60 days of the traditional factories). Our manufacturing capacity is 6000+ units/day, 7 day template time in case of custom orders and inspection and packaging is 1-2 days.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Item 9 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <button
                  onClick={() => toggleItem(8)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold">
                      What are the materials that KEYO kettle grills are manufactured out of?
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <CaretDown 
                      size={20} 
                      className={`text-gray-500 transition-transform duration-300 ${
                        openItems.has(8) ? 'rotate-180' : 'rotate-0'
                      }`} 
                    />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.has(8) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-5 xl:pb-10">
                    <div className="pt-5 xl:pt-10 border-t border-gray-100">
                      <p className="text">KEYO Premium kettle grills are made of heavy-duty iron and steel of customizable thickness, heat-resistant porcelain-enamel plating, stainless steel or porcelain-enamelled cast iron cooking grate and rust-proof ash trap. The materials are of international safety and quality. </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Item 10 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                <button
                  onClick={() => toggleItem(9)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold">
                      Is it possible to have kettle grills custom branded and packaged?
                    </h3>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <CaretDown 
                      size={20} 
                      className={`text-gray-500 transition-transform duration-300 ${
                        openItems.has(9) ? 'rotate-180' : 'rotate-0'
                      }`} 
                    />
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.has(9) 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-5 xl:pb-10">
                    <div className="pt-5 xl:pt-10 border-t border-gray-100">
                      <p className="text">Absolutely! KEYO focuses on custom branding including logo placement through either laser engraving or heat-transfer printing,custom package design, free dieline services, customized instruction manuals, and Pantone color matching an enamel coating.We assist in creating a high-end kettle grill product line that will be a unique product in the market.</p>
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