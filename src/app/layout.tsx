import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { QuoteProvider } from "@/components/QuoteProvider";
import AosProvider from "@/components/AosProvider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${poppins.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <QuoteProvider>
          <AosProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            
            {/* Start of Tawk.to Script */}
            <script
              dangerouslySetInnerHTML={{
                __html: `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();(function(){var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];s1.async=true;s1.src='https://embed.tawk.to/693ccfc50981ca197f7a8e23/1jcaon7nc';s1.charset='UTF-8';s1.setAttribute('crossorigin','*');s0.parentNode.insertBefore(s1,s0);})();`
              }}
            />
            {/* End of Tawk.to Script */}
            
            <ScrollToTop />
          </AosProvider>
        </QuoteProvider>
      </body>
    </html>
  );
}
