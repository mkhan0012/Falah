import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Vyoma Media",
  description: "Privacy Policy and data handling practices for Vyoma Media in Hyderabad, India.",
  alternates: {
    canonical: "https://vyomamedia.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-cloud-white text-deep-atmosphere min-h-screen pt-36 md:pt-44 pb-32 selection:bg-sky-slate selection:text-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-4xl relative z-10">
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 uppercase text-deep-atmosphere">Privacy Policy</h1>
        <p className="font-mono text-xs tracking-widest text-sky-slate mb-16 uppercase font-semibold">LAST UPDATED: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

        <div className="space-y-10 text-sm sm:text-base text-graphite/80 leading-relaxed">
          
          <section className="space-y-4 rounded-3xl bg-white border border-mist-blue p-8 sm:p-10 shadow-xs">
            <h2 className="text-xl font-display font-bold uppercase text-deep-atmosphere">1. Introduction</h2>
            <p>
              At Vyoma Media (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we are committed to safeguarding your privacy. This Privacy Policy details our practices concerning the collection, storage, and protection of information when you interact with our website <strong>vyomamedia.com</strong> and engage our branding, web engineering, and organic growth services.
            </p>
          </section>

          <section className="space-y-4 rounded-3xl bg-white border border-mist-blue p-8 sm:p-10 shadow-xs">
            <h2 className="text-xl font-display font-bold uppercase text-deep-atmosphere">2. Information We Collect</h2>
            <p>We collect information you explicitly provide when engaging with our agency, as well as standard technical diagnostic data:</p>
            <ul className="list-disc pl-6 space-y-2 text-graphite/80">
              <li><strong className="text-deep-atmosphere">Direct Information:</strong> Contact details (full name, corporate email address, telephone/WhatsApp number, company name, website URL, and project brief requirements) submitted through our RFP or contact forms.</li>
              <li><strong className="text-deep-atmosphere">Diagnostic & Technical Data:</strong> Anonymized metrics including browser specifications, screen resolutions, and referral paths to optimize site performance and latency.</li>
            </ul>
          </section>

          <section className="space-y-4 rounded-3xl bg-white border border-mist-blue p-8 sm:p-10 shadow-xs">
            <h2 className="text-xl font-display font-bold uppercase text-deep-atmosphere">3. Use of Your Information</h2>
            <p>Information collected via this Site is utilized solely for authentic business purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-graphite/80">
              <li>Reviewing project inquiries and delivering bespoke proposals.</li>
              <li>Executing contracted strategy, web development, and search optimization services.</li>
              <li>Preventing malicious bot traffic, spam submissions, or unauthorized system access.</li>
            </ul>
          </section>

          <section className="space-y-4 rounded-3xl bg-white border border-mist-blue p-8 sm:p-10 shadow-xs">
            <h2 className="text-xl font-display font-bold uppercase text-deep-atmosphere">4. Cookies & Privacy Governance</h2>
            <p>
              We utilize privacy-preserving cookies solely for session functionality and aggregated traffic analysis. You maintain full granular control over cookie permissions via our Cookie Preferences controller.
            </p>
          </section>

          <section className="space-y-4 rounded-3xl bg-white border border-mist-blue p-8 sm:p-10 shadow-xs">
            <h2 className="text-xl font-display font-bold uppercase text-deep-atmosphere">5. Data Security & Storage</h2>
            <p>
              We enforce administrative, technical, and physical safeguards designed to secure personal data. Submissions are encrypted during transit and stored in compliance with applicable Indian and international privacy standards.
            </p>
          </section>

          <section className="space-y-4 rounded-3xl bg-white border border-mist-blue p-8 sm:p-10 shadow-xs">
            <h2 className="text-xl font-display font-bold uppercase text-deep-atmosphere">6. Contact Privacy Team</h2>
            <p>
              For data protection requests or questions regarding this Privacy Policy:
            </p>
            <div className="font-mono text-xs bg-cloud-white rounded-2xl p-6 border border-mist-blue mt-4 space-y-2">
              <p className="text-deep-atmosphere font-bold text-sm">Vyoma Media — Data Governance</p>
              <p>Email: <a href="mailto:privacy@vyomamedia.com" className="text-sky-slate hover:underline">privacy@vyomamedia.com</a></p>
              <p>Location: Banjara Hills, Hyderabad, Telangana 500034, India</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
