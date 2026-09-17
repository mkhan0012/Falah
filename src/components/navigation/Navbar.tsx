"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menu closes on Link click directly

  const navLinks = [
    { name: "WORK", href: "/work" },
    { name: "SERVICES", href: "/services" },
    { name: "PERSONAL BRANDING", href: "/personal-branding" },
    { name: "ABOUT", href: "/about" },
    { name: "INSIGHTS", href: "/insights" },
  ];

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "py-4 bg-ivory/90 backdrop-blur-md border-b border-warm-grey" : "py-8 bg-transparent"
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Area */}
          <div className="flex flex-col z-50">
            <Link href="/" className="text-xl md:text-2xl font-primary font-bold tracking-tight text-graphite">
              FALAH BRANDHOUSE
            </Link>
            <span className="text-[9px] font-mono tracking-widest text-slate hidden lg:block uppercase mt-1">
              Brand & Digital Growth Studio
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center gap-8 text-xs font-mono font-medium text-slate">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className={clsx(
                      "hover:text-vermilion transition-colors relative group",
                      pathname === link.href && "text-vermilion"
                    )}
                  >
                    {link.name}
                    {pathname === link.href && (
                      <span className="absolute -bottom-2 left-0 right-0 h-[1px] bg-vermilion" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA & Mobile Toggle */}
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
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={clsx(
          "fixed inset-0 bg-ivory z-40 flex flex-col justify-center px-6 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]",
          mobileMenuOpen ? "clip-path-open opacity-100" : "clip-path-closed opacity-0 pointer-events-none"
        )}
        style={{
          clipPath: mobileMenuOpen ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)'
        }}
      >
        <nav className="flex flex-col gap-6 text-3xl font-primary font-bold">
          {navLinks.map((link, i) => (
            <Link 
              key={link.name}
              href={link.href}
              className="hover:text-vermilion transition-colors w-fit text-graphite"
              style={{
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: mobileMenuOpen ? 1 : 0,
                transition: `all 0.5s ease ${0.1 + i * 0.05}s`
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
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