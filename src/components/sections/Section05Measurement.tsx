"use client";
export default function Section05Measurement() {
  const metrics = [
    { label: "GOOGLE VISIBILITY", status: "Tracking" },
    { label: "WEBSITE TRAFFIC", status: "Tracking" },
    { label: "WHATSAPP ENQUIRIES", status: "Tracking" },
    { label: "QUALIFIED LEADS", status: "Tracking" },
    { label: "B2B ENQUIRIES", status: "Tracking" },
    { label: "REPEAT CUSTOMERS", status: "Tracking" },
  ];

  return (
    <section className="py-24 bg-charcoal text-[#F4F1EA]">
      <div className="container mx-auto px-6 md:px-[5vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-primary uppercase tracking-tight font-bold mb-6">
              <span className="block">No fake numbers.</span>
              <span className="block text-vermilion mt-2">Just real measurement.</span>
            </h2>
            <p className="text-xl text-[#F4F1EA]/70 font-primary leading-relaxed mb-8 max-w-lg">
              We&apos;re building the system first, then measuring what changes. No vanity metrics or fabricated case studies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {metrics.map((metric, i) => (
              <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col justify-between group hover:border-vermilion/50 transition-colors">
                <h3 className="font-mono text-sm tracking-widest text-[#F4F1EA]/60 uppercase mb-8 group-hover:text-[#F4F1EA] transition-colors">{metric.label}</h3>
                <div className="flex items-center gap-3">
                  <div className="text-xl font-bold font-primary text-[#F4F1EA]/40">Baseline</div>
                  <div className="flex-1 h-[1px] bg-white/10"></div>
                  <div className="text-xl font-bold font-primary text-vermilion">{metric.status}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
