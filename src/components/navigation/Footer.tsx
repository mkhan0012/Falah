"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory border-t border-ivory/10 selection:bg-vermilion selection:text-ivory">
      
      {/* Massive CTA Section */}
      <div className="container mx-auto px-6 md:px-[5vw] py-32 border-b border-ivory/10">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-primary font-bold tracking-tight mb-12 uppercase leading-none text-ivory/90 hover:text-ivory transition-colors">
          LET'S BUILD <br className="hidden md:block" />
          SOMETHING <span className="text-vermilion">DISTINCTIVE.</span>
        </h2>
        <Link 
          href="/contact"
          className="inline-flex items-center gap-2 text-xl font-mono font-bold tracking-widest text-charcoal bg-vermilion hover:bg-ivory px-8 py-5 transition-colors uppercase group"
        >
          START A PROJECT 
          <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>

      {/* Main Footer Links */}
      <div className="container mx-auto px-6 md:px-[5vw] py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-primary font-bold tracking-tighter mb-4 text-ivory">
                FALAH BRANDHOUSE
              </h3>
              <p className="text-lg font-primary text-ivory/60 mb-1">Brand & Digital Growth Studio</p>
              <p className="text-lg font-primary text-ivory/60">Hyderabad · India</p>
            </div>
            
            <div className="mt-12 lg:mt-24">
              <p className="text-sm font-mono text-ivory/40 uppercase tracking-widest">
                © {currentYear} FALAH BRANDHOUSE. ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-ivory/40 mb-8 uppercase">CONTACT</h4>
            <ul className="flex flex-col gap-6 text-xl font-primary">
              <li>
                <a href="#" className="hover:text-vermilion transition-colors inline-block">hello@falahbrandhouse.com</a>
              </li>
              <li>
                <a href="#" className="hover:text-vermilion transition-colors inline-block">+91 99999 99999</a>
              </li>
              <li>
                <a href="#" className="hover:text-vermilion transition-colors inline-block">WhatsApp Enquiry</a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-ivory/40 mb-8 uppercase">EXPLORE</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-lg font-primary">
              <Link href="/work" className="hover:text-vermilion transition-colors">Work</Link>
              <Link href="/services" className="hover:text-vermilion transition-colors">Services</Link>
              <Link href="/services/personal-branding" className="hover:text-vermilion transition-colors">Personal Branding</Link>
              <Link href="/about" className="hover:text-vermilion transition-colors">About</Link>
              <Link href="/insights" className="hover:text-vermilion transition-colors">Insights</Link>
              
              <Link href="/contact" className="hover:text-vermilion transition-colors">Contact</Link>
              <Link href="/request-proposal" className="hover:text-vermilion transition-colors">Request a Proposal</Link>
            </div>
          </div>

          {/* Follow & Legal */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono font-bold tracking-widest text-ivory/40 mb-8 uppercase">FOLLOW</h4>
              <ul className="flex flex-col gap-4 text-lg font-primary">
                <li><a href="#" className="hover:text-vermilion transition-colors inline-flex items-center gap-2">LinkedIn <ArrowUpRight size={14} className="text-ivory/30" /></a></li>
                <li><a href="#" className="hover:text-vermilion transition-colors inline-flex items-center gap-2">Instagram <ArrowUpRight size={14} className="text-ivory/30" /></a></li>
                <li><a href="#" className="hover:text-vermilion transition-colors inline-flex items-center gap-2">YouTube <ArrowUpRight size={14} className="text-ivory/30" /></a></li>
              </ul>
            </div>
            
            <div className="mt-12 lg:mt-auto">
              <h4 className="text-xs font-mono font-bold tracking-widest text-ivory/40 mb-6 uppercase">LEGAL</h4>
              <ul className="flex flex-col gap-3 text-sm font-primary text-ivory/60">
                <li><Link href="#" className="hover:text-ivory transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-ivory transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

