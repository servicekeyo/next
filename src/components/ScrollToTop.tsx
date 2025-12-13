"use client";
import { useState, useEffect } from "react";
import { ArrowUp } from "phosphor-react";

export default function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-[60] flex flex-col items-center justify-center gap-1 px-3 py-2 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300 hover:scale-105"
      aria-label="回到顶部"
      title="回到顶部"
    >
      <ArrowUp size={16} weight="bold" />
      <span className="text-xs font-medium">Top</span>
    </button>
  );
}