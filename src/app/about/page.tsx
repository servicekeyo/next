'use client';

import { useState } from 'react';
import FooterContact from '@/components/FooterContact';
import Image from 'next/image';


export default function odmoem() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      
      <section className="section-1 relative isolate -z-10">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-80 xl:h-110 w-full mask-[radial-gradient(70rem_70rem_at_center,white,transparent)] stroke-gray-200"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <svg x="100%" y={0} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" width="100%" height="100%" strokeWidth={0} />
          </svg>
        <div className='herotitle-w'  data-aos="fade-in">
          <h1 className="heading-main">About Keyfire</h1>
          <p className="heading-sub mt30 text-hub">Whether it starts with a sketch, a photo, or simply an idea, our team turns your vision into a real, manufacturable product. A clear process, step by step — making customization simple and efficient.</p>
        </div>
      </section>

      <div className="section-1">
        <div className='container flex flex-col gap160'>
          <div className='container flex flex-row gap160'>
            <div className="w-1/2">
              <img alt="" src="/images/home/indx_one4.jpg" className="rounded-xl shadow-md " />
            </div>
            <div className='w-1/2 flex flex-col gap30 justify-center'>
                <h2 className="heading-main2">Why Choose Us</h2>
                <p className='text text-hub'>
                    At Keyfire, we deliver One-Stop OEM & ODM solution—from R&D and customization to manufacturing, quality control, packaging, and logistics. Our expert team ensures a smooth journey, enabling businesses to turn their BBQ grill concepts into market-ready products successfully.
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

          <div className="flex flex-col gap80">
            <div className="max-w-4xl">
              <h2 className="heading-main2">Professional Team</h2>
              <p className="heading-sub mt20 text-hub">
                  20+ Years Of Manufacturing experience
Keyfire has over 20 years of experience serving 2,000+ customers across 100+ countries, delivering reliable, high-quality production solution
                </p>
            </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap80'>
              <div className="text flex flex-col gap30">
                <p><strong>400 Skilled Workers</strong> – Ensuring stable, high-volume production capacity.</p>
                <p><strong>20 Account Managers</strong> – Dedicated support for seamless global communication.</p>
                <p><strong>10 Professional R&D</strong> – Creative solutions for product and packaging customization.</p>
                <p><strong>12 Quality Control Specialists</strong> – Strict inspections guaranteeing reliable performance.</p>
                <p>
                  we offer marketing support with catalogs and manuals.Our design team ensures your brand stands out with professional visuals that help grow your presence in the market.
                </p>
              </div>
              <div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
                <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 xl:gap-8">
                  <div className="">
                    <img  alt="" src="images/home/a7.jpg" className="block object-cover rounded-md"/>
                  </div>
                  <div className="-mt-24 ">
                    <img  alt="" src="images/home/a2.jpg" className="block  object-cover rounded-md"/>
                  </div>
                  <div className="">
                    <img  alt="" src="images/home/a1.jpg" className="block object-cover rounded-md"/>
                  </div>
                  <div className="-mt-24 ">
                    <img  alt="" src="images/home/a8.jpg" className="block object-cover rounded-md"/>
                  </div>
                  <div className="">
                    
                  </div>
                  <div className="-mt-24 ">
                    <img  alt="" src="images/home/a10.jpg" className="block  object-cover rounded-md"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      

      <FooterContact />

     </div>
  );
}