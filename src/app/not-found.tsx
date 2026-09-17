import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="relative z-10">
        <h1 className="text-[8rem] md:text-[12rem] font-serif leading-none mb-4 opacity-10">404</h1>
        <h2 className="text-3xl md:text-5xl font-serif mb-6">Page Not Found</h2>
        <p className="text-foreground/60 text-lg max-w-md mx-auto mb-12">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        
        <Link 
          href="/"
          className="inline-flex items-center gap-2 border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all"
        >
          <ArrowLeft size={18} /> BACK TO HOME
        </Link>
      </div>
    </main>
  );
}
