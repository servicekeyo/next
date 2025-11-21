"use client";

import { useState } from "react";
import Image from "next/image";
import  { QuoteButtonPrimary } from "./QuoteButton";
import { List, X, CaretDown } from "phosphor-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [aboutSubmenuOpen, setAboutSubmenuOpen] = useState(false);
  const [servicesSubmenuOpen, setServicesSubmenuOpen] = useState(false);
  return (
    <header suppressHydrationWarning className="bg-white sticky top-0 z-50 px-5 md:px-10 xl:px-24 border-b border-gray-100">

      {/* 主导航 */}
      <div className="container mx-auto">
        <div className="flex items-center h-[60px] lg:h-[80px] justify-between">
          <a href="/"><Image src="/images/LOGO1.png" alt="Keyfire custom BBQ grill manufacturer logo" title="Keyfire BBQ Manufacturing" width={120} height={32} /></a>
 
          <nav className="hidden items-center gap-10 md:flex">
            <a href="/" >Home</a>
            <div className="relative group">
              <a className="flex items-center gap-1 ">
                Products
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute top-full left-0 pt-2 w-48 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white shadow-lg rounded-md border border-gray-200 py-2">
                  <a href="/grills/charcoal-grill"  title="Custom charcoal BBQ grill manufacturing" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    Charcoal Grill
                  </a>
                  <a href="/grills/gas-grill"  title="OEM gas BBQ grill manufacturer" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    Gas Grill
                  </a>
                   <a href="/grills/electrical-grill" title="Electric BBQ grill ODM service" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    Electrical Grill
                  </a>
                   <a href="/grills/kettle-grill" title="Custom kettle grill manufacturing" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    Kettle Grill
                  </a>
                   <a href="/grills/smoker" title="Smoker grill OEM manufacturer" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    Smoker
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <a className="flex items-center gap-1 hover:text-foreground/80 transition-colors py-2">
                Services
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute top-full left-0 pt-2 w-48 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white shadow-lg rounded-md border border-gray-200 py-2">
                  <a href="/odmoem" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    ODM/OEM
                  </a>
                  <a href="/custom_packaging" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    Custom Packaging
                  </a>
                  <a href="/packaging_shipping" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    Packaging Shipping
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <a className="flex items-center gap-1 hover:text-foreground/80 transition-colors py-2">
                About
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute top-full left-0 pt-2 w-48 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white shadow-lg rounded-md border border-gray-200 py-2">
                  <a href="/about" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    About Us
                  </a>
                  <a href="/faq" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    FAQ
                  </a>
                  <a href="/blog" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                    Blog
                  </a>
                </div>
              </div>
            </div>
            <a href="/contact">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <QuoteButtonPrimary className="hidden lg:inline-flex">Get a Custom Quote</QuoteButtonPrimary>
            <button
              type="button"
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors md:hidden"
              onClick={() => setOpen(!open)}
            >
              <List size={24} weight="bold" />
            </button>
          </div>
        </div>
      </div>

      {/* 移动端抽屉菜单 */}
      {open && (
        <>
          {/* 覆盖层 */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => {
              setOpen(false);
              setAboutSubmenuOpen(false);
              setServicesSubmenuOpen(false);
            }}
          />
          
          {/* 左侧抽屉 */}
          <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
            open ? 'translate-x-0' : '-translate-x-full'
          }`}>
            {/* 抽屉头部 */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <Image src="/images/LOGO1.png" alt="Keyo Customize" width={120} height={32} />
              <button
                onClick={() => {
                  setOpen(false);
                  setAboutSubmenuOpen(false);
                  setServicesSubmenuOpen(false);
                }}
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* 抽屉内容 */}
            <nav className="p-6">
              <div className="flex flex-col space-y-6">
                <a 
                  href="/" 
                  className="text-lg font-medium text-gray-900 hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Home
                </a>
                
                {/* Wholesale 菜单 */}
                <div className="space-y-3">
                  <div className="text-lg font-medium text-gray-900">Products</div>
                  <div className="pl-4 space-y-3">
                    <a 
                      href="/grills/charcoal-grill" 
                      className="block text-base text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      Charcoal Grill
                    </a>
                    
                    <a 
                      href="/grills/gas-grill" 
                      className="block text-base text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      Gas Grill
                    </a>

                    <a 
                      href="/grills/electrical-grill" 
                      className="block text-base text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      Electrical Grill
                    </a>

                    <a 
                      href="/grills/kettle-grill" 
                      className="block text-base text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      Kettle Grill
                    </a>

                    <a 
                      href="/grills/smoker" 
                      className="block text-base text-gray-600 hover:text-primary transition-colors"
                      onClick={() => setOpen(false)}
                    >
                      Smoker
                    </a>
                  </div>
                </div>
                <div className="space-y-3">
                  <button 
                    className="flex items-center justify-between w-full text-lg font-medium text-gray-900 hover:text-primary transition-colors"
                    onClick={() => setServicesSubmenuOpen(!servicesSubmenuOpen)}
                  >
                    <span>Services</span>
                    <CaretDown 
                      size={16} 
                      className={`transition-transform duration-200 ${
                        servicesSubmenuOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>
                  {servicesSubmenuOpen && (
                    <div className="pl-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
                      <a 
                        href="/odmoem" 
                        className="block text-base text-gray-600 hover:text-primary transition-colors"
                        onClick={() => {
                          setOpen(false);
                          setServicesSubmenuOpen(false);
                        }}
                      >
                        ODM/OEM
                      </a>
                      <a 
                        href="/custom_packaging" 
                        className="block text-base text-gray-600 hover:text-primary transition-colors"
                        onClick={() => {
                          setOpen(false);
                          setServicesSubmenuOpen(false);
                        }}
                      >
                        Custom Packaging
                      </a>
                      <a 
                        href="/packaging_shipping" 
                        className="block text-base text-gray-600 hover:text-primary transition-colors"
                        onClick={() => {
                          setOpen(false);
                          setServicesSubmenuOpen(false);
                        }}
                      >
                        Packaging Shipping
                      </a>
                    </div>
                  )}
                </div>
                {/* About 下拉菜单 */}
                <div className="space-y-3">
                  <button 
                    className="flex items-center justify-between w-full text-lg font-medium text-gray-900 hover:text-primary transition-colors"
                    onClick={() => setAboutSubmenuOpen(!aboutSubmenuOpen)}
                  >
                    <span>About</span>
                    <CaretDown 
                      size={16} 
                      className={`transition-transform duration-200 ${
                        aboutSubmenuOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>
                  
                  {/* 二级菜单 - 条件渲染 */}
                  {aboutSubmenuOpen && (
                    <div className="pl-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
                      <a 
                         href="/about" 
                         className="block text-base text-gray-600 hover:text-primary transition-colors"
                         onClick={() => {
                           setOpen(false);
                           setAboutSubmenuOpen(false);
                         }}
                       >
                         About Us
                       </a>
                       <a 
                         href="/faq" 
                         className="block text-base text-gray-600 hover:text-primary transition-colors"
                         onClick={() => {
                           setOpen(false);
                           setAboutSubmenuOpen(false);
                         }}
                       >
                         FAQ
                       </a>
                        <a 
                          href="/blog" 
                          className="block text-base text-gray-600 hover:text-primary transition-colors"
                          onClick={() => {
                            setOpen(false);
                            setAboutSubmenuOpen(false);
                          }}
                        >
                          Blog
                        </a>
                    </div>
                  )}
                </div>
                
                <a 
                  href="/contact" 
                  className="text-lg font-medium text-gray-900 hover:text-primary transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </a>
                
                {/* 报价按钮 */}
                <div className="pt-6 border-t border-gray-200">
                  <QuoteButtonPrimary className='mt20'>Get A Instant Quote Now</QuoteButtonPrimary>
                </div>
              </div>
            </nav>
          </div>
        </>
      )}
      
    </header>
  );
}