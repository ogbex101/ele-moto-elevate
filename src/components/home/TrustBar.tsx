import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { em } from "./data";

function Counter({ target, prefix = "", suffix = "" }: { target: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());
  useEffect(() => {
    if (inView) {
      const controls = animate(mv, target, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, target, mv]);
  return (
    <span ref={ref} className="font-display text-4xl font-bold tracking-tight text-ivory sm:text-5xl">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

function StatValue({ value }: { value: string }) {
  const num = Number(value.replace(/[,\s]/g, ""));
  if (!isNaN(num) && num > 0) return <Counter target={num} />;
  return <span className="font-display text-4xl font-bold tracking-tight text-ivory sm:text-5xl">{value}</span>;
}

export function TrustBar() {
  return (
    <section className="relative border-y border-border/60 bg-card/40 py-14">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-y-10 gap-x-6 px-6 lg:grid-cols-5 lg:px-10">
        <div className="col-span-2 flex flex-col gap-3 lg:col-span-1">
          <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            Trusted Since 2014
          </span>
          <img
            src={em.brand.bmwPartnerBadge}
            alt="Official BMW Motorrad Partner"
            className="h-14 w-auto brightness-0 invert"
            loading="lazy"
          />
        </div>
        {em.trust.map((t, i) => (
          <motion.div
            key={t.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="flex flex-col gap-2 border-l border-border/60 pl-5"
          >
            <StatValue value={t.value} />
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              {t.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}