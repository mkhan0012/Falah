import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface CaseStudyNavProps {
  nextProjectSlug: string;
  nextProjectName: string;
}

export default function CaseStudyNav({ nextProjectSlug, nextProjectName }: CaseStudyNavProps) {
  return (
    <div className="bg-[#0a0a0a] text-ivory border-t border-graphite/30">
      <div className="container mx-auto px-6 md:px-[5vw] py-32 md:py-48 flex flex-col items-center text-center gap-16">
        
        <div className="flex flex-col items-center gap-8 w-full">
          <Link 
            href={`/work/${nextProjectSlug}`}
            className="group flex flex-col items-center gap-6"
          >
            <span className="text-xs font-mono tracking-widest uppercase text-ivory/50">NEXT PROJECT &rarr;</span>
            <span className="text-4xl md:text-6xl lg:text-8xl font-primary font-bold tracking-tight text-ivory group-hover:text-vermilion transition-colors flex items-center gap-4 uppercase">
              {nextProjectName}
            </span>
          </Link>

          <Link 
            href="/work"
            className="inline-flex items-center gap-2 font-mono text-sm font-bold text-ivory/60 hover:text-ivory transition-colors mt-12 uppercase group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> BACK TO ALL WORK
          </Link>
        </div>

      </div>
    </div>
  );
}
