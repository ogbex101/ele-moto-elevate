import { motion } from "motion/react";
import { em } from "./data";
import { SectionEyebrow } from "./SectionEyebrow";

export function Stories() {
  return (
    <section id="stories" className="relative overflow-hidden px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionEyebrow number="06" label="Stories From Riders" />
            <h2 className="mt-6 max-w-2xl font-display text-5xl font-bold uppercase leading-[1.02] tracking-tight text-ivory lg:text-6xl">
              Forty-plus nations.
              <br />
              <span className="text-primary italic">One brotherhood.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Real riders. Real BMWs. Real Colombian roads.
          </p>
        </div>
      </div>

      <div className="mt-16 -mx-6 overflow-x-auto lg:-mx-10">
        <div className="flex gap-6 px-6 pb-4 lg:px-10" style={{ scrollSnapType: "x mandatory" }}>
          {em.stories.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="relative flex min-w-[88vw] max-w-[88vw] flex-shrink-0 flex-col overflow-hidden bg-card md:min-w-[520px] md:max-w-[520px]"
              style={{ scrollSnapAlign: "start" }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={s.image} alt={s.name} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between">
                  <div>
                    <div className="font-display text-xl font-bold uppercase text-ivory">{s.name}</div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-ivory/70">{s.origin}</div>
                  </div>
                  <span className="border border-primary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                    {s.bike}
                  </span>
                </div>
              </div>
              <blockquote className="border-l-2 border-primary px-7 py-8 text-lg italic leading-relaxed text-ivory/90">
                "{s.quote}"
              </blockquote>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}