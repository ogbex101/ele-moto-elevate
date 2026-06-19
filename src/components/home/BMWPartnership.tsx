import { motion } from "motion/react";
import { em } from "./data";
import { SectionEyebrow } from "./SectionEyebrow";

export function BMWPartnership() {
  return (
    <section id="bmw" className="relative overflow-hidden bg-ink px-6 py-32 lg:px-10 lg:py-40">
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-primary/20 blur-[140px]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-[1400px] gap-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative aspect-[5/4] overflow-hidden">
            <img
              src={em.photos.lineup}
              alt="BMW Motorrad fleet — Elephant Moto Colombia"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/80 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-px bg-border md:left-12 md:right-12">
            {em.rentals.map((r) => (
              <div key={r.model} className="bg-card px-4 py-5">
                <div className="font-display text-xs font-bold uppercase tracking-[0.2em] text-ivory">
                  {r.model}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-primary">
                  ${r.pricePerDay} / day
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <SectionEyebrow number="05" label="Official BMW Motorrad Partner" />
          <h2 className="mt-6 font-display text-5xl font-bold uppercase leading-[1.02] tracking-tight text-ivory lg:text-6xl">
            The Ultimate Machine.
            <br />
            <span className="text-primary italic">The Ultimate Terrain.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Elephant Moto is the official BMW Motorrad partner in Colombia. Our fleet of GS adventure
            bikes is maintained to factory standards by BMW-trained technicians. Our lead guides —
            including founder Mauricio Escobar — are certified BMW Motorrad instructors.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <img
              src={em.brand.bmwPartnerBadge}
              alt="Official BMW Motorrad Partner"
              className="h-16 w-auto brightness-0 invert"
              loading="lazy"
            />
            <img
              src={em.brand.bmwMotorradLogo}
              alt="BMW Motorrad"
              className="h-10 w-auto brightness-0 invert opacity-80"
              loading="lazy"
            />
            <img
              src={em.brand.bmwMotorradAlt}
              alt="BMW Motorrad International"
              className="h-10 w-auto brightness-0 invert opacity-80"
              loading="lazy"
            />
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-display text-base font-bold text-ivory">Factory standards</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                Current-generation R 1300 GS, F 900 GS and F 800 GS — serviced between every expedition.
              </p>
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-ivory">Certified instruction</h4>
              <p className="mt-1 text-sm text-muted-foreground">
                On- and off-road training at the Elephant School of Riding, led by BMW Motorrad
                instructors.
              </p>
            </div>
          </div>
          <a
            id="rentals"
            href="https://elephantmoto.com/rentals/"
            className="mt-10 inline-flex items-center gap-3 bg-card px-7 py-4 text-[10px] font-bold uppercase tracking-[0.3em] text-ivory transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Discover the Fleet →
          </a>
        </div>
      </div>
    </section>
  );
}