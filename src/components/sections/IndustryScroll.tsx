"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

const clientTypes = [
  {
    title: "BUSINESSES",
    desc: "For companies building or upgrading their digital presence."
  },
  {
    title: "STARTUPS",
    desc: "For new businesses that need a credible brand and digital foundation."
  },
  {
    title: "FOUNDERS",
    desc: "For founders building authority around their expertise."
  },
  {
    title: "ESTABLISHED COMPANIES",
    desc: "For companies modernizing their brand and digital experience."
  },
  {
    title: "PROFESSIONALS",
    desc: "For people building a stronger personal brand."
  }
];

export default function IndustryScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !scrollRef.current) return;

    const ctx = gsap.context(() => {
      const isDesktop = window.innerWidth >= 1024;
      
      if (isDesktop) {
        const scrollWidth = scrollRef.current!.scrollWidth;
        const windowWidth = window.innerWidth;
        
        gsap.to(scrollRef.current, {
          x: -(scrollWidth - windowWidth + (windowWidth * 0.1)),
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: 1,
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-ivory text-graphite lg:h-screen flex flex-col justify-center border-t border-warm-grey relative py-24 lg:py-0 overflow-hidden">
      
      <div className="absolute lg:top-24 left-6 md:left-[5vw] z-10 w-full md:w-auto">
        <p className="text-xs font-mono tracking-widest text-slate mb-4 uppercase">WHO IS FALAH FOR?</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-primary font-bold tracking-tight mb-4 max-w-2xl">
          WE BUILD SYSTEMS FOR AMBITIOUS CLIENTS.
        </h2>
      </div>

      <div className="mt-40 lg:mt-0 flex items-center lg:h-full">
        <div 
          ref={scrollRef} 
          className="flex flex-col lg:flex-row gap-8 lg:gap-24 px-6 md:px-[5vw] lg:whitespace-nowrap items-start lg:items-center lg:min-w-max w-full"
        >
          {clientTypes.map((client, i) => (
            <div key={client.title} className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-24 w-full lg:w-auto group">
              <div className="flex flex-col border-b border-graphite/20 lg:border-none pb-8 lg:pb-0 w-full lg:w-auto">
                <h3 className="text-4xl md:text-5xl lg:text-[7vw] font-primary font-bold tracking-tighter leading-none group-hover:text-vermilion transition-colors mb-4 lg:mb-8">
                  {client.title}
                </h3>
                <p className="text-lg font-primary text-slate whitespace-normal max-w-xs lg:max-w-sm border-l-2 border-vermilion pl-4 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {client.desc}
                </p>
              </div>
              {i !== clientTypes.length - 1 && (
                <div className="hidden lg:block text-4xl text-slate/30 font-mono font-light">/</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
