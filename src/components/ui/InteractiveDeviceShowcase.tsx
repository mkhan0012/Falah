"use client";

import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Laptop, Smartphone, ExternalLink, Sparkles, ArrowRight } from "lucide-react";

interface ShowcaseProject {
  id: string;
  name: string;
  client: string;
  sector: string;
  thesis: string;
  description: string;
  desktopImage: string;
  mobileImage: string;
  liveUrl: string;
  slug: string;
  metrics: {
    speed: string;
    gain: string;
    deliverables: string;
  };
}

const showcaseProjects: ShowcaseProject[] = [
  {
    id: "bharat",
    name: "Bharat Hydraulics",
    client: "BHARAT HYDRAULICS",
    sector: "Industrial / Manufacturing",
    thesis: "FROM WORKSHOP → DIGITAL SYSTEM",
    description: "Transformed an offline precision manufacturing enterprise into an organized digital catalog with direct technical procurement RFP routing.",
    desktopImage: "/images/mockups/bharat.jpg",
    mobileImage: "/images/mockups/bharat-mobile.jpg",
    liveUrl: "https://www.bharathydraulics.site/",
    slug: "bharat-hydraulics",
    metrics: {
      speed: "0.38s Next.js Load",
      gain: "+340% Organic Inbound RFPs",
      deliverables: "Next.js App Router · Technical Catalog · SEO Architecture",
    },
  },
  {
    id: "novazen",
    name: "NovaZen Healthcare",
    client: "NOVAZEN BIOTECH",
    sector: "Pharmaceutical / Clinics",
    thesis: "FROM PRODUCT → TRUST",
    description: "Architected clinical trust architecture and patient consultation scheduling strictly aligned with medical advertising norms.",
    desktopImage: "/images/mockups/novazen.jpg",
    mobileImage: "/images/mockups/novazen-mobile.jpg",
    liveUrl: "https://novazen.vercel.app/",
    slug: "novazen",
    metrics: {
      speed: "100/100 Core Web Vitals",
      gain: "Zero Ad Spend Dependency",
      deliverables: "Clinical Information Hierarchy · Patient Privacy · Schema",
    },
  },
  {
    id: "velora",
    name: "Velora Luxury Real Estate",
    client: "VELORA ESTATES",
    sector: "Ultra-Luxury Real Estate",
    thesis: "FROM PROPERTY → DESIRE",
    description: "Engineered an editorial architectural showcase replacing transactional listing cliches with private viewing consultation funnels.",
    desktopImage: "/images/mockups/velora.jpg",
    mobileImage: "/images/mockups/velora-mobile.jpg",
    liveUrl: "https://velora-alpha-eight.vercel.app/",
    slug: "velora",
    metrics: {
      speed: "Sub-Second Spatial UI",
      gain: "High-Ticket Private Inbound",
      deliverables: "Architectural Visual Systems · VIP Scheduling · RERA Compliance",
    },
  },
];

export default function InteractiveDeviceShowcase() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>("bharat");
  const [deviceMode, setDeviceMode] = useState<"desktop" | "mobile">("desktop");
  
  // Parallax Tilt State
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const activeProject = showcaseProjects.find((p) => p.id === selectedProjectId) || showcaseProjects[0];

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // -0.5 to 0.5

    // Max 10 deg rotation
    setTilt({
      x: -(y * 14),
      y: x * 14,
    });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="w-full space-y-8 font-sans">
      {/* Top Controller Bar: Client Selector & Device Switcher */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-white border border-[#7899B0]/25 shadow-xs">
        {/* Project Selector Pills */}
        <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
          {showcaseProjects.map((proj, idx) => {
            const isSelected = proj.id === selectedProjectId;
            return (
              <button
                key={proj.id}
                type="button"
                onClick={() => setSelectedProjectId(proj.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? "bg-[#172B3A] text-white shadow-sm"
                    : "text-[#3B5B72] hover:text-[#172B3A] hover:bg-[#F1F3F1]"
                }`}
              >
                <span className="text-[10px] opacity-60">0{idx + 1}</span>
                <span>{proj.name}</span>
              </button>
            );
          })}
        </div>

        {/* Device Switcher (Desktop vs Mobile) */}
        <div className="flex items-center gap-1 bg-[#F1F3F1] p-1 rounded-xl border border-[#7899B0]/20 self-end lg:self-auto shrink-0">
          <button
            type="button"
            onClick={() => setDeviceMode("desktop")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
              deviceMode === "desktop"
                ? "bg-white text-[#172B3A] shadow-xs"
                : "text-[#3B5B72] hover:text-[#172B3A]"
            }`}
            aria-label="View on MacBook Pro"
          >
            <Laptop size={14} />
            <span className="hidden sm:inline">MacBook Pro M3</span>
            <span className="sm:hidden">Desktop</span>
          </button>
          <button
            type="button"
            onClick={() => setDeviceMode("mobile")}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
              deviceMode === "mobile"
                ? "bg-white text-[#172B3A] shadow-xs"
                : "text-[#3B5B72] hover:text-[#172B3A]"
            }`}
            aria-label="View on iPhone 16 Pro"
          >
            <Smartphone size={14} />
            <span className="hidden sm:inline">iPhone 16 Pro</span>
            <span className="sm:hidden">Mobile</span>
          </button>
        </div>
      </div>

      {/* 3D Interactive Mockup Stage */}
      <div
        className="relative w-full rounded-3xl bg-gradient-to-b from-[#172B3A] to-[#111e28] p-6 sm:p-10 md:p-14 overflow-hidden border border-[#7899B0]/30 shadow-2xl flex flex-col items-center justify-center min-h-[460px] md:min-h-[580px]"
        style={{ perspective: "1400px" }}
      >
        {/* Atmospheric Ambient Lighting Gradients */}
        <div className="absolute top-0 -left-1/4 w-96 h-96 rounded-full bg-[#7899B0]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -right-1/4 w-96 h-96 rounded-full bg-[#D3A56C]/10 blur-3xl pointer-events-none" />

        {/* Architectural Grid Watermark */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#F1F3F1 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Header HUD inside the Stage */}
        <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-8 z-10">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[#D3A56C] font-semibold">
              <Sparkles size={12} />
              <span>{activeProject.thesis}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[#F1F3F1] uppercase">
              {activeProject.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={activeProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-mono text-[#F1F3F1] transition-all hover:border-[#D3A56C]"
            >
              <span>Verified Deployment ↗</span>
              <ExternalLink size={12} className="text-[#93B2C8]" />
            </a>
          </div>
        </div>

        {/* 3D Parallax Tilt Device Frame */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative z-10 w-full max-w-4xl flex items-center justify-center cursor-grab active:cursor-grabbing transition-transform duration-200 ease-out"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {deviceMode === "desktop" ? (
            /* ========================================================
               DESKTOP: MacBook Pro M3 Spatial Chassis
               ======================================================== */
            <div className="relative w-full max-w-[820px] transition-all duration-500">
              {/* Screen Shell */}
              <div className="relative bg-[#0d1419] rounded-t-2xl sm:rounded-t-3xl pt-3 px-3 sm:pt-4 sm:px-4 border-t-2 border-x-2 border-[#455866]/40 shadow-[0_30px_90px_rgba(0,0,0,0.7)]">
                {/* Camera Housing Notch */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-3 bg-black rounded-b-md z-30 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#172B3A] border border-white/20" />
                </div>

                {/* Display Screen with Image */}
                <div className="relative aspect-[16/10] w-full rounded-t-lg sm:rounded-t-xl overflow-hidden bg-black border border-white/10">
                  <Image
                    src={activeProject.desktopImage}
                    alt={`${activeProject.name} desktop interface deployment`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 820px"
                    className="object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.02]"
                    priority
                  />

                  {/* Dynamic Glare Reflection */}
                  {isHovering && (
                    <div
                      className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at ${(tilt.y + 10) * 5}% ${(-tilt.x + 10) * 5}%, rgba(255,255,255,0.7) 0%, transparent 60%)`,
                      }}
                    />
                  )}

                  {/* Live Floating Badge over Screen */}
                  <div className="absolute bottom-3 left-3 z-20 pointer-events-none hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#F1F3F1]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D3A56C] animate-pulse" />
                    <span>{activeProject.metrics.speed}</span>
                  </div>
                </div>
              </div>

              {/* MacBook Bottom Base / Chin / Trackpad Notch */}
              <div className="relative h-4 sm:h-5 bg-gradient-to-b from-[#243542] via-[#1a2832] to-[#0f171d] rounded-b-xl sm:rounded-b-2xl border-b border-x border-[#455866]/40 shadow-xl flex items-start justify-center">
                <div className="w-20 sm:w-28 h-1.5 bg-[#0a0f13] rounded-b-md" />
              </div>
            </div>
          ) : (
            /* ========================================================
               MOBILE: iPhone 16 Pro Titanium Spatial Chassis
               ======================================================== */
            <div className="relative w-[280px] sm:w-[320px] transition-all duration-500 my-2">
              {/* Outer Titanium Chassis Frame */}
              <div className="relative bg-[#0d1419] rounded-[48px] p-3.5 border-4 border-[#455866]/50 shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
                {/* Side Button Accents */}
                <div className="absolute -left-1.5 top-24 w-1 h-10 bg-[#344654] rounded-l-md" />
                <div className="absolute -left-1.5 top-36 w-1 h-10 bg-[#344654] rounded-l-md" />
                <div className="absolute -right-1.5 top-28 w-1 h-14 bg-[#344654] rounded-r-md" />

                {/* Display Screen */}
                <div className="relative aspect-[9/19.5] w-full rounded-[38px] overflow-hidden bg-black border border-white/10">
                  {/* Dynamic Island Cutout */}
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30 flex items-center justify-between px-2.5">
                    <div className="w-2 h-2 rounded-full bg-[#172B3A] border border-white/10" />
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
                  </div>

                  {/* Mobile Screen Mockup */}
                  <Image
                    src={activeProject.mobileImage}
                    alt={`${activeProject.name} mobile responsive design`}
                    fill
                    sizes="320px"
                    className="object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />

                  {/* Dynamic Glare Reflection */}
                  {isHovering && (
                    <div
                      className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle at ${(tilt.y + 10) * 5}% ${(-tilt.x + 10) * 5}%, rgba(255,255,255,0.7) 0%, transparent 60%)`,
                      }}
                    />
                  )}

                  {/* Floating Metric Badge */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none w-[90%] text-center py-1.5 px-2 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#DCE6EB]">
                    <span>{activeProject.metrics.speed}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Tactile Interaction Hint */}
        <div className="mt-8 z-10 text-center">
          <span className="text-[11px] font-mono text-[#93B2C8] uppercase tracking-wider flex items-center justify-center gap-1.5">
            <Sparkles size={12} className="text-[#FEB005]" />
            <span>Move cursor over device for 3D parallax spatial inspection</span>
          </span>
        </div>
      </div>

      {/* Case Study Context & Deliverable Breakdown Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 rounded-2xl bg-white border border-[#7899B0]/25 shadow-xs">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#3B5B72] font-bold block mb-1">
            CORE GAIN // BUSINESS OUTCOME
          </span>
          <p className="text-sm sm:text-base font-display font-bold text-[#172B3A]">
            {activeProject.metrics.gain}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#7899B0]/25 shadow-xs">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#3B5B72] font-bold block mb-1">
            ENGINEERING & PERFORMANCE
          </span>
          <p className="text-sm sm:text-base font-display font-bold text-[#172B3A]">
            {activeProject.metrics.speed}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[#7899B0]/25 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#3B5B72] font-bold block mb-1">
              FULL ARCHITECTURE AUDIT
            </span>
            <Link
              href={`/work/${activeProject.slug}`}
              className="text-xs sm:text-sm font-mono font-bold text-[#172B3A] hover:text-[#3B5B72] uppercase tracking-wider inline-flex items-center gap-1 transition-colors"
            >
              <span>Explore Case Study</span>
              <ArrowRight size={14} />
            </Link>
          </div>
          <Link
            href={`/work/${activeProject.slug}`}
            className="w-9 h-9 rounded-full bg-[#172B3A] text-white flex items-center justify-center hover:bg-[#3B5B72] transition-colors shadow-xs"
            aria-label={`Open ${activeProject.name} case study`}
          >
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
