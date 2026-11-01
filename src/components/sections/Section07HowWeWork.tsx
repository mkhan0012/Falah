"use client";
export default function Section07HowWeWork() {
  const steps = [
    { num: "01", title: "UNDERSTAND", desc: "We learn how the business works, who its customers are and where opportunities are being lost." },
    { num: "02", title: "BUILD", desc: "We create the digital foundation." },
    { num: "03", title: "CONNECT", desc: "We connect discovery, content, enquiries and customer journeys." },
    { num: "04", title: "IMPROVE", desc: "We measure, learn and continuously improve." },
  ];

  return (
    <section className="py-32 bg-charcoal text-[#F4F1EA]">
      <div className="container mx-auto px-6 md:px-[5vw]">
        <div className="mb-24 md:text-center">
          <h2 className="text-4xl md:text-6xl font-primary uppercase tracking-tight font-bold mb-4">
            <span className="block">We start with the business.</span>
            <span className="block text-vermilion mt-2">Not the brief.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="group relative">
              <div className="text-6xl font-mono font-bold text-white/5 mb-6 group-hover:text-vermilion/20 transition-colors">{step.num}</div>
              <div className="h-[2px] w-full bg-white/10 mb-8 relative">
                <div className="absolute top-0 left-0 h-full w-0 bg-vermilion group-hover:w-full transition-all duration-500 ease-out"></div>
              </div>
              <h3 className="text-xl font-mono font-bold tracking-widest uppercase mb-4 text-[#F4F1EA] group-hover:text-vermilion transition-colors">{step.title}</h3>
              <p className="text-[#F4F1EA]/70 font-primary leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
