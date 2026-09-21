"use client";

import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import TransitionLink from "@/components/ui/TransitionLink";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const solutionsData = [
  {
    id: "01",
    title: "EARNED MEDIA",
    description: "Strategies to organically grow your visibility, authority, and audience engagement.",
    items: [
      { name: "Answer / Generative Engine Optimization", href: "/services/solutions/geo" },
      { name: "Search Engine Optimization", href: "/services/solutions/search-engine-optimization" },
      { name: "App Store Optimization", href: "/services/solutions/app-store-optimization" },
      { name: "Content Marketing", href: "/services/solutions/content-marketing" },
      { name: "Influencer Marketing", href: "/services/solutions/influencer-marketing" },
      { name: "Organic Social Media", href: "/services/solutions/organic-social-media" },
      { name: "Email Marketing", href: "/services/solutions/email-marketing" }
    ]
  },
  {
    id: "02",
    title: "PAID MEDIA",
    description: "Targeted campaigns that maximize your reach and drive measurable return on investment.",
    items: [
      { name: "Media Strategy & Planning", href: "/services/solutions/media-strategy" },
      { name: "Paid Search", href: "/services/solutions/paid-search" },
      { name: "Paid Social", href: "/services/solutions/paid-social" },
      { name: "Programmatic & Display", href: "/services/solutions/programmatic-display" },
      { name: "Marketplaces", href: "/services/solutions/marketplaces" },
      { name: "Streaming", href: "/services/solutions/streaming" }
    ]
  },
  {
    id: "03",
    title: "CREATIVE",
    description: "Compelling design and production services that tell your brand story and captivate audiences.",
    items: [
      { name: "Performance Creative", href: "/services/solutions/performance-creative" },
      { name: "Branding", href: "/services/solutions/branding-creative" },
      { name: "Content Production", href: "/services/solutions/content-production" },
      { name: "Website Design", href: "/services/solutions/website-design" },
      { name: "Graphic & Motion Design", href: "/services/solutions/graphic-motion-design" },
      { name: "Audio Production", href: "/services/solutions/audio-production" }
    ]
  }
];

export default function SolutionsSection() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const header = headerRef.current;
    if (!container || !header) return;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(header, 
        { y: 50, opacity: 0 },
        { 
          y: 0, opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
          }
        }
      );

      gsap.utils.toArray(".solution-row").forEach((row: any, i) => {
        gsap.fromTo(row,
          { y: 50, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 90%",
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-40 bg-ivory text-graphite relative z-20 border-t border-warm-grey overflow-hidden">
      <div className="container mx-auto px-6 md:px-[5vw]">
        
        <div ref={headerRef} className="mb-20 md:mb-32 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <h2 className="text-5xl md:text-[5rem] font-primary font-bold tracking-tight text-graphite mb-6 uppercase">
              SOLUTIONS
            </h2>
          </div>
          <div className="md:col-span-4 pb-2">
            <p className="text-lg md:text-xl text-slate font-primary">
              Comprehensive strategies and execution across all digital touchpoints.
            </p>
          </div>
        </div>

        <div className="flex flex-col border-t border-graphite/20">
          {solutionsData.map((service) => {
            const isActive = activeService === service.id;
            
            return (
              <div 
                key={service.id}
                className="solution-row group relative border-b border-warm-grey py-8 md:py-12 cursor-pointer transition-colors hover:bg-warm-grey/20"
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Active line indicator */}
                <div 
                  className={clsx(
                    "absolute left-0 top-0 bottom-0 w-1 bg-vermilion transition-all duration-300 origin-top",
                    isActive ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pl-4 md:pl-8">
                  {/* Number & Title */}
                  <div className="md:col-span-5 lg:col-span-5 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                    <span className={clsx(
                      "text-sm font-mono transition-colors",
                      isActive ? "text-vermilion font-bold" : "text-slate"
                    )}>
                      {service.id}
                    </span>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-primary font-bold tracking-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Capabilities List — now clickable links */}
                  <div className="md:col-span-3 lg:col-span-3 mt-4 md:mt-0">
                    <ul className="flex flex-col gap-2 text-sm font-mono text-slate">
                      {service.items.map((item) => (
                        <li key={item.name}>
                          <TransitionLink
                            href={item.href}
                            className="hover:text-vermilion transition-colors inline-flex items-center gap-1"
                          >
                            {item.name}
                          </TransitionLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Description Reveal (Always visible on mobile, hover on desktop) */}
                  <div className="md:col-span-4 lg:col-span-4 mt-6 md:mt-0">
                    <div 
                      className={clsx(
                        "transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] flex flex-col items-start gap-6",
                        isActive ? "md:translate-y-0 md:opacity-100" : "md:translate-y-8 md:opacity-0"
                      )}
                    >
                      <p className="text-lg font-primary text-graphite leading-relaxed">
                        {service.description}
                      </p>
                    </div>
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
