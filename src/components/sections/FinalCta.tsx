import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function FinalCta() {
  return (
    <section className="py-32 md:py-48 bg-vermilion text-graphite text-center relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        <h2 className="text-[12vw] md:text-[8vw] leading-[0.9] font-primary font-bold tracking-tight mb-8">
          LET&apos;S BUILD<br />
          SOMETHING<br />
          DISTINCTIVE.
        </h2>
        
        <p className="text-xl md:text-2xl font-mono text-graphite/70 mb-12 uppercase tracking-widest font-medium">
          Tell us what you&apos;re building.
        </p>
        
        <MagneticButton>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-graphite text-ivory px-8 py-5 text-sm font-mono font-bold uppercase hover:bg-white hover:text-graphite transition-colors group"
          >
            START A PROJECT <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </MagneticButton>
      </div>
    </section>
  );
}
