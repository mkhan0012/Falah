"use client";

import { useState } from "react";
import { submitContact } from "@/app/actions/submitContact";
import { Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

const SERVICE_OPTIONS = [
  "Brand Identity",
  "Next.js Web System",
  "Organic SEO & GEO",
  "Full Growth Architecture",
];

export default function QuickLeadQuery() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState("Next.js Web System");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setErrorMessage("Please provide your name and work email.");
      return;
    }

    setErrorMessage("");
    setIsPending(true);

    try {
      const result = await submitContact({
        name,
        email,
        phone: phone.trim() || undefined,
        needs: [selectedService],
        message: message.trim() || `Inquiry regarding ${selectedService}.`,
        honeypot,
        source: "Homepage Quick Lead Query",
      });

      if (result.success) {
        setIsSuccess(true);
      } else {
        setErrorMessage(result.error || "Submission failed. Please try again or email us directly.");
      }
    } catch {
      setErrorMessage("Network error. Please try again or reach out at info@vyomamedia.co.in.");
    } finally {
      setIsPending(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-3xl bg-[#02103D]/90 border border-[#FEB005]/40 p-8 sm:p-10 text-center space-y-4 max-w-xl mx-auto shadow-2xl backdrop-blur-xl">
        <div className="w-14 h-14 rounded-full bg-[#FEB005]/15 border border-[#FEB005]/40 flex items-center justify-center mx-auto text-[#FEB005]">
          <CheckCircle2 size={28} />
        </div>
        <h3 className="text-2xl font-display font-extrabold text-white">
          Lead Query Received
        </h3>
        <p className="text-sm text-[#DCE6EB] leading-relaxed font-sans max-w-md mx-auto">
          Thank you, <span className="font-semibold text-white">{name}</span>. Our partners will analyze your digital footprint and reach out via <span className="font-semibold text-[#FEB005]">{email}</span> within 24 business hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSuccess(false);
            setMessage("");
          }}
          className="text-xs font-mono text-[#7899B0] hover:text-white underline transition-colors pt-2 block mx-auto"
        >
          Submit another query
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-[#02103D]/80 border border-[#7899B0]/30 p-6 sm:p-10 text-left max-w-2xl mx-auto shadow-2xl backdrop-blur-xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FEB005]/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FEB005]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              DIRECT LEAD QUERY
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#7899B0]">
            RESPONSE WITHIN 24 HOURS
          </span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Honeypot anti-spam */}
          <input
            type="text"
            name="honeypot"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Service Selector Chips */}
          <div className="space-y-2">
            <label className="text-xs font-mono text-[#DCE6EB] uppercase tracking-wider block">
              What do you need to build?
            </label>
            <div className="flex flex-wrap gap-2">
              {SERVICE_OPTIONS.map((srv) => (
                <button
                  key={srv}
                  type="button"
                  onClick={() => setSelectedService(srv)}
                  className={`text-xs font-mono px-3.5 py-1.5 rounded-full border transition-all cursor-pointer ${
                    selectedService === srv
                      ? "bg-[#FEB005] text-[#02103D] font-bold border-[#FEB005] shadow-xs"
                      : "bg-white/5 border-white/10 text-[#DCE6EB] hover:border-white/30"
                  }`}
                >
                  {srv}
                </button>
              ))}
            </div>
          </div>

          {/* Inputs Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono text-gray-300 uppercase tracking-wider block">
                Your Name / Brand *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rahul Sharma"
                className="w-full bg-white/5 border border-white/15 focus:border-[#FEB005] focus:outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 font-sans transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-mono text-gray-300 uppercase tracking-wider block">
                Work Email *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="rahul@company.com"
                className="w-full bg-white/5 border border-white/15 focus:border-[#FEB005] focus:outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 font-sans transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-mono text-gray-300 uppercase tracking-wider block">
              Phone / WhatsApp (Optional)
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full bg-white/5 border border-white/15 focus:border-[#FEB005] focus:outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 font-sans transition-colors"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-[11px] font-mono text-gray-300 uppercase tracking-wider block">
              Project Scope / Notes
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your brand, current challenges, and targets..."
              className="w-full bg-white/5 border border-white/15 focus:border-[#FEB005] focus:outline-none rounded-xl p-4 text-sm text-white placeholder-gray-500 font-sans transition-colors resize-none"
            />
          </div>

          {errorMessage && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs font-mono text-red-300">
              <AlertCircle size={14} className="shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-[#FEB005] hover:bg-[#e09c04] disabled:opacity-60 text-[#02103D] font-mono font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all shadow-lg shadow-[#FEB005]/20 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
          >
            {isPending ? (
              <span>Transmitting Query...</span>
            ) : (
              <>
                <Send size={14} />
                <span>Submit Lead Query →</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
