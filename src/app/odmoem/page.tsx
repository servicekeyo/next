'use client';

import { useState } from 'react';
import FooterContact from '@/components/FooterContact';
import Image from 'next/image';

export default function odmoem() {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      
      <section className="section-1 animate-fadeIn relative isolate -z-10" data-aos="fade-up">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-110 w-full mask-[radial-gradient(70rem_70rem_at_center,white,transparent)] stroke-gray-200"
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
          
        <div className='w-3/5 mx-auto text-center'>
          <h1 className="heading-main">From Idea to Product in Just 6 Steps</h1>
          <p className="heading-sub mt30 text-hub">Whether it starts with a sketch, a photo, or simply an idea, our team turns your vision into a real, manufacturable product. A clear process, step by step — making customization simple and efficient.</p>
        </div>
      </section>

      <section className="section-1">
        <div className="container flex flex-col gap160">
          <div className="flex flex-row gap160">
            <div className="w-1/2"><Image className='rounded-xl box-shadow-xl' src="/images/home/factory (6).jpg" alt="odmoem" width={720} height={500} /></div>
            <div className="w-1/2 flex flex-col justify-center">
              <span className="heading-sub text-primary font-bold">Step1</span>
              <h2 className="heading-main3 my-5">Share Your Idea or Reference Image</h2>
              <p className="text w-2/3">Tell us what you want to create or send a product image reference — we’ll study your concept and prepare for design planning.</p>
            </div>
          </div>

          <div className="flex flex-row justify-between">
            <div className="w-1/2 flex flex-col justify-center">
              <span className="heading-sub text-primary font-bold">Step2</span>
              <h2 className="heading-main3 my-5">Confirm Dimensions with 2D Drawings</h2>
              <p className="text w-2/3">We create detailed 2D drawings to confirm structure and measurements, ensuring all dimensions meet your functional requirements.</p>
            </div>
            <div className="w-1/2"><Image className='rounded-xl box-shadow-xl' src="/images/home/factory (6).jpg" alt="odmoem" width={720} height={500} /></div>
          </div>
        </div>
      </section>

     </div>
  );
}