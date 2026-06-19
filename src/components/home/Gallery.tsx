import { motion } from "motion/react";
import { useState } from "react";
import { em } from "./data";
import { SectionEyebrow } from "./SectionEyebrow";

export function Gallery() {
  const photos = [em.photos.hero, em.photos.lineup, ...em.photos.ig];
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="relative px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionEyebrow number="10" label="Gallery" />
            <h2 className="mt-6 max-w-2xl font-display text-5xl font-bold uppercase leading-[1.02] tracking-tight text-ivory lg:text-6xl">
              Frames from
              <br />
              <span className="text-primary italic">the road.</span>
            </h2>
          </div>
          <a
            href={em.brand.socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 self-end border-b border-primary pb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-primary"
          >
            @elephantmotoco →
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
          {photos.map((src, i) => (
            <motion.button
              key={src + i}
              onClick={() => setActive(src)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.04 }}
              className={`group relative overflow-hidden bg-card ${
                i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <img
                src={src}
                alt="Elephant Moto expedition photograph"
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/30 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.button>
          ))}
        </div>
      </div>

      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-6 backdrop-blur-xl"
        >
          <button
            onClick={() => setActive(null)}
            className="absolute right-6 top-6 text-[10px] font-bold uppercase tracking-[0.3em] text-ivory hover:text-primary"
          >
            Close ✕
          </button>
          <img src={active} alt="Expedition photograph" className="max-h-[88vh] max-w-[92vw] object-contain" />
        </div>
      )}
    </section>
  );
}