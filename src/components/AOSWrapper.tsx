'use client';

import { useLayoutEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AOSWrapperProps {
  children: React.ReactNode;
  duration?: number;
  once?: boolean;
  offset?: number;
  delay?: number;
  easing?: 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'ease-out-cubic';
  mirror?: boolean;
  anchorPlacement?: 'top-bottom' | 'top-center' | 'top-top' | 'center-bottom' | 'center-center' | 'center-top' | 'bottom-bottom' | 'bottom-center' | 'bottom-top';
}

export default function AOSWrapper({ 
  children, 
  duration = 800,
  once = true,
  offset = 100,
  delay = 0,
  easing = 'ease-out-cubic',
  mirror = false,
  anchorPlacement = 'top-bottom'
}: AOSWrapperProps) {
  useLayoutEffect(() => {
    AOS.init({
      duration,
      once,
      offset,
      delay,
      easing,
      mirror,
      anchorPlacement
    });
    
    // 刷新AOS以处理动态内容
    AOS.refresh();
    
    return () => {
      // 清理函数
      AOS.refreshHard();
    };
  }, []);

  return <>{children}</>;
}