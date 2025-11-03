'use client';

import { useState } from 'react';
import { CaretDown, CaretUp } from 'phosphor-react';
import FooterContact from '@/components/FooterContact';

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

  const categories = Array.from(new Set(faqData.map(item => item.category))).filter(Boolean);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-2 bg-[url('https://packoi.com/wp-content/uploads/2022/03/custom-printed-boxes.jpg')] banner">
        <h1 className="heading-main">Frequently Asked Questions</h1>
        <p className="heading-sub mt20">Find answers to common questions about our BBQ grills, customization services, and ordering process.</p>
      </section>

      {/* FAQ Content */}
      <section className="section-1">
        <div className="container">
            {/* FAQ Items */}
            <div className="space-y-10">
              {faqData.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex-1">
                      <h3 className="text-base md:text-lg font-semibold">
                        {item.question}
                      </h3>
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
                    <div className="px-6 pb-5 xl:pb-10">
                      <div className="pt-5 xl:pt-10 border-t border-gray-100">
                        <p className="text">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>
      <FooterContact />
    </div>
  );
}