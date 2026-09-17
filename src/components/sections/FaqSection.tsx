"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";
import { Plus, Minus } from "lucide-react";
import clsx from "clsx";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="py-24 md:py-32 bg-background border-t border-foreground/5">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">FREQUENTLY ASKED</h2>

        <div className="flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className="border-b border-foreground/10 py-6 md:py-8 cursor-pointer group"
                onClick={() => toggle(index)}
              >
                <div className="flex items-center justify-between gap-8">
                  <h3 className={clsx(
                    "text-xl md:text-2xl font-serif transition-colors",
                    isOpen ? "text-accent" : "text-foreground group-hover:text-foreground/80"
                  )}>
                    {faq.question}
                  </h3>
                  <div className="shrink-0 text-foreground/50 group-hover:text-accent transition-colors">
                    {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                  </div>
                </div>
                
                <div 
                  className={clsx(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] mt-6 opacity-100" : "grid-rows-[0fr] mt-0 opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-lg text-foreground/70 leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}