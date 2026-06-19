import { motion } from "motion/react";
import { em } from "./data";
import { SectionEyebrow } from "./SectionEyebrow";

const pillars = [
  { k: "Vertical", v: "0 → 4,200 m", body: "Tropical lowlands to high-Andean páramo — in a single afternoon." },
  { k: "Roads", v: "Among the best on earth", body: "Paved switchbacks carved into the Andes, plus a lifetime of dirt." },
  { k: "Coffee Region", v: "UNESCO heritage", body: "Plantation roads, colonial towns, and the soul of Colombian hospitality." },
  { k: "People", v: "Warmth as terrain", body: "Local guides, family fincas, and a welcome you cannot manufacture." },
];

export function WhyColombia() {
  return (
    <section id="why" className="relative overflow-hidden bg-secondary/30 px-6 py-32 lg:px-10 lg:py-40">
      <div className="topo-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={em.photos.ig[3]}
              alt="Riding through the Colombian Andes"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-8 -right-6 hidden bg-ink p-6 shadow-elevated md:block">
            <span className="block text-[10px] uppercase tracking-[0.3em] text-primary">Highest pass</span>
            <span className="mt-2 block font-display text-4xl font-bold text-ivory">4,200 m</span>
            <span className="block text-xs text-muted-foreground">Above Murillo, Los Nevados</span>
          </div>
        </motion.div>

        <div>
          <SectionEyebrow number="04" label="Why Ride Colombia" />
          <h2 className="mt-6 font-display text-5xl font-bold uppercase leading-[1.02] tracking-tight text-ivory lg:text-6xl">
            One country.
            <br />
            <span className="text-primary italic">Every landscape.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Colombia is one of the most diverse countries on the planet — and arguably the best place
            on earth to ride a motorcycle. We've spent over a decade learning every switchback,
            mountain pass, and hidden finca.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <motion.div
                key={p.k}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="border-l border-primary/40 pl-5"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                  {p.k}
                </span>
                <h4 className="mt-2 font-display text-2xl font-bold text-ivory">{p.v}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}