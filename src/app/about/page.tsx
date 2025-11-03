"use client";

import Image from "next/image";
import { QuoteButtonPrimary } from '@/components/QuoteButton';
import FooterContact from '@/components/FooterContact';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-2 bg-[url('https://packoi.com/wp-content/uploads/2022/03/custom-printed-boxes.jpg')] banner">
        <h1 className="heading-main">About Keyo Customize</h1>
        <p className="heading-sub mt20">Your trusted partner in custom packaging solutions since 2015</p>
      </section>

      <section className="section-1">
        <div className=" text-center 2xl:w-2/3 mx-auto">
        <h2 className='heading-main2'>Your trusted BBQ Grill Manufacturer In China</h2>
        <p className="heading-sub mt20">
          Since 1998, KEYO has been dedicated to producing high-quality BBQ grills, fireplaces, and accessories. Today, we are proud to serve as a trusted supplier to leading global retailers such as Walmart, Auchan, Aldi, Tesco, Costco, Sodimac, and Carrefour (see the 2024 
           <a
            href="https://www.carrefour.com/sites/default/files/2024-07/Carrefour's%20factories%202024.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-hover font-bold"
          >
            Carrefour supplier list
          </a>).
        </p>
        </div>
      </section>

      <section className="section-1 bg-foreground">
        <div className="container flex-col lg:flex-row flex items-center gap80">
          <div className="lg:w-2/5 space-y-5 xl:space-y-8">
            <h2 className="heading-main3">What we offer</h2>
            <p className="text">At KEYO, we deliver One-Stop OEM & ODM solution—from R&D and customization to manufacturing, quality control, packaging, and logistics. Our expert team ensures a smooth journey, enabling businesses to turn their BBQ grill concepts into market-ready products successfully.</p>
            <p className="text">Our wholesale product range features charcoal grills, gas grills, electric grills,smokers,fire pits,pizza ovens. Each unit is crafted from premium materials to ensure long-lasting performance and reliable operation.</p>
            <p className="text">In addition to grills, we offer marketing support with catalogs and manuals.Our design team ensures your brand stands out with professional visuals that help grow your presence in the market.</p>
          </div>
          <div className="lg:w-3/5 grid grid-cols-2 gap-2 md:gap-5">
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/a1.webp" alt="Keyo Customize" width={400} height={210} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/a2.webp" alt="Keyo Customize" width={400} height={210} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/a3.webp" alt="Keyo Customize" width={400} height={210} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/a4.webp" alt="Keyo Customize" width={400} height={210} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/a5.webp" alt="Keyo Customize" width={400} height={210} />
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/a6.webp" alt="Keyo Customize" width={400} height={210} />
          </div>
        </div>
      </section>

      <section className="section-1 ">
        <div className="container flex-col-reverse lg:flex-row flex items-center gap80">
          <div className="lg:w-3/5 space-y-5">
            <div className=" grid grid-cols-3 gap-2 md:gap-5">
              <Image className="col-span-2 row-span-2" src="https://keyobarbecue.com/wp-content/uploads/2025/09/b4.webp" alt="Keyo Customize" width={540} height={320} />
              <Image className="" src="https://keyobarbecue.com/wp-content/uploads/2025/09/b5.webp" alt="Keyo Customize" width={260} height={150} />
              <Image className="col-span-1" src="https://keyobarbecue.com/wp-content/uploads/2025/09/b6.webp" alt="Keyo Customize" width={260} height={150} />
            </div>
            <div className="grid grid-cols-3 gap-2 md:gap-5">
              <Image className="col-span-1" src="https://keyobarbecue.com/wp-content/uploads/2025/09/b1.webp" alt="Keyo Customize" width={260} height={180} />
              <Image className="col-span-1" src="https://keyobarbecue.com/wp-content/uploads/2025/09/b2.webp" alt="Keyo Customize" width={260} height={180} />
              <Image className="col-span-1" src="https://keyobarbecue.com/wp-content/uploads/2025/09/b3.webp" alt="Keyo Customize" width={260} height={180} />
            </div>
          </div>
          <div className="lg:w-2/5 space-y-5 xl:space-y-8">
            <h2 className="heading-main3">Why Choose KEYO</h2>
            <p className="text">20+ Years Of Manufacturing experience <br/>KEYO has over 20 years of experience serving 2,000+ customers across 100+ countries, delivering reliable, high-quality production solution</p>
          </div>
        </div>
      </section>

      <section className="section-1 bg-foreground">
        <div className="container flex-col lg:flex-row flex items-center gap80">
          <div className="lg:w-2/5 space-y-5 xl:space-y-8">
            <h2 className="heading-main3">Reliable Supply, Efficient Delivery</h2>
            <p className="text">With 3,000 containers of annual capacity, KEYO ensures reliable and efficient fulfillment of bulk orders.Orders are shipped within 30–40 days after payment, helping you keep your products on the market without delay.</p>
          </div>
          <div className="lg:w-3/5">
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/c1_1.webp" alt="Keyo Customize" width={820} height={500} />
          </div>
        </div>
      </section>

      <section className="section-1">
        <div className="container flex-col lg:flex-row flex items-center gap80">
          <div className="lg:w-3/5">
            <Image src="https://keyobarbecue.com/wp-content/uploads/2025/09/d1.webp" alt="Keyo Customize" width={820} height={500} />
          </div>
          <div className="lg:w-2/5 space-y-5 xl:space-y-8">
            <h2 className="heading-main3">Global Standards, Certified Quality</h2>
            <p className="text">At KEYO, We deliver safe and reliable products, certified to international standards, including ISO9001, ISO14001, BSCI, FSC, and SMETA. Our products meet global compliance requirements such as GS EN1860-1, LFGB, DGCCRF, FDA, CE, UKCA, and RoHS. As a Sedex B-member, we are committed to ethical practices and corporate social responsibility.</p>
          </div>
        </div>
      </section>

      <FooterContact />

    </div>
  );
}