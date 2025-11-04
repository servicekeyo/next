'use client';

import { useQuote } from './QuoteProvider';

interface QuoteButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'link';
}

export default function QuoteButton({ 
  children = 'Get Quote', 
  className = '',
  variant = 'primary'
}: QuoteButtonProps) {
  const { openQuote } = useQuote();

  const baseStyles = 'transition-colors duration-200 cursor-pointer';
  
  const variantStyles = {
    primary: 'bg-primary hover:bg-hover text-white py-3 px-6 rounded-md',
    secondary: 'border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-6 rounded-lg',
    link: 'text-blue-500 hover:text-blue-600 underline'
  };

  if (variant === 'link') {
    return (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          openQuote();
        }}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={openQuote}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
/*
/* 演示不同样式 
            <div className="mt-6 space-y-2">
              <p className="text-sm text-gray-500">多种调用方式演示：</p>
              <div className="flex gap-2 flex-wrap">
                <QuoteButton>默认按钮</QuoteButton>
                <QuoteButton variant="secondary">次要按钮</QuoteButton>
                <QuoteButton variant="link">链接样式</QuoteButton>
                <QuoteLink>或点击这里获取报价</QuoteLink>
              </div>
            </div>
*/
// 预定义的快捷组件
export function QuoteButtonPrimary({ children, className }: { children?: React.ReactNode; className?: string }) {
  return <QuoteButton variant="primary" className={className}>{children}</QuoteButton>;
}

export function QuoteButtonSecondary({ children, className }: { children?: React.ReactNode; className?: string }) {
  return <QuoteButton variant="secondary" className={className}>{children}</QuoteButton>;
}

export function QuoteLink({ children, className }: { children?: React.ReactNode; className?: string }) {
  return <QuoteButton variant="link" className={className}>{children}</QuoteButton>;
}