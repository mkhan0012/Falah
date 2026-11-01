import { Metadata } from "next";
import { services } from "@/data/services";
import Link from "next/link";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Disciplines & Services | VYOMA Media",
  description:
    "Strategy, Design, Technology, and Growth — four integrated capabilities engineered into an owned commercial growth system in Hyderabad.",
  alternates: {
    canonical: "https://vyomamedia.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="pt-36 md:pt-44 pb-32 min-h-screen bg-[#F1F3F1] text-[#30383D] selection:bg-[#7899B0] selection:text-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono text-[#172B3A] mb-6 uppercase tracking-widest font-semibold shadow-sm">
          <Sparkles size={12} className="text-[#D3A56C]" />
          <span>FOUR INTEGRATED DISCIPLINES</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight mb-8 uppercase text-[#172B3A]">
          GROWTH ENGINES<span className="text-[#7899B0]">.</span>
        </h1>
        <p className="text-lg sm:text-2xl text-[#30383D] max-w-3xl font-sans leading-relaxed">
          Most businesses operate with disconnected freelancers, slow websites, and vanity marketing metrics that stop when the budget does. VYOMA delivers an integrated growth layer where brand positioning, design, and organic discoverability compound into lasting commercial value.
        </p>
      </div>

      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] space-y-10 relative z-10">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-3xl bg-white border border-[#7899B0]/25 p-8 sm:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start hover:border-[#172B3A] shadow-sm hover:shadow-[0_16px_40px_rgba(23,43,58,0.08)] transition-all"
          >
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="text-xs font-mono font-bold tracking-widest text-[#7899B0] mb-3 uppercase">
                  DISCIPLINE {service.id} · {service.category}
                </div>
                <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight mb-4 text-[#172B3A]">
                  {service.title}
                </h2>
                <p className="text-base sm:text-lg text-[#30383D] leading-relaxed font-sans mb-6">
                  {service.description}
                </p>
              </div>

              <div>
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#172B3A] hover:text-[#7899B0] transition-colors group"
                >
                  <span>EXPLORE {service.category} ARCHITECTURE</span>
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-2xl bg-[#DCE6EB]/40 p-6 sm:p-10 border border-[#7899B0]/20">
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase mb-6 text-[#172B3A]">
                DELIVERED CAPABILITIES
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm sm:text-base font-sans font-medium text-[#172B3A]"
                  >
                    <CheckCircle2 size={16} className="text-[#7899B0] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Closing Section CTA */}
      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] mt-24 relative z-10">
        <div className="rounded-3xl bg-[#172B3A] text-white p-8 sm:p-14 flex flex-col md:flex-row items-center justify-between gap-8 border border-[#7899B0]/30 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <span className="text-[10px] font-mono text-[#D3A56C] uppercase font-bold tracking-widest">
              ONE CONNECTED SYSTEM
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-bold">
              LET’S BUILD SOMETHING THAT LASTS.
            </h3>
            <p className="text-sm sm:text-base text-[#DCE6EB]">
              Tell us what you’re building, where you want to go and what you need to achieve.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#7899B0] hover:bg-white text-[#172B3A] text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-md shrink-0"
          >
            START A PROJECT <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </main>
  );
}
