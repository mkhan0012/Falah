import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";

interface CaseStudyNavProps {
  nextProjectSlug: string;
  nextProjectName: string;
}

export default function CaseStudyNav({ nextProjectSlug, nextProjectName }: CaseStudyNavProps) {
  return (
    <section className="bg-cloud-white border-t border-mist-blue relative overflow-hidden py-24 md:py-36">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
        <div className="rounded-3xl bg-white border border-mist-blue shadow-xs p-8 sm:p-14 lg:p-20 text-center flex flex-col items-center relative overflow-hidden group hover:border-sky-slate/40 transition-all duration-500">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cloud-white border border-sky-slate/30 text-[11px] font-mono text-sky-slate mb-8 uppercase tracking-widest font-semibold">
            <Sparkles size={12} />
            <span>CONTINUE EXPLORING // CASE STUDY PIPELINE</span>
          </div>

          <Link 
            href={`/work/${nextProjectSlug}`}
            className="flex flex-col items-center gap-4 group/link"
          >
            <span className="text-xs font-mono font-medium tracking-widest uppercase text-graphite/60 group-hover/link:text-sky-slate transition-colors">
              NEXT CASE STUDY ↗
            </span>
            <h3 className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-deep-atmosphere group-hover/link:text-sky-slate transition-colors uppercase">
              {nextProjectName}
            </h3>
          </Link>

          {/* Quick Action Navigation */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-12 pt-10 border-t border-mist-blue w-full max-w-xl">
            <Link 
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-cloud-white border border-mist-blue font-mono text-xs text-graphite hover:text-deep-atmosphere hover:border-sky-slate/50 transition-all uppercase tracking-wider"
            >
              <ArrowLeft size={14} /> Back to All Work
            </Link>

            <Link 
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-deep-atmosphere text-white font-semibold font-mono text-xs hover:bg-sky-slate transition-all uppercase shadow-md tracking-wider"
            >
              <span>Build Your System</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
