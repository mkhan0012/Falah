"use client";

import { useEffect, useRef } from "react";
import { Project } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, ArrowRight, Eye, Sparkles, Building2, Compass, Key } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CaseStudyNav from "@/components/sections/CaseStudyNav";

gsap.registerPlugin(ScrollTrigger);

export default function VeloraCaseStudy({ project }: { project: Project }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Cinematic Hero Parallax
      gsap.to(".hero-image", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-container",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

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

      // Journey Sequence Animation
      const tlJourney = gsap.timeline({
        scrollTrigger: {
          trigger: ".journey-container",
          start: "top 65%",
        }
      });

      tlJourney.fromTo(".journey-step", 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: "power2.out" }
      );

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
            <span>CASE STUDY // 03 ✦ ULTRA-LUXURY REAL ESTATE & HOSPITALITY</span>
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
            <span className="text-sm font-semibold text-deep-atmosphere font-sans">Ultra-Luxury Real Estate</span>
          </div>
          <div className="flex flex-col gap-1 lg:border-r border-mist-blue pr-4">
            <span className="text-[10px] font-mono text-graphite/60 uppercase tracking-wider">Scope</span>
            <span className="text-sm font-semibold text-deep-atmosphere font-sans">Brand Experience · Editorial Web · HNW Funnel</span>
          </div>
          <div className="flex flex-col gap-1 border-r border-mist-blue pr-4">
            <span className="text-[10px] font-mono text-graphite/60 uppercase tracking-wider">Timeline</span>
            <span className="text-sm font-semibold text-deep-atmosphere font-sans">10 Weeks to Launch</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono text-sky-slate uppercase tracking-wider font-bold">Concept</span>
            <span className="text-sm font-semibold text-deep-atmosphere font-mono flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-slate animate-pulse"></span>
              From Property → Desire
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
                Masterpieces of luxury living and private residences.
              </h3>
            </div>
            <p className="text-sm sm:text-base text-graphite/80 font-sans leading-relaxed mt-6 pt-6 border-t border-mist-blue">
              Velora develops ultra-exclusive private residential penthouses and architectural properties. Their clientele comprises high-net-worth individuals who buy into an aspirational lifestyle, not merely square footage.
            </p>
          </div>

          {/* 03 THE TENSION */}
          <div className="fade-up rounded-3xl bg-white border border-mist-blue shadow-xs p-8 sm:p-10 flex flex-col justify-between hover:border-sky-slate/40 transition-all">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-sky-slate uppercase block mb-6">
                03 / THE TENSION
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-4 text-deep-atmosphere">
                Commoditized real-estate templates.
              </h3>
            </div>
            <p className="text-sm sm:text-base text-graphite/80 font-sans leading-relaxed mt-6 pt-6 border-t border-mist-blue">
              Their previous digital presence resembled a generic property listing portal. It reduced multi-million dollar architectural achievements to cold bullet points, stripping away emotional resonance and prestige.
            </p>
          </div>

          {/* 04 THE VYOMA ARCHITECTURE */}
          <div className="fade-up rounded-3xl bg-white border-2 border-sky-slate/40 shadow-xs p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-sky-slate uppercase block mb-6">
                04 / THE VYOMA ARCHITECTURE
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold tracking-tight mb-4 text-deep-atmosphere">
                Sell the feeling before the floor plan.
              </h3>
            </div>
            <p className="text-sm sm:text-base text-graphite/80 font-sans leading-relaxed mt-6 pt-6 border-t border-mist-blue">
              We transformed the digital experience into an editorial art publication. Immersive full-screen imagery, atmospheric typography, and discreet VIP appointment scheduling replace transactional listing pressure.
            </p>
          </div>

        </div>
      </div>

      {/* 05 THE SYSTEM (The Immersive Property Journey) */}
      <section className="bg-white py-24 md:py-36 border-y border-mist-blue relative z-10">
        <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px]">
          <div className="max-w-3xl mx-auto text-center mb-16 fade-up">
            <span className="text-xs font-mono font-bold tracking-widest text-sky-slate uppercase mb-3 block">
              05 / THE ACQUISITION SYSTEM
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-deep-atmosphere">
              The Immersive Property Journey.
            </h2>
            <p className="text-sm sm:text-base text-graphite/80 mt-4 font-sans">
              A 5-stage sequential experience architected to move qualified buyers from emotional curiosity to private acquisition.
            </p>
          </div>

          <div className="journey-container grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 max-w-5xl mx-auto">
            
            <div className="journey-step rounded-2xl bg-cloud-white border border-mist-blue shadow-xs p-6 flex flex-col justify-between hover:border-sky-slate/40 transition-all">
              <span className="text-2xl font-mono font-bold text-sky-slate mb-4">01</span>
              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-deep-atmosphere mb-2">THE ARRIVAL</h4>
                <p className="text-xs text-graphite/70 leading-relaxed">Atmospheric cinematic reveals setting emotional prestige.</p>
              </div>
            </div>

            <div className="journey-step rounded-2xl bg-cloud-white border border-mist-blue shadow-xs p-6 flex flex-col justify-between hover:border-sky-slate/40 transition-all">
              <span className="text-2xl font-mono font-bold text-sky-slate mb-4">02</span>
              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-deep-atmosphere mb-2">THE SPACE</h4>
                <p className="text-xs text-graphite/70 leading-relaxed">Architectural volume, natural light and structural craft.</p>
              </div>
            </div>

            <div className="journey-step rounded-2xl bg-cloud-white border border-mist-blue shadow-xs p-6 flex flex-col justify-between hover:border-sky-slate/40 transition-all">
              <span className="text-2xl font-mono font-bold text-sky-slate mb-4">03</span>
              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-deep-atmosphere mb-2">THE LIFESTYLE</h4>
                <p className="text-xs text-graphite/70 leading-relaxed">Curated amenities and experiential living narratives.</p>
              </div>
            </div>

            <div className="journey-step rounded-2xl bg-cloud-white border border-mist-blue shadow-xs p-6 flex flex-col justify-between hover:border-sky-slate/40 transition-all">
              <span className="text-2xl font-mono font-bold text-sky-slate mb-4">04</span>
              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-deep-atmosphere mb-2">THE RESIDENCE</h4>
                <p className="text-xs text-graphite/70 leading-relaxed">Exact architectural floor plans & finishing specifications.</p>
              </div>
            </div>

            <div className="journey-step rounded-2xl bg-deep-atmosphere text-white p-6 flex flex-col justify-between shadow-md">
              <span className="text-2xl font-mono font-bold text-sky-slate mb-4">05</span>
              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-2">PRIVATE VIEWING</h4>
                <p className="text-xs text-white/80 font-medium leading-relaxed">Discreet, high-touch consultation with the developer.</p>
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
              A Masterclass in Editorial Restraint.
            </h2>
          </div>
          <div>
            <p className="text-base sm:text-lg text-graphite/80 font-sans leading-relaxed">
              We stripped away real-estate cliches—mortgage calculators, aggressive popups, and cluttered specs—in favor of generous whitespace, architectural photography, and cinematic video loops that invite quiet contemplation.
            </p>
          </div>
        </div>

        {/* 07 EXPERIENCE PIPELINE */}
        <div className="rounded-3xl bg-white border border-mist-blue shadow-xs p-6 sm:p-10 lg:p-12 fade-up">
          <span className="text-xs font-mono font-bold tracking-widest text-sky-slate uppercase mb-8 block text-center">
            07 / LUXURY ENGAGEMENT PIPELINE
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center">
            <div className="p-4 rounded-xl bg-cloud-white border border-mist-blue text-center">
              <span className="text-[10px] font-mono text-sky-slate block mb-1 font-bold">01 INITIATION</span>
              <span className="text-xs font-mono font-semibold text-deep-atmosphere uppercase">Atmosphere</span>
            </div>
            <div className="hidden sm:flex justify-center text-graphite/40">
              <ArrowRight size={16} />
            </div>
            <div className="p-4 rounded-xl bg-cloud-white border border-mist-blue text-center">
              <span className="text-[10px] font-mono text-sky-slate block mb-1 font-bold">02 EXPLORATION</span>
              <span className="text-xs font-mono font-semibold text-deep-atmosphere uppercase">Architecture</span>
            </div>
            <div className="hidden sm:flex justify-center text-graphite/40">
              <ArrowRight size={16} />
            </div>
            <div className="p-4 rounded-xl bg-deep-atmosphere text-white text-center font-bold shadow-md">
              <span className="text-[10px] font-mono text-sky-slate block mb-1 font-semibold">03 ACQUISITION</span>
              <span className="text-xs font-mono uppercase">Private Tour</span>
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
              Cinematic Responsive Experience.
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
                  alt={`${project.client} Mobile View`}
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
            Delivered Brand Assets & Digital Framework.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 fade-up">
          <div className="rounded-3xl bg-white border border-mist-blue shadow-xs p-8 sm:p-10 flex flex-col justify-between hover:border-sky-slate/40 transition-all">
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-xl bg-mist-blue/40 flex items-center justify-center text-deep-atmosphere">
                <Building2 size={24} />
              </div>
              <span className="text-xs font-mono text-sky-slate uppercase font-semibold">STORYTELLING</span>
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-deep-atmosphere mb-3">Editorial Property Presentation</h4>
              <p className="text-sm text-graphite/80 leading-relaxed font-sans">
                Full-screen architectural photography, atmospheric typography pacing, and video sequences communicating emotional prestige and spatial volume.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-mist-blue shadow-xs p-8 sm:p-10 flex flex-col justify-between hover:border-sky-slate/40 transition-all">
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-xl bg-mist-blue/40 flex items-center justify-center text-deep-atmosphere">
                <Compass size={24} />
              </div>
              <span className="text-xs font-mono text-sky-slate uppercase font-semibold">NAVIGATION</span>
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-deep-atmosphere mb-3">Spatial Interactive Layouts</h4>
              <p className="text-sm text-graphite/80 leading-relaxed font-sans">
                Intuitive residential exploration enabling potential buyers to navigate residence collections, floor plans, and amenities without friction.
              </p>
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-mist-blue shadow-xs p-8 sm:p-10 flex flex-col justify-between hover:border-sky-slate/40 transition-all">
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-xl bg-mist-blue/40 flex items-center justify-center text-deep-atmosphere">
                <Key size={24} />
              </div>
              <span className="text-xs font-mono text-sky-slate uppercase font-semibold">CONVERSION</span>
            </div>
            <div>
              <h4 className="font-display text-xl font-bold text-deep-atmosphere mb-3">VIP Viewing Funnel</h4>
              <p className="text-sm text-graphite/80 leading-relaxed font-sans">
                Discreet, high-touch consultation appointment workflows specifically architected for family offices, verified investors, and private buyers.
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
            &quot;Luxury isn&apos;t just about what you sell. It&apos;s about the environment and reverence with which you present it.&quot;
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
      <CaseStudyNav nextProjectSlug="bharat-hydraulics" nextProjectName="BHARAT HYDRAULICS" />

    </main>
  );
}
