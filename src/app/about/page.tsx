import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, CheckCircle2, MapPin, Compass, Palette, Network } from "lucide-react";
import LogoMark from "@/components/ui/LogoMark";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About VYOMA Media | Branding & Organic Growth Studio in Hyderabad",
  description:
    "We build brands, digital experiences and organic visibility that create lasting commercial value. Growth you own, not growth you rent. Based in Hyderabad, India.",
  alternates: {
    canonical: "https://vyomamedia.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="pt-36 md:pt-44 pb-32 bg-[#F1F3F1] text-[#30383D] min-h-screen selection:bg-[#7899B0] selection:text-white relative overflow-hidden font-sans">
      {/* Header Section */}
      <section className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] mb-24 relative z-10">
        <div className="border-b border-[#7899B0]/20 pb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono text-[#172B3A] mb-8 uppercase tracking-widest font-semibold shadow-sm">
            <Sparkles size={12} className="text-[#D3A56C]" />
            <span>HYDERABAD · INDIA · EST. 2025</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[6.5rem] font-display font-extrabold tracking-tight leading-[0.98] mb-8 uppercase text-[#172B3A]">
            ABOUT VYOMA. <br />
            <span className="text-[#7899B0]">
              GROWTH IS NOT A CAMPAIGN. IT IS A SYSTEM.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-[#30383D] max-w-4xl font-sans leading-relaxed font-normal">
            VYOMA Media is an international-grade branding, web design, and organic growth studio in Hyderabad, built on the conviction that enduring commercial value comes from strategic positioning, high-converting digital architecture, and compounding organic visibility.
          </p>
        </div>
      </section>

      {/* Studio Aesthetic Architecture Banner */}
      <section className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] mb-28 relative z-10">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl border border-[#7899B0]/25 bg-[#172B3A] shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            alt="VYOMA Media Studio Hyderabad"
            fill
            className="object-cover opacity-85 hover:opacity-100 transition-opacity duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#172B3A]/90 via-[#172B3A]/40 to-transparent" />

          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-10">
            <div className="flex items-center gap-2 text-xs font-mono text-[#D3A56C] uppercase tracking-wider font-semibold">
              <MapPin size={14} />
              <span>Hyderabad Studio HQ · Serving Global Ambition</span>
            </div>
            <p className="text-xl sm:text-3xl font-display font-bold text-white mt-1">
              GROWTH YOU OWN. NOT GROWTH YOU RENT.
            </p>
          </div>
        </div>
      </section>

      {/* The VYOMA Growth System Methodology */}
      <section className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] mb-28 relative z-10">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-mono font-bold tracking-[0.2em] text-[#7899B0] uppercase block mb-2">
            OPERATIONAL METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#172B3A]">
            ONE CONNECTED SYSTEM. BUILT FOR LONG-TERM GROWTH.
          </h2>
          <p className="text-sm sm:text-base text-[#30383D] mt-2">
            How our five integrated capabilities reinforce each other to create lasting commercial value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {siteConfig.growthSystem.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-3xl bg-white border border-[#7899B0]/25 hover:border-[#172B3A] transition-all space-y-4 shadow-sm hover:shadow-[0_12px_36px_rgba(23,43,58,0.08)] flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#DCE6EB] border border-[#7899B0]/30 flex items-center justify-center font-mono font-black text-lg text-[#172B3A]">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-[#172B3A]">
                    {item.name}
                  </h3>
                  <span className="text-[10px] font-mono text-[#7899B0] uppercase block mt-1">
                    {item.headline.split("&")[0]}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#30383D] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#7899B0]/20 text-[10px] font-mono text-[#7899B0] uppercase">
                {item.deliverables[0]}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy: Rented vs Owned Attention */}
      <section className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] mb-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 border-t border-[#7899B0]/20 pt-8">
            <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-[#172B3A] uppercase">
              STUDIO PHILOSOPHY
            </h2>
            <p className="text-sm font-sans text-[#7899B0] mt-3">
              The fundamental flaw of modern digital agency practice is rented attention.
            </p>
          </div>

          <div className="lg:col-span-8 border-t border-[#7899B0]/20 pt-8 space-y-8 font-sans text-xl sm:text-2xl md:text-3xl leading-relaxed text-[#172B3A]">
            <p>
              A beautiful website is useless if nobody finds it. A loud campaign is wasted money if it lands on a weak experience.
            </p>
            <p className="text-[#30383D]">
              VYOMA combines brand positioning, design, technology and organic growth to build digital assets that continue creating value over time.
            </p>
            <p className="text-base sm:text-xl text-[#172B3A] font-semibold leading-relaxed">
              We build owned attention: a brand people respect, an ultra-fast site that converts, content that answers genuine commercial queries, and organic search equity that compounds permanently.
            </p>
          </div>
        </div>
      </section>

      {/* Working Principles */}
      <section className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] mb-28 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-mono font-bold tracking-[0.2em] text-[#7899B0] uppercase mb-3">
            HOW WE WORK
          </h2>
          <p className="text-2xl sm:text-4xl font-display font-extrabold text-[#172B3A]">
            Strategy first. Design that earns trust. Systems that compound.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl bg-white border border-[#7899B0]/25 p-8 flex flex-col justify-between hover:border-[#172B3A] transition-colors shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#DCE6EB] flex items-center justify-center text-sm font-mono font-bold text-[#172B3A] mb-8">
                01
              </div>
              <h3 className="text-2xl font-display font-bold text-[#172B3A] mb-4">
                Strategy First
              </h3>
              <p className="text-[#30383D] text-sm md:text-base leading-relaxed">
                We don’t guess. We study your market, your competitors, and what people actually search for, so we know where demand already exists. Then we set your positioning, the one idea that makes you different.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#7899B0]/20 text-xs font-mono text-[#7899B0]">
              Pre-agreed qualified lead definitions
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-[#7899B0]/25 p-8 flex flex-col justify-between hover:border-[#172B3A] transition-colors shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#DCE6EB] flex items-center justify-center text-sm font-mono font-bold text-[#172B3A] mb-8">
                02
              </div>
              <h3 className="text-2xl font-display font-bold text-[#172B3A] mb-4">
                Design Matters
              </h3>
              <p className="text-[#30383D] text-sm md:text-base leading-relaxed">
                People judge credibility in seconds, before reading a word. We build premium visual identities and websites that signal you are careful and capable: calm for healthcare, aspirational for property, sharp for industry, bold for film.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#7899B0]/20 text-xs font-mono text-[#7899B0]">
              Sector-specific cognitive trust
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-[#7899B0]/25 p-8 flex flex-col justify-between hover:border-[#172B3A] transition-colors shadow-sm">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#DCE6EB] flex items-center justify-center text-sm font-mono font-bold text-[#172B3A] mb-8">
                03
              </div>
              <h3 className="text-2xl font-display font-bold text-[#172B3A] mb-4">
                Systems Over Tactics
              </h3>
              <p className="text-[#30383D] text-sm md:text-base leading-relaxed">
                A viral post is a tactic. A search presence, a content library, and a fast, well-tracked website are systems. We set up tracking so you always see what is working, cut what isn’t, and put more into what is.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#7899B0]/20 text-xs font-mono text-[#7899B0]">
              Closed-loop performance attribution
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
        <div className="rounded-3xl border border-[#7899B0]/30 bg-[#172B3A] text-white p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D3A56C] font-bold">
              DIRECT CLIENT ENGAGEMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white">
              LET’S BUILD SOMETHING THAT LASTS.
            </h2>
            <p className="text-[#DCE6EB] max-w-xl text-base sm:text-lg">
              Tell us what you’re building, where you want to go and what you need to achieve.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#7899B0] text-[#172B3A] hover:bg-white text-sm font-mono font-bold tracking-wider uppercase transition-all shadow-md shrink-0"
          >
            START A PROJECT <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
