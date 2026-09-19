"use client";

import { useState } from "react";
import { services } from "@/data/services";
import clsx from "clsx";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-40 bg-ivory text-graphite border-t border-warm-grey relative">
      <div className="container mx-auto px-6 md:px-[5vw]">
        <div className="mb-24 md:mb-32 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <h2 className="text-[8vw] md:text-[6vw] font-primary font-bold leading-[0.9] tracking-tight">
              WE BUILD THE<br />
              <span className="text-slate">WHOLE SYSTEM.</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-col border-t border-graphite/20">
          {services.map((service) => {
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

                  {/* Description Reveal */}
                  <div className="md:col-span-4 lg:col-span-4 overflow-hidden mt-4 md:mt-0">
                    <div 
                      className={clsx(
                        "transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] flex flex-col items-start gap-6",
                        isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0 hidden md:flex"
                      )}
                    >
                      <p className="text-lg font-primary text-graphite leading-relaxed">
                        {service.description}
                      </p>
                      
                      <Link 
                        href="/services"
                        className="inline-flex items-center gap-2 font-mono text-xs font-bold text-vermilion hover:text-graphite transition-colors uppercase"
                      >
                        Explore {service.title} <ArrowRight size={14} />
                      </Link>
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

