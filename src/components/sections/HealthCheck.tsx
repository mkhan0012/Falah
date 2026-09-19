"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HealthCheck() {
  return (
    <section className="py-24 md:py-40 bg-ivory text-graphite border-t border-warm-grey">
      <div className="container mx-auto px-6 md:px-[5vw]">
        
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-mono tracking-widest text-slate mb-6 uppercase">
            DIGITAL HEALTH CHECK
          </p>
          <h2 className="text-4xl md:text-6xl font-primary font-bold tracking-tight mb-8">
            IS YOUR DIGITAL PRESENCE HOLDING YOU BACK?
          </h2>
          
          <p className="text-lg md:text-xl text-slate font-primary leading-relaxed max-w-2xl mx-auto mb-12">
            We offer a comprehensive manual audit of your brand, website, and SEO strategy to identify exact bottlenecks in your conversion system.
          </p>
          
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-graphite text-ivory px-8 py-5 font-mono text-sm font-bold uppercase tracking-wider hover:bg-vermilion transition-colors group"
          >
            REQUEST AN AUDIT <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
