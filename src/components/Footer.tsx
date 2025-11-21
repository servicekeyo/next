"use client";
import Image from "next/image";
import { Phone,EnvelopeSimple,MapPin } from '@/components/Icons'
export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-footerground text-white">
   
      <section className="section-1 flex flex-col gap80">
        {/* 多列分栏，参考 Packoi 的“Types of Packaging and Print We Offer”结构 */}
        
        <div className="container flex flex-col lg:flex-row gap160">
          <div className="lg:w-3/12 flex flex-col gap30">
            <a href="/"><Image src="/images/LOGO1.png" alt="Keyfire custom BBQ grill manufacturer logo"
     title="Keyfire BBQ Manufacturing" width={175} height={40} /></a>
            <p className="heading-sub">Keyfire is a professional <strong>BBQ grill manufacturer</strong> in Foshan, China, specializing 
  in <strong>custom OEM and ODM services</strong> for gas grills, charcoal grills, electric grills, 
  and smokers. From initial design through manufacturing, quality control, and global logistics - 
  we're your complete manufacturing partner for building successful BBQ brands.</p>
          </div>
          <div className="lg:w-9/12 grid md:grid-cols-4 gap80">
            <div className="flex flex-col gap30">
              <h3 className="footer-title">Custom Grill</h3>
              <ul className="space-y-4 footer-text text-foreground/70">
                <li><a href="/wholesale/charcoal-grill">Charcoal Grill</a></li>
                <li><a href="/wholesale/gas-grill">Gas Grill</a></li>
                <li><a href="/wholesale/electrical-grill">Electrical Gril</a></li>
                <li><a href="/wholesale/kettle-grill">Kettle Grill</a></li>
                <li><a href="/wholesale/smoker">Smoker</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap30">
              <h3 className="footer-title">Company</h3>
              <ul className="space-y-4 footer-text text-foreground/70">
                <li><a href="/about">About Keyfire</a></li>
                <li><a href="/odmoem">ODM/OEM</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="flex flex-col gap30 col-span-2">
              <h3 className="footer-title">Contact</h3>
              <ul className="space-y-8 footer-text text-foreground/70">
                <li className="flex items-start gap-3">
                  <Phone size={24} className="flex-shrink-0 mt-0.5"/>
                  <a href="tel:+8613612569082">+8613612569082</a>
                </li>
                <li className="flex items-start gap-3">
                  <EnvelopeSimple size={24}  className="flex-shrink-0 mt-0.5"/>
                  <a href="mailto:ky01@keyobbq.com">ky01@keyobbq.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={24} weight="regular" className="flex-shrink-0 mt-0.5" />
                  <span className="heading-sub">
                    NO.2 Shencun Industrial Zone,Beisha, Lishui Town, Nanhai District, Foshan City, Guangdong, China
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </section>
      {/* 底部版权与链接 */}
        <div className="text-center mt-[-30] md:mt-[-60] mx-auto py-5 text-foreground/70">
          © {year} Keyo Customize. All rights reserved.
        </div>

    </footer>
  );
}