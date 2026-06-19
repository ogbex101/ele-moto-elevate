import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { em } from "./data";
import { SectionEyebrow } from "./SectionEyebrow";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-card/40 px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <SectionEyebrow number="11" label="FAQ" />
          <h2 className="mt-6 font-display text-5xl font-bold uppercase leading-[1.02] tracking-tight text-ivory lg:text-6xl">
            Questions
            <br />
            <span className="text-primary italic">for the path.</span>
          </h2>
          <p className="mt-6 max-w-sm text-muted-foreground">
            Everything else, we'd rather answer in person — book a call below.
          </p>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {em.faq.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-semibold text-ivory md:text-xl">
                    {f.q}
                  </span>
                  <span
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center border border-border text-primary transition-transform ${
                      isOpen ? "rotate-45 border-primary bg-primary/10" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-base leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: em.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </section>
  );
}