"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    title: "STRATEGY",
    desc: "We don't guess. Everything we build is rooted in clear positioning and market understanding."
  },
  {
    title: "DESIGN",
    desc: "Aesthetics matter. We create premium visual identities that command authority."
  },
  {
    title: "TECHNOLOGY",
    desc: "We build on modern, performant stacks ensuring fast, accessible, and scalable digital platforms."
  },
  {
    title: "GROWTH",
    desc: "A beautiful website is useless if no one sees it. We integrate SEO and conversion systems from day one."
  }
];

export default function WhyFalah() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray<HTMLElement>('.statement-line');
      
      lines.forEach((line) => {
        gsap.fromTo(line,
          { yPercent: 100 },
          {
            yPercent: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: line,
              start: "top 90%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-40 bg-ivory text-graphite">
      <div className="container mx-auto px-6 md:px-[5vw]">
        
        <div className="flex flex-col gap-12 md:gap-24 mb-32 md:mb-48 text-[10vw] md:text-[7vw] font-primary font-bold leading-[0.85] tracking-tighter">
          
          <div className="flex flex-col items-start">
            <div className="overflow-hidden pb-2"><h2 className="statement-line">GOOD DESIGN</h2></div>
            <div className="overflow-hidden pb-2"><h2 className="statement-line text-slate">GETS ATTENTION.</h2></div>
          </div>
          
          <div className="flex flex-col items-center md:items-end md:text-right">
            <div className="overflow-hidden pb-2"><h2 className="statement-line">GOOD STRATEGY</h2></div>
            <div className="overflow-hidden pb-2"><h2 className="statement-line text-slate">EARNS TRUST.</h2></div>
          </div>
          
          <div className="flex flex-col items-start">
            <div className="overflow-hidden pb-2"><h2 className="statement-line">GOOD SYSTEMS</h2></div>
            <div className="overflow-hidden pb-2"><h2 className="statement-line text-vermilion">CREATE GROWTH.</h2></div>
          </div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 pt-12 border-t border-warm-grey">
          {principles.map((p, i) => (
            <div key={p.title}>
              <div className="text-xs font-mono font-bold tracking-widest text-slate mb-6">0{i + 1}</div>
              <h3 className="text-2xl font-primary font-bold mb-4">{p.title}</h3>
              <p className="text-slate text-base leading-relaxed font-primary">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

