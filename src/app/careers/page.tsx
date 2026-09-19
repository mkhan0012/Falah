import { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | FALAH BRANDHOUSE",
  description: "Build with Falah. We operate across Brand, Design, Technology, and Growth.",
};

export default function CareersPage() {
  return (
    <>
      <main className="min-h-screen bg-ivory pt-40 pb-24 text-graphite">
        <div className="container mx-auto px-6 md:px-[5vw]">
          
          <div className="mb-24 md:mb-32">
            <h1 className="text-6xl md:text-[8vw] leading-[0.9] font-primary font-bold tracking-tight text-graphite mb-12 uppercase">
              BUILD WITH <span className="text-slate">FALAH.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-warm-grey pt-12">
              <div className="md:col-span-8 lg:col-span-6">
                <p className="text-2xl md:text-3xl text-slate font-primary leading-relaxed font-medium mb-8">
                  FALAH operates across Brand, Design, Technology, and Growth. We're building premium digital presence systems for ambitious businesses.
                </p>
                <p className="text-xl font-primary text-graphite">
                  We're always interested in meeting exceptional people who care deeply about craft and systems.
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-warm-grey pt-24 mb-32 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            <div>
              <h2 className="text-3xl md:text-5xl font-primary font-bold mb-8 tracking-tight uppercase text-slate">Open Roles</h2>
              <div className="border border-warm-grey p-12 bg-white text-center">
                <p className="text-lg font-mono text-slate uppercase tracking-widest mb-6">No active openings right now</p>
                <p className="font-primary text-xl text-graphite mb-12">But we review every profile sent to us.</p>
                <Link 
                  href="mailto:careers@falahbrandhouse.com"
                  className="inline-flex items-center gap-2 border border-graphite bg-transparent text-graphite px-8 py-4 text-sm font-mono font-bold uppercase tracking-wider hover:bg-graphite hover:text-ivory transition-colors group"
                >
                  SEND YOUR PROFILE <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl font-primary font-bold mb-8 tracking-tight uppercase">Who We Look For</h2>
              <ul className="flex flex-col gap-8 text-lg font-primary text-graphite font-bold">
                <li className="flex gap-6 border-b border-warm-grey pb-6">
                  <div className="w-2 h-2 bg-vermilion rounded-full mt-2 shrink-0" />
                  <div>
                    <h3 className="text-xl mb-2">Designers</h3>
                    <p className="text-base text-slate font-normal">Obsessed with typography, grids, and premium aesthetics.</p>
                  </div>
                </li>
                <li className="flex gap-6 border-b border-warm-grey pb-6">
                  <div className="w-2 h-2 bg-vermilion rounded-full mt-2 shrink-0" />
                  <div>
                    <h3 className="text-xl mb-2">Engineers</h3>
                    <p className="text-base text-slate font-normal">Focused on performance, animations (GSAP), and scalable React systems.</p>
                  </div>
                </li>
                <li className="flex gap-6 border-b border-warm-grey pb-6">
                  <div className="w-2 h-2 bg-vermilion rounded-full mt-2 shrink-0" />
                  <div>
                    <h3 className="text-xl mb-2">Growth Specialists</h3>
                    <p className="text-base text-slate font-normal">Data-driven thinkers specializing in SEO and digital visibility.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </main>
          </>
  );
}

