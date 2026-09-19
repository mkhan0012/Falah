"use client";

import { useEffect, useRef } from "react";
import { Project } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, ArrowDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CaseStudyNav from "@/components/sections/CaseStudyNav";

gsap.registerPlugin(ScrollTrigger);

export default function BharatCaseStudy({ project }: { project: Project }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Hero Parallax
      gsap.to(".hero-parallax", {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-container",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Simple Fade Ups
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

      // System Diagram Animation
      const tlSystem = gsap.timeline({
        scrollTrigger: {
          trigger: ".system-diagram",
          start: "top 70%",
        }
      });

      tlSystem.fromTo(".node", 
        { scale: 0.8, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.5)" }
      );
      tlSystem.fromTo(".connector", 
        { scaleY: 0, opacity: 0 },
        { scaleY: 1, opacity: 1, duration: 0.4, stagger: 0.1, transformOrigin: "top center" },
        "-=0.4"
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const desktopImg = project.gallery[0] || project.heroImage;
  const mobileImg = project.gallery[1];

  return (
    <main ref={containerRef} className="min-h-screen bg-ivory text-graphite selection:bg-vermilion selection:text-ivory">
      
      {/* 01 HERO */}
      <div className="pt-40 pb-20 container mx-auto px-6 md:px-[5vw]">
        <Link 
          href="/work" 
          className="inline-flex items-center gap-2 text-[10px] md:text-xs font-mono font-bold tracking-widest text-slate hover:text-vermilion transition-colors mb-20 uppercase"
        >
          <ArrowLeft size={16} /> All Projects
        </Link>

        <div className="fade-up max-w-7xl">
          <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-primary font-bold tracking-tight text-graphite mb-8 uppercase">
            {project.client}
          </h1>
          <p className="text-2xl md:text-4xl text-vermilion font-primary font-medium tracking-tight mb-12">
            {project.thesis}
          </p>
        </div>
      </div>
      
      <div className="hero-container h-[60vh] md:h-[90vh] w-full relative overflow-hidden bg-charcoal">
        <div className="hero-parallax absolute inset-[-15%] w-[130%] h-[130%]">
          <Image 
            src={project.heroImage} 
            alt={project.client}
            fill
            sizes="100vw"
            quality={100}
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Narrative Flow */}
      <div className="container mx-auto px-6 md:px-[5vw] py-32 md:py-48 flex flex-col gap-32 md:gap-48 max-w-5xl">
        
        {/* 02 THE BUSINESS */}
        <div className="fade-up grid md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono font-bold tracking-widest text-slate uppercase">02 / THE BUSINESS</h2>
          </div>
          <div className="md:col-span-8">
            <h3 className="text-3xl md:text-5xl font-primary font-bold tracking-tight leading-tight mb-8">
              A heavy-duty industrial manufacturer with complex operations.
            </h3>
            <p className="text-xl text-slate font-primary leading-relaxed">
              Bharat Hydraulics has decades of expertise in industrial machinery. Their business encompasses vast product catalogs, specialized services, and multiple industrial sectors. But in the digital space, this scale was invisible.
            </p>
          </div>
        </div>

        {/* 03 THE TENSION */}
        <div className="fade-up grid md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono font-bold tracking-widest text-slate uppercase">03 / THE TENSION</h2>
          </div>
          <div className="md:col-span-8">
            <h3 className="text-3xl md:text-5xl font-primary font-bold tracking-tight leading-tight mb-8">
              Great engineering, poor digital organization.
            </h3>
            <p className="text-xl text-slate font-primary leading-relaxed">
              Their legacy website didn't reflect their authority. Products were hard to find, services were vaguely described, and the customer journey for a procurement manager was broken.
            </p>
          </div>
        </div>

        {/* 04 THE FALAH IDEA */}
        <div className="fade-up grid md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="text-sm font-mono font-bold tracking-widest text-slate uppercase">04 / THE FALAH IDEA</h2>
          </div>
          <div className="md:col-span-8">
            <h3 className="text-3xl md:text-5xl font-primary font-bold tracking-tight leading-tight text-vermilion mb-8">
              Don't simplify the business. Organize it.
            </h3>
            <p className="text-xl text-slate font-primary leading-relaxed">
              Industrial buyers don't want marketing fluff; they want specifications, capabilities, and trust. We decided to build a brutalist, structured digital system that routes users exactly to what they need.
            </p>
          </div>
        </div>
      </div>

      {/* 05 THE SYSTEM */}
      <div className="bg-[#111] text-ivory py-32 md:py-48 overflow-hidden">
        <div className="container mx-auto px-6 md:px-[5vw]">
          <div className="max-w-4xl mx-auto text-center mb-24 fade-up">
            <h2 className="text-sm font-mono font-bold tracking-widest text-ivory/50 uppercase mb-8">05 / THE SYSTEM</h2>
            <h3 className="text-4xl md:text-6xl font-primary font-bold tracking-tight leading-tight">
              Information Architecture as Strategy.
            </h3>
          </div>

          <div className="system-diagram flex flex-col items-center justify-center max-w-4xl mx-auto py-16 border border-graphite/30 rounded-2xl bg-[#1a1a1a]">
            {/* Top Node */}
            <div className="node bg-graphite border border-warm-grey/30 px-8 py-4 rounded-full text-center z-10 relative">
              <span className="font-mono text-sm tracking-widest uppercase">THE BUSINESS</span>
            </div>
            
            <div className="connector w-px h-16 bg-gradient-to-b from-graphite to-warm-grey/30"></div>
            
            {/* Split */}
            <div className="w-full max-w-2xl flex justify-between relative">
              <div className="absolute top-0 left-[15%] right-[15%] h-px bg-warm-grey/30"></div>
              
              <div className="flex flex-col items-center w-1/3 pt-8">
                <div className="node bg-vermilion text-ivory font-bold px-6 py-3 rounded-full text-xs font-mono tracking-widest uppercase z-10 border border-vermilion/50 shadow-[0_0_20px_rgba(255,87,34,0.3)]">PRODUCTS</div>
                <div className="connector w-px h-12 bg-warm-grey/30"></div>
                <div className="node text-xs font-mono text-ivory/50 border border-graphite px-4 py-2 rounded">CATALOG</div>
              </div>

              <div className="flex flex-col items-center w-1/3 pt-8">
                <div className="node bg-ivory text-graphite font-bold px-6 py-3 rounded-full text-xs font-mono tracking-widest uppercase z-10 shadow-lg">SERVICES</div>
                <div className="connector w-px h-12 bg-warm-grey/30"></div>
                <div className="node text-xs font-mono text-ivory/50 border border-graphite px-4 py-2 rounded">CAPABILITIES</div>
              </div>

              <div className="flex flex-col items-center w-1/3 pt-8">
                <div className="node bg-graphite border border-warm-grey/30 px-6 py-3 rounded-full text-xs font-mono tracking-widest uppercase z-10">INDUSTRIES</div>
                <div className="connector w-px h-12 bg-warm-grey/30"></div>
                <div className="node text-xs font-mono text-ivory/50 border border-graphite px-4 py-2 rounded">APPLICATIONS</div>
              </div>
            </div>
            
            <div className="connector w-px h-24 bg-gradient-to-b from-warm-grey/30 to-vermilion relative top-[-48px] -z-10"></div>
            
            <div className="node bg-vermilion text-ivory font-bold px-10 py-5 rounded-full text-sm font-mono tracking-widest uppercase z-10 shadow-[0_0_30px_rgba(255,87,34,0.4)]">
              ENQUIRY & CONVERSION
            </div>
          </div>
        </div>
      </div>

      {/* 06 EXPLORE THE BUILD & 07 CUSTOMER JOURNEY */}
      <div className="container mx-auto px-6 md:px-[5vw] py-32 md:py-48">
        <div className="grid md:grid-cols-12 gap-16 md:gap-24 mb-32 fade-up">
          <div className="md:col-span-6">
            <h2 className="text-sm font-mono font-bold tracking-widest text-slate uppercase mb-8">06 / EXPLORE THE BUILD</h2>
            <h3 className="text-3xl md:text-5xl font-primary font-bold tracking-tight leading-tight">
              Industrial Grade UI.
            </h3>
          </div>
          <div className="md:col-span-6">
            <p className="text-xl text-slate font-primary leading-relaxed">
              We used a strong grid, high-contrast typography, and a brutalist aesthetic to mirror the heavy machinery they build. It feels reliable, engineered, and precise.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-32 fade-up items-center justify-center font-mono text-xs font-bold tracking-widest uppercase">
          <div className="flex flex-col items-center gap-4">
            <span className="text-slate">GOOGLE</span>
            <ArrowDown className="text-vermilion md:-rotate-90" size={16} />
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="text-slate">WEBSITE</span>
            <ArrowDown className="text-vermilion md:-rotate-90" size={16} />
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="text-slate">UNDERSTAND</span>
            <ArrowDown className="text-vermilion md:-rotate-90" size={16} />
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="text-graphite">EXPLORE</span>
            <ArrowDown className="text-vermilion md:-rotate-90" size={16} />
          </div>
          <div className="flex flex-col items-center gap-4">
            <span className="bg-graphite text-ivory px-4 py-2">ENQUIRE</span>
          </div>
        </div>
      </div>

      {/* 08 THE WORK */}
      <div className="bg-[#e5e5e5] py-32 md:py-48 relative border-y border-graphite/20">
        <div className="container mx-auto px-6 md:px-[5vw]">
          <div className="mb-16 md:mb-24 fade-up max-w-4xl mx-auto text-center">
            <h2 className="text-sm font-mono font-bold tracking-widest text-slate uppercase">08 / THE WORK</h2>
          </div>

          <div className="relative max-w-6xl mx-auto fade-up pt-4 md:pt-12 pb-16 md:pb-24">
            {/* Desktop */}
            <div className="relative w-[90%] md:w-[85%] aspect-[16/9] shadow-[0_20px_50px_rgba(0,0,0,0.2)] mx-auto overflow-hidden bg-warm-grey">
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
              <div className="absolute -bottom-8 md:-bottom-16 right-[2%] md:right-[5%] w-[32%] md:w-[22%] aspect-[9/19] shadow-[0_20px_40px_rgba(0,0,0,0.3)] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border-4 md:border-[6px] border-[#e5e5e5] bg-graphite z-20">
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
          
          <p className="text-center text-xs font-mono tracking-widest text-slate uppercase mt-8 fade-up">Systematic Digital Platform</p>
        </div>
      </div>

      {/* 09 WHAT CHANGED */}
      <div className="container mx-auto px-6 md:px-[5vw] py-32 md:py-48 flex flex-col gap-16 fade-up">
        <h2 className="text-sm font-mono font-bold tracking-widest text-slate uppercase">09 / WHAT CHANGED</h2>
        <div className="grid md:grid-cols-3 gap-8 border-t border-graphite/20 pt-16">
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-sm tracking-widest text-vermilion">CLEARER</h4>
            <p className="text-lg font-primary text-graphite">Complex product catalogs organized into intuitive digital silos.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-sm tracking-widest text-vermilion">MORE DISCOVERABLE</h4>
            <p className="text-lg font-primary text-graphite">Technical SEO structure allows industrial buyers to find specific capabilities.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-sm tracking-widest text-vermilion">MORE STRUCTURED</h4>
            <p className="text-lg font-primary text-graphite">Clear pathways from understanding to enquiry for procurement managers.</p>
          </div>
        </div>
      </div>

      {/* 10 LIVE PROJECT & 11 THE TAKEAWAY */}
      <div className="bg-graphite text-ivory py-32 md:py-48 flex flex-col items-center text-center px-6">
        <div className="container mx-auto fade-up flex flex-col items-center">
          <h2 className="text-sm font-mono font-bold tracking-widest text-ivory/50 uppercase mb-8">11 / THE TAKEAWAY</h2>
          <p className="text-3xl md:text-5xl lg:text-[4rem] font-primary font-bold leading-[1.1] tracking-tight max-w-5xl mb-16">
            "A digital presence that actually matches the scale and quality of their physical engineering."
          </p>
          
          <div className="flex flex-col gap-4 mt-8">
            <h4 className="text-[10px] font-mono tracking-widest text-ivory/50 uppercase">10 / LIVE PROJECT</h4>
            <a 
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm font-bold text-vermilion hover:text-ivory transition-colors uppercase group"
            >
              EXPLORE LIVE PROJECT 
              <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* 12 START A PROJECT (Next Project) */}
      <CaseStudyNav nextProjectSlug="novazen" nextProjectName="NOVAZEN" />

    </main>
  );
}
