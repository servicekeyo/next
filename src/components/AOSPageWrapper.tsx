'use client';

import { useLayoutEffect, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AOSPageWrapperProps {
  children: React.ReactNode;
}

export default function AOSPageWrapper({ children }: AOSPageWrapperProps) {
  useLayoutEffect(() => {
    // 确保只在客户端初始化AOS
    if (typeof window !== 'undefined') {
      // 清理可能存在的旧实例
      AOS.refreshHard();
      
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
    }
  }, []);

  return (
    <div suppressHydrationWarning>
      {children}
    </div>
  );
}