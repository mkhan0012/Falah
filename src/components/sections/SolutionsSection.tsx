"use client";

import { useState } from "react";
import clsx from "clsx";

const solutionsData = [
  {
    id: "01",
    title: "EARNED MEDIA",
    description: "Strategies to organically grow your visibility, authority, and audience engagement.",
    items: [
      "Answer / Generative Engine Optimization",
      "Search Engine Optimization",
      "App Store Optimization",
      "Content Marketing",
      "Digital PR",
      "Influencer Marketing",
      "Organic Social Media",
      "Email Marketing"
    ]
  },
  {
    id: "02",
    title: "PAID MEDIA",
    description: "Targeted campaigns that maximize your reach and drive measurable return on investment.",
    items: [
      "Media Strategy & Planning",
      "Paid Search",
      "Paid Social",
      "Programmatic & Display",
      "Marketplaces",
      "Streaming"
    ]
  },
  {
    id: "03",
    title: "CREATIVE",
    description: "Compelling design and production services that tell your brand story and captivate audiences.",
    items: [
      "Performance Creative",
      "Branding",
      "Content Production",
      "Website Design",
      "Graphic & Motion Design",
      "Audio Production"
    ]
  }
];

export default function SolutionsSection() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-40 bg-ivory text-graphite relative z-20 border-t border-warm-grey">
      <div className="container mx-auto px-6 md:px-[5vw]">
        
        <div className="mb-20 md:mb-32 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
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
                className="group relative border-b border-graphite/20 py-8 md:py-12 cursor-pointer transition-colors hover:bg-white/50"
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

                  {/* Capabilities List */}
                  <div className="md:col-span-3 lg:col-span-3 mt-4 md:mt-0">
                    <ul className="flex flex-col gap-2 text-sm font-mono text-slate">
                      {service.items.map((item) => (
                        <li key={item}>{item}</li>
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
