import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-[5vw] bg-ivory text-graphite selection:bg-vermilion selection:text-ivory pt-24 pb-32">
      <div className="max-w-3xl w-full">
        <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate mb-8 uppercase">
          ERROR 404
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-primary font-bold tracking-tighter leading-[0.85] mb-8 uppercase">
          THIS PAGE <br className="hidden md:block" />
          MOVED SOMEWHERE ELSE.
        </h1>
        <p className="text-xl md:text-2xl font-primary text-slate mb-16 leading-relaxed max-w-xl mx-auto">
          The requested page could not be found. It might have been removed, renamed, or did not exist in the first place.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-graphite bg-graphite text-ivory px-8 py-5 text-sm font-mono font-bold uppercase tracking-wider hover:bg-transparent hover:text-graphite transition-colors group"
          >
            BACK HOME <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-graphite bg-transparent text-graphite px-8 py-5 text-sm font-mono font-bold uppercase tracking-wider hover:bg-graphite hover:text-ivory transition-colors group"
          >
            EXPLORE OUR WORK <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </main>
  );
}

