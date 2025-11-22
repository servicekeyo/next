"use client";
import { QuoteButtonPrimary} from '@/components/QuoteButton';

export default function FooterContact() {
  return (
   <section className="section-2 bg-foreground">
        <div className="container flex-col flex items-center gap30 text-center">
            <h2 className="heading-main2">Get in Touch With Keyfire Team Now!</h2>
            <QuoteButtonPrimary>Get Instant Quote</QuoteButtonPrimary>
        </div>
      </section>
  );
}