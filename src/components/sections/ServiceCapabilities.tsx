"use client";

import { useState } from "react";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import BrandVisualizer from "../visualizers/BrandVisualizer";
import DigitalVisualizer from "../visualizers/DigitalVisualizer";
import VisibilityVisualizer from "../visualizers/VisibilityVisualizer";
import GrowthVisualizer from "../visualizers/GrowthVisualizer";

interface Capability {
  title: string;
  desc: string;
}

export default function ServiceCapabilities({ 
  capabilities, 
  visualizerType 
}: { 
  capabilities: Capability[],
  visualizerType: "brand" | "digital" | "visibility" | "growth"
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderVisualizer = () => {
    switch (visualizerType) {
      case "brand": return <BrandVisualizer activeIndex={activeIndex} />;
      case "digital": return <DigitalVisualizer activeIndex={activeIndex} />;
      case "visibility": return <VisibilityVisualizer activeIndex={activeIndex} />;
      case "growth": return <GrowthVisualizer activeIndex={activeIndex} />;
      default: return null;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
      {/* Interactive Accordion */}
      <div className="lg:col-span-6 flex flex-col justify-center">
        <h2 className="text-3xl md:text-5xl font-primary font-bold mb-12 tracking-tight">WHAT WE DELIVER.</h2>
        <div className="flex flex-col border-t border-warm-grey">
          {capabilities.map((cap, i) => {
            const isActive = activeIndex === i;
            return (
              <div 
                key={cap.title}
                className="border-b border-warm-grey group cursor-pointer"
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
              >
                <div className="py-6 flex items-center justify-between">
                  <h3 className={clsx(
                    "text-2xl md:text-3xl font-primary font-bold transition-colors duration-300",
                    isActive ? "text-vermilion" : "text-graphite group-hover:text-graphite/70"
                  )}>
                    {cap.title}
                  </h3>
                  <div className={clsx(
                    "transition-transform duration-300",
                    isActive ? "rotate-45 text-vermilion" : "text-slate"
                  )}>
                    <ArrowUpRight size={24} />
                  </div>
                </div>
                <div 
                  className={clsx(
                    "overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]",
                    isActive ? "max-h-[200px] opacity-100 pb-8" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-lg text-slate font-primary pr-8 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sticky Visualizer */}
      <div className="lg:col-span-6">
        <div className="sticky top-32">
          <div className="relative aspect-[4/5] md:aspect-square w-full overflow-hidden bg-charcoal group rounded-lg shadow-2xl">
            {renderVisualizer()}
            
            {/* Interactive hint overlay */}
            <div className="absolute top-4 right-4 bg-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
              <span className="font-mono text-[10px] uppercase tracking-widest border border-ivory/20 text-ivory/70 px-3 py-1 backdrop-blur-md rounded-full flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-vermilion animate-pulse" /> Live Engine
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
