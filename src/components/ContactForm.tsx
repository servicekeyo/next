"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setIsLoading(true);
          setSubmitMessage("");

          const form = e.target as HTMLFormElement;
          const data = new FormData(form);

          const formData = {
            name: data.get('name') as string,
            email: data.get('email') as string,
            company: data.get('company') as string,
            phone: data.get('phone') as string,
            message: data.get('message') as string,
          };

          if (!formData.name || !formData.email || !formData.company || !formData.phone || !formData.message) {
            setSubmitMessage("Please fill in all required fields.");
            setIsLoading(false);
            return;
          }

          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(formData.email)) {
            setSubmitMessage("Please enter a valid email address.");
            setIsLoading(false);
            return;
          }

          try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setIsSubmitted(true);
            setSubmitMessage("Thank you! Please also send your inquiry directly to ky01@keyobbq.com for a quick response.");
            form.reset();
          } catch (error) {
            console.error('Submit error:', error);
            setSubmitMessage("Please send your inquiry directly to ky01@keyobbq.com");
          } finally {
            setIsLoading(false);
          }
        }}
      >
        <div className="sm:space-y-5 space-y-8">
          <h2 className="heading-main3">Request Your Custom BBQ Grill Quote</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt30">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              title="Please enter your name"
              onInvalid={(e) => e.currentTarget.setCustomValidity('Please enter your name')}
              onInput={(e) => e.currentTarget.setCustomValidity('')}
              className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              required
              title="Please enter a valid email address"
              onInvalid={(e) => e.currentTarget.setCustomValidity('Please enter a valid email address')}
              onInput={(e) => e.currentTarget.setCustomValidity('')}
              className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="text"
              name="company"
              placeholder="Company*"
              required
              title="Please enter your company name"
              onInvalid={(e) => e.currentTarget.setCustomValidity('Please enter your company name')}
              onInput={(e) => e.currentTarget.setCustomValidity('')}
              className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              required
              title="Please enter your phone number"
              onInvalid={(e) => e.currentTarget.setCustomValidity('Please enter your phone number')}
              onInput={(e) => e.currentTarget.setCustomValidity('')}
              className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            name="message"
            placeholder="Enter inquiry details such as material, size, quantity, etc.*"
            rows={6}
            required
            title="Please enter your inquiry details"
            onInvalid={(e) => e.currentTarget.setCustomValidity('Please enter your inquiry details')}
            onInput={(e) => e.currentTarget.setCustomValidity('')}
            className="w-full p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full font-semibold mt-8 py-3 px-6 rounded-sm transition flex items-center justify-center ${
            isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary hover:bg-hover text-white'
          }`}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>

        {submitMessage && (
          <div className={`mt-4 p-4 rounded-md ${
            isSubmitted ? 'bg-green-100 border border-green-400 text-green-700' : 'bg-red-100 border border-red-400 text-red-700'
          }`}>
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  );
}