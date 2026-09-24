"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import clsx from "clsx";
import Image from "next/image";
import TransitionLink from "@/components/ui/TransitionLink";
import { useTheme } from "next-themes";
import ThemeToggle from "@/components/ui/ThemeToggle";

const services = {
  "EARNED MEDIA": [
    { name: "Answer / Generative Engine Optimization", href: "/services/solutions/geo" },
    { name: "Search Engine Optimization", href: "/services/solutions/search-engine-optimization" },
    { name: "App Store Optimization", href: "/services/solutions/app-store-optimization" },
    { name: "Content Marketing", href: "/services/solutions/content-marketing" },
    { name: "Influencer Marketing", href: "/services/solutions/influencer-marketing" },
    { name: "Organic Social Media", href: "/services/solutions/organic-social-media" },
    { name: "Email Marketing", href: "/services/solutions/email-marketing" }
  ],
  "PAID MEDIA": [
    { name: "Media Strategy & Planning", href: "/services/solutions/media-strategy" },
    { name: "Paid Search", href: "/services/solutions/paid-search" },
    { name: "Paid Social", href: "/services/solutions/paid-social" },
    { name: "Programmatic & Display", href: "/services/solutions/programmatic-display" },
    { name: "Marketplaces", href: "/services/solutions/marketplaces" },
    { name: "Streaming", href: "/services/solutions/streaming" }
  ],
  "CREATIVE": [
    { name: "Performance Creative", href: "/services/solutions/performance-creative" },
    { name: "Branding", href: "/services/solutions/branding-creative" },
    { name: "Content Production", href: "/services/solutions/content-production" },
    { name: "Website Design", href: "/services/solutions/website-design" },
    { name: "Graphic & Motion Design", href: "/services/solutions/graphic-motion-design" },
    { name: "Audio Production", href: "/services/solutions/audio-production" }
  ]
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();

  const isHomepageHero = pathname === "/" && !isScrolled && !servicesOpen && !mobileMenuOpen;
  const useLightLogo = isHomepageHero || (mounted && resolvedTheme === "dark");

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setServicesOpen(false);
    setMobileMenuOpen(false);
  }

  const navLinks = [
    { name: "ABOUT", href: "/about" },
    { name: "SOLUTIONS", href: "/services", hasMegaMenu: true },
    { name: "SEO TOOL", href: "/keyword-tool" },
    { name: "WORK", href: "/work" },
    { name: "NEWS & INSIGHTS", href: "/insights" },
    { name: "CAREERS", href: "/careers" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          "bg-background/95 backdrop-blur-md border-b border-warm-grey",
          isHomepageHero && "lg:bg-transparent lg:border-transparent lg:backdrop-blur-none",
          !isHomepageHero ? "py-2 md:py-4" : "py-4 md:py-6"
        )}
        onMouseLeave={() => setServicesOpen(false)}
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Area */}
          <div className="flex flex-col z-50 shrink-0">
            <TransitionLink href="/" className="flex items-center group">
              {useLightLogo ? (
                <>
                  <Image 
                    src="/cat-transparent-light.png" 
                    alt="Falah Brandhouse" 
                    width={200} 
                    height={200} 
                    className="w-16 sm:w-20 md:w-24 h-auto group-hover:scale-105 transition-transform origin-left hidden lg:block" 
                    priority
                  />
                  <Image 
                    src="/cat-transparent.png" 
                    alt="Falah Brandhouse" 
                    width={200} 
                    height={200} 
                    className="w-16 sm:w-20 md:w-24 h-auto group-hover:scale-105 transition-transform origin-left block lg:hidden" 
                    priority
                  />
                </>
              ) : (
                <Image 
                  src="/cat-transparent.png" 
                  alt="Falah Brandhouse" 
                  width={200} 
                  height={200} 
                  className="w-16 sm:w-20 md:w-24 h-auto group-hover:scale-105 transition-transform origin-left" 
                  priority
                />
              )}
            </TransitionLink>
          </div>

          <nav className="hidden lg:flex items-center justify-center flex-1 mx-4 xl:mx-8">
            <ul className={clsx(
              "flex items-center gap-4 xl:gap-8 text-xs font-mono font-medium h-full transition-colors duration-500 whitespace-nowrap",
              isHomepageHero ? "text-[#F4F1EA]" : "text-slate"
            )}>
              {navLinks.map((link) => (
                <li key={link.name} className="h-full flex items-center">
                  {link.hasMegaMenu ? (
                    <button
                      onMouseEnter={() => setServicesOpen(true)}
                      className={clsx(
                        "flex items-center gap-1 hover:text-vermilion transition-colors h-full py-4 relative",
                        pathname.startsWith(link.href) && (isHomepageHero ? "text-[#F4F1EA] font-bold" : "text-foreground font-bold")
                      )}
                    >
                      {link.name}
                      <ChevronDown size={12} className={clsx("transition-transform duration-300", servicesOpen && "rotate-180")} />
                    </button>
                  ) : (
                    <TransitionLink
                      href={link.href}
                      onMouseEnter={() => setServicesOpen(false)}
                      className={clsx(
                        "flex items-center gap-1 hover:text-vermilion transition-colors h-full py-4 relative group",
                        pathname === link.href && (isHomepageHero ? "text-[#F4F1EA] font-bold" : "text-foreground font-bold")
                      )}
                    >
                      {link.name}
                      {/* Active indicator line */}
                      {pathname === link.href && (
                        <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-vermilion" />
                      )}
                    </TransitionLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 z-50 shrink-0">
            <div className="hidden md:flex items-center gap-6">
              <TransitionLink
                href="/request-proposal"
                className={clsx(
                  "text-xs font-mono font-bold hover:text-accent transition-colors",
                  isHomepageHero ? "text-foreground lg:text-[#F4F1EA]" : "text-foreground"
                )}
              >
                RFP
              </TransitionLink>
              <TransitionLink
                href="/contact"
                className={clsx(
                  "flex items-center gap-2 text-[10px] sm:text-xs font-mono font-bold border px-4 sm:px-6 py-2 sm:py-3 transition-colors group",
                  isHomepageHero 
                    ? "border-foreground text-foreground hover:bg-foreground hover:text-background lg:border-[#F4F1EA] lg:text-[#F4F1EA] lg:hover:bg-[#F4F1EA] lg:hover:text-charcoal" 
                    : "border-foreground text-foreground hover:bg-foreground hover:text-background"
                )}
              >
                LET'S TALK!
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </TransitionLink>
            </div>
            
            <div className="flex items-center gap-3">
              <ThemeToggle className={isHomepageHero ? "text-foreground lg:text-[#F4F1EA] lg:border-white/20" : "text-foreground"} />
              <button
                className={clsx(
                  "lg:hidden flex items-center gap-2 text-foreground"
                )}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                <span className="hidden sm:block text-xs font-mono font-bold uppercase tracking-wider">Menu</span>
                {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Mega Menu */}
        <div
          className={clsx(
            "absolute top-full left-0 right-0 bg-ivory border-b border-warm-grey overflow-hidden transition-all duration-500 ease-in-out hidden lg:block",
            servicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="container mx-auto px-6 md:px-12 py-12">
            <div className="grid grid-cols-3 gap-8">
              {Object.entries(services).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-sm font-mono font-bold text-graphite mb-6 tracking-widest">{category}</h3>
                  <ul className="flex flex-col gap-4">
                    {items.map((item) => (
                      <li key={item.name}>
                        <TransitionLink href={item.href} className="text-slate hover:text-vermilion text-sm font-primary transition-colors">
                          {item.name}
                        </TransitionLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-warm-grey flex items-center justify-between">
              <p className="text-sm font-primary text-slate">ONE PARTNER. YOUR ENTIRE DIGITAL PRESENCE.</p>
              <TransitionLink href="/contact" className="text-sm font-mono font-bold text-vermilion flex items-center gap-2 hover:opacity-80 transition-opacity">
                LET'S TALK! <ArrowUpRight size={16} />
              </TransitionLink>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          "fixed inset-0 bg-ivory z-40 flex flex-col justify-start px-6 pt-24 overflow-y-auto transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]",
          mobileMenuOpen ? "clip-path-open opacity-100 pointer-events-auto" : "clip-path-closed opacity-0 pointer-events-none"
        )}
        style={{
          clipPath: mobileMenuOpen ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)'
        }}
      >
        <nav className="flex flex-col gap-6 text-3xl font-primary font-bold pb-24">
          {navLinks.map((link, i) => (
            <div key={link.name} className="flex flex-col">
              {link.hasMegaMenu ? (
                <>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between hover:text-vermilion transition-colors text-graphite text-left w-full"
                    style={{
                      transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                      opacity: mobileMenuOpen ? 1 : 0,
                      transition: `all 0.5s ease ${i * 0.1}s`
                    }}
                  >
                    {link.name}
                    <ChevronDown size={24} className={clsx("transition-transform duration-300", mobileServicesOpen && "rotate-180")} />
                  </button>
                  <div
                    className={clsx(
                      "flex flex-col gap-6 overflow-hidden transition-all duration-300",
                      mobileServicesOpen ? "max-h-[1000px] mt-6 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    {Object.entries(services).map(([category, items]) => (
                      <div key={category} className="pl-4 border-l border-warm-grey">
                        <h4 className="text-sm font-mono text-slate mb-4">{category}</h4>
                        <ul className="flex flex-col gap-3">
                          {items.map((item) => (
                            <li key={item.name}>
                              <TransitionLink
                                href={item.href}
                                className="text-xl font-primary text-graphite hover:text-vermilion"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.name}
                              </TransitionLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <TransitionLink
                      href="/services"
                      className="text-lg text-vermilion font-mono pl-4 pt-2 block border-l border-warm-grey"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      VIEW ALL SOLUTIONS →
                    </TransitionLink>
                  </div>
                </>
              ) : (
                <TransitionLink
                  href={link.href}
                  className="hover:text-vermilion transition-colors w-fit text-graphite"
                  style={{
                    transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                    opacity: mobileMenuOpen ? 1 : 0,
                    transition: `all 0.5s ease ${i * 0.1}s`
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </TransitionLink>
              )}
            </div>
          ))}
          <div 
            className="flex flex-col gap-4 mt-8"
            style={{
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: mobileMenuOpen ? 1 : 0,
              transition: `all 0.5s ease 0.4s`
            }}
          >
            <TransitionLink
              href="/request-proposal"
              className="text-xl font-mono font-bold text-graphite hover:text-vermilion transition-colors w-fit"
              onClick={() => setMobileMenuOpen(false)}
            >
              RFP
            </TransitionLink>
            <TransitionLink
              href="/contact"
              className="text-xl font-mono font-bold flex items-center gap-2 text-vermilion border border-vermilion w-fit px-6 py-3"
              onClick={() => setMobileMenuOpen(false)}
            >
              LET'S TALK! <ArrowUpRight size={20} />
            </TransitionLink>
          </div>
        </nav>
      </div>
    </>
  );
}

