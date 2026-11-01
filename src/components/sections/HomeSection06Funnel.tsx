"use client";

import React, { useState } from "react";
import { ArrowDown } from "lucide-react";

export default function HomeSection06Funnel() {
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  const stages = [
    {
      num: "01",
      title: "SEARCH",
      systems: ["SEO", "Google Business"]
    },
    {
      num: "02",
      title: "VISIT",
      systems: ["Website", "Product pages"]
    },
    {
      num: "03",
      title: "ENQUIRE",
      systems: ["WhatsApp", "Phone"]
    },
    {
      num: "04",
      title: "QUALIFIED LEAD",
      systems: ["Lead tracking", "Follow-up"]
    },
    {
      num: "05",
      title: "QUOTE",
      systems: ["Business system", "Estimations"]
    },
    {
      num: "06",
      title: "CUSTOMER",
      systems: ["Sale", "Customer record"]
    },
    {
      num: "07",
      title: "REPEAT",
      systems: ["Follow-up", "Retention"]
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight">
            FROM SEARCH <br />
            TO CUSTOMER.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col items-center">
          {stages.map((stage, idx) => {
            const isHovered = hoveredStage === idx;
            const isPastHovered = hoveredStage !== null && idx <= hoveredStage;
            
            return (
              <div 
                key={stage.num}
                className="w-full relative flex flex-col items-center group cursor-pointer"
                onMouseEnter={() => setHoveredStage(idx)}
                onMouseLeave={() => setHoveredStage(null)}
              >
                {/* Connection Line Top */}
                {idx > 0 && (
                  <div className="h-8 md:h-12 w-px relative overflow-hidden my-1">
                    <div className="absolute inset-0 bg-neutral-300 dark:bg-neutral-700" />
                    <div 
                      className="absolute top-0 left-0 w-full bg-black dark:bg-white transition-all duration-500 ease-in-out origin-top"
                      style={{ 
                        height: isPastHovered ? '100%' : '0%',
                        opacity: isPastHovered ? 1 : 0
                      }}
                    />
                  </div>
                )}
                
                {/* Stage Node */}
                <div 
                  className={`w-full max-w-md transition-all duration-500 ease-out p-6 rounded-2xl border flex flex-col items-center text-center ${
                    isHovered 
                      ? "bg-white dark:bg-black border-neutral-300 dark:border-neutral-700 shadow-xl scale-105 z-10" 
                      : isPastHovered
                        ? "bg-neutral-50 dark:bg-neutral-950 border-neutral-300 dark:border-neutral-800"
                        : "bg-transparent border-transparent opacity-60"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm font-bold text-neutral-400">{stage.num}</span>
                    <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-widest">{stage.title}</h3>
                  </div>
                  
                  {/* Expanded Content */}
                  <div 
                    className={`grid transition-all duration-500 ease-in-out overflow-hidden w-full ${
                      isHovered ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="min-h-0 flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-medium uppercase tracking-wider text-neutral-500">
                      {stage.systems.map((system, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <ArrowDown className="w-4 h-4 -rotate-45" />
                          {system}
                        </div>
                      ))}
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
