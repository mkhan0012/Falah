"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  "INDUSTRIAL",
  "PHARMACEUTICAL",
  "REAL ESTATE",
  "STARTUPS",
  "FOUNDERS",
  "PROFESSIONALS"
];

export default function IndustryScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollRef.current || !pinRef.current) return;

    const ctx = gsap.context(() => {
      // Calculate how far to move based on the width of the scrolling content vs the window
      const scrollWidth = scrollRef.current!.scrollWidth;
      const windowWidth = window.innerWidth;
      
      gsap.to(scrollRef.current, {
        x: -(scrollWidth - windowWidth + 100), // padding offset
        ease: "none",
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          scrub: 1,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef}>
      <div ref={pinRef} className="bg-ivory text-graphite overflow-hidden h-screen flex flex-col justify-center border-t border-warm-grey relative">
      
      <div className="absolute top-24 md:top-32 left-6 md:left-[5vw] z-10">
        <h2 className="text-4xl md:text-6xl font-primary font-bold tracking-tight mb-4">
          WE DON&apos;T FOLLOW<br />
          ONE INDUSTRY.
        </h2>
        <p className="text-lg md:text-xl text-slate font-primary">
          We build the digital system around the business.
        </p>
      </div>

      <div className="mt-40 md:mt-0 flex items-center h-full">
        <div ref={scrollRef} className="flex gap-12 md:gap-24 px-6 md:px-[5vw] whitespace-nowrap items-center min-w-max">
          {industries.map((industry, i) => (
            <div key={industry} className="flex items-center gap-12 md:gap-24">
              <h3 className="text-[10vw] md:text-[8vw] font-primary font-bold tracking-tighter leading-none hover:text-vermilion transition-colors cursor-default">
                {industry}
              </h3>
              {i !== industries.length - 1 && (
                <div className="text-4xl md:text-6xl text-slate font-mono">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
