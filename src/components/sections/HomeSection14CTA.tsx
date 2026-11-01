"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeSection14CTA() {
  return (
    <section className="py-32 md:py-48 bg-black text-white">
      <div className="container mx-auto px-4 max-w-5xl text-center flex flex-col items-center">
        
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.9] mb-12">
          YOUR BUSINESS <br />
          HAS POTENTIAL. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-white">
            LET&apos;S BUILD
          </span> <br />
          THE SYSTEM <br />
          AROUND IT.
        </h2>
        
        <p className="text-xl md:text-2xl text-neutral-400 font-medium max-w-2xl mx-auto mb-16">
          Tell us where your business is today. We&apos;ll help you identify what needs to change and what can be measured.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <Link 
            href="/request-proposal"
            className="group inline-flex items-center gap-4 bg-white text-black px-8 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform"
          >
            START A PROJECT
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link 
            href="/work/bharat-hydraulics"
            className="group inline-flex items-center gap-4 bg-neutral-900 text-white border border-neutral-700 px-8 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-neutral-800 transition-colors"
          >
            VIEW BHARAT HYDRAULICS
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
      </div>
    </section>
  );
}
