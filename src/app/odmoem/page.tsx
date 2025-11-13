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
            data-aos="fade-in"
            data-aos-duration="1000"
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
        <div className='w-4/5 xl:w-3/5 mx-auto text-center' data-aos="fade-up" data-aos-duration="800">
          <h1 className="heading-main" data-aos="fade-up" data-aos-delay="200">From Idea To Product In Just 6 Steps</h1>
          <p className="heading-sub mt30 text-hub" data-aos="fade-up" data-aos-delay="400">Whether it starts with a sketch, a photo, or simply an idea, our team turns your vision into a real, manufacturable product. A clear process, step by step — making customization simple and efficient.</p>
        </div>
      </section>

      <section className="section-3">
        <div className="container flex flex-col gap160" data-aos="fade-up" data-aos-duration="800">

          <div className="flex flex-col-reverse md:flex-row gap160">
            <div className="md:w-1/2" data-aos="fade-right"><Image className='rounded-xl box-shadow-xl' src="/images/odm/odm1.jpg" alt="odmoem" width={720} height={500} /></div>
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
              <span className="heading-sub text-primary font-bold">Step1</span>
              <h2 className="heading-main3 my-5">Share Your Idea or Reference Image</h2>
              <p className="text w-2/3">Tell us what you want to create or send a product image reference — we’ll study your concept and prepare for design planning.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap160">
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-right">
              <span className="heading-sub text-primary font-bold">Step2</span>
              <h2 className="heading-main3 my-5">Confirm Dimensions with 2D Drawings</h2>
              <p className="text w-2/3">We create detailed 2D drawings to confirm structure and measurements, ensuring all dimensions meet your functional requirements.</p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left"><Image className='rounded-xl box-shadow-xl' src="/images/odm/odm2.jpg" alt="odmoem" width={720} height={500} /></div>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap160">
            <div className="md:w-1/2" data-aos="fade-right"><Image className='rounded-xl box-shadow-xl' src="/images/odm/odm3.jpg" alt="odmoem" width={720} height={500} /></div>
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
              <span className="heading-sub text-primary font-bold">Step3</span>
              <h2 className="heading-main3 my-5">Visualize in 3D Model</h2>
              <p className="text w-2/3">A 3D model is created based on your approved dimensions, allowing you to preview and refine the product’s final appearance.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap160">
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-right">
              <span className="heading-sub text-primary font-bold">Step4</span>
              <h2 className="heading-main3 my-5">Define Function & Details</h2>
              <p className="text w-2/3">We confirm product features, structure, assembly, and finish options — ensuring functionality meets your market expectations.</p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left"><Image className='rounded-xl box-shadow-xl' src="/images/odm/odm4.jpg" alt="odmoem" width={720} height={500} /></div>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap160">
            <div className="md:w-1/2" data-aos="fade-right"><Image className='rounded-xl box-shadow-xl' src="/images/home/factory (6).jpg" alt="odmoem" width={720} height={500} /></div>
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-left">
              <span className="heading-sub text-primary font-bold">Step5</span>
              <h2 className="heading-main3 my-5">Molding & Production Setup</h2>
              <p className="text w-2/3">Once designs are approved, we move into tooling and trial production to guarantee precision and readiness for mass manufacturing.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap160">
            <div className="md:w-1/2 flex flex-col justify-center" data-aos="fade-right">
              <span className="heading-sub text-primary font-bold">Step6</span>
              <h2 className="heading-main3 my-5">Sample Approval & Delivery</h2>
              <p className="text w-2/3">Samples are produced, tested, and delivered for your approval — ensuring the final product meets your expectations before production.</p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left"><Image className='rounded-xl box-shadow-xl' src="/images/odm/odm6.jpg" alt="odmoem" width={720} height={500} /></div>
          </div>
          
        </div>
      </section>
      <FooterContact />

     </div>
  );
}