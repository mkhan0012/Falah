import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 md:py-40 bg-ivory text-graphite relative border-t border-warm-grey overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(var(--color-graphite) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="container mx-auto px-6 md:px-[5vw] relative z-10 flex flex-col items-center text-center">
        
        <div className="mb-16">
          <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate uppercase">
            HYDERABAD Â· INDIA
          </p>
        </div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-primary font-bold max-w-5xl mx-auto mb-16 leading-[0.9] tracking-tighter">
          BUILT FOR BRANDS<br />
          <span className="text-slate">WITH AMBITION.</span>
        </h2>
        
        <p className="text-xl md:text-3xl text-graphite/80 max-w-3xl mx-auto leading-relaxed font-primary mb-24">
          FALAH Brandhouse is a branding, digital and growth studio based in Hyderabad, India. 
          We work with businesses, founders and ambitious teams to build distinctive brands and stronger digital experiences.
        </p>
        
        <div className="inline-flex flex-wrap justify-center items-center gap-4 md:gap-8 text-xs md:text-sm font-mono font-bold tracking-widest text-vermilion border border-warm-grey px-8 py-6 bg-white uppercase">
          <span>STRATEGY</span>
          <span className="text-slate/40">Ã—</span>
          <span>DESIGN</span>
          <span className="text-slate/40">Ã—</span>
          <span>TECHNOLOGY</span>
          <span className="text-slate/40">Ã—</span>
          <span>GROWTH</span>
        </div>

        <div className="mt-32">
          <Link 
            href="/about"
            className="inline-flex items-center gap-2 border border-graphite px-8 py-5 text-sm font-mono font-bold uppercase text-graphite hover:bg-graphite hover:text-ivory transition-colors group tracking-wide"
          >
            LEARN MORE ABOUT US <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
