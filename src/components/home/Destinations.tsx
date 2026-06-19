import { motion } from "motion/react";
import { em } from "./data";
import { SectionEyebrow } from "./SectionEyebrow";

// Stylized route through Colombia (percentage coords on 100×60 viewBox)
const route = "M 18 56 L 14 48 L 20 52 L 24 52 L 28 46 L 34 40 L 37 44 L 28 46";

export function Destinations() {
  return (
    <section id="destinations" className="relative overflow-hidden px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <SectionEyebrow number="08" label="Featured Destinations" />
            <h2 className="mt-6 font-display text-5xl font-bold uppercase leading-[1.02] tracking-tight text-ivory lg:text-6xl">
              A country drawn
              <br />
              for <span className="text-primary italic">two wheels.</span>
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Every Colombia expedition threads together the country's most riding-worthy places —
              from colonial Villa de Leyva to the 4,200 m pass above Murillo.
            </p>
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {em.destinations.map((d) => (
                <li key={d.name} className="flex items-center justify-between gap-4 py-4">
                  <span className="font-display text-sm font-bold uppercase tracking-[0.18em] text-ivory">
                    {d.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {d.kind}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/3] overflow-hidden bg-card"
          >
            <div
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, oklch(0.74 0.17 55 / 0.15) 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
              aria-hidden
            />
            <svg viewBox="0 0 50 70" className="absolute inset-0 h-full w-full">
              {/* abstract Colombia silhouette */}
              <path
                d="M 28 4 Q 38 8 40 18 Q 44 28 38 38 Q 42 48 36 56 Q 30 64 22 62 Q 14 60 12 50 Q 8 40 12 30 Q 14 18 20 10 Q 24 4 28 4 Z"
                fill="oklch(0.18 0.006 60)"
                stroke="oklch(0.74 0.17 55 / 0.4)"
                strokeWidth="0.2"
              />
              <motion.path
                d={route}
                fill="none"
                stroke="oklch(0.74 0.17 55)"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 2.4, ease: "easeInOut" }}
              />
              {em.destinations.map((d, i) => (
                <g key={d.name}>
                  <motion.circle
                    cx={d.coord[0]}
                    cy={d.coord[1]}
                    r="0.9"
                    fill="oklch(0.74 0.17 55)"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.12, duration: 0.4 }}
                  />
                  <motion.circle
                    cx={d.coord[0]}
                    cy={d.coord[1]}
                    r="2.4"
                    fill="none"
                    stroke="oklch(0.74 0.17 55 / 0.5)"
                    strokeWidth="0.2"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: [0, 1.4, 1], opacity: [0, 0.8, 0.4] }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.12, duration: 1.4 }}
                  />
                  <text
                    x={d.coord[0] + 2}
                    y={d.coord[1] + 0.6}
                    fontSize="1.6"
                    fill="oklch(0.97 0.01 80 / 0.85)"
                    fontFamily="Poppins, sans-serif"
                    fontWeight="600"
                  >
                    {d.name}
                  </text>
                </g>
              ))}
            </svg>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between border-t border-border pt-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <span>Colombia</span>
              <span>~ 2,300 km signature loop</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}