"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles, Layers, Search, Cpu } from "lucide-react";
import CaseStudyNav from "@/components/sections/CaseStudyNav";

gsap.registerPlugin(ScrollTrigger);

export default function BharatCaseStudy({ project }: { project: any }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(".hero-parallax", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-container",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".node").forEach((node, i) => {
        gsap.from(node, {
          scale: 0.9,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".system-diagram",
            start: "top 75%",
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const desktopImg = project.gallery[0] || project.heroImage;
  const mobileImg = project.gallery[1];

  return (
    <main ref={containerRef} className="min-h-screen bg-cloud-white text-deep-atmosphere selection:bg-sky-slate selection:text-white relative overflow-hidden font-sans">
      
      {/* Subtle atmospheric horizon glows */}
      <div className="pointer-events-none absolute left-1/4 top-24 w-[600px] h-[350px] bg-sky-slate/10 blur-[150px] rounded-full" />
      <div className="pointer-events-none absolute right-10 bottom-1/3 w-[450px] h-[450px] bg-mist-blue/40 blur-[140px] rounded-full" />

      {/* 01 HERO SECTION */}
      <div className="pt-36 md:pt-44 pb-16 container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
        <Link 
          href="/work" 
          className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-widest text-graphite/70 hover:text-deep-atmosphere transition-colors mb-12 uppercase"
        >
          <ArrowLeft size={16} /> All Case Studies
        </Link>

        <div className="fade-up max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-slate/30 text-[11px] font-mono text-sky-slate mb-6 uppercase tracking-widest font-semibold shadow-xs">
            <Sparkles size={12} />
            <span>CASE STUDY // 01 ✦ INDUSTRIAL & HEAVY MANUFACTURING</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-deep-atmosphere mb-6 uppercase">
            {project.client}
          </h1>
          <p className="text-xl sm:text-3xl text-deep-atmosphere font-display font-medium tracking-tight mb-12">
            {project.thesis}
          </p>
        </div>

        {/* Project DNA / Quick Specs Bar */}
        <div className="fade-up grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl bg-white border border-mist-blue shadow-xs mb-12">
          <div className="flex flex-col gap-1 border-r border-mist-blue pr-4">
            <span className="text-[10px] font-mono text-graphite/60 uppercase tracking-wider">Sector</span>
            <span className="text-sm font-semibold text-deep-atmosphere font-sans">Heavy Manufacturing</span>
          </div>
          <div className="flex flex-col gap-1 lg:border-r border-mist-blue pr-4">
            <span className="text-[10px] font-mono text-graphite/60 uppercase tracking-wider">Scope</span>
            <span className="text-sm font-semibold text-deep-atmosphere font-sans">IA · Web System · SEO</span>
          </div>
          <div className="flex flex-col gap-1 border-r border-mist-blue pr-4">
            <span className="text-[10px] font-mono text-graphite/60 uppercase tracking-wider">Timeline</span>
            <span className="text-sm font-semibold text-deep-atmosphere font-sans">8 Weeks to Production</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono text-sky-slate uppercase tracking-wider font-bold">Focus</span>
            <span className="text-sm font-semibold text-deep-atmosphere font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-slate animate-pulse"></span>
              Digital System Architecture
            </span>
          </div>
        </div>
      </div>
      
      {/* HERO IMAGE CONTAINER */}
      <div className="hero-container h-[55vh] md:h-[75vh] w-full relative overflow-hidden bg-white border-y border-mist-blue">
        <div className="hero-parallax absolute inset-[-10%] w-[120%] h-[120%]">
          <Image 
            src={project.heroImage} 
            alt={project.client}
            fill
            sizes="100vw"
            quality={100}
            className="object-cover opacity-90"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-cloud-white via-transparent to-deep-atmosphere/20 pointer-events-none" />
      </div>

      {/* NARRATIVE FLOW */}
      <div className="container mx-auto px-5 sm:px-6 md:px-12 py-24 md:py-36 max-w-[1360px] relative z-10">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* 02 THE BUSINESS */}
          <div className="fade-up rounded-3xl bg-white border border-mist-blue p-8 sm:p-10 flex flex-col justify-between hover:border-sky-slate/50 shadow-xs transition-all">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-sky-slate uppercase block mb-6">
                02 / THE BUSINESS
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-4 text-deep-atmosphere">
                Engineering mastery with decades of industrial scale.
              </h3>
            </div>
            <p className="text-sm sm:text-base text-graphite/80 font-sans leading-relaxed mt-6 pt-6 border-t border-mist-blue">
              Bharat Hydraulics manufactures mission-critical industrial cylinders, power packs, and hydraulic machinery. Their physical engineering commands immense authority, but online their scale was invisible.
            </p>
          </div>

          {/* 03 THE TENSION */}
          <div className="fade-up rounded-3xl bg-white border border-mist-blue p-8 sm:p-10 flex flex-col justify-between hover:border-sky-slate/50 shadow-xs transition-all">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-sky-slate uppercase block mb-6">
                03 / THE TENSION
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-4 text-deep-atmosphere">
                Great physical engineering, poor digital organization.
              </h3>
            </div>
            <p className="text-sm sm:text-base text-graphite/80 font-sans leading-relaxed mt-6 pt-6 border-t border-mist-blue">
              Their legacy website didn&apos;t reflect their true authority. High-value equipment lines were buried under generic text, and procurement managers faced friction trying to evaluate specifications.
            </p>
          </div>

          {/* 04 THE VYOMA ARCHITECTURE */}
          <div className="fade-up rounded-3xl bg-white border-2 border-sky-slate/40 p-8 sm:p-10 flex flex-col justify-between shadow-[0_12px_36px_rgba(23,43,58,0.06)]">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-sky-slate uppercase block mb-6">
                04 / THE VYOMA ARCHITECTURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-4 text-deep-atmosphere">
                Organize complexity. Don&apos;t simplify it.
              </h3>
            </div>
            <p className="text-sm sm:text-base text-graphite/80 font-sans leading-relaxed mt-6 pt-6 border-t border-mist-blue">
              Industrial buyers don&apos;t want empty marketing buzzwords; they want specifications, tolerances, and proof. We architected a structured digital system that routes procurement teams straight to technical certainty.
            </p>
          </div>

        </div>
      </div>

      {/* 05 THE SYSTEM */}
      <section className="bg-white py-24 md:py-36 border-y border-mist-blue relative z-10">
        <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px]">
          <div className="max-w-3xl mx-auto text-center mb-16 fade-up">
            <span className="text-xs font-mono font-bold tracking-widest text-sky-slate uppercase mb-3 block">
              05 / THE ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-deep-atmosphere">
              Information Architecture as Growth Strategy.
            </h2>
            <p className="text-sm sm:text-base text-graphite/80 mt-4 font-sans">
              Organizing 40+ specialized capabilities into high-intent programmatic conversion silos.
            </p>
          </div>

          <div className="system-diagram max-w-4xl mx-auto p-6 sm:p-10 rounded-3xl bg-cloud-white border border-mist-blue relative shadow-xs">
            {/* Top Node */}
            <div className="flex justify-center mb-8">
              <div className="node px-6 sm:px-8 py-3.5 rounded-full bg-white border border-sky-slate/50 text-center shadow-xs">
                <span className="text-xs font-mono font-bold text-deep-atmosphere uppercase tracking-widest">
                  CORE ENTERPRISE // BHARAT HYDRAULICS
                </span>
              </div>
            </div>

            {/* Connecting Vertical */}
            <div className="w-px h-8 bg-sky-slate/30 mx-auto"></div>

            {/* 3 Silo Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 my-6">
              <div className="node rounded-2xl bg-white border border-mist-blue p-5 text-center flex flex-col items-center shadow-xs">
                <span className="text-[10px] font-mono text-sky-slate uppercase tracking-wider mb-2 font-bold">01 / PRODUCTS</span>
                <span className="text-sm font-semibold text-deep-atmosphere mb-2 font-sans">Industrial Cylinder Catalog</span>
                <span className="text-xs text-graphite/70">Custom Bores · Power Packs · Manifolds</span>
              </div>

              <div className="node rounded-2xl bg-white border border-mist-blue p-5 text-center flex flex-col items-center shadow-xs">
                <span className="text-[10px] font-mono text-sky-slate uppercase tracking-wider mb-2 font-bold">02 / SERVICES</span>
                <span className="text-sm font-semibold text-deep-atmosphere mb-2 font-sans">Engineering & Overhaul</span>
                <span className="text-xs text-graphite/70">Heavy Machine Repair · Precision Honing</span>
              </div>

              <div className="node rounded-2xl bg-white border border-mist-blue p-5 text-center flex flex-col items-center shadow-xs">
                <span className="text-[10px] font-mono text-sky-slate uppercase tracking-wider mb-2 font-bold">03 / SECTORS</span>
                <span className="text-sm font-semibold text-deep-atmosphere mb-2 font-sans">Industry Applications</span>
                <span className="text-xs text-graphite/70">Mining · Marine & Offshore · Infrastructure</span>
              </div>
            </div>

            {/* Connecting Bottom Line */}
            <div className="w-px h-8 bg-sky-slate/30 mx-auto"></div>

            {/* Final Conversion Node */}
            <div className="flex justify-center mt-6">
              <div className="node px-8 sm:px-10 py-4 rounded-full bg-deep-atmosphere text-white text-center shadow-md font-mono text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                <span>HIGH-INTENT PROCUREMENT PIPELINE & RFP ROUTING</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 EXPLORE THE BUILD */}
      <div className="container mx-auto px-5 sm:px-6 md:px-12 py-24 md:py-36 max-w-[1360px] relative z-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mb-20 fade-up items-center">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-sky-slate uppercase mb-4 block">
              06 / EXPLORE THE BUILD
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-deep-atmosphere">
              Industrial-Grade UI Architecture.
            </h2>
          </div>
          <div>
            <p className="text-base sm:text-lg text-graphite/80 font-sans leading-relaxed">
              We engineered a high-contrast architectural interface that echoes the precision and heavy-gauge steel of their factory floor. Monospace indexing, rapid spec sheet previews, and direct WhatsApp RFPs build trust with enterprise engineers.
            </p>
          </div>
        </div>

        {/* 07 BUYER JOURNEY PIPELINE */}
        <div className="rounded-3xl bg-white border border-mist-blue p-6 sm:p-10 lg:p-12 fade-up shadow-xs">
          <span className="text-xs font-mono font-bold tracking-widest text-sky-slate uppercase mb-8 block text-center">
            07 / PROCUREMENT JOURNEY PIPELINE
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center">
            <div className="p-4 rounded-xl bg-cloud-white border border-mist-blue text-center">
              <span className="text-[10px] font-mono text-sky-slate block mb-1 font-bold">STEP 01</span>
              <span className="text-xs font-mono font-semibold text-deep-atmosphere uppercase">Search / GEO</span>
            </div>
            <div className="hidden sm:flex justify-center text-graphite/40">
              <ArrowRight size={16} />
            </div>
            <div className="p-4 rounded-xl bg-cloud-white border border-mist-blue text-center">
              <span className="text-[10px] font-mono text-sky-slate block mb-1 font-bold">STEP 02</span>
              <span className="text-xs font-mono font-semibold text-deep-atmosphere uppercase">System Landing</span>
            </div>
            <div className="hidden sm:flex justify-center text-graphite/40">
              <ArrowRight size={16} />
            </div>
            <div className="p-4 rounded-xl bg-deep-atmosphere text-white text-center font-bold shadow-md">
              <span className="text-[10px] font-mono text-sky-slate block mb-1 font-bold">STEP 03</span>
              <span className="text-xs font-mono uppercase">Direct RFP</span>
            </div>
          </div>
        </div>
      </div>

      {/* 08 THE WORK DEPLOYED */}
      <section className="bg-white py-24 md:py-36 relative border-y border-mist-blue z-10">
        <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px]">
          <div className="mb-14 fade-up max-w-3xl mx-auto text-center">
            <span className="text-xs font-mono font-bold tracking-widest text-sky-slate uppercase mb-3 block">
              08 / THE WORK DEPLOYED
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-deep-atmosphere">
              Responsive High-Performance Web System.
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto fade-up pt-4 pb-12">
            {/* Desktop Frame */}
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl md:rounded-3xl border border-mist-blue bg-white shadow-xl">
              <Image 
                src={desktopImg}
                alt={`${project.client} Desktop Application`}
                fill
                sizes="(max-width: 768px) 100vw, 85vw"
                quality={100}
                className="object-cover object-top"
              />
            </div>

            {/* Mobile Viewport Overlap */}
            {mobileImg && (
              <div className="absolute -bottom-8 md:-bottom-12 right-[4%] w-[34%] md:w-[24%] aspect-[9/19] shadow-2xl overflow-hidden rounded-2xl md:rounded-3xl border-4 border-white bg-white z-20">
                <Image 
                  src={mobileImg}
                  alt={`${project.client} Mobile Responsive Experience`}
                  fill
                  sizes="(max-width: 768px) 34vw, 24vw"
                  quality={100}
                  className="object-cover object-top"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 09 SYSTEM ARCHITECTURE & CAPABILITIES DELIVERED */}
      <div className="container mx-auto px-5 sm:px-6 md:px-12 py-24 md:py-36 max-w-[1360px] relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
          <span className="text-xs font-mono font-bold tracking-widest text-sky-slate uppercase mb-3 block">
            09 / SYSTEM DELIVERABLES
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-deep-atmosphere">
            Structured Engineering & Deployed Capabilities.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 fade-up">
          <div className="rounded-3xl bg-white border border-mist-blue p-8 sm:p-10 flex flex-col justify-between hover:border-sky-slate/50 shadow-xs transition-all">
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-xl bg-mist-blue/40 flex items-center justify-center text-deep-atmosphere">
                <Layers size={24} />
              </div>
              <span className="text-xs font-mono text-sky-slate uppercase font-semibold">TAXONOMY</span>
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-deep-atmosphere mb-3">Structured Equipment Catalog</h4>
              <p className="text-sm text-graphite/80 leading-relaxed font-sans">
                Granular categorization of industrial cylinders, custom bores, power packs, and hydraulic machinery with direct technical specification sheets.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-mist-blue p-8 sm:p-10 flex flex-col justify-between hover:border-sky-slate/50 shadow-xs transition-all">
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-xl bg-mist-blue/40 flex items-center justify-center text-deep-atmosphere">
                <Search size={24} />
              </div>
              <span className="text-xs font-mono text-sky-slate uppercase font-semibold">INDEXING</span>
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-deep-atmosphere mb-3">Organic Search Foundation</h4>
              <p className="text-sm text-graphite/80 leading-relaxed font-sans">
                Comprehensive programmatic SEO architecture and semantic schema indexing heavy manufacturing solutions for search engines and AI answer engines.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-mist-blue p-8 sm:p-10 flex flex-col justify-between hover:border-sky-slate/50 shadow-xs transition-all">
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-xl bg-mist-blue/40 flex items-center justify-center text-deep-atmosphere">
                <Cpu size={24} />
              </div>
              <span className="text-xs font-mono text-sky-slate uppercase font-semibold">FRONTEND</span>
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-deep-atmosphere mb-3">Conversion Routing Engine</h4>
              <p className="text-sm text-graphite/80 leading-relaxed font-sans">
                Sub-second response web frontend with seamless WhatsApp integration and tailored RFQ workflows engineered for pan-India procurement teams.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 10 LIVE PROJECT & 11 THE TAKEAWAY */}
      <section className="bg-white border-t border-mist-blue py-24 md:py-36 px-6 relative z-10">
        <div className="container mx-auto max-w-4xl text-center fade-up flex flex-col items-center">
          <span className="text-xs font-mono font-bold tracking-widest text-sky-slate uppercase mb-6 block">
            10 / THE TAKEAWAY
          </span>
          <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-display font-medium leading-[1.2] tracking-tight text-deep-atmosphere mb-12">
            &quot;A digital presence that accurately reflects the scale, precision, and physical engineering of their industrial operations.&quot;
          </blockquote>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <a 
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-deep-atmosphere text-white font-semibold font-mono text-xs hover:bg-sky-slate transition-all uppercase shadow-md tracking-wider group"
            >
              <span>Explore Live Project</span>
              <ExternalLink size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* 12 NEXT PROJECT NAVIGATION */}
      <CaseStudyNav nextProjectSlug="novazen" nextProjectName="NOVAZEN" />

    </main>
  );
}
