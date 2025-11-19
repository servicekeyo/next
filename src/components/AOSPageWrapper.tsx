'use client';

import { useLayoutEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AOSPageWrapperProps {
  children: React.ReactNode;
}

export default function AOSPageWrapper({ children }: AOSPageWrapperProps) {
  useLayoutEffect(() => {
    // 初始化AOS
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      delay: 0,
      easing: 'ease-out-cubic',
      mirror: false,
      anchorPlacement: 'top-bottom'
    });
    
    // 延迟刷新以确保DOM完全加载
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <>{children}</>;
}