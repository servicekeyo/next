'use client';

import { useState } from 'react';
import {CaretDown } from '@/components/Icons';
import FooterContact from '@/components/FooterContact';
import SEO from '@/components/SEO';
import AOSPageWrapper from '@/components/AOSPageWrapper';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Do you provide OEM/ODM services?",
    answer: "Yes. Our OEM/ODM services cover logo design, custom packaging, and tailored product designs.",
  },
  {
    id: 2,
    question: "What Is The MOQ For Your Wholesale Order?",
    answer: "The standard MOQ is 500 pieces. We can discuss flexibility for certain products or high-value orders.",
  },
  {
    id: 3,
    question: "How long is the lead time?",
    answer: "Samples: 7 days. Bulk orders: 30–45 days depending on season.",
  },
  {
    id: 4,
    question: "What payment terms do you accept?",
    answer: "T/T, L/C, PayPal (for samples).",
  },
  {
    id: 5,
    question: "Can you ship to the US/EU directly?",
    answer: "Yes, we provide FOB and DDP shipping terms.",
  },
  {
    id: 6,
    question: "What is your production capacity?",
    answer: "200,000 pieces per month, with flexible capacity to accommodate large orders.",
  },
  {
    id: 7,
    question: "What material and how thick is your bbq grills?",
    answer: "The material of our barbecue grill is generally iron, and the thickness is customized according to your requirements.",
  },
  {
    id: 8,
    question: "Can I customize the color and handles?",
    answer: "Yes, both are customizable. We have flexible options to meet your design.",
  },
  {
    id: 9,
    question: "Is it necessary to assemble it? Is it difficult?",
    answer: "Yes. It needs to be assembled. We provide you with detailed manuals and step-by-step videos, making assembly simple and convenient.",
  },
  {
    id: 10,
    question: "Can you print my logo on it?",
    answer: "Yes, we can print the logo on the product.",
  },
  {
    id: 11,
    question: "What is the sample production process?",
    answer: "Sample production process is divided into four steps: quotation-sample confirmation-mass production-delivery. We have design and QC teams to support each stage of the process, to ensure a smooth process.",
  },
  {
    id: 12,
    question: "Is there a tooling/mold fee?",
    answer: "It depends on the design. If it is a simple change, it may not be charged, but if the structure is more complicated, there will be a mold fee.",
  },
  {
    id: 13,
    question: "What is the typical MOQ for customized products?",
    answer: "It depends on the product. If the unit price of the product is low, then the minimum order quantity is generally 500 or more.",
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([1]); // First item open by default

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <AOSPageWrapper>
    <div className="min-h-screen">
      <SEO 
        wpUrl="https://admin.keyfirebbq.com/faq"
        fallbackTitle="FAQ - Frequently Asked Questions | Keyo Customize"
        fallbackDescription="Find answers to common questions about our BBQ grill manufacturing, OEM/ODM services, ordering process, MOQ, lead times, and more."
      />
      {/* Hero Section */}
      <section className="section-1 relative isolate -z-10">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-60 xl:h-110 w-full mask-[radial-gradient(70rem_70rem_at_center,white,transparent)] stroke-gray-200"
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
          <h1 className="heading-main" data-aos="fade-up" data-aos-delay="200">Frequently Asked Questions</h1>
          <p className="heading-sub mt30 text-hub" data-aos="fade-up" data-aos-delay="400">Find answers to common questions about our BBQ grills, customization services, and ordering process.</p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-3">
        <div className="container flex flex-col gap80" data-aos="fade-up" data-aos-duration="800">
            {/* FAQ Items */}
              {faqData.map((item, index) => (
                <div key={item.id} data-aos="fade-up" data-aos-delay={index * 100}>
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <h2 className="heading-main3" data-aos="fade-right">
                        {item.question}
                      </h2>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <CaretDown 
                        size={20} 
                        className={`text-gray-500 transition-transform duration-300 ${
                          openItems.includes(item.id) ? 'rotate-180' : 'rotate-0'
                        }`} 
                      />
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openItems.includes(item.id) 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="pt-6">
                      <div className="">
                        <p className="text" data-aos="fade-up" data-aos-delay="200">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </section>
      <FooterContact />
    </div>
    </AOSPageWrapper>
  );
}