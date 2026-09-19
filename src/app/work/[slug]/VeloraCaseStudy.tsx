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

export default function VeloraCaseStudy({ project }: { project: Project }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Cinematic Hero Fade
      gsap.fromTo(".hero-image", 
        { scale: 1.05, filter: "brightness(0.5)" }, 
        { 
          scale: 1, 
          filter: "brightness(1)",
          duration: 2.5, 
          ease: "power3.out"
        }
      );

      gsap.to(".hero-image", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-container",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Smooth Editorial Fade Ups
      gsap.utils.toArray(".fade-up").forEach((el: any) => {
        gsap.fromTo(el, 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1.5, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            }
          }
        );
      });

      // Journey Sequence Animation
      const tlJourney = gsap.timeline({
        scrollTrigger: {
          trigger: ".journey-container",
          start: "top 60%",
        }
      });

      gsap.utils.toArray(".journey-step").forEach((step: any, index) => {
        tlJourney.fromTo(step, 
          { opacity: 0, x: -30 }, 
          { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }, 
          index * 0.3
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const desktopImg = project.gallery[0] || project.heroImage;
  const mobileImg = project.gallery[1];

  return (
    <main ref={containerRef} className="min-h-screen bg-[#0a0a0a] text-[#f5f5f0] selection:bg-[#c9a96e] selection:text-[#0a0a0a] font-serif">
      
      {/* 01 HERO */}
      <div className="pt-40 pb-20 container mx-auto px-6 md:px-[5vw]">
        <Link 
          href="/work" 
          className="inline-flex items-center gap-2 text-[10px] md:text-xs font-mono font-medium tracking-widest text-[#f5f5f0]/50 hover:text-[#c9a96e] transition-colors mb-20 uppercase"
        >
          <ArrowLeft size={16} /> All Projects
        </Link>

        <div className="fade-up max-w-7xl">
          <h1 className="text-[14vw] md:text-[10vw] leading-[0.8] font-primary font-normal tracking-tighter text-[#f5f5f0] mb-8 uppercase">
            {project.client}
          </h1>
          <p className="text-2xl md:text-4xl text-[#c9a96e] font-primary tracking-wide mb-12 font-light italic">
            {project.thesis}
          </p>
        </div>
      </div>
      
      <div className="hero-container h-[70vh] md:h-[100vh] w-full relative overflow-hidden bg-black">
        <Image 
          src={project.heroImage} 
          alt={project.client}
          fill
          sizes="100vw"
          quality={100}
          className="object-cover hero-image opacity-90"
          priority
        />
      </div>

      {/* Narrative Flow */}
      <div className="container mx-auto px-6 md:px-[5vw] py-32 md:py-48 flex flex-col gap-32 max-w-5xl mx-auto">
        
        {/* 02 THE BUSINESS */}
        <div className="fade-up text-center flex flex-col items-center">
          <h2 className="text-xs font-mono tracking-widest text-[#c9a96e] uppercase mb-8">02 / THE BUSINESS</h2>
          <h3 className="text-4xl md:text-6xl font-primary font-light tracking-tight leading-tight mb-8">
            Ultra-luxury living.
          </h3>
          <p className="text-xl md:text-2xl text-[#f5f5f0]/70 font-primary leading-relaxed font-light max-w-3xl">
            Velora develops some of the most exclusive properties in the region. Their physical spaces are masterpieces of architecture and interior design, targeting high-net-worth individuals who buy into a lifestyle, not just a location.
          </p>
        </div>

        {/* 03 THE TENSION */}
        <div className="fade-up text-center flex flex-col items-center">
          <h2 className="text-xs font-mono tracking-widest text-[#c9a96e] uppercase mb-8">03 / THE TENSION</h2>
          <h3 className="text-4xl md:text-6xl font-primary font-light tracking-tight leading-tight mb-8">
            The digital disconnect.
          </h3>
          <p className="text-xl md:text-2xl text-[#f5f5f0]/70 font-primary leading-relaxed font-light max-w-3xl">
            Their previous digital presence felt like a standard real-estate listing template. It reduced multi-million dollar architectural achievements into bullet points of square footage and bedroom counts, stripping away all emotional resonance.
          </p>
        </div>

        {/* 04 THE FALAH IDEA */}
        <div className="fade-up text-center flex flex-col items-center">
          <h2 className="text-xs font-mono tracking-widest text-[#c9a96e] uppercase mb-8">04 / THE FALAH IDEA</h2>
          <h3 className="text-4xl md:text-6xl font-primary font-normal tracking-tight leading-tight text-[#c9a96e] mb-8 italic">
            Sell the feeling before the floor plan.
          </h3>
          <p className="text-xl md:text-2xl text-[#f5f5f0]/70 font-primary leading-relaxed font-light max-w-3xl">
            We stopped treating the website as a brochure and started treating it as an editorial magazine. We created an immersive, image-led experience where atmosphere and lifestyle precede technical details.
          </p>
        </div>
      </div>

      {/* 05 THE SYSTEM (Property Journey) */}
      <div className="py-32 md:py-48 overflow-hidden bg-[#111]">
        <div className="container mx-auto px-6 md:px-[5vw]">
          <div className="max-w-4xl mx-auto text-center mb-32 fade-up">
            <h2 className="text-xs font-mono tracking-widest text-[#f5f5f0]/50 uppercase mb-6">05 / THE SYSTEM</h2>
            <h3 className="text-4xl md:text-6xl font-primary font-light tracking-tight leading-tight">
              The Immersive Property Journey.
            </h3>
          </div>

          <div className="journey-container flex flex-col md:flex-row justify-between items-start max-w-5xl mx-auto relative px-8 py-16 border-y border-[#333]">
            
            <div className="journey-step flex flex-col gap-4 relative z-10 md:w-1/5 mb-8 md:mb-0">
              <span className="text-[#c9a96e] text-2xl font-light">01</span>
              <h4 className="font-mono text-xs tracking-widest uppercase">THE ARRIVAL</h4>
              <p className="text-[#f5f5f0]/50 text-sm font-primary">Setting the atmospheric tone.</p>
            </div>

            <div className="journey-step flex flex-col gap-4 relative z-10 md:w-1/5 mb-8 md:mb-0">
              <span className="text-[#c9a96e] text-2xl font-light">02</span>
              <h4 className="font-mono text-xs tracking-widest uppercase">THE SPACE</h4>
              <p className="text-[#f5f5f0]/50 text-sm font-primary">Cinematic reveals of architecture.</p>
            </div>

            <div className="journey-step flex flex-col gap-4 relative z-10 md:w-1/5 mb-8 md:mb-0">
              <span className="text-[#c9a96e] text-2xl font-light">03</span>
              <h4 className="font-mono text-xs tracking-widest uppercase">THE LIFESTYLE</h4>
              <p className="text-[#f5f5f0]/50 text-sm font-primary">Emotional connection & desire.</p>
            </div>

            <div className="journey-step flex flex-col gap-4 relative z-10 md:w-1/5 mb-8 md:mb-0">
              <span className="text-[#c9a96e] text-2xl font-light">04</span>
              <h4 className="font-mono text-xs tracking-widest uppercase">THE PROPERTY</h4>
              <p className="text-[#f5f5f0]/50 text-sm font-primary">Floor plans & tangible details.</p>
            </div>

            <div className="journey-step flex flex-col gap-4 relative z-10 md:w-1/5">
              <span className="text-[#c9a96e] text-2xl font-light">05</span>
              <h4 className="font-mono text-xs tracking-widest uppercase">THE ENQUIRY</h4>
              <p className="text-[#f5f5f0]/50 text-sm font-primary">Discreet, high-intent contact.</p>
            </div>

            {/* Connecting Line (Desktop only) */}
            <div className="hidden md:block absolute top-[5.5rem] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[#c9a96e]/30 to-transparent z-0"></div>
          </div>
        </div>
      </div>

      {/* 06 EXPLORE THE BUILD & 07 CUSTOMER JOURNEY */}
      <div className="container mx-auto px-6 md:px-[5vw] py-32 md:py-48">
        <div className="text-center mb-32 fade-up">
          <h2 className="text-xs font-mono tracking-widest text-[#c9a96e] uppercase mb-8">06 / EXPLORE THE BUILD</h2>
          <h3 className="text-4xl md:text-6xl font-primary font-light tracking-tight leading-tight max-w-4xl mx-auto">
            A masterclass in restraint.
          </h3>
          <p className="text-xl md:text-2xl text-[#f5f5f0]/70 font-primary font-light leading-relaxed mt-8 max-w-3xl mx-auto">
            Ample whitespace, elegant serif typography, and fluid, unhurried animations create a digital environment that feels as premium as walking into a Velora penthouse. No aggressive sales tactics; just pure, refined storytelling.
          </p>
        </div>
      </div>

      {/* 08 THE WORK */}
      <div className="py-32 md:py-48 relative border-y border-[#333] bg-[#050505]">
        <div className="container mx-auto px-6 md:px-[5vw]">
          <div className="mb-16 md:mb-24 fade-up max-w-4xl mx-auto text-center">
            <h2 className="text-xs font-mono tracking-widest text-[#c9a96e] uppercase">08 / THE WORK</h2>
          </div>

          <div className="relative max-w-6xl mx-auto fade-up pt-4 md:pt-12 pb-16 md:pb-24">
            {/* Desktop */}
            <div className="relative w-[90%] md:w-[85%] aspect-[16/9] shadow-[0_20px_50px_rgba(0,0,0,0.8)] mx-auto overflow-hidden bg-[#111] border border-[#222]">
              <Image 
                src={desktopImg}
                alt={`${project.client} Desktop`}
                fill
                sizes="(max-width: 768px) 90vw, 85vw"
                quality={100}
                className="object-cover object-center opacity-80 hover:opacity-100 transition-opacity duration-1000"
              />
            </div>

            {/* Mobile overlapping */}
            {mobileImg && (
              <div className="absolute -bottom-8 md:-bottom-16 right-[2%] md:right-[5%] w-[32%] md:w-[22%] aspect-[9/19] shadow-[0_20px_40px_rgba(0,0,0,0.9)] overflow-hidden rounded-[1.5rem] md:rounded-[2rem] border-4 md:border-[6px] border-[#1a1a1a] bg-[#111] z-20">
                <Image 
                  src={mobileImg}
                  alt={`${project.client} Mobile`}
                  fill
                  sizes="(max-width: 768px) 32vw, 22vw"
                  quality={100}
                  className="object-cover object-top opacity-90 hover:opacity-100 transition-opacity duration-1000"
                />
              </div>
            )}
          </div>
          
          <p className="text-center text-xs font-mono tracking-widest text-[#f5f5f0]/40 uppercase mt-8 fade-up">Editorial Property Journey</p>
        </div>
      </div>

      {/* 09 WHAT CHANGED */}
      <div className="container mx-auto px-6 md:px-[5vw] py-32 border-t border-[#333] fade-up">
        <h2 className="text-xs font-mono tracking-widest text-[#c9a96e] uppercase mb-16 text-center">09 / WHAT CHANGED</h2>
        <div className="grid md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
          <div className="flex flex-col items-center gap-4">
            <h4 className="font-mono text-sm tracking-widest text-[#f5f5f0]">MORE IMMERSIVE</h4>
            <p className="text-[#f5f5f0]/60 font-light font-primary">Cinematic visual storytelling draws users into the lifestyle before the details.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h4 className="font-mono text-sm tracking-widest text-[#f5f5f0]">HIGHER PERCEIVED VALUE</h4>
            <p className="text-[#f5f5f0]/60 font-light font-primary">The digital experience now matches the multi-million dollar price tags.</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h4 className="font-mono text-sm tracking-widest text-[#f5f5f0]">EMOTIONAL CONNECTION</h4>
            <p className="text-[#f5f5f0]/60 font-light font-primary">Moving from a transactional layout to an aspirational narrative.</p>
          </div>
        </div>
      </div>

      {/* 10 LIVE PROJECT & 11 THE TAKEAWAY */}
      <div className="bg-[#050505] border-t border-[#222] py-32 md:py-48 flex flex-col items-center text-center px-6">
        <div className="container mx-auto fade-up flex flex-col items-center">
          <h2 className="text-xs font-mono tracking-widest text-[#c9a96e] uppercase mb-8">11 / THE TAKEAWAY</h2>
          <p className="text-3xl md:text-5xl lg:text-[4rem] font-primary font-light leading-[1.1] tracking-tight max-w-5xl mb-16 italic text-[#c9a96e]">
            "Luxury isn't just about what you sell, it's about the environment in which you present it."
          </p>
          
          <div className="flex flex-col gap-4 mt-8">
            <h4 className="text-[10px] font-mono tracking-widest text-[#f5f5f0]/40 uppercase">10 / LIVE PROJECT</h4>
            <a 
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm font-normal tracking-widest text-[#f5f5f0] hover:text-[#c9a96e] transition-colors uppercase group"
            >
              EXPLORE LIVE PROJECT 
              <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* 12 START A PROJECT (Next Project) */}
      <CaseStudyNav nextProjectSlug="bharat-hydraulics" nextProjectName="BHARAT HYDRAULICS" />

    </main>
  );
}
