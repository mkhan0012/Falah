import { faqs } from "@/data/faqs";
import { Plus } from "lucide-react";

export default function FaqSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-24 md:py-32 bg-background border-t border-foreground/5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-serif mb-16 text-center">FREQUENTLY ASKED</h2>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <details 
              key={index} 
              className="group border-b border-foreground/10 py-6 md:py-8 cursor-pointer"
            >
              <summary className="flex items-center justify-between gap-8 list-none pr-2 [&::-webkit-details-marker]:hidden">
                <h3 className="text-xl md:text-2xl font-serif text-foreground group-hover:text-foreground/80 transition-colors">
                  {faq.question}
                </h3>
                <div className="shrink-0 text-foreground/50 group-hover:text-accent transition-colors group-open:rotate-45 transform duration-300">
                  <Plus size={24} />
                </div>
              </summary>
              
              <div className="mt-6 pr-8">
                <p className="text-lg text-foreground/70 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
