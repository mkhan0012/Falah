import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | FALAH BRANDHOUSE",
  description: "Privacy Policy and data handling practices for FALAH BRANDHOUSE.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-ivory text-graphite min-h-screen pt-40 pb-32 selection:bg-vermilion selection:text-ivory">
      <div className="container mx-auto px-6 md:px-[5vw] max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-primary font-bold mb-4 uppercase">Privacy Policy</h1>
        <p className="font-mono text-sm tracking-widest text-slate mb-16 uppercase">LAST UPDATED: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

        <div className="prose prose-lg prose-slate font-primary space-y-8 text-lg">
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold uppercase font-primary mt-12 mb-4">1. Introduction</h2>
            <p>
              At FALAH BRANDHOUSE ("we", "our", or "us"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>falahbrandhouse.com</strong> and use our services.
            </p>
            <p className="text-sm bg-warm-grey/20 p-4 border-l-4 border-vermilion">
              <em>Note: This policy should be reviewed by a legal advisor before finalizing.</em>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold uppercase font-primary mt-12 mb-4">2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, telephone number, and company details that you voluntarily give to us when choosing to submit forms (e.g., Contact Form, Request a Proposal).</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold uppercase font-primary mt-12 mb-4">3. Use of Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your project inquiries and requests for proposals.</li>
              <li>Deliver targeted advertising, newsletters, and other information regarding our services to you (if you have opted in).</li>
              <li>Improve website analytics and track usage to enhance our user experience.</li>
              <li>Protect against unauthorized access, spam, or malicious activity.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold uppercase font-primary mt-12 mb-4">4. Cookies and Web Beacons</h2>
            <p>
              We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience. When you access the Site, your personal information is not collected through the use of tracking technology without your explicit consent via our cookie banner.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold uppercase font-primary mt-12 mb-4">5. Third-Party Services</h2>
            <p>
              We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, customer service, and marketing assistance.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold uppercase font-primary mt-12 mb-4">6. Data Security and Retention</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold uppercase font-primary mt-12 mb-4">7. Your Rights</h2>
            <p>
              Depending on your location, you may have the right to request access to the personal data we hold about you, to request that we correct any inaccuracies, or to request deletion of your personal data.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold uppercase font-primary mt-12 mb-4">8. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="font-mono bg-white p-6 border border-warm-grey mt-4">
              <p className="mb-2"><strong>FALAH BRANDHOUSE</strong></p>
              <p>Email: <a href="mailto:hello@falahbrandhouse.com" className="text-vermilion hover:underline">hello@falahbrandhouse.com</a></p>
              <p className="mt-2 text-xs text-slate">[Placeholder Contact Address - Please update]</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
