"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HomeSection07Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    if (!containerRef.current || !scrollRef.current) return;
    
    // We only want horizontal scroll on desktop
    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 1024px)", () => {
      const sections = gsap.utils.toArray(".timeline-item");
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${scrollRef.current?.scrollWidth}`,
          scrub: 1,
          pin: true,
        }
      });
      
      tl.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
      });
      
      return () => {
        tl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  const items = [
    {
      title: "BEFORE",
      subtitle: "Traditional offline-first business.",
      points: [
        "Limited online discovery",
        "Manual processes",
        "Limited digital product information",
        "Traditional customer acquisition"
      ],
      tag: "PAST"
    },
    {
      title: "NOW",
      subtitle: "Digital foundation.",
      points: [
        "Website",
        "SEO",
        "Google presence",
        "Product catalogue",
        "WhatsApp",
        "Inventory system",
        "Analytics"
      ],
      tag: "CURRENT"
    },
    {
      title: "NEXT",
      subtitle: "Growth.",
      points: [
        "More qualified discovery",
        "More enquiries",
        "Better B2B opportunities",
        "Better customer follow-up",
        "More measurable acquisition"
      ],
      tag: "GOAL"
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="bg-white dark:bg-black text-black dark:text-white py-24 lg:py-0 lg:h-screen lg:flex lg:items-center overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:hidden mb-12">
        <h2 className="text-4xl font-bold uppercase tracking-tight">THE EVOLUTION</h2>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex flex-col lg:flex-row gap-12 lg:gap-0 lg:w-[300vw] h-full"
      >
        {items.map((item) => (
          <div 
            key={item.title} 
            className="timeline-item w-full lg:w-screen h-full flex flex-col justify-center px-4 lg:px-24"
          >
            <div className="max-w-2xl">
              <div className="inline-flex px-3 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full text-[10px] font-bold uppercase tracking-widest mb-8">
                {item.tag}
              </div>
              
              <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-4">
                {item.title}
              </h2>
              
              <p className="text-xl md:text-3xl text-neutral-500 font-medium tracking-tight mb-12">
                {item.subtitle}
              </p>
              
              <div className="grid gap-4">
                {item.points.map((point, i) => (
                  <div key={i} className="flex items-center gap-4 text-lg font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white opacity-50" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
