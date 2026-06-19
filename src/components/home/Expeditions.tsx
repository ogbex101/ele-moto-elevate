import { motion } from "motion/react";
import { em } from "./data";
import { SectionEyebrow } from "./SectionEyebrow";

export function Expeditions() {
  return (
    <section id="expeditions" className="relative px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionEyebrow number="03" label="Featured Expeditions" />
            <h2 className="mt-6 font-display text-5xl font-bold uppercase leading-[1.02] tracking-tight text-ivory lg:text-6xl">
              Masterpiece <span className="text-primary italic">journeys</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              From the high páramos of Los Nevados to the stone streets of Barichara — every route is
              designed by riders, for riders. Photography, pricing and details are taken straight from our
              live tour catalog.
            </p>
          </div>
          <a
            href="https://elephantmoto.com/motorcycle-tours/"
            className="hidden md:inline-flex items-center gap-3 self-end border-b border-primary pb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-primary"
          >
            All expeditions →
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {em.tours.slice(0, 3).map((t, i) => (
            <motion.a
              key={t.slug}
              href={t.url}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative flex flex-col overflow-hidden bg-card"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                  <span className="bg-ink/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary backdrop-blur-md">
                    {t.days > 0 ? `${t.days} days` : "Bespoke"}
                  </span>
                  <span className="bg-ivory/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-ivory backdrop-blur-md">
                    {t.region}
                  </span>
                </div>
                <div className="absolute inset-x-5 bottom-5">
                  <h3 className="font-display text-2xl font-bold uppercase leading-tight text-ivory">
                    {t.name}
                  </h3>
                  <p className="mt-2 text-sm text-ivory/70">{t.subtitle}</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-border/60 px-5 py-5">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {t.difficulty}
                  </span>
                  <span className="font-display text-lg font-semibold text-ivory">{t.priceLabel}</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary transition-transform group-hover:translate-x-1">
                  Details →
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {em.tours.slice(3).map((t, i) => (
            <motion.a
              key={t.slug}
              href={t.url}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative flex min-h-[280px] items-end overflow-hidden bg-card"
            >
              <img
                src={t.image}
                alt={t.name}
                className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-[1200ms] group-hover:scale-110 group-hover:opacity-80"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
              <div className="relative z-10 max-w-md p-10">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                  {t.region} • {t.difficulty}
                </span>
                <h3 className="mt-3 font-display text-3xl font-bold uppercase text-ivory">{t.name}</h3>
                <p className="mt-3 text-sm text-ivory/75">{t.subtitle}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                  {t.priceLabel} <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}