'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import QuoteModal from './QuoteModal';

interface QuoteContextType {
  openQuote: () => void;
  closeQuote: () => void;
  isOpen: boolean;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openQuote = () => setIsOpen(true);
  const closeQuote = () => setIsOpen(false);

  return (
    <QuoteContext.Provider value={{ openQuote, closeQuote, isOpen }}>
      {children}
      <QuoteModal isOpen={isOpen} onClose={closeQuote} />
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
}