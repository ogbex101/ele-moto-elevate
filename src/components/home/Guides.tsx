import { motion } from "motion/react";
import { em } from "./data";

/**
 * Founder portrait. Swap this URL for a real photo of Mauricio Escobar when
 * available — it currently reuses a brand image as a placeholder frame.
 */
const FOUNDER_PHOTO = em.photos.ig[1];

const credentials = [
  "BMW Motorrad Certified Instructor",
  "Born in Bogotá · Raised in the Andes",
  "10+ Years Leading Expeditions",
];

export function Guides() {
  return (
    <section id="guides" className="relative overflow-hidden px-6 py-32 lg:px-10 lg:py-40">
      <div className="relative mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="relative order-1"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={FOUNDER_PHOTO}
              alt={`${em.brand.founder}, founder of ${em.brand.name}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
              <div className="font-display text-2xl font-bold uppercase leading-none text-ivory">
                {em.brand.founder}
              </div>
              <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                Founder · Lead Guide
              </div>
            </div>
          </div>
        </motion.div>

        <div className="order-2">
          <div className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-primary" />
            The People Behind The Ride
          </div>
          <h2 className="mt-6 font-display text-5xl font-bold uppercase leading-[1.02] tracking-tight text-ivory lg:text-6xl">
            Led by riders who
            <br />
            <span className="text-primary italic">call the Andes home.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {em.brand.name} was founded in {em.brand.founded} by {em.brand.founder} — a
            BMW Motorrad–certified instructor who has spent his life on Colombian roads.
            Every expedition is led by guides who were born here, ride here year-round, and
            know which switchback to take and which finca to stop at.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            That local knowledge — paired with factory-grade BMW machines and a support
            vehicle on every trip — is the difference between a motorcycle holiday and a
            true expedition.
          </p>

          <ul className="mt-10 flex flex-col gap-px overflow-hidden border border-border">
            {credentials.map((c) => (
              <motion.li
                key={c}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 bg-card px-6 py-4"
              >
                <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-primary" aria-hidden />
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-ivory">
                  {c}
                </span>
              </motion.li>
            ))}
          </ul>

          <a
            href="#consultation"
            className="mt-10 inline-flex items-center gap-3 border-b border-primary pb-1 text-[10px] font-bold uppercase tracking-[0.3em] text-primary transition-colors hover:text-ember"
          >
            Plan a ride with our team →
          </a>
        </div>
      </div>
    </section>
  );
}
