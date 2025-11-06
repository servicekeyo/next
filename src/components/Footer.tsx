"use client";
import Image from "next/image";
import { Phone, EnvelopeSimple, MapPin } from "phosphor-react";
export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-footerground text-white">
   
      <section className="section-2">
        {/* 多列分栏，参考 Packoi 的“Types of Packaging and Print We Offer”结构 */}
        
        <div className="grid container gap-15 md:gap-y-0 xl:gap-20 2xl:gap-40 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-5 lg:space-y-10 xl:space-y-20">
            <a href="/" className="text-lg font-semibold text-foreground"><Image src="/images/LOGO1.png" alt="Keyo Customize" width={120} height={40} /></a>
            <p className="text-sm leading-7 mt20">KEYO has been committed to producing high-quality BBQ grills, fireplaces, and accessories, offering one-stop OEM and ODM solutions from R&D and customization to manufacturing, quality control, packaging, and logistics.</p>
          </div>
          <div className="md:pt-10">
            <h3 className="footer-title">Custom Printed Boxes</h3>
            <ul className="mt-4 space-y-5 footer-text text-foreground/70">
              <li><a href="#">Mailing Boxes</a></li>
              <li><a href="#">Shipping Boxes</a></li>
              <li><a href="#">Product Display Boxes</a></li>
              <li><a href="#">Custom Inserts</a></li>
            </ul>
          </div>

          <div className="md:pt-10">
            <h3 className="footer-title">Company</h3>
            <ul className="mt-4 space-y-5 footer-text text-foreground/70">
              <li><a href="#">Gift Bags</a></li>
              <li><a href="#">Shopping Bags</a></li>
              <li><a href="#">Paper & Kraft Bags</a></li>
              <li><a href="#">Eco-friendly Bags</a></li>
            </ul>
          </div>

          <div className="md:pt-10">
            <h3 className="footer-title">Contact</h3>
            <ul className="mt-4 space-y-5 footer-text text-foreground/70">
              <li className="flex items-start gap-3">
                <Phone size={24} weight="regular" className="flex-shrink-0 mt-0.5" />
                <a href="tel:+8613612569082">+8613612569082</a>
              </li>
              <li className="flex items-start gap-3">
                <EnvelopeSimple size={24} weight="regular" className="flex-shrink-0 mt-0.5" />
                <a href="mailto:ky01@keyobbq.com">ky01@keyobbq.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={24} weight="regular" className="flex-shrink-0 mt-0.5" />
                <span>
                  NO.2 Shencun Industrial Zone,Beisha, Lishui Town, Nanhai District, Foshan City, Guangdong, China
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* 底部版权与链接 */}
        <div className="mt-12 flex flex-col gap-4 text-sm text-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Keyo Customize. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="transition-colors hover:text-foreground">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-foreground">Terms</a>
            <a href="#" className="transition-colors hover:text-foreground">Contact</a>
          </div>
        </div>
      </section>
    </footer>
  );
}