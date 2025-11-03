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
                   "name": "Can you manufacture gas grills with our company branding?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Yes, we specialize in OEM and ODM production. You can customize the grill design, add your logo on burners and side tables, and choose packaging that reflects your brand. Our design team works directly with your specifications to create unique products."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "What certifications do KEYO gas grills have?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "All our gas grills meet international safety standards including CE, CSA, and ETL certifications. For specific markets like North America or Europe, we provide documentation for gas appliance regulations. Testing reports are available upon request during the quote process."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "How long does custom gas grill production take?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Standard production runs take 35-45 days after deposit confirmation. Custom designs with new molds or special features may require 60-75 days. We maintain clear communication throughout manufacturing and provide production photos at key milestones."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "What types of gas grills does KEYO manufacture?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "We produce a complete range covering portable propane grills (starting at 12-inch tabletop models), freestanding cart-style grills (2 to 6 burners), built-in units for outdoor kitchens (24 to 42 inches), and commercial-grade equipment for restaurants. Our catalog includes infrared models, flat-top griddles, and dual-fuel charcoal-gas hybrids. Each category offers multiple size and feature configurations."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "How does your OEM process work for custom gas grills?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "First, you share your vision - sketches, reference products, or feature lists work fine. Our engineering team creates technical drawings and 3D renderings for your approval. After confirming design and tooling costs, we build a prototype (typically 20-25 days). Once you approve the sample, we move to mass production. You'll receive updates at 30%, 60%, and 90% completion stages."
                   }
                 }
               ]
             })
           }}
         />
      </Head>
      
    <div className="min-h-screen">
      {/* Hero Section */}
      <main className="section-1 relative pro-banner bg-[url('https://keyobarbecue.com/wp-content/uploads/2025/09/gas-banner2.webp')] min-h-[200px] ">
        {/* Background Overlay - Left to Right Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/100 from-40% to-transparent to-100% z-10"></div>
        
        <div className="container flex-col md:flex-row flex items-center gap80 z-20 relative">
          <div className="md:w-5/7 lg:w-4/7 2xl:w-3/7 text-white">
            <h1 className="heading-main2">Gas Grill Professional Manufacturer - Wholesale & OEM Solutions</h1>
            <p className="text mt20">
              A gas grill transforms outdoor cooking from a chore into pure enjoyment. Unlike traditional charcoal setups that require constant attention and cleanup, our propane and natural gas grills deliver instant heat at the push of a button. Whether you're outfitting a restaurant kitchen, stocking retail shelves, or launching your own BBQ brand, we've spent 20+ years perfecting every detail—from heavy-gauge burners to precision temperature zones.
            </p>
          </div>
        </div>
      </main>

      <section className="section-1 xl:mt-[-250px] relative z-30">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap30">
          <div className='space-y-5 text-center bg-white p-8 rounded-lg shadow-lg'>
            <Scroll size={80} weight="duotone" className="mx-auto" />
            <h3 className="heading-main3">Easy Operation</h3>
            <p>Electronic pulse ignition function, press the switch to ignite, and control the firepower through the knob</p>
          </div>
          <div className='space-y-5 text-center bg-white p-8 rounded-lg shadow-lg'>
            <CalendarCheck size={80} weight="duotone" className="mx-auto" />
            <h3 className="heading-main3">Rapid Heating</h3>
            <p>Once ignited, it will heat up quickly and does not require time to light the charcoal.</p>
          </div>
          <div className='space-y-5 text-center bg-white p-8 rounded-lg shadow-lg'>
            <Factory size={80} weight="duotone" className="mx-auto" />
            <h3 className="heading-main3">Temperature control</h3>
            <p>The multi-burner design allows for independent temperature regulation in different areas.</p>
          </div>
          <div className='space-y-5 text-center bg-white p-8 rounded-lg shadow-lg'>
            <Handshake size={80} weight="duotone" className="mx-auto" />
            <h3 className="heading-main3">Safety Protection</h3>
            <p>Internal safety devices, including oxygen combustion protection control and gas leak detection, minimize risks to the greatest extent.</p>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="section-1">
        <div>
          <h2 className='heading-main2 text-center'>Complete Product Range - From Portable to Commercial Grade</h2>
          <p className="heading-sub mt20 text-center">Our gas grill lineup covers every wholesale scenario—from Amazon FBA sellers needing compact camping grills to hotel chains requiring commercial 6-burner stations. Each category represents years of refinement based on buyer feedback and market testing.</p>
        </div>
        <div className="container mt20">
          <ProductCarousel 
            category="gas-grill"
            limit={9}
          />
        </div>
      </section>

      <section className="section-1 bg-foreground">
        <div>
          <h2 className='heading-main2 text-center'>Full Customization Capabilities - Build Your Brand</h2>
          <p className="heading-sub mt20 text-center">We also do professional customization of barbecue grills including the flexibility of color, size and shape. The procurement needs allow us to align the different market positioning and usage scenarios to generate product differentiation and supply efficiency.</p>
        </div>
        <div className="container flex-col lg:flex-row flex items-center gap80">
          <div className="lg:w-1/2 space-y-5 xl:space-y-16">
            <div>
              <h3 className="heading-main3">Custom Sizes - Dimensions That Fit Your Market</h3>
              <p className="text mt20">Tailor-made dimensions for wholesale, optimized for diverse markets and sales scenarios. European balconies demand narrower footprints; North American big-box retailers want larger cooking areas. Tell us your target dimensions and user scenarios—we'll adjust burner layouts accordingly.</p>
            </div>
            <div>
              <h3 className="heading-main3">Custom Shapes - Stand Out on the Shelf</h3>
              <p className="text mt20">Flexible design options to differentiate your product line and capture more shelf attention. Rounded corner designs, curved front panels, asymmetric burner patterns—these design tweaks create instant shelf differentiation that generic rectangular grills lack.</p>
            </div>
            <div>
              <h3 className="heading-main3">Custom Colors - Match Your Brand Identity</h3>
              <p className="text mt20">Wide range of color and finish choices to enhance brand identity and boost end-user appeal. Send us Pantone codes, RAL numbers, or physical samples—our paint shop can match virtually any finish. We've done matte pastels for Scandinavian brands, high-gloss finishes for luxury lines, and textured hammer-tone patterns for rugged camping gear companies.</p>
            </div>
            <QuoteButtonPrimary>Get A Instant Quote Now</QuoteButtonPrimary>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-2 md:gap-5">
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/10/gas_size1.webp" alt="Keyo Customize" width={360} height={250} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/10/gas_size2.webp" alt="Keyo Customize" width={360} height={250} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/10/gas_size6.webp" alt="Keyo Customize" width={360} height={250} />  
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/10/gas_size3.webp" alt="Keyo Customize" width={360} height={250} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/10/gas_size4.webp" alt="Keyo Customize" width={360} height={250} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/10/gas_size5.webp" alt="Keyo Customize" width={360} height={250} />
          </div>
        </div>
      </section>

      <section className="section-1">
        <div>
          <h2 className='heading-main2 text-center'>Real-World Applications - Where Our Grills Get Used</h2>
          <p className="heading-sub mt20 text-center">To meet different outdoor needs such as camping, courtyard gatherings, and self-driving picnics, we have carefully crafted multiple outdoor barbecue grills. Wholesale buyers care about end-user scenarios because that’s what drives repeat purchases and positive reviews.</p>
        </div>
        <div className="container flex-col lg:flex-row flex items-center gap80">
          <div className="lg:w-1/2 grid grid-cols-2 gap-2 md:gap-5">
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/scene_9.webp" alt="Keyo Customize" width={350} height={235} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/scene_10.webp" alt="Keyo Customize" width={350} height={235} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/scene_12.webp" alt="Keyo Customize" width={350} height={235} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/scene_11.webp" alt="Keyo Customize" width={350} height={235} />
          </div>
          <div className="lg:w-1/2 space-y-5 xl:space-y-10">
              <div>
                <h3 className="text font-bold">Family Weekend Courtyard Gathering</h3>
                <p className="heading-sub mt20">No need for complicated fire starting steps, simply turn on the switch to quickly preheat. No need to worry about charcoal smoking control, easily enjoy a warm family barbecue time. ​</p>
              </div>
              <div>
                <h3 className="text font-bold">Outdoor picnic party</h3>
                <p className="heading-sub mt20">The gas barbecue grill is compact and easy to carry, and can be started by connecting a gas cylinder. After dinner cleaning only requires a simple wipe of the grill. ​</p>
              </div>
              <div>
                <h3 className="text font-bold">Balcony daily simple cooking</h3>
                <p className="heading-sub mt20">It won't take up too much space, so there's no need to worry about oil fumes spreading, easily meeting daily simple barbecue needs. ​</p>
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
                      Can you manufacture gas grills with our company branding?
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
                      <p className="text">Yes, we specialize in OEM and ODM production. You can customize the grill design, add your logo on burners and side tables, and choose packaging that reflects your brand. Our design team works directly with your specifications to create unique products.</p>
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
                      What certifications do KEYO gas grills have?
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
                      <p className="text">All our gas grills meet international safety standards including CE, CSA, and ETL certifications. For specific markets like North America or Europe, we provide documentation for gas appliance regulations. Testing reports are available upon request during the quote process.</p>
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
                      How long does custom gas grill production take?
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
                      <p className="text">Standard production runs take 35-45 days after deposit confirmation. Custom designs with new molds or special features may require 60-75 days. We maintain clear communication throughout manufacturing and provide production photos at key milestones.</p>
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
                      What types of gas grills does KEYO manufacture?
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
                      <p className="text">We produce a complete range covering portable propane grills (starting at 12-inch tabletop models), freestanding cart-style grills (2 to 6 burners), built-in units for outdoor kitchens (24 to 42 inches), and commercial-grade equipment for restaurants. Our catalog includes infrared models, flat-top griddles, and dual-fuel charcoal-gas hybrids. Each category offers multiple size and feature configurations.</p>
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
                      How does your OEM process work for custom gas grills?
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
                      <p className="text">First, you share your vision - sketches, reference products, or feature lists work fine. Our engineering team creates technical drawings and 3D renderings for your approval. After confirming design and tooling costs, we build a prototype (typically 20-25 days). Once you approve the sample, we move to mass production. You'll receive updates at 30%, 60%, and 90% completion stages.</p>
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