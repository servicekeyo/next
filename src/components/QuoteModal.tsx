'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ArrowLeft, ArrowRight, Check, X, CircleNotch } from 'phosphor-react';

interface FormData {
  purchaseType: string;
  businessType: string;
  quantity: string;
  purpose: string;
  certification: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    purchaseType: '',
    businessType: '',
    quantity: '',
    purpose: '',
    certification: '',
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // 重置表单当弹窗关闭时
  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setFormData({
        purchaseType: '',
        businessType: '',
        quantity: '',
        purpose: '',
        certification: '',
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });
      setIsSubmitted(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  // ESC键关闭
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  const handleNext = () => {
    if (step < 6) {
      setStep(step + 1);
      // 滚动到顶部
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
      // 滚动到顶部
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // 模拟提交延迟
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 在静态版本中，我们只是显示成功消息
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting quote:', error);
      alert('Failed to submit quote. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isStepValid = () => {
    switch (step) {
      case 1: return formData.purchaseType !== '';
      case 2: return formData.businessType !== '';
      case 3: return formData.quantity !== '';
      case 4: return formData.purpose !== '';
      case 5: return formData.certification !== '';
      case 6: return formData.name !== '' && isValidEmail(formData.email) && formData.company !== '' && formData.phone !== '';
      default: return false;
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center md:p-4">
      {/* 背景遮罩 */}
      <div 
        className={`absolute inset-0 bg-black/80 transition-opacity duration-300 ${
          isOpen ? 'bg-opacity-60' : 'bg-opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* 弹窗内容 - 响应式设计 */}
      <div className={`
        relative bg-white shadow-2xl w-full transition-all duration-300 ease-out flex flex-col
        md:rounded-2xl md:max-w-2xl md:max-h-[90vh] md:m-4
        max-md:rounded-t-3xl max-md:fixed max-md:bottom-0 max-md:left-0 max-md:right-0 max-md:max-h-[95vh]
        ${isOpen 
          ? 'md:scale-100 md:opacity-100 max-md:translate-y-0' 
          : 'md:scale-95 md:opacity-0 max-md:translate-y-full'
        }
        overflow-hidden
      `}>
        {/* 移动端拖拽指示器 */}
        <div className="md:hidden flex justify-center pt-3 pb-1 bg-gradient-to-r from-blue-600 to-blue-700">
          <div className="w-12 h-1 bg-white/30 rounded-full"></div>
        </div>
        
        {/* 头部 */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 max-md:pt-3 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="heading-main2">Quote Request Form</h2>
              <p className="heading-sub mt20">Thanks for your inquiry! For a fast and accurate quote, please take one minute to complete our brief form. Let's get started!</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-blue-200 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* 进度条 */}
          <div className="mt-6">
            <div className="flex items-center gap-4">
              <div className="flex-1 bg-blue-500 rounded-full h-2">
                <div 
                  className="bg-white rounded-full h-2 transition-all duration-300"
                  style={{ width: `${(isSubmitting || isSubmitted) ? 100 : (step / 6) * 100}%` }}
                />
              </div>
              <span className="text-sm text-blue-100 whitespace-nowrap">
                {isSubmitting ? 'Processing...' : isSubmitted ? 'Completed!' : `Step ${step} of 6`}
              </span>
            </div>
          </div>
        </div>

        {isSubmitting ? (
          // 提交中加载页面
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CircleNotch size={32} className="text-blue-600 animate-spin" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Submitting Your Request...</h3>
            <p className="text-gray-600">
              Please wait while we process your quote request. This may take a few moments.
            </p>
          </div>
        ) : isSubmitted ? (
          // 提交成功页面
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={32} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted Successfully!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for your interest! Our team will review your requirements and get back to you within 24 hours with a detailed quote.
            </p>
            <button
              onClick={onClose}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Close
            </button>
          </div>
        ) : (
          <div ref={scrollContainerRef} className="flex-1 overflow-y-auto">
            <div className="p-8">
              {/* 步骤内容 */}
              <div className="min-h-[300px]">
              {step === 1 && (
                <div>
                  <h3 className="text font-semibold">Are you purchasing for personal use or on behalf of a company?</h3>
                  <p className="heading-sub mb-8">This helps us understand your specific needs and provide the most relevant solutions.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { value: 'Personal use', label: 'Personal use', desc: 'For individual or personal projects' },
                      { value: 'Company purchase', label: 'Company purchase', desc: 'For business or commercial use' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-start p-4 border-2 rounded-lg cursor-pointer hover:border-blue-300 transition-colors">
                        <input
                          type="radio"
                          name="purchaseType"
                          value={option.value}
                          checked={formData.purchaseType === option.value}
                          onChange={(e) => updateFormData('purchaseType', e.target.value)}
                          className="mt-1 mr-3 text-blue-600"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{option.label}</div>
                          <div className="text-sm text-gray-600">{option.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="text font-semibold">What is your company's main business type?</h3>
                  <p className="heading-sub mb-8">Understanding your business model helps us recommend the best packaging solutions.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Wholesaler / Distributor',
                      'Brand Agent / Exclusive Distributor',
                      'Retailer / Supermarket',
                      'E-commerce seller (Amazon, eBay, Mercado Libre, etc.)',
                      'Hotel / Restaurant chain / Project buyer',
                      'Other'
                    ].map((type) => (
                      <label key={type} className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:border-blue-300 transition-colors">
                        <input
                          type="radio"
                          name="businessType"
                          value={type}
                          checked={formData.businessType === type}
                          onChange={(e) => updateFormData('businessType', e.target.value)}
                          className="mr-3 text-blue-600"
                        />
                        <span className="font-medium text-gray-900">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3 className="text font-semibold">What is your estimated purchase quantity?</h3>
                  <p className="heading-sub mb-8">This helps us provide accurate pricing and minimum order quantities.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { value: '1–10 units', label: '1–10 units', desc: 'Small quantity / Sample order' },
                      { value: '10–200 units', label: '10–200 units', desc: 'Medium quantity / Trial order' },
                      { value: '200+ units', label: '200+ units', desc: 'Large quantity / Bulk order' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-start p-4 border-2 rounded-lg cursor-pointer hover:border-blue-300 transition-colors">
                        <input
                          type="radio"
                          name="quantity"
                          value={option.value}
                          checked={formData.quantity === option.value}
                          onChange={(e) => updateFormData('quantity', e.target.value)}
                          className="mt-1 mr-3 text-blue-600"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{option.label}</div>
                          <div className="text-sm text-gray-600">{option.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h3 className="text font-semibold">What is the main purpose of your purchase?</h3>
                  <p className="heading-sub mb-8">This helps us recommend the most suitable materials and designs.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { value: 'Resale (wholesale / retail / e-commerce)', label: 'Resale (wholesale / retail / e-commerce)', desc: 'For selling to end customers' },
                      { value: 'Direct use (hotel / restaurant / project)', label: 'Direct use (hotel / restaurant / project)', desc: 'For internal business operations' },
                      { value: 'OEM / Customization (with brand or promotional gifts)', label: 'OEM / Customization (with brand or promotional gifts)', desc: 'For branding and marketing purposes' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-start p-4 border-2 rounded-lg cursor-pointer hover:border-blue-300 transition-colors">
                        <input
                          type="radio"
                          name="purpose"
                          value={option.value}
                          checked={formData.purpose === option.value}
                          onChange={(e) => updateFormData('purpose', e.target.value)}
                          className="mt-1 mr-3 text-blue-600"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{option.label}</div>
                          <div className="text-sm text-gray-600">{option.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 5 && (
                <div>
                  <h3 className="text font-semibold">Do you have specific certification or compliance requirements?</h3>
                  <p className="heading-sub mb-8">Some industries require specific certifications for packaging materials.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { value: 'Yes', label: 'Yes', desc: 'I need specific certifications (FDA, FSC, etc.)' },
                      { value: 'No', label: 'No', desc: 'Standard packaging is sufficient' }
                    ].map((option) => (
                      <label key={option.value} className="flex items-start p-4 border-2 rounded-lg cursor-pointer hover:border-blue-300 transition-colors">
                        <input
                          type="radio"
                          name="certification"
                          value={option.value}
                          checked={formData.certification === option.value}
                          onChange={(e) => updateFormData('certification', e.target.value)}
                          className="mt-1 mr-3 text-blue-600"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{option.label}</div>
                          <div className="text-sm text-gray-600">{option.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 6 && (
                <div>
                  <h3 className="text font-semibold">Contact Information</h3>
                  <p className="heading-sub mb-8">Please provide your details so we can send you a personalized quote.</p>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Name*"
                          value={formData.name}
                          onChange={(e) => updateFormData('name', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Your Email*"
                          value={formData.email}
                          onChange={(e) => updateFormData('email', e.target.value)}
                          className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent ${
                            formData.email && !isValidEmail(formData.email) 
                              ? 'border-red-500 focus:ring-red-500' 
                              : 'border-gray-300 focus:ring-blue-500'
                          }`}
                        />
                        {formData.email && !isValidEmail(formData.email) && (
                          <p className="text-red-500 text-sm mt-1">Please enter a valid email address</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Company*"
                          value={formData.company}
                          onChange={(e) => updateFormData('company', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          placeholder="Phone*"
                          value={formData.phone}
                          onChange={(e) => updateFormData('phone', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <textarea
                        placeholder="Enter your inquiry details such as packaging or print type, material, size, quantity, etc."
                        value={formData.message}
                        onChange={(e) => updateFormData('message', e.target.value)}
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 导航按钮 */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
              <button
                onClick={handlePrev}
                disabled={step === 1}
                className="flex items-center px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Previous
              </button>
              
              {step === 6 ? (
                <button
                  onClick={handleSubmit}
                  disabled={!isStepValid() || isSubmitting}
                  className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                >
                  {isSubmitting ? (
                    <>
                      <CircleNotch size={20} className="mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Quote Request
                      <ArrowRight size={20} className="ml-2" />
                    </>
                  )}
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  disabled={!isStepValid()}
                  className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                >
                  Next
                  <ArrowRight size={20} className="ml-2" />
                </button>
              )}
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // 使用 Portal 渲染到 body
  return typeof window !== 'undefined' ? createPortal(modalContent, document.body) : null;
}