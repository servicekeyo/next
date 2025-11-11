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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://keyfirebbq.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Key Fire",
    template: "%s | Key Fire",
  },
  description: "Custom BBQ solutions, manufacturing insights, and grill supplier guidance.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    siteName: "Key Fire",
    url: siteUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
          <AosProvider />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
        </QuoteProvider>
      </body>
    </html>
  );
}
