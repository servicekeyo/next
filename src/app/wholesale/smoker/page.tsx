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
                   "name": "Can you manufacture smokers with our company branding?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Yes, we specialize in OEM and ODM production. You can customize the smoker design, add your logo on the firebox and cooking chamber, and choose packaging that reflects your brand. Our design team works directly with your specifications to create unique products."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "What certifications do KEYO smokers have?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "All our smokers meet international safety standards including CE, CSA, and ETL certifications. For specific markets like North America or Europe, we provide documentation for outdoor cooking appliance regulations. Testing reports are available upon request during the quote process."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "How long does custom smoker production take?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Standard production runs take 35-45 days after deposit confirmation. Custom designs with new features or special configurations may require 60-75 days. We maintain clear communication throughout manufacturing and provide production photos at key milestones."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "What types of smokers does KEYO manufacture?",
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "We produce a complete range covering offset barrel smokers (starting at 16-inch models), vertical cabinet smokers (water pan and electric models), pellet smokers with digital controls, and commercial-grade units for restaurants. Our catalog includes reverse-flow designs, insulated models, and dual-chamber configurations. Each category offers multiple size and feature options."
                   }
                 },
                 {
                   "@type": "Question",
                   "name": "How does your OEM process work for custom smokers?",
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
      <main className="section-1 relative pro-banner bg-[url('https://keyobarbecue.com/wp-content/uploads/2025/09/smoker_banner4.webp')] min-h-[200px] ">
        {/* Background Overlay - Left to Right Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/100 from-40% to-transparent to-100% z-10"></div>
        
        <div className="container flex-col md:flex-row flex items-center gap80 z-20 relative">
          <div className="md:w-5/7 lg:w-4/7 2xl:w-3/7 text-white">
            <h1 className="heading-main2">BBQ Smoker Professional Manufacturer - Wholesale Offset & Pellet Grills</h1>
            <p className="text mt20">
              Professional barbecue smoker wholesale. Offset, vertical, pellet smoker available. competitive pricing, bulk orders welcome.
            </p>
          </div>
        </div>
      </main>

      <section className="section-1 xl:mt-[-250px] relative z-30">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap30">
          <div className='space-y-5 text-center bg-white p-8 rounded-lg shadow-lg'>
            <Scroll size={80} weight="duotone" className="mx-auto" />
            <h3 className="heading-main3">Offset Smoker</h3>
            <p>Traditional Texas-style design, large smoking capacity</p>
          </div>
          <div className='space-y-5 text-center bg-white p-8 rounded-lg shadow-lg'>
            <CalendarCheck size={80} weight="duotone" className="mx-auto" />
            <h3 className="heading-main3">Vertical Smoker</h3>
            <p>Space-saving design with multi-layer smoking racks for higher efficiency.</p>
          </div>
          <div className='space-y-5 text-center bg-white p-8 rounded-lg shadow-lg'>
            <Factory size={80} weight="duotone" className="mx-auto" />
            <h3 className="heading-main3">Pellet Smoker</h3>
            <p>Automated control system with precise temperature settings, easy to operate.</p>
          </div>
          <div className='space-y-5 text-center bg-white p-8 rounded-lg shadow-lg'>
            <Handshake size={80} weight="duotone" className="mx-auto" />
            <h3 className="heading-main3">Cabinet Smoker</h3>
            <p>Designed for large-scale production, the top choice for food processing enterprises.</p>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="section-1">
        <div>
          <h2 className='heading-main2 text-center'>Pellet & Offset Smokers for Bulk and OEM Orders</h2>
          <p className="heading-sub mt20 text-center">As a smoker manufacturer and wholesale supplier, we provide pellet smokers, offset smokers, and vertical cabinet smokers in OEM and private label options. Perfect for bulk commercial orders, B2B distributors, and custom branding.</p>
        </div>
        <div className="container mt20">
          <ProductCarousel 
            category="smoker"
            limit={9}
          />
        </div>
      </section>

      <section className="section-1 bg-foreground">
        <div>
          <h2 className='heading-main2 text-center'>Custom OEM Smoker Manufacturing - Private Label Solutions</h2>
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
          <div className="lg:w-1/2 grid grid-cols-2 gap-2 md:gap-5">
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/10/smoker_size1.webp" alt="Keyo Customize" width={360} height={360} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/10/smoker_size2.webp" alt="Keyo Customize" width={360} height={360} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/10/smoker_size3.webp" alt="Keyo Customize" width={360} height={360} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/10/smoker_size4.webp" alt="Keyo Customize" width={360} height={360} />
          </div>
        </div>
      </section>

      <section className="section-1">
        <div>
          <h2 className='heading-main2 text-center'>Technical Specifications</h2>
          <p className="heading-sub mt20 text-center">Our commercial and household smokers are precise, durable and efficient that is, they would suit well in restaurants, catering companies and food processing plants.</p>
        </div>
        <div className="container flex-col lg:flex-row flex items-center gap80">
          <div className="lg:w-1/2 grid grid-cols-2 gap-2 md:gap-5">
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/smoker_scene_2.webp" alt="Keyo Customize" width={350} height={350} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/smoker_scene_3.webp" alt="Keyo Customize" width={350} height={350} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/smoker_scene_1.webp" alt="Keyo Customize" width={350} height={350} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/smoker_scene_4.webp" alt="Keyo Customize" width={350} height={350} />
          </div>
          <div className="lg:w-1/2 space-y-5 xl:space-y-10">
            <div className=" grid grid-cols-1 gap-2 md:gap-5">
              <div>
                <h3 className="text font-bold">Temperature Control</h3>
                <p className="heading-sub mt20">Our smokers are also fitted with high-quality digital control systems, allowing the adjustment of temperature to within ±10 o F, and that of a range between 180 o F and 500 o F, making it highly consistent with each batch.</p>
              </div>
              <div>
                <h3 className="text font-bold">Smoking Chamber Capacity</h3>
                <p className="heading-sub mt20">Several power choices in place, starting with 50 lbs, which can be used at home, and up to 500 lbs, which could be used at a business level, addressing any business requirements and production demands.</p>
              </div>
              <div>
                <h3 className="text font-bold">Fuel Efficiency</h3>
                <p className="heading-sub mt20">It has optimized combustion and airflow systems, which make the fuel consumption up to 30% less as compared to the conventional smoker models, lowering the operating costs in the long term.</p>
              </div>
              <div>
                <h3 className="text font-bold">Heat Retention</h3>
                <p className="heading-sub mt20">A double insulated body reduces heat loss to less than 5 percent and this ensures even temperature inside the body and increases the overall smoking efficiency.</p>
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
                      What are some of the models of BBQ smokers that KEYO produces?
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
                      <p className="text">KEYO produces four major types of commercial BBQ smokers, including Offset Smokers, which reflects the traditional Texas-style with a large capacity; Vertical Smokers, that has the capacity to be used in the space-efficient design; Pellet Smokers, which is designed with automated control and specific temperature settings; and Cabinet Smokers, which is designed with large production capabilities in food processing. All the models can be sold in wholesale mode and also they are available in customization OEM/ODM.</p>
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
                      Does the smoker need to be assembled?
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
                      <p className="text">Yes, assembly is required. KEYO has detailed manuals and step-by-step video guidelines to help the customers to easily and conveniently assemble them.</p>
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
                      How many units would be required as minimum order quantity (MOQ) in wholesale?
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
                      <p className="text">KEYO has minimal minimum order quantities to help businesses to start operations. The precise MOQ will depend on the type of product and the degree of customization. To have the particular MOQ information needed to place your order, please contact our sales team.</p>
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
                      Does the custom order have its tooling/mold fee?
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
                      <p className="text">The fee will be based on the complexity of the design. Minor changes can be not a subject to extra fees, but more complicated alterations to the structure will attract mold fees. In the quotation, our team will provide clear-cut prices.</p>
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
                      What do you make your BBQ smokers of?
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
                      <p className="text">KEYO BBQ smokers are made of iron and steel (of high quality). The material thickness is customized according to the customer requirement and the product needs to be durable and able to retain heat.</p>
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
                      What payment terms does KEYO accept?
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
                      <p className="text">KEYO will accept T/T (Telegraphic Transfer), L/C (Letter of Credit) and PayPal. As per order volume and relationship that the customer has with the company, specific payment terms may be negotiated.</p>
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
                      What is the time production and time delivery?
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
                      <p className="text">KEYO has an estimated delivery time of 30-45 days that is shorter in comparison with the traditional factories (45-60 days). This incorporates production (template time of 7 days and manufacturing), inspection and packaging (1-2days) and transit time (5-30days, based on the destination). As per order volume and relationship that the customer has with the company, specific payment terms may be negotiated.</p>
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
                      Does KEYO offer OEM/ODM services?
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
                      <p className="text">Yes, KEYO offers full OEM and ODM services, full range of custom sizes and shapes, colours, branding and own-label production. We have integrated services including research and development, customization, production, quality control, packaging and logistics.</p>
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