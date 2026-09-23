"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-[#F4F1EA] border-t border-[#F4F1EA]/10 selection:bg-vermilion selection:text-[#F4F1EA]">
      
      {/* Massive CTA Section */}
      <div className="container mx-auto px-6 md:px-[5vw] py-32 border-b border-[#F4F1EA]/10">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-primary font-bold tracking-tight mb-12 uppercase leading-none text-[#F4F1EA]/90 hover:text-[#F4F1EA] transition-colors">
          LET&apos;S BUILD <br className="hidden md:block" />
          SOMETHING <span className="text-vermilion">DISTINCTIVE.</span>
        </h2>
        <Link 
          href="/contact"
          className="inline-flex items-center gap-2 text-xl font-mono font-bold tracking-widest text-charcoal bg-vermilion hover:bg-[#F4F1EA] px-8 py-5 transition-colors uppercase group"
        >
          START A PROJECT 
          <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>

      {/* Main Footer Links */}
      <div className="container mx-auto px-6 md:px-[5vw] py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-2 lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="mb-8">
                <Image 
                  src="/cat-transparent-light.png" 
                  alt="Falah Brandhouse" 
                  width={300} 
                  height={300} 
                  className="w-32 md:w-40 h-auto"
                />
              </div>
              <p className="text-lg font-primary text-[#F4F1EA]/60 mb-1">Brand & Digital Growth Studio</p>
              <p className="text-lg font-primary text-[#F4F1EA]/60">Hyderabad · India</p>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-1 lg:col-span-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#F4F1EA]/40 mb-8 uppercase">CONTACT</h4>
            <ul className="flex flex-col gap-6 text-lg md:text-xl font-primary">
              <li>
                <a href="mailto:hello@falahbrandhouse.com" className="hover:text-vermilion transition-colors inline-block break-words break-all sm:break-normal">hello@falahbrandhouse.com</a>
              </li>
              <li>
                <a href="tel:+910000000000" className="hover:text-vermilion transition-colors inline-block">[YOUR_PHONE_NUMBER]</a>
              </li>
              <li>
                <a href="#" className="hover:text-vermilion transition-colors inline-block">WhatsApp Enquiry</a>
              </li>
            </ul>
          </div>

          {/* Explore */}
          <div className="md:col-span-1 lg:col-span-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#F4F1EA]/40 mb-8 uppercase">EXPLORE</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 text-base md:text-lg font-primary">
              <Link href="/work" className="hover:text-vermilion transition-colors">Work</Link>
              <Link href="/services" className="hover:text-vermilion transition-colors">Solutions</Link>
              <Link href="/keyword-tool" className="hover:text-vermilion transition-colors text-vermilion font-bold">Free SEO Tool</Link>
              <Link href="/services/personal-branding" className="hover:text-vermilion transition-colors">Personal Branding</Link>
              <Link href="/about" className="hover:text-vermilion transition-colors">About</Link>
              <Link href="/insights" className="hover:text-vermilion transition-colors">Insights</Link>
              
              <Link href="/contact" className="hover:text-vermilion transition-colors">Contact</Link>
              <Link href="/request-proposal" className="hover:text-vermilion transition-colors">Request a Proposal</Link>
            </div>
          </div>

          {/* Follow & Legal */}
          <div className="md:col-span-2 lg:col-span-2 flex flex-row md:flex-row lg:flex-col justify-between gap-12 lg:gap-0 mt-8 md:mt-0 lg:mt-0 pt-12 md:pt-8 lg:pt-0 border-t border-[#F4F1EA]/10 md:border-t-0">
            <div className="flex-1">
              <h4 className="text-xs font-mono font-bold tracking-widest text-[#F4F1EA]/40 mb-8 uppercase">FOLLOW</h4>
              <ul className="flex flex-col gap-4 text-base md:text-lg font-primary">
                <li><a href="#" className="hover:text-vermilion transition-colors inline-flex items-center gap-2">LinkedIn <ArrowUpRight size={14} className="text-[#F4F1EA]/30" /></a></li>
                <li><a href="#" className="hover:text-vermilion transition-colors inline-flex items-center gap-2">Instagram <ArrowUpRight size={14} className="text-[#F4F1EA]/30" /></a></li>
                <li><a href="#" className="hover:text-vermilion transition-colors inline-flex items-center gap-2">YouTube <ArrowUpRight size={14} className="text-[#F4F1EA]/30" /></a></li>
              </ul>
            </div>
            
            <div className="mt-0 lg:mt-auto flex-1">
              <h4 className="text-xs font-mono font-bold tracking-widest text-[#F4F1EA]/40 mb-6 uppercase">LEGAL</h4>
              <ul className="flex flex-col gap-3 text-sm font-primary text-[#F4F1EA]/60">
                <li><Link href="/privacy-policy" className="hover:text-[#F4F1EA] transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-[#F4F1EA] transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-20 pt-8 border-t border-[#F4F1EA]/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] md:text-xs font-mono text-[#F4F1EA]/40 uppercase tracking-widest text-center md:text-left">
            © {currentYear} FALAH BRANDHOUSE. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[10px] md:text-xs font-mono text-[#F4F1EA]/40 uppercase tracking-widest text-center md:text-right">
            MADE IN INDIA
          </p>
        </div>
      </div>
    </footer>
  );
}

