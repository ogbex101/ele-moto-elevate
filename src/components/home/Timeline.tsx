import { motion } from "motion/react";
import { em } from "./data";
import { SectionEyebrow } from "./SectionEyebrow";

export function Timeline() {
  return (
    <section className="relative overflow-hidden bg-card/40 px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-[1400px]">
        <SectionEyebrow number="09" label="Why Elephant Moto" />
        <h2 className="mt-6 max-w-3xl font-display text-5xl font-bold uppercase leading-[1.02] tracking-tight text-ivory lg:text-6xl">
          A decade of leading
          <br />
          <span className="text-primary italic">Colombian expeditions.</span>
        </h2>

        <div className="mt-16 relative">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-border md:block" aria-hidden />
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-6">
            {em.timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative"
              >
                <div className="hidden md:block absolute -top-1 left-0 h-3 w-3 rotate-45 border border-primary bg-background" />
                <div className="md:pt-10">
                  <div className="font-display text-xs font-bold uppercase tracking-[0.3em] text-primary">
                    {t.year}
                  </div>
                  <h4 className="mt-2 font-display text-lg font-bold leading-tight text-ivory">
                    {t.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div id="training" className="mt-24 grid gap-8 border-t border-border pt-12 md:grid-cols-3">
          {[
            {
              h: "Local expertise",
              b: "Born in Bogotá, raised in the Andes. Every guide on staff has ridden the routes more times than they can count.",
            },
            {
              h: "Safety first",
              b: "Support vehicle on every expedition. Daily safety briefings. BMW Motorrad-grade riding protocols.",
            },
            {
              h: "International recognition",
              b: "Selected by BMW Motorrad Colombia to deliver the official R 1300 GS Travel Experience.",
            },
          ].map((p) => (
            <div key={p.h}>
              <h4 className="font-display text-xl font-bold text-ivory">{p.h}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}