"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, ChevronDown } from "lucide-react";
import clsx from "clsx";

const services = {
  BRAND: [
    { name: "Brand Strategy", href: "/services/branding" },
    { name: "Positioning", href: "/services/branding" },
    { name: "Visual Identity", href: "/services/branding" },
    { name: "Brand Messaging", href: "/services/branding" },
    { name: "Personal Branding", href: "/services/personal-branding" },
  ],
  DIGITAL: [
    { name: "Website Development", href: "/services/web-development" },
    { name: "Landing Pages", href: "/services/web-development" },
    { name: "UI/UX", href: "/services/web-development" },
    { name: "Digital Experiences", href: "/services/web-development" },
    { name: "Conversion Optimization", href: "/services/web-development" },
  ],
  VISIBILITY: [
    { name: "SEO", href: "/services/seo" },
    { name: "Local SEO", href: "/services/seo" },
    { name: "Content Strategy", href: "/services/seo" },
    { name: "Social Media", href: "/services/social-media" },
    { name: "Google Business", href: "/services/seo" },
  ],
  GROWTH: [
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Lead Generation", href: "/services/digital-marketing" },
    { name: "Analytics", href: "/services/digital-marketing" },
    { name: "Growth Strategy", href: "/services/digital-marketing" },
  ]
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setServicesOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "WORK", href: "/work" },
    { name: "SERVICES", href: "/services", hasMegaMenu: true },
    { name: "PERSONAL BRANDING", href: "/services/personal-branding" },
    { name: "ABOUT", href: "/about" },
    { name: "INSIGHTS", href: "/insights" },
  ];

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled || servicesOpen ? "py-4 bg-ivory/95 backdrop-blur-md border-b border-warm-grey" : "py-8 bg-transparent"
        )}
        onMouseLeave={() => setServicesOpen(false)}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex flex-col z-50">
            <Link href="/" className="text-xl md:text-2xl font-primary font-bold tracking-tight text-graphite">
              FALAH BRANDHOUSE
            </Link>
            <span className="text-[9px] font-mono tracking-widest text-slate hidden lg:block uppercase mt-1">
              Brand & Digital Growth Studio
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2 h-full">
            <ul className="flex items-center gap-8 text-xs font-mono font-medium text-slate h-full">
              {navLinks.map((link) => (
                <li key={link.name} className="h-full flex items-center">
                  {link.hasMegaMenu ? (
                    <button
                      onMouseEnter={() => setServicesOpen(true)}
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={clsx(
                        "hover:text-vermilion transition-colors relative flex items-center gap-1",
                        (pathname.includes(link.href) || servicesOpen) && "text-vermilion"
                      )}
                    >
                      {link.name}
                      <ChevronDown size={12} className={clsx("transition-transform duration-300", servicesOpen && "rotate-180")} />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onMouseEnter={() => setServicesOpen(false)}
                      className={clsx(
                        "hover:text-vermilion transition-colors relative group py-2",
                        pathname === link.href && "text-vermilion"
                      )}
                    >
                      {link.name}
                      {pathname === link.href && (
                        <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-vermilion" />
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4 z-50">
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 text-xs font-mono font-bold border border-graphite text-graphite px-6 py-3 hover:bg-graphite hover:text-ivory transition-colors group"
            >
              START A PROJECT
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            
            <button
              className="lg:hidden text-graphite flex items-center gap-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="text-xs font-mono font-bold uppercase tracking-wider">Menu</span>
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
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
            <div className="grid grid-cols-4 gap-8">
              {Object.entries(services).map(([category, items]) => (
                <div key={category}>
                  <h3 className="text-sm font-mono font-bold text-graphite mb-6 tracking-widest">{category}</h3>
                  <ul className="flex flex-col gap-4">
                    {items.map((item) => (
                      <li key={item.name}>
                        <Link href={item.href} className="text-slate hover:text-vermilion text-sm font-primary transition-colors">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-warm-grey flex items-center justify-between">
              <p className="text-sm font-primary text-slate">ONE PARTNER. YOUR ENTIRE DIGITAL PRESENCE.</p>
              <Link href="/contact" className="text-sm font-mono font-bold text-vermilion flex items-center gap-2 hover:opacity-80 transition-opacity">
                START A PROJECT <ArrowUpRight size={16} />
              </Link>
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
                              <Link
                                href={item.href}
                                className="text-xl font-primary text-graphite hover:text-vermilion"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <Link
                      href="/services"
                      className="text-lg text-vermilion font-mono pl-4 pt-2 block border-l border-warm-grey"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      VIEW ALL SERVICES →
                    </Link>
                  </div>
                </>
              ) : (
                <Link
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
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="mt-8 text-xl font-mono font-bold flex items-center gap-2 text-vermilion border border-vermilion w-fit px-6 py-3"
            style={{
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: mobileMenuOpen ? 1 : 0,
              transition: `all 0.5s ease 0.4s`
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            START A PROJECT <ArrowUpRight size={20} />
          </Link>
        </nav>
      </div>
    </>
  );
}

