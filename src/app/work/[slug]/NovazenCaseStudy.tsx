"use client";

import { useEffect, useRef } from "react";
import { Project } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CaseStudyNav from "@/components/sections/CaseStudyNav";

gsap.registerPlugin(ScrollTrigger);

export default function NovazenCaseStudy({ project }: { project: Project }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Hero Image Scale (Clean and clinical feel)
      gsap.fromTo(".hero-image",
        { scale: 1.1 },
        { 
          scale: 1, 
          ease: "none",
          scrollTrigger: {
            trigger: ".hero-container",
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        }
      );

      gsap.utils.toArray(".fade-up").forEach((el: any) => {
        gsap.fromTo(el, 
          { y: 30, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1.2, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            }
          }
        );
      });

      // Trust Layer Transformation Animation
      const tlTrust = gsap.timeline({
        scrollTrigger: {
          trigger: ".trust-layer",
          start: "top 60%",
        }
      });

      tlTrust.fromTo(".layer-base", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
             .fromTo(".layer-mid", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
             .fromTo(".layer-top", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
             .fromTo(".layer-connector", { scaleY: 0 }, { scaleY: 1, duration: 0.4, transformOrigin: "bottom center", stagger: 0.1 }, "-=0.4");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const desktopImg = project.gallery[0] || project.heroImage;
  const mobileImg = project.gallery[1];

  return (
    <main ref={containerRef} className="min-h-screen bg-white text-[#0f172a] selection:bg-blue-600 selection:text-white">
      
      {/* 01 HERO */}
      <div className="pt-40 pb-20 container mx-auto px-6 md:px-[5vw]">
        <Link 
          href="/work" 
          className="inline-flex items-center gap-2 text-[10px] md:text-xs font-mono font-medium tracking-widest text-slate-500 hover:text-blue-600 transition-colors mb-20 uppercase"
        >
          <ArrowLeft size={16} /> All Projects
        </Link>

        <div className="fade-up max-w-7xl">
          <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-primary font-light tracking-tight text-slate-900 mb-8">
            {project.client}
          </h1>
          <p className="text-2xl md:text-4xl text-blue-600 font-primary tracking-tight mb-12 font-medium">
            {project.thesis}
          </p>
        </div>
      </div>
      
      <div className="hero-container h-[60vh] md:h-[80vh] w-full relative overflow-hidden bg-slate-100">
        <Image 
          src={project.heroImage} 
          alt={project.client}
          fill
          sizes="100vw"
          quality={100}
          className="object-cover hero-image"
          priority
        />
      </div>

      {/* Narrative Flow */}
      <div className="container mx-auto px-6 md:px-[5vw] py-32 md:py-48 flex flex-col gap-32 max-w-4xl mx-auto">
        
        {/* 02 THE BUSINESS */}
        <div className="fade-up text-center flex flex-col items-center">
          <h2 className="text-xs font-mono font-medium tracking-widest text-blue-600 uppercase mb-8 border-b border-blue-100 pb-4 w-full">02 / THE BUSINESS</h2>
          <h3 className="text-3xl md:text-5xl font-primary font-medium tracking-tight leading-tight mb-8 text-slate-900">
            A pharmaceutical innovator.
          </h3>
          <p className="text-xl text-slate-600 font-primary leading-relaxed font-light">
            NovaZen develops advanced pharmaceutical products, but their digital presence looked like a generic corporate template. They had credible science, but lacked a credible aesthetic to match.
          </p>
        </div>

        {/* 03 THE TENSION */}
        <div className="fade-up text-center flex flex-col items-center">
          <h2 className="text-xs font-mono font-medium tracking-widest text-blue-600 uppercase mb-8 border-b border-blue-100 pb-4 w-full">03 / THE TENSION</h2>
          <h3 className="text-3xl md:text-5xl font-primary font-medium tracking-tight leading-tight mb-8 text-slate-900">
            Complexity vs. Clarity.
          </h3>
          <p className="text-xl text-slate-600 font-primary leading-relaxed font-light">
            Medical information is dense. Regulatory requirements mandate extensive text. The challenge was displaying this technical information without overwhelming the user or making the brand feel archaic.
          </p>
        </div>

        {/* 04 THE FALAH IDEA */}
        <div className="fade-up text-center flex flex-col items-center">
          <h2 className="text-xs font-mono font-medium tracking-widest text-blue-600 uppercase mb-8 border-b border-blue-100 pb-4 w-full">04 / THE FALAH IDEA</h2>
          <h3 className="text-3xl md:text-5xl font-primary font-medium tracking-tight leading-tight text-blue-600 mb-8">
            Make complexity feel clear.
          </h3>
          <p className="text-xl text-slate-600 font-primary leading-relaxed font-light">
            We introduced an editorial, information-design approach. By building a strict visual hierarchy and a clean, clinical aesthetic, we transformed dense data into a modern, trustworthy experience.
          </p>
        </div>
      </div>

      {/* 05 THE SYSTEM (Trust Layer) */}
      <div className="bg-slate-50 py-32 md:py-48 overflow-hidden border-y border-slate-200">
        <div className="container mx-auto px-6 md:px-[5vw]">
          <div className="max-w-4xl mx-auto text-center mb-32 fade-up">
            <h2 className="text-xs font-mono tracking-widest text-slate-500 uppercase mb-6">05 / THE SYSTEM</h2>
            <h3 className="text-4xl md:text-5xl font-primary font-medium tracking-tight leading-tight text-slate-900">
              The Interactive Trust Layer.
            </h3>
            <p className="text-lg text-slate-500 font-light mt-6">How technical data transforms into user confidence.</p>
          </div>

          <div className="trust-layer flex flex-col items-center justify-center max-w-3xl mx-auto py-16 relative">
            
            {/* Base Layer */}
            <div className="layer-base w-full max-w-xl bg-white border border-slate-200 p-8 rounded-xl shadow-sm relative z-10 flex flex-col items-center">
              <span className="text-xs font-mono font-medium text-slate-400 mb-2 uppercase tracking-widest">Base Layer</span>
              <span className="text-xl font-primary text-slate-800">Technical Science & Information</span>
            </div>
            
            <div className="layer-connector w-px h-12 bg-slate-200"></div>

            {/* Mid Layer */}
            <div className="layer-mid w-full max-w-lg bg-slate-100 border border-slate-300 p-8 rounded-xl shadow-md relative z-20 flex flex-col items-center">
              <span className="text-xs font-mono font-medium text-slate-400 mb-2 uppercase tracking-widest">Structure Layer</span>
              <span className="text-xl font-primary text-slate-800">Clear Hierarchy & Accessibility</span>
            </div>

            <div className="layer-connector w-px h-12 bg-blue-200"></div>

            {/* Top Layer */}
            <div className="layer-top w-full max-w-md bg-blue-600 p-10 rounded-xl shadow-xl shadow-blue-600/20 relative z-30 flex flex-col items-center text-center">
              <span className="text-xs font-mono font-medium text-blue-300 mb-2 uppercase tracking-widest">Experience Layer</span>
              <span className="text-2xl font-primary text-white font-medium">Brand Trust & Action</span>
            </div>

          </div>
        </div>
      </div>

      {/* 06 EXPLORE THE BUILD & 07 CUSTOMER JOURNEY */}
      <div className="container mx-auto px-6 md:px-[5vw] py-32 md:py-48">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-32 fade-up">
          <div>
            <h2 className="text-xs font-mono font-medium tracking-widest text-blue-600 uppercase mb-8">06 / EXPLORE THE BUILD</h2>
            <h3 className="text-3xl md:text-5xl font-primary font-medium tracking-tight leading-tight text-slate-900">
              Clinical, not sterile.
            </h3>
          </div>
          <div>
            <p className="text-xl text-slate-600 font-primary font-light leading-relaxed">
              The UI balances professional credibility with modern aesthetics. By using a sophisticated off-white and deep blue palette, the interface feels clean and hygienic without feeling cold.
            </p>
          </div>
        </div>

        <div className="bg-slate-900 text-white p-12 md:p-24 rounded-3xl fade-up">
          <h2 className="text-xs font-mono font-medium tracking-widest text-slate-500 uppercase mb-16 text-center">07 / CUSTOMER JOURNEY</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-between font-mono text-sm tracking-widest uppercase">
            <span className="text-slate-400">PRODUCT</span>
            <div className="w-px h-8 md:w-8 md:h-px bg-slate-700"></div>
            <span className="text-blue-400">SCIENCE</span>
            <div className="w-px h-8 md:w-8 md:h-px bg-slate-700"></div>
            <span className="text-white">EXPERIENCE</span>
            <div className="w-px h-8 md:w-8 md:h-px bg-slate-700"></div>
            <span className="text-blue-400">TRUST</span>
            <div className="w-px h-8 md:w-8 md:h-px bg-slate-700"></div>
            <span className="bg-blue-600 px-6 py-3 rounded-full text-white text-xs">CONTACT</span>
          </div>
        </div>
      </div>

      {/* 08 THE WORK */}
      <div className="bg-white py-32 md:py-48 relative border-y border-slate-200">
        <div className="container mx-auto px-6 md:px-[5vw]">
          <div className="mb-16 md:mb-24 fade-up max-w-4xl mx-auto text-center">
            <h2 className="text-xs font-mono tracking-widest text-blue-600 uppercase">08 / THE WORK</h2>
          </div>

          <div className="relative max-w-6xl mx-auto fade-up pt-4 md:pt-12 pb-16 md:pb-24">
            {/* Desktop */}
            <div className="relative w-[90%] md:w-[85%] aspect-[16/9] shadow-[0_20px_50px_rgba(0,0,0,0.08)] mx-auto overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
              <Image 
                src={desktopImg}
                alt={`${project.client} Desktop`}
                fill
                sizes="(max-width: 768px) 90vw, 85vw"
                quality={100}
                className="object-cover object-top"
              />
            </div>

            {/* Mobile overlapping */}
            {mobileImg && (
              <div className="absolute -bottom-8 md:-bottom-16 right-[2%] md:right-[5%] w-[32%] md:w-[22%] aspect-[9/19] shadow-[0_20px_40px_rgba(0,0,0,0.15)] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border-4 md:border-8 border-white ring-1 ring-slate-200 bg-white z-20">
                <Image 
                  src={mobileImg}
                  alt={`${project.client} Mobile`}
                  fill
                  sizes="(max-width: 768px) 32vw, 22vw"
                  quality={100}
                  className="object-cover object-top"
                />
              </div>
            )}
          </div>
          
          <p className="text-center text-xs font-mono tracking-widest text-slate-400 uppercase mt-8 fade-up">Clinical Digital Presence</p>
        </div>
      </div>

      {/* 09 WHAT CHANGED */}
      <div className="container mx-auto px-6 md:px-[5vw] py-32 border-t border-slate-200 fade-up">
        <h2 className="text-xs font-mono tracking-widest text-blue-600 uppercase mb-16 text-center">09 / WHAT CHANGED</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center gap-4">
            <h4 className="font-mono text-sm tracking-widest text-slate-900">MORE CREDIBLE</h4>
            <p className="text-slate-600 font-light">A visual identity that matches the high standard of their science.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h4 className="font-mono text-sm tracking-widest text-slate-900">EASIER TO NAVIGATE</h4>
            <p className="text-slate-600 font-light">Strict typography rules transformed dense medical text into readable data.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h4 className="font-mono text-sm tracking-widest text-slate-900">MODERNIZED</h4>
            <p className="text-slate-600 font-light">A clean, app-like feel instead of an outdated corporate brochure.</p>
          </div>
        </div>
      </div>

      {/* 10 LIVE PROJECT & 11 THE TAKEAWAY */}
      <div className="bg-slate-50 border-t border-slate-200 py-32 md:py-48 flex flex-col items-center text-center px-6">
        <div className="container mx-auto fade-up flex flex-col items-center">
          <h2 className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-8">11 / THE TAKEAWAY</h2>
          <p className="text-3xl md:text-5xl lg:text-[4rem] font-primary font-medium leading-[1.1] tracking-tight max-w-5xl mb-16 text-slate-900">
            "We didn't make pharma look like a startup. We made it feel current without losing trust."
          </p>
          
          <div className="flex flex-col gap-4 mt-8">
            <h4 className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">10 / LIVE PROJECT</h4>
            <a 
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors uppercase group"
            >
              EXPLORE LIVE PROJECT 
              <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* 12 START A PROJECT (Next Project) */}
      <CaseStudyNav nextProjectSlug="velora" nextProjectName="VELORA" />

    </main>
  );
}
