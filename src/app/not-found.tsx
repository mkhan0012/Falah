import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 bg-cloud-white text-deep-atmosphere selection:bg-sky-slate selection:text-white pt-32 pb-24 relative overflow-hidden font-sans">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-slate/10 blur-[150px] rounded-full" />
      <div className="pointer-events-none absolute right-10 top-1/4 w-[350px] h-[350px] bg-mist-blue/40 blur-[140px] rounded-full" />

      <div className="max-w-3xl w-full relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-slate/30 text-xs font-mono text-sky-slate uppercase tracking-widest font-semibold shadow-xs">
          <Sparkles size={12} /> ERROR 404 // ROUTE NOT FOUND
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tight text-deep-atmosphere leading-[1.02] uppercase">
          PAGE NOT FOUND<span className="text-sky-slate">.</span>
        </h1>

        <p className="text-base sm:text-xl font-sans text-graphite/80 max-w-xl mx-auto leading-relaxed">
          The requested system route does not exist or may have been reorganized into our growth architecture.
        </p>
        
        {/* Quick Route Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 max-w-2xl mx-auto">
          <Link
            href="/"
            className="p-4 rounded-2xl bg-white border border-mist-blue hover:border-sky-slate/40 text-left transition-all group shadow-xs hover:shadow-md"
          >
            <div className="text-xs font-mono text-sky-slate font-semibold mb-1">01 // HOME</div>
            <div className="text-sm font-display font-bold text-deep-atmosphere group-hover:text-sky-slate flex items-center justify-between">
              Return Home <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/services"
            className="p-4 rounded-2xl bg-white border border-mist-blue hover:border-sky-slate/40 text-left transition-all group shadow-xs hover:shadow-md"
          >
            <div className="text-xs font-mono text-sky-slate font-semibold mb-1">02 // CAPABILITIES</div>
            <div className="text-sm font-display font-bold text-deep-atmosphere group-hover:text-sky-slate flex items-center justify-between">
              Explore Systems <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            href="/keyword-tool"
            className="p-4 rounded-2xl bg-white border border-mist-blue hover:border-sky-slate/40 text-left transition-all group shadow-xs hover:shadow-md"
          >
            <div className="text-xs font-mono text-sky-slate font-semibold mb-1">03 // FREE TOOL</div>
            <div className="text-sm font-display font-bold text-deep-atmosphere group-hover:text-sky-slate flex items-center justify-between">
              SEO Intelligence <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

        <div className="pt-6">
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-deep-atmosphere text-white px-8 py-4 rounded-full text-xs font-mono font-bold uppercase tracking-wider hover:bg-sky-slate transition-all shadow-md"
          >
            GET IN TOUCH WITH TEAM <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </main>
  );
}
