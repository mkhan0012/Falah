import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ivory pt-24 pb-12 border-t border-warm-grey text-graphite">
      <div className="container mx-auto px-6 md:px-[5vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="text-3xl font-primary font-bold tracking-tight block mb-2">
              FALAH BRANDHOUSE
            </Link>
            <p className="text-slate text-xs font-mono tracking-widest uppercase mb-6">
              Brand & Digital Growth Studio
            </p>
            <address className="not-italic text-sm font-mono text-slate leading-relaxed">
              HYDERABAD · INDIA
            </address>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-mono text-slate mb-6 font-bold">Menu</h4>
            <ul className="flex flex-col gap-3 text-sm font-mono font-medium">
              <li><Link href="/work" className="hover:text-vermilion transition-colors">WORK</Link></li>
              <li><Link href="/services" className="hover:text-vermilion transition-colors">SERVICES</Link></li>
              <li><Link href="/personal-branding" className="hover:text-vermilion transition-colors">PERSONAL BRANDING</Link></li>
              <li><Link href="/about" className="hover:text-vermilion transition-colors">ABOUT</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-mono text-slate mb-6 font-bold">Connect</h4>
            <ul className="flex flex-col gap-3 text-sm font-mono font-medium">
              <li><Link href="/insights" className="hover:text-vermilion transition-colors">INSIGHTS</Link></li>
              <li><Link href="/contact" className="hover:text-vermilion transition-colors">CONTACT</Link></li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-vermilion transition-colors group">
                  INSTAGRAM <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-vermilion transition-colors group">
                  LINKEDIN <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-warm-grey text-xs font-mono text-slate uppercase">
          <p>&copy; {currentYear} FALAH BRANDHOUSE</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-graphite transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-graphite transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}