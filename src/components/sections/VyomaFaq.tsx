"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle, MessageSquare, ArrowUpRight } from "lucide-react";
import TransitionLink from "@/components/ui/TransitionLink";

const faqs = [
  {
    question: "Everyone says they do branding, web, and SEO. What makes VYOMA Media different?",
    answer:
      "Many agencies offer everything, but they often build growth around paid ads that stop when the budget does. We build around owned visibility: your brand positioning, high-performing Next.js website, and organic search presence, so results keep compounding without paying for every click.",
  },
  {
    question: "Do you run paid advertising campaigns too?",
    answer:
      "Where paid media makes strategic sense—such as supporting a major launch, property pre-registration, or time-sensitive film release—yes. But we never make rented ad platforms the primary foundation of your growth.",
  },
  {
    question: "What is the difference between brand positioning and digital marketing?",
    answer:
      "Branding decides who you are, how you look, and why customers should choose you over alternatives. Digital marketing, including SEO and content architecture, gets that brand in front of the right buyers. Each is far more effective when built as one connected system.",
  },
  {
    question: "How long does organic SEO take to show measurable traction?",
    answer:
      "Organic search compounds over time. Early technical fixes and structured content enhancements can show movement within a few months, but category dominance and high-difficulty keyword rankings take longer. We establish transparent, honest expectations at the start of every project.",
  },
  {
    question: "Will our business show up in AI search tools like ChatGPT and Perplexity?",
    answer:
      "No agency can guarantee third-party algorithmic placement. What we do is engineer clear semantic architecture, entity schema markup, and verifiable technical facts—which is exactly what Google AI Overviews, Perplexity, and LLM answer engines rely on to discover and cite sources.",
  },
  {
    question: "Can you create multi-lingual content in Telugu, Hindi, and Urdu?",
    answer:
      "Yes. Headquartered in Hyderabad, we create localized, native search content in English, Telugu, Hindi, and Urdu to match how regional decision-makers and local communities actually search.",
  },
  {
    question: "What do we need to prepare before starting a project?",
    answer:
      "Just your commercial objectives, current challenges, and an idea of who you want to reach. Our senior strategists handle the competitive research, intent modeling, and technical blueprint to tell you exactly where to begin.",
  },
];

export default function VyomaFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#F1F3F1] border-b border-[#7899B0]/25 overflow-hidden font-sans">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Header & Direct Help Contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono uppercase tracking-widest text-[#172B3A] font-semibold shadow-sm">
                <HelpCircle size={13} className="text-[#D3A56C]" />
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight text-[#172B3A] leading-tight">
                Clear Answers. <br />
                <span className="text-[#7899B0]">No Agency Rhetoric.</span>
              </h2>

              <p className="text-base text-[#30383D] leading-relaxed font-sans">
                Everything you need to know about our growth philosophy, delivery timelines, and how we collaborate with ambitious businesses.
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
            {faqs.map((faq, index) => {
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
                    className="w-full text-left p-6 flex items-start justify-between gap-4 select-none"
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
