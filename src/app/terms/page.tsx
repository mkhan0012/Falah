import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Vyoma Media",
  description: "Terms and conditions governing the use of Vyoma Media services and digital properties.",
  alternates: {
    canonical: "https://vyomamedia.com/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="bg-cloud-white text-deep-atmosphere min-h-screen pt-36 md:pt-44 pb-32 selection:bg-sky-slate selection:text-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-4xl relative z-10">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 uppercase text-deep-atmosphere">Terms of Service</h1>
        <p className="font-mono text-xs tracking-widest text-sky-slate mb-16 uppercase font-semibold">LAST UPDATED: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

        <div className="space-y-10 text-sm sm:text-base text-graphite/80 leading-relaxed">
          
          <section className="space-y-4 rounded-3xl bg-white border border-mist-blue p-8 sm:p-10 shadow-xs">
            <h2 className="text-xl font-display font-bold uppercase text-deep-atmosphere">1. Agreement to Terms</h2>
            <p>
              By accessing or using <strong>vyomamedia.com</strong>, you agree to be bound by these Terms of Service. If you do not agree with these terms, you are prohibited from using this website or engaging our proprietary tools.
            </p>
          </section>

          <section className="space-y-4 rounded-3xl bg-white border border-mist-blue p-8 sm:p-10 shadow-xs">
            <h2 className="text-xl font-display font-bold uppercase text-deep-atmosphere">2. Intellectual Property</h2>
            <p>
              All original visual identities, motion designs, web codebases, editorial copy, and proprietary frameworks created by Vyoma Media remain our intellectual property protected by copyright and international intellectual property laws.
            </p>
            <p>
              Client case studies, trademarks, and brand assets displayed on this site are property of their respective owners and showcased under client engagement agreements.
            </p>
          </section>

          <section className="space-y-4 rounded-3xl bg-white border border-mist-blue p-8 sm:p-10 shadow-xs">
            <h2 className="text-xl font-display font-bold uppercase text-deep-atmosphere">3. Services & Commercial Scopes</h2>
            <p>
              Submitting an inquiry, RFP form, or preliminary brief does not form a binding contract. Formal agency services commence only after the mutual execution of an official Statement of Work (SOW) outlining project milestones, deliverables, and commercial terms.
            </p>
          </section>

          <section className="space-y-4 rounded-3xl bg-white border border-mist-blue p-8 sm:p-10 shadow-xs">
            <h2 className="text-xl font-display font-bold uppercase text-deep-atmosphere">4. Limitation of Liability</h2>
            <p>
              Vyoma Media provides website content on an &apos;as is&apos; basis. While we maintain rigorous code and strategy standards, we disclaim liability for indirect damages, server downtime beyond our control, or external platform algorithm shifts.
            </p>
          </section>

          <section className="space-y-4 rounded-3xl bg-white border border-mist-blue p-8 sm:p-10 shadow-xs">
            <h2 className="text-xl font-display font-bold uppercase text-deep-atmosphere">5. Contact</h2>
            <p>
              For legal inquiries regarding these Terms:
            </p>
            <div className="font-mono text-xs bg-cloud-white rounded-2xl p-6 border border-mist-blue mt-4 space-y-2">
              <p className="text-deep-atmosphere font-bold text-sm">Vyoma Media</p>
              <p>Email: <a href="mailto:hello@vyomamedia.com" className="text-sky-slate hover:underline">hello@vyomamedia.com</a></p>
              <p>Location: Banjara Hills, Hyderabad, Telangana 500034, India</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
