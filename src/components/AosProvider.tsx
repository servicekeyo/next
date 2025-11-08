"use client";

import { useEffect } from "react";
// @ts-ignore  // 临时忽略类型声明缺失，待添加 @types/aos 或自定义声明文件
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosProvider() {
  useEffect(() => {
    AOS.init({
      duration: 600, // 动画持续时间（毫秒）
      easing: "ease-out-cubic",
      once: true, // 只在首次滚动到元素时触发
      offset: 50, // 提前多少像素触发动画
    });
  }, []);

  return null; // 该组件不渲染任何内容，只负责初始化 AOS
}