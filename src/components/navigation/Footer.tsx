"use client";

import TransitionLink from "@/components/ui/TransitionLink";
import LogoMark, { VyomaBrandLogo } from "@/components/ui/LogoMark";
import { ArrowUpRight, MessageSquare, Mail, MapPin, Sparkles, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#172B3A] text-[#F1F3F1] border-t border-[#7899B0]/25 overflow-hidden font-sans">
      {/* Horizon atmospheric illumination */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 pointer-events-none bg-gradient-to-b from-[#7899B0]/20 via-[#172B3A]/40 to-transparent blur-3xl opacity-75"
        aria-hidden="true"
      />

      {/* Main Sitemap Content */}
      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] pt-20 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#7899B0]/20">
          {/* Column 1: Brand Mark, Positioning & Hyderabad Studio */}
          <div className="lg:col-span-4 space-y-6">
            <TransitionLink href="/" className="inline-block group">
              <VyomaBrandLogo variant="light" />
            </TransitionLink>

            <p className="text-sm text-[#DCE6EB] max-w-sm leading-relaxed">
              {siteConfig.supportingCopy}
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-[#7899B0]/25 space-y-1.5">
              <div className="text-[11px] font-mono font-bold text-[#D3A56C] flex items-center gap-1.5 uppercase tracking-wider">
                <Sparkles size={12} />
                <span>THE VYOMA GROWTH SYSTEM</span>
              </div>
              <p className="text-xs text-[#DCE6EB] font-mono">
                STRATEGY → BRAND → DIGITAL → VISIBILITY → GROWTH
              </p>
              <p className="text-[10px] text-[#7899B0] uppercase font-mono">
                One connected system. Built for long-term growth.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#DCE6EB]">
              <MapPin size={14} className="text-[#7899B0]" />
              <span>{siteConfig.contact.address}</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-[#7899B0]/30 text-[11px] font-mono text-[#DCE6EB]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7899B0] animate-pulse" />
              <span>Growth You Own // Direct Strategic Engagements</span>
            </div>
          </div>

          {/* Column 2: Direct Contact */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#7899B0] uppercase">
              STUDIO CONTACT
            </h4>
            <ul className="space-y-3.5 text-sm text-[#DCE6EB]">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors flex items-center gap-2.5 font-medium"
                >
                  <Mail size={15} className="text-[#7899B0]" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors flex items-center gap-2.5 font-medium"
                >
                  <Phone size={15} className="text-[#7899B0]" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                    siteConfig.contact.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D3A56C] transition-colors flex items-center gap-2.5 font-semibold text-white group"
                >
                  <MessageSquare size={15} className="text-[#7899B0] group-hover:text-[#D3A56C]" />
                  <span>WhatsApp Direct Line ↗</span>
                </a>
              </li>
              <li className="pt-2 text-xs font-mono text-[#7899B0]">
                {siteConfig.contact.workingHours} <br />
                In-person consultations in Hyderabad or via secure video.
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities & Sectors */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#7899B0] uppercase">
              DISCIPLINES & SERVICES
            </h4>
            <ul className="space-y-2 text-sm text-[#DCE6EB]">
              <li>
                <TransitionLink
                  href="/services/branding"
                  className="hover:text-white transition-colors block"
                >
                  Brand Positioning & Visual Identity
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/services/web-development"
                  className="hover:text-white transition-colors block"
                >
                  Web Design & Next.js Architecture
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/services/seo"
                  className="hover:text-white transition-colors block"
                >
                  Technical SEO & Organic Visibility
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/services/digital-marketing"
                  className="hover:text-white transition-colors block"
                >
                  Growth Attribution & Content Strategy
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/services/personal-branding"
                  className="hover:text-white transition-colors block"
                >
                  Founder & Doctor Personal Branding
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/industries"
                  className="hover:text-white transition-colors block"
                >
                  Industries (Healthcare, Real Estate, B2B, Film)
                </TransitionLink>
              </li>
              <li>
                <TransitionLink
                  href="/keyword-tool"
                  className="text-[#D3A56C] hover:text-white transition-colors inline-flex items-center gap-1.5 font-mono text-xs"
                >
                  <span>Free SEO Keyword Intelligence</span>
                  <span className="text-[9px] font-bold bg-[#7899B0]/20 text-[#D3A56C] px-1.5 py-0.5 rounded border border-[#7899B0]/30">
                    FREE
                  </span>
                </TransitionLink>
              </li>
            </ul>
          </div>

          {/* Column 4: Studio Exploration & Legal */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h4 className="text-xs font-mono font-bold tracking-widest text-[#7899B0] uppercase mb-4">
                EXPLORE
              </h4>
              <ul className="space-y-2 text-sm text-[#DCE6EB]">
                <li>
                  <TransitionLink href="/work" className="hover:text-white transition-colors">
                    Case Studies
                  </TransitionLink>
                </li>
                <li>
                  <TransitionLink href="/about" className="hover:text-white transition-colors">
                    About VYOMA
                  </TransitionLink>
                </li>
                <li>
                  <TransitionLink href="/insights" className="hover:text-white transition-colors">
                    Insights & Articles
                  </TransitionLink>
                </li>
                <li>
                  <TransitionLink href="/request-proposal" className="hover:text-white transition-colors">
                    Request Proposal (RFP)
                  </TransitionLink>
                </li>
                <li>
                  <TransitionLink href="/contact" className="text-white hover:text-[#D3A56C] font-semibold transition-colors flex items-center gap-1">
                    <span>Start a Project</span>
                    <ArrowUpRight size={14} />
                  </TransitionLink>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <h4 className="text-xs font-mono font-bold tracking-widest text-[#7899B0] uppercase mb-3">
                LEGAL
              </h4>
              <ul className="space-y-1.5 text-xs text-[#7899B0]">
                <li>
                  <TransitionLink href="/privacy-policy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </TransitionLink>
                </li>
                <li>
                  <TransitionLink href="/terms" className="hover:text-white transition-colors">
                    Terms of Service
                  </TransitionLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location Badge */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7899B0]">
          <p>© {currentYear} VYOMA MEDIA. ALL RIGHTS RESERVED.</p>
          <p className="tracking-widest uppercase text-[10px]">
            GROWTH YOU OWN, NOT GROWTH YOU RENT · HYDERABAD, INDIA
          </p>
        </div>
      </div>

      {/* Oversized Clipped Watermark across bottom edge */}
      <div
        className="w-full text-center overflow-hidden select-none pointer-events-none pb-0 leading-none"
        aria-hidden="true"
      >
        <span className="font-display font-black text-[13vw] tracking-tighter text-[#7899B0]/10 uppercase whitespace-nowrap inline-block -mb-[4.5vw]">
          VYOMA MEDIA
        </span>
      </div>
    </footer>
  );
}
