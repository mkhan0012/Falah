"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle, MessageSquare, ArrowUpRight } from "lucide-react";
import TransitionLink from "@/components/ui/TransitionLink";
import { FaqItem, generalFaqs } from "@/data/faqs";

interface VyomaFaqProps {
  items?: FaqItem[];
  badge?: string;
  headline?: React.ReactNode;
  description?: string;
}

export default function VyomaFaq({
  items = generalFaqs,
  badge = "FREQUENTLY ASKED QUESTIONS",
  headline = (
    <>
      Clear Answers. <br />
      <span className="text-[#7899B0]">No Agency Rhetoric.</span>
    </>
  ),
  description = "Everything you need to know about our growth philosophy, delivery timelines, and how we collaborate with ambitious businesses.",
}: VyomaFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#F1F3F1] border-b border-[#7899B0]/25 overflow-hidden font-sans">
      {/* Dynamic JSON-LD FAQ Schema for Google SERP Accordions */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Header & Direct Help Contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono uppercase tracking-widest text-[#172B3A] font-semibold shadow-sm">
                <HelpCircle size={13} className="text-[#D3A56C]" />
                <span>{badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-[#172B3A] leading-tight">
                {headline}
              </h2>

              <p className="text-base text-[#30383D] leading-relaxed font-sans">
                {description}
              </p>
            </div>

            {/* Direct Consultation Box */}
            <div className="rounded-3xl bg-white border border-[#7899B0]/25 p-7 space-y-4 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-[#172B3A]">
                <MessageSquare size={15} className="text-[#7899B0]" />
                <span>HAVE A SPECIFIC QUESTION?</span>
              </div>
              <p className="text-sm text-[#30383D] leading-relaxed font-sans">
                Speak directly with our senior strategy team in Hyderabad. We review inquiries personally with zero sales pressure.
              </p>
              <div className="pt-2">
                <TransitionLink
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#172B3A] hover:text-[#7899B0] transition-colors"
                >
                  <span>REQUEST A PROJECT REVIEW</span>
                  <ArrowUpRight size={14} />
                </TransitionLink>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion Questions */}
          <div className="lg:col-span-7 space-y-4">
            {items.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white border-[#172B3A] shadow-md"
                      : "bg-white/80 border-[#7899B0]/25 hover:border-[#172B3A] hover:bg-white"
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left p-6 flex items-start justify-between gap-4 select-none cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-bold text-base sm:text-lg text-[#172B3A] leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                        isOpen ? "bg-[#172B3A] text-white" : "bg-[#DCE6EB] text-[#172B3A]"
                      }`}
                    >
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#30383D] leading-relaxed font-sans border-t border-[#7899B0]/15 mt-1 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
