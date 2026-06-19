import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { em } from "./data";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[720px] w-full overflow-hidden bg-ink">
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <img
          src={em.photos.hero}
          alt="BMW motorcycle expedition in the Colombian Andes"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-24 lg:px-10 lg:pb-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-primary"
        >
          <span className="h-px w-10 bg-primary" />
          Official BMW Motorrad Partner • Since 2014
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-5xl font-display text-5xl font-bold uppercase leading-[0.92] tracking-tight text-ivory sm:text-7xl lg:text-8xl"
        >
          The Andes,
          <br />
          <span className="bg-gradient-to-r from-ivory via-primary to-ember bg-clip-text text-transparent">
            On Two Wheels.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-lg font-light leading-relaxed text-ivory/80"
        >
          Premium guided BMW motorcycle expeditions through Colombia and beyond.
          Certified guides. Factory-fresh GS machines. Routes you will never forget.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#consultation"
            className="group inline-flex items-center justify-center gap-3 bg-primary px-8 py-5 text-xs font-bold uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-ember"
          >
            Plan My Expedition
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#expeditions"
            className="group inline-flex items-center justify-center gap-3 border border-ivory/30 bg-ivory/5 px-8 py-5 text-xs font-bold uppercase tracking-[0.22em] text-ivory backdrop-blur-md transition-colors hover:bg-ivory/10"
          >
            Explore Tours
          </a>
        </motion.div>

        <div className="mt-14 flex items-end justify-between gap-8">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-ivory/50">
            <span className="block h-px w-8 bg-ivory/40" />
            Scroll to explore
          </div>
          <img
            src={em.brand.bmwPartnerBadge}
            alt="Official BMW Motorrad Partner"
            className="hidden h-16 w-auto opacity-90 brightness-0 invert md:block"
            loading="lazy"
          />
        </div>
      </motion.div>
    </section>
  );
}