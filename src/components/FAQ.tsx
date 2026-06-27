import React, { useState } from "react";
import { FAQS } from "../data";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "general", label: "Support & Services" },
    { id: "tv-board", label: "TV & Boards" },
    { id: "sound-system", label: "Sound Systems" },
    { id: "videoke", label: "Videoke Rentals" }
  ];

  const filteredFaqs = FAQS.filter(
    (faq) => activeCategory === "all" || faq.category === activeCategory
  );

  return (
    <section id="faq" className="py-20 bg-white relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-4xl px-4 lg:px-6"
      >
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-widest text-amber-800 uppercase bg-amber-50 px-3.5 py-1.5 rounded border border-amber-200">
            Got Questions?
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Have a question about our repairs, service area, or diagnostic speed? Browse our detailed answers below, or call Renato directly.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => { setActiveCategory(c.id); setOpenIndex(null); }}
              className={`rounded px-4.5 py-2 text-xs font-bold transition-all duration-300 cursor-pointer ${
                activeCategory === c.id
                  ? "bg-amber-500 text-slate-950 shadow-sm"
                  : "bg-slate-50 text-slate-500 border border-slate-200/50 hover:bg-slate-100"
              }`}
              id={`faq-cat-pill-${c.id}`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded border transition-all duration-300 ${
                  isOpen
                    ? "border-amber-200 bg-amber-50/10 shadow-sm"
                    : "border-slate-150 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-200"
                }`}
                id={`faq-item-${idx}`}
              >
                {/* Trigger Row */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                  id={`btn-faq-trigger-${idx}`}
                >
                  <span className="text-sm font-bold text-slate-900 pr-4 flex items-center gap-2.5">
                    <HelpCircle className={`h-4.5 w-4.5 shrink-0 ${isOpen ? "text-amber-500" : "text-slate-400"}`} />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-amber-500 shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-slate-400 shrink-0" />
                  )}
                </button>

                {/* Answer Content Drawer */}
                {isOpen && (
                  <div className="px-6 pb-5 pl-13 text-xs text-slate-600 leading-relaxed border-t border-slate-100/50 pt-3 animate-slideDown">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Callback Support Notice */}
        <div className="mt-12 text-center rounded bg-slate-50 border border-slate-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="text-sm font-bold text-slate-900">Still have questions or have a custom project?</h4>
            <p className="text-xs text-slate-500 leading-normal">Renato is always happy to consult and chat over Viber, WhatsApp, or standard cellular call.</p>
          </div>
          <a
            href="tel:+639123456789"
            className="rounded bg-slate-900 px-5 py-3 text-xs font-bold text-white hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 whitespace-nowrap"
            id="faq-cta-call"
          >
            Ask Renato Directly
          </a>
        </div>

      </motion.div>
    </section>
  );
}
