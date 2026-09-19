"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";

const stages = [
  { id: "01", title: "POSITION", desc: "Defining what you should be known for and your unique angle." },
  { id: "02", title: "PRESENCE", desc: "Creating a premium visual identity that reflects your expertise." },
  { id: "03", title: "CONTENT", desc: "Structuring educational and persuasive communication." },
  { id: "04", title: "AUTHORITY", desc: "Building trust systems and social proof mechanisms." },
  { id: "05", title: "DIGITAL HOME", desc: "Developing a central hub where your audience can discover you." },
];

export default function PersonalBranding() {
  const [activeStage, setActiveStage] = useState(0);
  const [profileType, setProfileType] = useState<"ordinary" | "positioned">("ordinary");

  return (
    <section className="py-24 md:py-40 bg-charcoal text-ivory relative border-t border-warm-grey">
      
      <div className="container mx-auto px-6 md:px-[5vw] relative z-10">
        
        {/* Section Header */}
        <div className="mb-24 border-b border-ivory/20 pb-12">
          <p className="text-[10px] md:text-xs font-mono tracking-widest text-ivory/60 mb-8 uppercase">
            04 / PERSONAL BRANDING
          </p>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <h2 className="text-[12vw] md:text-[8vw] font-primary font-bold leading-[0.9] tracking-tight text-ivory">
                YOUR NAME<br />
                <span className="text-ivory/60">IS YOUR</span><br />
                BRAND.
              </h2>
            </div>
            <div className="md:col-span-5 pb-2 md:pb-6">
              <p className="text-lg md:text-xl text-ivory/70 font-primary leading-relaxed">
                We help founders, executives, professionals and creators turn expertise into a digital presence people remember.
              </p>
            </div>
          </div>
        </div>

        {/* The Profile Toggle Demo */}
        <div className="mb-32">
          <div className="flex justify-center mb-12">
            <div className="flex border border-ivory/20 p-1 bg-ivory/5">
              <button 
                onClick={() => setProfileType("ordinary")}
                className={clsx(
                  "px-6 py-3 font-mono text-[10px] uppercase tracking-widest font-bold transition-colors",
                  profileType === "ordinary" ? "bg-ivory text-charcoal" : "text-ivory/50 hover:text-ivory"
                )}
              >
                Ordinary Profile
              </button>
              <button 
                onClick={() => setProfileType("positioned")}
                className={clsx(
                  "px-6 py-3 font-mono text-[10px] uppercase tracking-widest font-bold transition-colors",
                  profileType === "positioned" ? "bg-vermilion text-ivory" : "text-ivory/50 hover:text-ivory"
                )}
              >
                Positioned Profile
              </button>
            </div>
          </div>

          <div className="max-w-2xl mx-auto border border-ivory/10 bg-ivory/5 overflow-hidden relative min-h-[250px]">
            {/* Ordinary Card */}
            <div className={clsx(
              "absolute inset-0 p-8 flex flex-col justify-center transition-all duration-700 ease-in-out",
              profileType === "ordinary" ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12 pointer-events-none"
            )}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full" />
                <div>
                  <h4 className="font-sans text-lg font-normal text-white/90">John Doe</h4>
                  <p className="font-sans text-sm text-white/50">Founder at TechCo</p>
                </div>
              </div>
              <p className="font-sans text-white/60">I help businesses grow and scale their operations.</p>
            </div>

            {/* Positioned Card */}
            <div className={clsx(
              "absolute inset-0 p-8 flex flex-col justify-center transition-all duration-700 ease-in-out bg-graphite/50",
              profileType === "positioned" ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12 pointer-events-none"
            )}>
              <div className="flex items-start gap-6 mb-6">
                <div className="w-20 h-20 bg-ivory shrink-0" />
                <div>
                  <h4 className="font-primary text-3xl font-bold tracking-tight text-ivory mb-2 uppercase">John Doe</h4>
                  <p className="font-mono text-xs tracking-widest text-vermilion uppercase font-bold">Founder, TechCo</p>
                </div>
              </div>
              <p className="font-primary text-xl text-ivory/80 leading-relaxed font-light">
                Re-engineering enterprise scale. Building systems that turn friction into momentum.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start">
          
          {/* Steps */}
          <div className="lg:col-span-5 flex flex-col border-t border-ivory/20">
            {stages.map((stage, i) => (
              <div 
                key={stage.id}
                className="group relative border-b border-ivory/20 py-6 md:py-8 cursor-pointer transition-colors"
                onMouseEnter={() => setActiveStage(i)}
                onClick={() => setActiveStage(i)}
              >
                {/* Active Indicator Line */}
                <div 
                  className={clsx(
                    "absolute left-0 top-0 bottom-0 w-1 bg-vermilion transition-all duration-300 origin-top",
                    activeStage === i ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
                  )}
                />
                
                <div className="flex items-center gap-6 pl-6">
                  <span className={clsx(
                    "text-xs font-mono font-bold transition-colors duration-300",
                    activeStage === i ? "text-vermilion" : "text-ivory/50"
                  )}>
                    {stage.id}
                  </span>
                  <h3 className={clsx(
                    "text-2xl md:text-4xl font-primary font-bold transition-colors duration-300",
                    activeStage === i ? "text-ivory" : "text-ivory/50 group-hover:text-ivory/80"
                  )}>
                    {stage.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Description Panel */}
          <div className="lg:col-span-7 relative h-[300px] md:h-[400px] bg-ivory/5 flex items-center justify-center p-8 md:p-16 border border-ivory/10">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(var(--color-warm-grey) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            
            {stages.map((stage, i) => (
              <div
                key={`desc-${stage.id}`}
                className={clsx(
                  "absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] px-8 md:px-16",
                  activeStage === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
                )}
              >
                <div className="text-[10px] font-mono tracking-widest text-vermilion mb-6">STAGE {stage.id}</div>
                <h4 className="text-3xl md:text-5xl font-primary font-bold text-ivory mb-6">{stage.title}</h4>
                <p className="text-lg md:text-xl text-ivory/70 font-primary max-w-md mx-auto leading-relaxed">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 md:mt-32 flex justify-center border-t border-ivory/20 pt-16">
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 border border-ivory px-8 py-5 text-sm font-mono font-bold text-ivory hover:bg-ivory hover:text-graphite transition-all group uppercase tracking-wide"
          >
            BUILD MY PERSONAL BRAND <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
