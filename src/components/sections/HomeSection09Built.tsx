"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomeSection09Built() {
  const containerRef = useRef<HTMLElement>(null);

  const items = [
    { num: "01", title: "WEBSITE", subtitle: "Digital Storefront" },
    { num: "02", title: "PRODUCT EXPERIENCE", subtitle: "Digital Catalogue" },
    { num: "03", title: "SEARCH", subtitle: "Google Discoverability" },
    { num: "04", title: "WHATSAPP", subtitle: "Enquiry Pathway" },
    { num: "05", title: "BUSINESS SYSTEM", subtitle: "Inventory & Management" },
    { num: "06", title: "ANALYTICS", subtitle: "Measurement Setup" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".built-card");
      
      cards.forEach((card: HTMLElement) => {
        gsap.fromTo(card,
          { opacity: 0, y: 100 },
          {
            opacity: 1, 
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-white dark:bg-black text-black dark:text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4">
            WHAT WE ACTUALLY <br /> BUILT.
          </h2>
          <p className="text-xl text-neutral-500 font-medium">Real infrastructure for a real business.</p>
        </div>

        <div className="flex flex-col gap-24">
          {items.map((item) => (
            <div key={item.num} className="built-card flex flex-col md:flex-row gap-8 md:gap-16 items-center">
              
              <div className="w-full md:w-1/3">
                <div className="text-neutral-400 font-bold mb-4">{item.num}</div>
                <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-neutral-500 font-medium uppercase tracking-widest text-sm">
                  {item.subtitle}
                </p>
              </div>

              <div className="w-full md:w-2/3">
                <div className="aspect-[16/10] bg-neutral-100 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden relative group">
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400 font-medium text-sm">
                    {item.title} Screenshot
                  </div>
                  {/* Real screenshot here */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 dark:group-hover:bg-white/5 transition-colors duration-500" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
