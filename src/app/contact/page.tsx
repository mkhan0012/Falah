"use client";

import { useState, Suspense } from "react";
import { submitContact } from "../actions/submitContact";
import { ArrowRight, ArrowDown, Phone, Mail, MessageSquare, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import clsx from "clsx";
import { siteConfig } from "@/config/site";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initialFormData = {
    name: "",
    email: "",
    company: "",
    website: "",
    phone: "",
    needs: [] as string[],
    budget: "",
    timeline: "",
    message: "",
    honeypot: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const needsOptions = [
    "Brand Positioning & Identity",
    "High-Converting Web System",
    "Organic Search & Technical SEO",
    "Generative Engine Optimization (GEO)",
    "Audience Research & Modeling",
    "Multilingual SEO (TE, HI, UR, EN)",
    "Founder / Doctor Personal Brand",
    "Other Commercial Growth Scope",
  ];

  const budgetOptions = ["Under ₹1.5L", "₹1.5L - ₹3.5L", "₹3.5L - ₹7.5L", "₹7.5L+"];

  const toggleNeed = (need: string) => {
    setFormData((prev) => ({
      ...prev,
      needs: prev.needs.includes(need)
        ? prev.needs.filter((n) => n !== need)
        : [...prev.needs, need],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const result = await submitContact(formData);

    if (result.error) {
      setError(result.error);
      setIsSubmitting(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setIsSuccess(true);
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-3xl bg-white border border-[#7899B0]/25 p-8 sm:p-12 text-center animate-in fade-in zoom-in-95 duration-500 space-y-6 shadow-sm">
        <div className="w-16 h-16 bg-[#172B3A] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 size={32} className="text-[#7899B0]" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DCE6EB] border border-[#7899B0]/30 text-[#172B3A] font-mono text-xs font-bold uppercase tracking-wider">
          <Sparkles size={12} className="text-[#D3A56C]" />
          BRIEF TRANSMITTED
        </div>

        <h3 className="text-3xl sm:text-4xl font-display font-extrabold uppercase tracking-tight text-[#172B3A]">
          Brief Received.
        </h3>

        <p className="text-[#30383D] font-sans text-base sm:text-lg max-w-md mx-auto leading-relaxed">
          Thank you for reaching out to VYOMA Media. Our senior strategists review all briefs manually. We will respond with an honest initial scoping review within <strong className="text-[#172B3A]">24 hours</strong>.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => {
              setIsSuccess(false);
              setFormData(initialFormData);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#7899B0]/30 text-xs font-mono font-bold uppercase hover:bg-[#F1F3F1] text-[#172B3A] transition-colors"
          >
            Submit Another Brief
          </button>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
              "Hi Vyoma Media, I just submitted a project brief online."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#172B3A] text-white text-xs font-mono font-bold uppercase hover:bg-[#20394c] transition-all"
          >
            <span>WhatsApp Follow-up ↗</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white border border-[#7899B0]/25 p-6 sm:p-10 md:p-12 space-y-6 shadow-sm relative overflow-hidden"
    >
      {/* Honeypot Spam Protection Field */}
      <input
        type="text"
        name="honeypot"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
      />

      {error && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-mono">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-xs font-mono font-bold tracking-wider text-[#30383D] uppercase"
          >
            Your Name <span className="text-[#172B3A]">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            placeholder="e.g. Vikram Rao"
            className="w-full bg-[#F1F3F1]/60 border border-[#7899B0]/25 rounded-xl px-4 py-3 font-sans text-sm text-[#172B3A] focus:outline-none focus:border-[#172B3A] transition-colors"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-xs font-mono font-bold tracking-wider text-[#30383D] uppercase"
          >
            Work Email <span className="text-[#172B3A]">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="vikram@company.com"
            className="w-full bg-[#F1F3F1]/60 border border-[#7899B0]/25 rounded-xl px-4 py-3 font-sans text-sm text-[#172B3A] focus:outline-none focus:border-[#172B3A] transition-colors"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="text-xs font-mono font-bold tracking-wider text-[#30383D] uppercase"
          >
            Phone / WhatsApp
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="+91 98765 43210"
            className="w-full bg-[#F1F3F1]/60 border border-[#7899B0]/25 rounded-xl px-4 py-3 font-sans text-sm text-[#172B3A] focus:outline-none focus:border-[#172B3A] transition-colors"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="company"
            className="text-xs font-mono font-bold tracking-wider text-[#30383D] uppercase"
          >
            Company / Organization
          </label>
          <input
            type="text"
            id="company"
            placeholder="e.g. Bharat Hydraulics Ltd."
            className="w-full bg-[#F1F3F1]/60 border border-[#7899B0]/25 rounded-xl px-4 py-3 font-sans text-sm text-[#172B3A] focus:outline-none focus:border-[#172B3A] transition-colors"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label
            htmlFor="website"
            className="text-xs font-mono font-bold tracking-wider text-[#30383D] uppercase"
          >
            Current Website URL (if any)
          </label>
          <input
            type="url"
            id="website"
            placeholder="https://company.com"
            className="w-full bg-[#F1F3F1]/60 border border-[#7899B0]/25 rounded-xl px-4 py-3 font-sans text-sm text-[#172B3A] focus:outline-none focus:border-[#172B3A] transition-colors"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-3 pt-2">
        <label className="text-xs font-mono font-bold tracking-wider text-[#172B3A] uppercase">
          Capabilities Required <span className="text-[#172B3A]">*</span>
        </label>
        <div className="flex flex-wrap gap-2 sm:gap-2.5">
          {needsOptions.map((need) => (
            <button
              key={need}
              type="button"
              onClick={() => toggleNeed(need)}
              className={clsx(
                "px-3.5 py-2 rounded-xl font-mono text-xs uppercase tracking-wider border transition-all",
                formData.needs.includes(need)
                  ? "border-[#172B3A] bg-[#172B3A] text-white font-bold shadow-sm"
                  : "border-[#7899B0]/25 bg-[#F1F3F1]/60 text-[#30383D] hover:border-[#172B3A] hover:text-[#172B3A]"
              )}
            >
              {need}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3 pt-2">
        <label className="text-xs font-mono font-bold tracking-wider text-[#172B3A] uppercase">
          Target Investment Range
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {budgetOptions.map((budget) => (
            <button
              key={budget}
              type="button"
              onClick={() => setFormData({ ...formData, budget })}
              className={clsx(
                "px-3 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider border transition-all text-center",
                formData.budget === budget
                  ? "border-[#172B3A] bg-[#172B3A] text-white font-bold shadow-sm"
                  : "border-[#7899B0]/25 bg-[#F1F3F1]/60 text-[#30383D] hover:border-[#172B3A] hover:text-[#172B3A]"
              )}
            >
              {budget}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2 pt-2">
        <label
          htmlFor="timeline"
          className="text-xs font-mono font-bold tracking-wider text-[#30383D] uppercase"
        >
          Target Timeline
        </label>
        <input
          type="text"
          id="timeline"
          placeholder="e.g. Within 4 weeks, Q4 launch, Flexible"
          className="w-full bg-[#F1F3F1]/60 border border-[#7899B0]/25 rounded-xl px-4 py-3 font-sans text-sm text-[#172B3A] focus:outline-none focus:border-[#172B3A] transition-colors"
          value={formData.timeline}
          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
        />
      </div>

      <div className="space-y-2 pt-2">
        <label
          htmlFor="message"
          className="text-xs font-mono font-bold tracking-wider text-[#172B3A] uppercase"
        >
          Project Brief / Primary Challenge <span className="text-[#172B3A]">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="Tell us what you're building, where you want to go and what you need to achieve..."
          className="w-full bg-[#F1F3F1]/60 border border-[#7899B0]/25 rounded-xl p-4 font-sans text-sm text-[#172B3A] focus:outline-none focus:border-[#172B3A] transition-colors resize-none"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting || formData.needs.length === 0}
          className="w-full inline-flex items-center justify-center gap-2 bg-[#172B3A] text-white px-8 py-4 rounded-full text-xs md:text-sm font-mono font-bold uppercase tracking-wider hover:bg-[#20394c] transition-all shadow-md disabled:opacity-40 disabled:cursor-not-allowed group"
        >
          {isSubmitting ? "TRANSMITTING BRIEF..." : "START A PROJECT"}
          <ArrowRight
            size={16}
            className="text-[#7899B0] group-hover:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </form>
  );
}

export default function ContactPage() {
  const steps = [
    { num: "01", title: "YOU SUBMIT THE BRIEF", desc: "Share specifications, commercial objectives, and target audience." },
    { num: "02", title: "WE STUDY SEARCH DEMAND", desc: "We uncover what buyers actually search for and where organic demand exists." },
    { num: "03", title: "STRATEGIC SCOPING CALL", desc: "A focused 30-minute scoping discussion with our senior studio leads." },
    { num: "04", title: "COMMERCIAL PROPOSAL", desc: "Clear positioning blueprint, milestones, and pre-agreed qualified enquiry metrics." },
    { num: "05", title: "OWNED ENGINE DEPLOYMENT", desc: "Strategy First → Design Matters → Systems that Compound." },
  ];

  return (
    <main className="bg-[#F1F3F1] text-[#30383D] min-h-screen pt-36 md:pt-44 pb-32 selection:bg-[#7899B0] selection:text-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-5 sm:px-6 md:px-12 max-w-[1360px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Context & Steps */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#7899B0]/30 text-xs font-mono text-[#172B3A] mb-6 uppercase tracking-widest font-semibold shadow-sm">
                <Sparkles size={12} className="text-[#D3A56C]" />
                <span>HYDERABAD STUDIO CONTACT</span>
              </div>

              {/* Exact Main Heading & Supporting Copy from Section 12 */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-[0.98] mb-6 uppercase text-[#172B3A]">
                LET’S BUILD <br />
                <span className="text-[#7899B0]">SOMETHING THAT LASTS.</span>
              </h1>

              <p className="text-base sm:text-lg font-sans text-[#30383D] mb-10 max-w-sm leading-relaxed">
                Tell us what you’re building, where you want to go and what you need to achieve.
              </p>

              <div className="space-y-4 pt-6 border-t border-[#7899B0]/20">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#7899B0]/30 flex items-center justify-center text-[#172B3A] shadow-sm">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#7899B0] uppercase block font-medium">Studio Headquarters</span>
                    <span className="text-xs font-mono text-[#172B3A] font-semibold">{siteConfig.contact.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#7899B0]/30 flex items-center justify-center text-[#172B3A] shadow-sm">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#7899B0] uppercase block font-medium">Direct Studio Line</span>
                    <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="text-xs font-mono text-[#172B3A] hover:underline font-bold">
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#7899B0]/30 flex items-center justify-center text-[#172B3A] shadow-sm">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#7899B0] uppercase block font-medium">Direct Email</span>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-xs font-mono text-[#172B3A] hover:text-[#7899B0] font-semibold transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white border border-[#7899B0]/30 flex items-center justify-center text-[#172B3A] shadow-sm">
                    <MessageSquare size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-[#7899B0] uppercase block font-medium">WhatsApp Direct Line</span>
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
                        siteConfig.contact.whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#172B3A] hover:underline font-bold inline-flex items-center gap-1"
                    >
                      Chat with Strategy Lead ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 hidden lg:block pt-8 border-t border-[#7899B0]/20">
              <h3 className="text-xs font-mono font-bold tracking-widest text-[#172B3A] uppercase mb-6 flex items-center gap-2">
                WHAT HAPPENS NEXT? <ArrowDown size={14} className="text-[#7899B0]" />
              </h3>
              <div className="space-y-4">
                {steps.map((step) => (
                  <div key={step.num} className="border-l border-[#7899B0]/30 pl-4 hover:border-[#172B3A] transition-colors group">
                    <div className="text-[10px] font-mono font-bold text-[#172B3A] uppercase tracking-widest">
                      {step.num} · {step.title}
                    </div>
                    <p className="text-xs font-sans text-[#30383D] mt-0.5 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="h-96 rounded-3xl bg-white animate-pulse border border-[#7899B0]/20" />}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
