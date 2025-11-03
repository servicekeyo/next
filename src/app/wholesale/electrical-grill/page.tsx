"use client";
import { useState } from 'react';
import { Scroll, CalendarCheck, Factory, Handshake, CaretDown, CaretUp } from 'phosphor-react';
import Image from "next/image";
import { QuoteButtonPrimary} from '@/components/QuoteButton';
import ProductCarousel from '@/components/ProductCarousel';
import PublicCategory from '@/components/PublicCategory';
import FooterContact from '@/components/FooterContact';
import Head from 'next/head';

export default function CharcoalGrillPage() {
  // FAQ Accordion state management - First item open by default
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));

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
        <title>Electric Grill Wholesale & Manufacturer | Indoor & Outdoor BBQ Grills | KEYO</title>
        <meta name="description" content="Factory-direct electric grill manufacturer offering smokeless indoor & outdoor BBQ solutions. Quick heating, temperature control, safety protection. OEM/ODM customization available." />
        <meta name="keywords" content="electric grill manufacturer, smokeless indoor grills, electric BBQ wholesale, temperature control grills, indoor outdoor electric grills, electric barbecue equipment, custom electric grills, electric grill OEM ODM" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="KEYO Barbecue" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Electric Grill Wholesale & Manufacturer | Indoor & Outdoor BBQ Grills | KEYO" />
        <meta property="og:description" content="Factory-direct electric grill manufacturer offering smokeless indoor & outdoor BBQ solutions. Quick heating, temperature control, safety protection. OEM/ODM customization available." />
        <meta property="og:type" content="product" />
        <meta property="og:url" content="https://keyobarbecue.com/wholesale/electrical-grill" />
        <meta property="og:image" content="https://keyobarbecue.com/wp-content/uploads/2025/09/ch_banner3-2.webp" />
        <meta property="og:site_name" content="KEYO Barbecue" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Electric Grill Wholesale & Manufacturer | Indoor & Outdoor BBQ Grills" />
        <meta name="twitter:description" content="Factory-direct electric grill manufacturer offering smokeless indoor & outdoor BBQ solutions with temperature control and safety protection." />
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
                   "name": "What is an electric grill and how does it work?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "An electric grill is a cooking appliance that uses electric heating elements instead of gas or charcoal. Simply plug into a standard outlet, set your desired temperature using the control panel, and the heating elements warm up to cook your food. Most models feature temperature control (200°F-450°F), non-stick cooking surfaces, and drip trays to collect grease, making them perfect for both indoor and outdoor grilling."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "Are electric grills truly smokeless?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Yes, quality smokeless electric grills use advanced technology with heating elements and drip trays that minimize smoke by up to 90%. While some light steam may occur from cooking juices, there's no heavy charcoal or wood smoke. This makes them ideal for indoor apartments, balconies, and areas where traditional grills are prohibited or impractical."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "Can electric grills be used both indoors and outdoors?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Absolutely! Many electric grills are designed for dual-purpose use. Indoor models feature smokeless technology and compact countertop designs perfect for apartments. Outdoor models include weatherproof construction, stands, and larger cooking areas for patios and camping. Always check the manufacturer's specifications for your specific model's intended use."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "How do you handle customization for electric grills?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "We offer three main customization levels: • Size adjustments - Modify cooking surface dimensions to fit your market needs • Shape variations - Different leg designs, side table configurations, or body styles • Color & finish - Custom powder coat colors, branded logos, or specific finishes. The process typically takes 7-10 days for design confirmation, then standard production time. We provide samples before full production runs to ensure everything matches your specifications."
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
      <main className="section-1 relative pro-banner bg-[url('https://keyobarbecue.com/wp-content/uploads/2025/09/Electrical_banner4.webp')] min-h-[200px] ">
        {/* Background Overlay - Left to Right Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/100 from-40% to-transparent to-100% z-10"></div>
        
        <div className="container flex-col md:flex-row flex items-center gap80 z-20 relative">
          <div className="md:w-5/7 lg:w-4/7 2xl:w-3/7 text-white">
            <h1 className="heading-main2">Electric Grill Wholesale & Manufacturing - Smokeless Indoor Outdoor BBQ Solutions</h1>
            <p className="text mt20">
              Factory-Direct Indoor & Outdoor Electric Grills | Quick Heating | Temperature Control | OEM/ODM Customization
            </p>
          </div>
        </div>
      </main>

      <section className="section-1 xl:mt-[-250px] relative z-30">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap30">
          <div className='space-y-5 text-center bg-white p-8 rounded-lg shadow-lg'>
            <Scroll size={80} weight="duotone" className="mx-auto" />
            <h3 className="heading-main3">Smokeless Operation</h3>
            <p>To reduce smoke, the heating elements and drip tray will be employed to make it safe and comfortable.</p>
          </div>
          <div className='space-y-5 text-center bg-white p-8 rounded-lg shadow-lg'>
            <CalendarCheck size={80} weight="duotone" className="mx-auto" />
            <h3 className="heading-main3">Quick Heating</h3>
            <p>Electric grills have strong heating components, and thus, they quickly preheat.</p>
          </div>
          <div className='space-y-5 text-center bg-white p-8 rounded-lg shadow-lg'>
            <Factory size={80} weight="duotone" className="mx-auto" />
            <h3 className="heading-main3">Temperature Control</h3>
            <p>Adjustable temperature control / preset cooking can be adjusted to control cooking process.</p>
          </div>
          <div className='space-y-5 text-center bg-white p-8 rounded-lg shadow-lg'>
            <Handshake size={80} weight="duotone" className="mx-auto" />
            <h3 className="heading-main3">Safety Protection</h3>
            <p>Not to generate carbon monoxide and produces with leakage protection device.vice</p>
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
            category="electrical-grill"
            limit={9}
          />
        </div>
      </section>

      <section className="section-1 bg-foreground">
        <div>
          <h2 className='heading-main2 text-center'>Custom Electric Grill Manufacturing - OEM/ODM Solutions</h2>
          <p className="heading-sub mt20 text-center">As a professional electric grill manufacturer, KEYO offers comprehensive customization services for wholesale and private label clients. Whether you need custom sizes for specific markets, unique shapes for product differentiation, or custom colors to match your brand identity, our OEM/ODM team delivers.</p>
        </div>
        <div className="container flex-col lg:flex-row flex items-center gap80">
          <div className="lg:w-1/2 space-y-5 xl:space-y-16">
            <div>
              <h3 className="heading-main3">Custom Sizes - Market-Specific Optimization</h3>
              <p className="text mt20">Tailored dimensions for different markets and sales scenarios. From compact travel models to full-size commercial units. Optimize for specific customer segments: apartment dwellers, campers, restaurants, or retail chains.</p>
            </div>
            <div>
              <h3 className="heading-main3">Custom Shapes & Designs - Brand Differentiation</h3>
              <p className="text mt20">Flexible design options to differentiate your product line. Stand out on retail shelves with unique shapes, modern aesthetics, or innovative features. Our R&D team works with your specifications.</p>
            </div>
            <div>
              <h3 className="heading-main3">Custom Colors & Finishes - Brand Enhancement</h3>
              <p className="text mt20">Multiple color options and surface finishes to enhance brand recognition and appeal. Powder coating, stainless steel, porcelain enamel, or custom paint colors. Match your brand's visual identity.</p>
            </div>
            <QuoteButtonPrimary>Get A Instant Quote Now</QuoteButtonPrimary>
          </div>
          <div className="lg:w-1/2 grid grid-cols-1 gap-2 md:gap-5">
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/10/e_scene_3.webp" alt="Keyo Customize" width={720} height={500} />
          </div>
        </div>
      </section>

      <section className="section-1">
        <div>
          <h2 className='heading-main2 text-center'>Electric Grill Applications - Versatile Cooking Solutions</h2>
          <p className="heading-sub mt20 text-center">To meet different outdoor needs such as camping, courtyard gatherings, and self driving picnics, we have carefully crafted multiple outdoor barbecue grills.</p>
        </div>
        <div className="container flex-col lg:flex-row flex items-center gap80">
          <div className="lg:w-1/2 grid grid-cols-2 gap-2 md:gap-5">
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/scene_16.webp" alt="Keyo Customize" width={350} height={235} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/scene_15.webp" alt="Keyo Customize" width={350} height={235} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/scene_13.webp" alt="Keyo Customize" width={350} height={235} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/scene_14.webp" alt="Keyo Customize" width={350} height={235} />
          </div>
          <div className="lg:w-1/2 space-y-5 xl:space-y-10">
            <div className=" grid grid-cols-1 gap-2 md:gap-5">
              <div>
                <h3 className="text font-bold">Family Weekend Courtyard Gathering</h3>
                <p className="heading-sub mt20">No need for complicated fire starting steps, simply turn on the switch to quickly preheat. No need to worry about charcoal smoking control, easily enjoy a warm family barbecue time. ​</p>
              </div>
              <div>
                <h3 className="text font-bold">Outdoor picnic party</h3>
                <p className="heading-sub mt20">The electric grill is compact and easy to carry, and can be started by connecting the battery. After dinner cleaning only requires a simple wipe of the grill. ​​</p>
              </div>
              <div>
                <h3 className="text font-bold">Balcony daily simple cooking</h3>
                <p className="heading-sub mt20">It won't take up too much space, so there's no need to worry about oil fumes spreading, easily meeting daily simple barbecue needs. ​</p>
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
            {/* FAQ Items - Accordion */}
            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleItem(0)}
                >
                  <h3 className="text-base md:text-lg font-semibold">
                    What is an electric grill and how does it work?
                  </h3>
                  <CaretDown 
                    size={20} 
                    className={`text-gray-600 flex-shrink-0 ml-4 transition-transform duration-300 ${
                      openItems.has(0) ? 'rotate-180' : 'rotate-0'
                    }`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.has(0) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text pt-4">An electric grill is a cooking appliance that uses electric heating elements instead of gas or charcoal. Simply plug into a standard outlet, set your desired temperature using the control panel, and the heating elements warm up to cook your food. Most models feature temperature control (200°F-450°F), non-stick cooking surfaces, and drip trays to collect grease, making them perfect for both indoor and outdoor grilling.</p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleItem(1)}
                >
                  <h3 className="text-base md:text-lg font-semibold">
                    Are electric grills truly smokeless?
                  </h3>
                  <CaretDown 
                    size={20} 
                    className={`text-gray-600 flex-shrink-0 ml-4 transition-transform duration-300 ${
                      openItems.has(1) ? 'rotate-180' : 'rotate-0'
                    }`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.has(1) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text pt-4">Yes, quality smokeless electric grills use advanced technology with heating elements and drip trays that minimize smoke by up to 90%. While some light steam may occur from cooking juices, there's no heavy charcoal or wood smoke. This makes them ideal for indoor apartments, balconies, and areas where traditional grills are prohibited or impractical.</p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleItem(2)}
                >
                  <h3 className="text-base md:text-lg font-semibold">
                    Can electric grills be used both indoors and outdoors?
                  </h3>
                  <CaretDown 
                    size={20} 
                    className={`text-gray-600 flex-shrink-0 ml-4 transition-transform duration-300 ${
                      openItems.has(2) ? 'rotate-180' : 'rotate-0'
                    }`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.has(2) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text pt-4">Absolutely! Many electric grills are designed for dual-purpose use. Indoor models feature smokeless technology and compact countertop designs perfect for apartments. Outdoor models include weatherproof construction, stands, and larger cooking areas for patios and camping. Always check the manufacturer's specifications for your specific model's intended use.</p>
                  </div>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleItem(3)}
                >
                  <h3 className="text-base md:text-lg font-semibold">
                    What are the advantages of electric grills over gas or charcoal?
                  </h3>
                  <CaretDown 
                    size={20} 
                    className={`text-gray-600 flex-shrink-0 ml-4 transition-transform duration-300 ${
                      openItems.has(3) ? 'rotate-180' : 'rotate-0'
                    }`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.has(3) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text pt-4"><b>Electric grills</b> offer several key benefits:</p>
                      <ul className="text">
                        <li><b>• Smokeless operation</b> - Safe for indoor use and apartments</li>
                        <li><b>• Quick heating</b> - Ready in 5-10 minutes vs. 20-30 for charcoal</li>
                        <li><b>• Temperature control</b> - Precise digital settings for consistent results</li>
                        <li><b>• Safety</b> - No carbon monoxide, flames, or propane tanks</li> 
                        <li><b>• Easy cleaning</b> - Removable non-stick plates, dishwasher safe</li>
                        <li><b>• Portable</b> - Lightweight designs for travel and camping</li>
                      </ul>
                  </div>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleItem(4)}
                >
                  <h3 className="text-base md:text-lg font-semibold">
                    What types of electric grills does KEYO manufacture?
                  </h3>
                  <CaretDown 
                    size={20} 
                    className={`text-gray-600 flex-shrink-0 ml-4 transition-transform duration-300 ${
                      openItems.has(4) ? 'rotate-180' : 'rotate-0'
                    }`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.has(4) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text pt-4">KEYO offers a complete range of <b>electric grill</b> types for wholesale:</p>
                    <ul className="text">
                      <li><b>• Compact Electric Smokers</b> - Portable for camping and travel</li>
                      <li><b>• Tabletop Electric Grills</b> - Countertop designs for small kitchens</li>
                      <li><b>• Infrared Electric Grills</b> - High-temperature professional cooking</li>
                      <li><b>• Outdoor Stand Grills</b> - Full-size patio and balcony BBQ</li>
                      <li><b>• Commercial Electric Grills</b> - Heavy-duty restaurant grade</li>
                      <li><b>• Electric Kettle Smokers</b> - Mobile outdoor cooking solutions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ Item 6 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleItem(5)}
                >
                  <h3 className="text-base md:text-lg font-semibold">
                    Do you offer wholesale pricing and OEM/ODM customization?
                  </h3>
                  <CaretDown 
                    size={20} 
                    className={`text-gray-600 flex-shrink-0 ml-4 transition-transform duration-300 ${
                      openItems.has(5) ? 'rotate-180' : 'rotate-0'
                    }`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.has(5) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text pt-4">Yes! As a professional <b>electric grill manufacturer</b>, KEYO provides:</p>
                    <ul className="text">
                      <li><b>• Wholesale pricing</b> - Factory-direct bulk discounts</li>
                      <li><b>• ODM services</b> - Design and engineering support</li>
                      <li><b>• OEM manufacturing</b> - Custom sizes, shapes, and colors</li>
                      <li><b>• Private labeling</b> - Your brand, our manufacturing</li>
                      <li><b>• Flexible MOQ</b> - Starting at 100 units for standard models</li>
                      <li><b>• Custom packaging</b> - Branded boxes and materials</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FAQ Item 7 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleItem(6)}
                >
                  <h3 className="text-base md:text-lg font-semibold">
                    What is the best electric grill for apartments?
                  </h3>
                  <CaretDown 
                    size={20} 
                    className={`text-gray-600 flex-shrink-0 ml-4 transition-transform duration-300 ${
                      openItems.has(6) ? 'rotate-180' : 'rotate-0'
                    }`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.has(6) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text pt-4">The best indoor <b>electric grill for apartments</b> should have:</p>
                    <ul className="text">
                      <li><b>• Smokeless technology</b>for indoor safety</li>
                      <li><b>• Compact size</b>for countertop or tabletop use</li>
                      <li><b>• Non-stick plates</b> that are removable and dishwasher safe</li>
                      <li><b>• Quiet operation</b> to avoid disturbing neighbors</li>
                      <li><b>• Temperature control</b> for versatile cooking</li>
                    </ul>
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