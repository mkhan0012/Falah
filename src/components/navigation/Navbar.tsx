"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import TransitionLink from "@/components/ui/TransitionLink";
import LogoMark from "@/components/ui/LogoMark";
import { siteConfig } from "@/config/site";

const navCategories = [
  {
    name: "STRATEGY",
    path: "/services",
    description: "Market research, brand positioning, and demand architecture.",
    items: siteConfig.services.strategy,
  },
  {
    name: "DESIGN",
    path: "/services/branding",
    description: "Timeless visual identity, art direction, and high-conversion UX.",
    items: siteConfig.services.design,
  },
  {
    name: "TECHNOLOGY",
    path: "/services/web-development",
    description: "Ultra-fast Next.js engineering, headless CMS, and technical SEO.",
    items: siteConfig.services.technology,
  },
  {
    name: "GROWTH",
    path: "/services/seo",
    description: "Compounding organic visibility, topical authority, and attribution.",
    items: siteConfig.services.growth,
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Gracefully close on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Clean timeout cleanup
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const openDropdown = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const closeDropdown = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const cancelClose = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  return (
    <>
      {/* Floating Pill Dock Navbar */}
      <header
        className={`fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-1.5rem)] max-w-6xl transition-all duration-300 ${
          isScrolled
            ? "shadow-[0_12px_40px_rgba(23,43,58,0.12)]"
            : "shadow-[0_4px_24px_rgba(23,43,58,0.06)]"
        }`}
        onMouseEnter={cancelClose}
        onMouseLeave={closeDropdown}
      >
        <div className="relative rounded-full backdrop-blur-2xl bg-[#F1F3F1]/95 border border-[#7899B0]/30 px-3.5 sm:px-5 py-2 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-4 shadow-sm">
          {/* Left: Brand Monogram + Wordmark */}
          <div className="flex items-center gap-2.5 shrink-0">
            <TransitionLink href="/" className="flex items-center gap-2 group">
              <div className="relative w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-[#172B3A] border border-[#7899B0]/40 flex items-center justify-center overflow-hidden group-hover:border-[#7899B0] group-hover:shadow-[0_0_15px_rgba(120,153,176,0.35)] transition-all">
                <LogoMark variant="light" className="w-4.5 h-4.5 group-hover:scale-105 transition-transform" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5 leading-none">
                  <span className="font-display font-extrabold text-sm sm:text-base tracking-[0.04em] text-[#172B3A]">
                    VYOMA
                  </span>
                  <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] font-bold text-[#7899B0] uppercase">
                    MEDIA
                  </span>
                </div>
                <span className="text-[7.5px] sm:text-[8px] font-mono tracking-widest text-[#7899B0] uppercase mt-0.5 hidden min-[400px]:inline-block">
                  HYDERABAD · EST. 2025
                </span>
              </div>
            </TransitionLink>
          </div>

          {/* Center Navigation Links: STRATEGY · DESIGN · TECHNOLOGY · GROWTH · WORK · ABOUT · INSIGHTS */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {navCategories.map((cat) => {
              const isOpen = activeDropdown === cat.name;
              const isCategoryActive = pathname.startsWith(cat.path);

              return (
                <div
                  key={cat.name}
                  className="relative"
                  onMouseEnter={() => openDropdown(cat.name)}
                  onMouseLeave={closeDropdown}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveDropdown(isOpen ? null : cat.name)
                    }
                    className={`flex items-center gap-1 text-[11px] xl:text-xs font-mono font-semibold px-2.5 xl:px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                      isOpen || isCategoryActive
                        ? "text-[#172B3A] bg-white shadow-xs font-bold"
                        : "text-[#30383D] hover:text-[#172B3A] hover:bg-white/60"
                    }`}
                  >
                    <span>{cat.name}</span>
                    <ChevronDown
                      size={11}
                      className={`transition-transform duration-200 text-[#7899B0] ${
                        isOpen ? "rotate-180 text-[#172B3A]" : ""
                      }`}
                    />
                  </button>
                </div>
              );
            })}

            <TransitionLink
              href="/work"
              className={`text-[11px] xl:text-xs font-mono font-semibold px-2.5 xl:px-3 py-1.5 rounded-full transition-colors ${
                pathname.startsWith("/work")
                  ? "text-[#172B3A] bg-white shadow-xs font-bold"
                  : "text-[#30383D] hover:text-[#172B3A] hover:bg-white/60"
              }`}
            >
              WORK
            </TransitionLink>

            <TransitionLink
              href="/about"
              className={`text-[11px] xl:text-xs font-mono font-semibold px-2.5 xl:px-3 py-1.5 rounded-full transition-colors ${
                pathname === "/about"
                  ? "text-[#172B3A] bg-white shadow-xs font-bold"
                  : "text-[#30383D] hover:text-[#172B3A] hover:bg-white/60"
              }`}
            >
              ABOUT
            </TransitionLink>

            <TransitionLink
              href="/insights"
              className={`text-[11px] xl:text-xs font-mono font-semibold px-2.5 xl:px-3 py-1.5 rounded-full transition-colors ${
                pathname.startsWith("/insights")
                  ? "text-[#172B3A] bg-white shadow-xs font-bold"
                  : "text-[#30383D] hover:text-[#172B3A] hover:bg-white/60"
              }`}
            >
              INSIGHTS
            </TransitionLink>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Ghost RFP Button */}
            <TransitionLink
              href="/request-proposal"
              className="hidden xl:inline-flex items-center text-[11px] font-mono font-semibold text-[#30383D] hover:text-[#172B3A] px-3 py-1.5 rounded-full border border-[#7899B0]/30 hover:border-[#172B3A] transition-all hover:bg-white/80"
            >
              RFP
            </TransitionLink>

            {/* Primary CTA: START A PROJECT ↗ */}
            <TransitionLink
              href="/contact"
              className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-mono font-bold bg-[#172B3A] text-[#F1F3F1] hover:bg-[#20394c] hover:shadow-[0_4px_20px_rgba(23,43,58,0.25)] px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all group shadow-[0_2px_10px_rgba(23,43,58,0.15)] border border-[#7899B0]/30 shrink-0"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight
                size={13}
                className="text-[#7899B0] group-hover:text-[#F1F3F1] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </TransitionLink>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-[#172B3A] hover:text-[#7899B0] transition-colors cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Desktop Dropdown Mega-Menu Panel with Seamless Hover Bridge */}
        {activeDropdown && (
          <div
            className="hidden lg:block absolute top-full left-0 right-0 pt-2 z-40 transition-all duration-200 before:absolute before:-top-3 before:inset-x-0 before:h-4 before:content-['']"
            onMouseEnter={cancelClose}
            onMouseLeave={closeDropdown}
          >
            <div className="rounded-3xl bg-[#F1F3F1]/96 backdrop-blur-2xl border border-[#7899B0]/30 p-6 shadow-[0_20px_50px_rgba(23,43,58,0.16)]">
              {navCategories
                .filter((c) => c.name === activeDropdown)
                .map((cat) => (
                  <div key={cat.name} className="space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#7899B0]/20">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#7899B0] font-bold">
                          VYOMA DISCIPLINE
                        </span>
                        <h4 className="text-xl font-display font-bold text-[#172B3A]">
                          {cat.name}
                        </h4>
                        <p className="text-xs text-[#30383D] mt-0.5 font-sans">
                          {cat.description}
                        </p>
                      </div>
                      <TransitionLink
                        href={cat.path}
                        onClick={() => setActiveDropdown(null)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#172B3A] hover:text-[#7899B0] px-3.5 py-1.5 rounded-full bg-white border border-[#7899B0]/25 hover:border-[#172B3A] transition-all"
                      >
                        <span>VIEW ALL {cat.name}</span>
                        <ArrowUpRight size={13} />
                      </TransitionLink>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-1">
                      {cat.items.map((item) => {
                        const isCurrent = pathname === item.href;

                        return (
                          <TransitionLink
                            key={item.name}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className={`group p-3.5 rounded-2xl bg-white border transition-all flex flex-col justify-between cursor-pointer ${
                              isCurrent
                                ? "border-[#172B3A] shadow-md ring-1 ring-[#172B3A]/15"
                                : "border-[#7899B0]/20 hover:border-[#172B3A] hover:shadow-md"
                            }`}
                          >
                            <div>
                              <div className="flex items-center justify-between mb-1.5">
                                <span className="font-display font-bold text-sm text-[#172B3A] group-hover:text-[#7899B0] transition-colors">
                                  {item.name}
                                </span>
                                <ArrowUpRight
                                  size={14}
                                  className={`text-[#7899B0] transition-all ${
                                    isCurrent
                                      ? "opacity-100 text-[#172B3A]"
                                      : "opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                  }`}
                                />
                              </div>
                              <p className="text-[11px] text-[#30383D]/80 leading-relaxed font-sans">
                                {item.desc}
                              </p>
                            </div>
                            {isCurrent && (
                              <span className="text-[9px] font-mono uppercase tracking-wider text-[#7899B0] font-bold mt-2 pt-1 border-t border-[#7899B0]/15">
                                Currently Viewing
                              </span>
                            )}
                          </TransitionLink>
                        );
                      })}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </header>

      {/* Mobile Slide-down Fullscreen Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#172B3A] text-[#F1F3F1] pt-24 pb-8 px-6 overflow-y-auto lg:hidden animate-in fade-in duration-200 flex flex-col justify-between font-sans">
          <div className="space-y-6">
            <div className="pb-4 border-b border-[#7899B0]/20">
              <span className="text-[10px] font-mono tracking-widest text-[#7899B0] uppercase block mb-1">
                NAVIGATION
              </span>
              <p className="font-display font-semibold text-sm text-[#F1F3F1]">
                Branding · Web Design · Technology · Organic Growth
              </p>
            </div>

            <nav className="space-y-4">
              {navCategories.map((cat) => (
                <div key={cat.name} className="py-2 border-b border-[#7899B0]/15">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold tracking-widest text-[#7899B0] uppercase">
                      {cat.name}
                    </span>
                    <TransitionLink
                      href={cat.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-[10px] font-mono text-[#DCE6EB] hover:text-white underline underline-offset-2"
                    >
                      All {cat.name} →
                    </TransitionLink>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pl-2">
                    {cat.items.map((item) => (
                      <TransitionLink
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xs text-[#DCE6EB] hover:text-white py-1 transition-colors"
                      >
                        {item.name}
                      </TransitionLink>
                    ))}
                  </div>
                </div>
              ))}

              <div className="pt-2 grid grid-cols-3 gap-2">
                <TransitionLink
                  href="/work"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-xl bg-white/5 border border-[#7899B0]/25 text-center font-mono text-xs font-bold text-white hover:bg-white/10"
                >
                  WORK
                </TransitionLink>
                <TransitionLink
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-xl bg-white/5 border border-[#7899B0]/25 text-center font-mono text-xs font-bold text-white hover:bg-white/10"
                >
                  ABOUT
                </TransitionLink>
                <TransitionLink
                  href="/insights"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-3 rounded-xl bg-white/5 border border-[#7899B0]/25 text-center font-mono text-xs font-bold text-white hover:bg-white/10"
                >
                  INSIGHTS
                </TransitionLink>
              </div>
            </nav>
          </div>

          <div className="pt-8 border-t border-[#7899B0]/20 space-y-3">
            <TransitionLink
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#7899B0] text-[#172B3A] font-mono text-xs font-bold tracking-wider uppercase hover:bg-white transition-all shadow-lg"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight size={16} />
            </TransitionLink>

            <div className="flex items-center justify-between text-[11px] font-mono text-[#7899B0] pt-2">
              <span>HYDERABAD · INDIA</span>
              <span>hello@vyomamedia.com</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
