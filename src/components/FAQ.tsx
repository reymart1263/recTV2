import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you guarantee your repair work?",
      answer: "Yes! All completed component-level repairs come with our solid local workshop warranty. We stand behind our work and ensure that your unit is tested thoroughly before we return it."
    },
    {
      question: "What is included in a Videoke machine rental?",
      answer: "Rentals include a heavy-duty Videoke cabinet with a wide screen, 2 professional wireless microphones, a 500W speaker setup with a subwoofer, 2 printed songbooks, and complete delivery, installation, and tuning at your Pasig City venue."
    },
    {
      question: "Can you fix older or vintage stereo amplifiers?",
      answer: "Absolutely! Renato has a deep love for classic analog stereo equipment. We source high-grade capacitors and original transistors to restore vintage audio systems back to their warm, rich sound quality."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-white relative">
      <div className="mx-auto max-w-3xl px-4 lg:px-6">
        
        {/* Simplified Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-blue-800 uppercase bg-blue-50 px-3.5 py-1.5 rounded border border-blue-200">
            Got Questions?
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Quick, transparent answers to our customers' most common questions about diagnostics, coverage, and repair guarantees.
          </p>
        </div>

        {/* Clean, Filter-Free FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded border transition-all duration-300 ${
                  isOpen
                    ? "border-blue-200 bg-blue-50/10 shadow-sm"
                    : "border-slate-250 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-200"
                }`}
                id={`faq-item-${idx}`}
              >
                {/* Trigger Row */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
                  id={`btn-faq-trigger-${idx}`}
                >
                  <span className="text-sm font-bold text-slate-900 pr-4 flex items-center gap-2.5">
                    <HelpCircle className={`h-4 w-4 shrink-0 ${isOpen ? "text-blue-500" : "text-slate-400"}`} />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-4.5 w-4.5 text-blue-500 shrink-0" />
                  ) : (
                    <ChevronDown className="h-4.5 w-4.5 text-slate-400 shrink-0" />
                  )}
                </button>

                {/* Answer Content Drawer */}
                {isOpen && (
                  <div className="px-5 pb-4 pl-11 text-xs text-slate-600 leading-relaxed border-t border-slate-100/50 pt-2.5 animate-slideDown">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Contact Notice */}
        <div className="mt-12 text-center rounded bg-slate-50 border border-slate-150 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-0.5">
            <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-wide">Have a custom question or request?</h4>
            <p className="text-xs text-slate-500">Contact Renato directly for immediate, friendly assistance over Viber or phone call.</p>
          </div>
          <a
            href="https://www.facebook.com/renato.custodio2"
            target="_blank"
            rel="noreferrer"
            className="rounded bg-slate-900 px-5 py-3 text-xs font-bold text-white hover:bg-blue-600 hover:text-white transition-all duration-300 whitespace-nowrap uppercase tracking-wider"
            id="faq-cta-call"
          >
            Ask Renato Directly
          </a>
        </div>

      </div>
    </section>
  );
}
