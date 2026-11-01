"use client";

import { useEffect, useRef } from "react";
import { Project } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, ArrowRight, ShieldCheck, Cpu, FileText, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CaseStudyNav from "@/components/sections/CaseStudyNav";

gsap.registerPlugin(ScrollTrigger);

export default function NovazenCaseStudy({ project }: { project: Project }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Hero Parallax
      gsap.fromTo(".hero-image",
        { scale: 1.08 },
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

      // Simple Fade Ups
      gsap.utils.toArray(".fade-up").forEach((el: any) => /* eslint-disable-line @typescript-eslint/no-explicit-any */ {
        gsap.fromTo(el, 
          { y: 30, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
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
          start: "top 65%",
        }
      });

      tlTrust.fromTo(".layer-base", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 })
             .fromTo(".layer-mid", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2")
             .fromTo(".layer-top", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const desktopImg = project.gallery[0] || project.heroImage;
  const mobileImg = project.gallery[1];

  return (
    <main ref={containerRef} className="min-h-screen bg-cloud-white text-deep-atmosphere selection:bg-sky-slate selection:text-white relative overflow-hidden font-sans">
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
            <span>CASE STUDY // 02 ✦ PHARMACEUTICAL & CLINICAL BIOTECH</span>
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
            <span className="text-sm font-semibold text-deep-atmosphere font-sans">Pharmaceutical & Healthcare</span>
          </div>
          <div className="flex flex-col gap-1 lg:border-r border-mist-blue pr-4">
            <span className="text-[10px] font-mono text-graphite/60 uppercase tracking-wider">Scope</span>
            <span className="text-sm font-semibold text-deep-atmosphere font-sans">Brand System · Regulatory UI · Web</span>
          </div>
          <div className="flex flex-col gap-1 border-r border-mist-blue pr-4">
            <span className="text-[10px] font-mono text-graphite/60 uppercase tracking-wider">Timeline</span>
            <span className="text-sm font-semibold text-deep-atmosphere font-sans">6 Weeks to Production</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono text-sky-slate uppercase tracking-wider font-bold">Concept</span>
            <span className="text-sm font-semibold text-deep-atmosphere font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-slate animate-pulse"></span>
              From Product → Trust
            </span>
          </div>
        </div>
      </div>
      
      {/* HERO IMAGE CONTAINER */}
      <div className="hero-container h-[55vh] md:h-[75vh] w-full relative overflow-hidden bg-white border-y border-mist-blue">
        <Image 
          src={project.heroImage} 
          alt={project.client}
          fill
          sizes="100vw"
          quality={100}
          className="object-cover hero-image"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cloud-white via-transparent to-transparent pointer-events-none" />
      </div>

      {/* NARRATIVE FLOW (02 THE BUSINESS, 03 THE TENSION, 04 THE ARCHITECTURE) */}
      <div className="container mx-auto px-5 sm:px-6 md:px-12 py-24 md:py-36 max-w-[1360px] relative z-10">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* 02 THE BUSINESS */}
          <div className="fade-up rounded-3xl bg-white border border-mist-blue shadow-xs p-8 sm:p-10 flex flex-col justify-between hover:border-sky-slate/40 transition-all">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-sky-slate uppercase block mb-6">
                02 / THE BUSINESS
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-4 text-deep-atmosphere">
                Advanced clinical formulations for modern healthcare.
              </h3>
            </div>
            <p className="text-sm sm:text-base text-graphite/80 font-sans leading-relaxed mt-6 pt-6 border-t border-mist-blue">
              NovaZen develops precision pharmaceutical therapies and medical formulations. They possess verified clinical science, but required a digital identity that commands immediate credibility in enterprise partner negotiations.
            </p>
          </div>

          {/* 03 THE TENSION */}
          <div className="fade-up rounded-3xl bg-white border border-mist-blue shadow-xs p-8 sm:p-10 flex flex-col justify-between hover:border-sky-slate/40 transition-all">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-sky-slate uppercase block mb-6">
                03 / THE TENSION
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-4 text-deep-atmosphere">
                Clinical density versus decision clarity.
              </h3>
            </div>
            <p className="text-sm sm:text-base text-graphite/80 font-sans leading-relaxed mt-6 pt-6 border-t border-mist-blue">
              Pharmaceutical information is inherently dense, subject to strict regulatory oversight. The challenge was displaying complex pharmacology and compliance dossiers without causing cognitive fatigue or feeling sterile.
            </p>
          </div>

          {/* 04 THE VYOMA ARCHITECTURE */}
          <div className="fade-up rounded-3xl bg-white border-2 border-sky-slate/40 shadow-xs p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-sky-slate uppercase block mb-6">
                04 / THE VYOMA ARCHITECTURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-4 text-deep-atmosphere">
                Make complexity feel effortless.
              </h3>
            </div>
            <p className="text-sm sm:text-base text-graphite/80 font-sans leading-relaxed mt-6 pt-6 border-t border-mist-blue">
              We designed an authoritative, typographic hierarchy system. By pairing clean editorial surfaces with crisp typography and subtle clinical accents, clinical dossiers were transformed into intuitive conversion pathways.
            </p>
          </div>

        </div>
      </div>

      {/* 05 THE SYSTEM (Interactive Trust Layer) */}
      <section className="bg-white py-24 md:py-36 border-y border-mist-blue relative z-10">
        <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px]">
          <div className="max-w-3xl mx-auto text-center mb-16 fade-up">
            <span className="text-xs font-mono font-bold tracking-widest text-sky-slate uppercase mb-3 block">
              05 / THE TRUST ENGINE
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-deep-atmosphere">
              The Three-Tier Clinical Trust Stack.
            </h2>
            <p className="text-sm sm:text-base text-graphite/80 mt-4 font-sans">
              Transforming raw pharmacological data into institutional commercial partnership confidence.
            </p>
          </div>

          <div className="trust-layer flex flex-col items-center justify-center max-w-2xl mx-auto py-4 relative">
            
            {/* Base Layer */}
            <div className="layer-base w-full bg-cloud-white border border-mist-blue p-6 sm:p-8 rounded-2xl shadow-xs relative z-10 flex flex-col items-center text-center hover:border-sky-slate/40 transition-all">
              <span className="text-[10px] font-mono font-medium text-graphite/60 mb-2 uppercase tracking-widest">LAYER 01 // FOUNDATION</span>
              <span className="text-lg sm:text-xl font-display font-bold text-deep-atmosphere">Technical Science & Clinical Data</span>
              <span className="text-xs text-graphite/70 mt-1 font-sans">Lab trials, bioavailability metrics & regulatory filings</span>
            </div>
            
            <div className="w-px h-8 bg-mist-blue"></div>

            {/* Mid Layer */}
            <div className="layer-mid w-[92%] bg-white border border-sky-slate/30 p-6 sm:p-8 rounded-2xl shadow-xs relative z-20 flex flex-col items-center text-center hover:border-sky-slate/60 transition-all">
              <span className="text-[10px] font-mono font-medium text-sky-slate mb-2 uppercase tracking-widest">LAYER 02 // STRUCTURE</span>
              <span className="text-lg sm:text-xl font-display font-bold text-deep-atmosphere">Accessible Typographic Hierarchy</span>
              <span className="text-xs text-graphite/70 mt-1 font-sans">Readable dossiers, clear disclaimers & responsive data tables</span>
            </div>

            <div className="w-px h-8 bg-sky-slate/40"></div>

            {/* Top Layer */}
            <div className="layer-top w-[84%] bg-deep-atmosphere text-white p-6 sm:p-8 rounded-2xl shadow-md relative z-30 flex flex-col items-center text-center">
              <span className="text-[10px] font-mono font-bold text-sky-slate mb-2 uppercase tracking-widest">LAYER 03 // ACTION</span>
              <span className="text-xl sm:text-2xl font-display font-bold text-white">Enterprise Trust & Commercial Inquiries</span>
              <span className="text-xs text-white/80 mt-1 font-sans font-medium">Hospital networks, pharmaceutical distributors & global licensing</span>
            </div>

          </div>
        </div>
      </section>

      {/* 06 EXPLORE THE BUILD & 07 PIPELINE */}
      <div className="container mx-auto px-5 sm:px-6 md:px-12 py-24 md:py-36 max-w-[1360px] relative z-10">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 mb-20 fade-up items-center">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-sky-slate uppercase mb-4 block">
              06 / EXPLORE THE BUILD
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-deep-atmosphere">
              Clinical Credibility, Not Sterile Design.
            </h2>
          </div>
          <div>
            <p className="text-base sm:text-lg text-graphite/80 font-sans leading-relaxed">
              We engineered a digital interface that balances strict scientific rigor with modern editorial standards. Next.js server components render clinical documentation in milliseconds, giving healthcare partners immediate confidence.
            </p>
          </div>
        </div>

        {/* 07 CUSTOMER JOURNEY PIPELINE */}
        <div className="rounded-3xl bg-white border border-mist-blue shadow-xs p-6 sm:p-10 lg:p-12 fade-up">
          <span className="text-xs font-mono font-bold tracking-widest text-sky-slate uppercase mb-8 block text-center">
            07 / CLINICAL EVALUATION PIPELINE
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center">
            <div className="p-4 rounded-xl bg-cloud-white border border-mist-blue text-center">
              <span className="text-[10px] font-mono text-sky-slate block mb-1 font-bold">01 PRODUCT</span>
              <span className="text-xs font-mono font-semibold text-deep-atmosphere uppercase">Formulation</span>
            </div>
            <div className="hidden sm:flex justify-center text-graphite/40">
              <ArrowRight size={16} />
            </div>
            <div className="p-4 rounded-xl bg-cloud-white border border-mist-blue text-center">
              <span className="text-[10px] font-mono text-sky-slate block mb-1 font-bold">02 SCIENCE</span>
              <span className="text-xs font-mono font-semibold text-deep-atmosphere uppercase">Clinical Data</span>
            </div>
            <div className="hidden sm:flex justify-center text-graphite/40">
              <ArrowRight size={16} />
            </div>
            <div className="p-4 rounded-xl bg-deep-atmosphere text-white text-center font-bold shadow-md">
              <span className="text-[10px] font-mono text-sky-slate block mb-1 font-semibold">03 CONVERSION</span>
              <span className="text-xs font-mono uppercase">Partnership</span>
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
              Responsive Clinical Application.
            </h2>
          </div>

          <div className="relative max-w-5xl mx-auto fade-up pt-4 pb-12">
            {/* Desktop Frame */}
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl md:rounded-3xl border border-mist-blue bg-deep-atmosphere shadow-xl">
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
              <div className="absolute -bottom-8 md:-bottom-12 right-[4%] w-[34%] md:w-[24%] aspect-[9/19] shadow-2xl overflow-hidden rounded-2xl md:rounded-3xl border-4 border-white bg-deep-atmosphere z-20">
                <Image 
                  src={mobileImg}
                  alt={`${project.client} Mobile Responsive View`}
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

      {/* 09 ARCHITECTURAL DELIVERABLES */}
      <div className="container mx-auto px-5 sm:px-6 md:px-12 py-24 md:py-36 max-w-[1360px] relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
          <span className="text-xs font-mono font-bold tracking-widest text-sky-slate uppercase mb-3 block">
            09 / SYSTEM DELIVERABLES
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-deep-atmosphere">
            Verified Clinical Architecture & Deployed Assets.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 fade-up">
          <div className="rounded-3xl bg-white border border-mist-blue shadow-xs p-8 sm:p-10 flex flex-col justify-between hover:border-sky-slate/40 transition-all">
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-xl bg-mist-blue/40 flex items-center justify-center text-deep-atmosphere">
                <ShieldCheck size={24} />
              </div>
              <span className="text-xs font-mono text-sky-slate uppercase font-semibold">VALIDATION</span>
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-deep-atmosphere mb-3">Clinical Information Clarity</h4>
              <p className="text-sm text-graphite/80 leading-relaxed font-sans">
                Multi-tier scientific hierarchy presenting bioavailability, active ingredients, and clinical trials without cognitive fatigue or sterile layout compromises.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-mist-blue shadow-xs p-8 sm:p-10 flex flex-col justify-between hover:border-sky-slate/40 transition-all">
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-xl bg-mist-blue/40 flex items-center justify-center text-deep-atmosphere">
                <FileText size={24} />
              </div>
              <span className="text-xs font-mono text-sky-slate uppercase font-semibold">COMPLIANCE</span>
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-deep-atmosphere mb-3">Regulatory Dossier Access</h4>
              <p className="text-sm text-graphite/80 leading-relaxed font-sans">
                Streamlined documentation pathways enabling hospital procurement officers and institutional evaluators to review technical compliance documentation.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-mist-blue shadow-xs p-8 sm:p-10 flex flex-col justify-between hover:border-sky-slate/40 transition-all">
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-xl bg-mist-blue/40 flex items-center justify-center text-deep-atmosphere">
                <Cpu size={24} />
              </div>
              <span className="text-xs font-mono text-sky-slate uppercase font-semibold">PERFORMANCE</span>
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-deep-atmosphere mb-3">High-Integrity Web Platform</h4>
              <p className="text-sm text-graphite/80 leading-relaxed font-sans">
                Engineered with Next.js App Router for instant load speeds, complete responsive typography scaling, and verified enterprise security headers.
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
            &quot;We didn&apos;t make pharma look like a consumer startup. We made it feel modern without compromising clinical trust.&quot;
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
      <CaseStudyNav nextProjectSlug="velora" nextProjectName="VELORA" />

    </main>
  );
}
