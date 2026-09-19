import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | FALAH BRANDHOUSE",
  description: "Terms and conditions for using the FALAH BRANDHOUSE website and services.",
};

export default function TermsPage() {
  return (
    <main className="bg-ivory text-graphite min-h-screen pt-40 pb-32 selection:bg-vermilion selection:text-ivory">
      <div className="container mx-auto px-6 md:px-[5vw] max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-primary font-bold mb-4 uppercase">Terms of Service</h1>
        <p className="font-mono text-sm tracking-widest text-slate mb-16 uppercase">LAST UPDATED: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

        <div className="prose prose-lg prose-slate font-primary space-y-8 text-lg">
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold uppercase font-primary mt-12 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing our website at <strong>falahbrandhouse.com</strong>, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you disagree with any of these terms, you are prohibited from using or accessing this site.
            </p>
            <p className="text-sm bg-warm-grey/20 p-4 border-l-4 border-vermilion">
              <em>Note: This document should be reviewed by a legal advisor before finalizing.</em>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold uppercase font-primary mt-12 mb-4">2. Intellectual Property</h2>
            <p>
              The website and its original content, features, and functionality are owned by FALAH BRANDHOUSE and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. 
            </p>
            <p>
              Client case studies, logos, and specific project materials remain the property of their respective owners and are displayed in our portfolio with permission or in accordance with our client agreements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold uppercase font-primary mt-12 mb-4">3. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on FALAH BRANDHOUSE&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold uppercase font-primary mt-12 mb-4">4. Services and Proposals</h2>
            <p>
              Information provided on this website regarding our services is for general informational purposes. Submitting a contact form or a request for a proposal does not bind FALAH BRANDHOUSE to provide services until a formal contract or statement of work is agreed upon and signed by both parties.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold uppercase font-primary mt-12 mb-4">5. Disclaimer and Limitation of Liability</h2>
            <p>
              The materials on FALAH BRANDHOUSE&apos;s website are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
            </p>
            <p>
              In no event shall FALAH BRANDHOUSE or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold uppercase font-primary mt-12 mb-4">6. External Links</h2>
            <p>
              FALAH BRANDHOUSE has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by us of the site. Use of any such linked website is at the user&apos;s own risk.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold uppercase font-primary mt-12 mb-4">7. Revisions to Terms</h2>
            <p>
              We may revise these terms of service for our website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold uppercase font-primary mt-12 mb-4">8. Contact</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <div className="font-mono bg-white p-6 border border-warm-grey mt-4">
              <p className="mb-2"><strong>FALAH BRANDHOUSE</strong></p>
              <p>Email: <a href="mailto:hello@falahbrandhouse.com" className="text-vermilion hover:underline">hello@falahbrandhouse.com</a></p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
