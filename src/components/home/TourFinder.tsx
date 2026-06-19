import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { em } from "./data";
import { SectionEyebrow } from "./SectionEyebrow";

type Answers = {
  level: "new" | "intermediate" | "advanced" | "";
  scenery: "andes" | "coffee" | "desert" | "any" | "";
  duration: "short" | "tenday" | "long" | "";
  surface: "paved" | "dirt" | "mixed" | "";
  bike: "r1300gs" | "f900gs" | "f800gs" | "any" | "";
};

const steps: {
  key: keyof Answers;
  q: string;
  options: { value: string; label: string; sub?: string }[];
}[] = [
  {
    key: "level",
    q: "How would you describe your riding experience?",
    options: [
      { value: "new", label: "New to adventure", sub: "Comfortable on the street" },
      { value: "intermediate", label: "Intermediate", sub: "Some off-road miles" },
      { value: "advanced", label: "Advanced", sub: "Technical dirt comfortable" },
    ],
  },
  {
    key: "scenery",
    q: "Which landscape pulls you in?",
    options: [
      { value: "andes", label: "High Andes", sub: "Páramo & mountain passes" },
      { value: "coffee", label: "Coffee region", sub: "Colonial towns & valleys" },
      { value: "desert", label: "Desert & dunes", sub: "Morocco / Sahara" },
      { value: "any", label: "Surprise me", sub: "Best of every world" },
    ],
  },
  {
    key: "duration",
    q: "How long can you ride for?",
    options: [
      { value: "short", label: "Up to a week", sub: "Training-focused" },
      { value: "tenday", label: "About 10 days", sub: "Our signature length" },
      { value: "long", label: "Two weeks +", sub: "Bespoke expeditions" },
    ],
  },
  {
    key: "surface",
    q: "Preferred surface mix?",
    options: [
      { value: "paved", label: "All paved", sub: "Pristine asphalt curves" },
      { value: "mixed", label: "Mostly paved with dirt", sub: "Best of both" },
      { value: "dirt", label: "Bring on the dirt", sub: "Technical dual-purpose" },
    ],
  },
  {
    key: "bike",
    q: "Pick your weapon.",
    options: [
      { value: "r1300gs", label: "BMW R 1300 GS", sub: "$240/day flagship" },
      { value: "f900gs", label: "BMW F 900 GS", sub: "$210/day mid-weight" },
      { value: "f800gs", label: "BMW F 800 GS", sub: "$195/day agile" },
      { value: "any", label: "Recommend for me", sub: "Choose for the route" },
    ],
  },
];

function scoreTour(t: (typeof em.tours)[number], a: Answers) {
  let score = 0;
  if (a.scenery === "desert" && t.region === "Morocco") score += 4;
  if (a.scenery === "andes" && t.region === "Colombia" && t.tags.includes("high-altitude")) score += 3;
  if (a.scenery === "coffee" && t.region === "Colombia" && t.tags.includes("cultural")) score += 2;
  if (a.scenery === "any") score += 1;
  if (a.surface === "paved" && t.tags.includes("paved")) score += 3;
  if (a.surface === "dirt" && t.tags.includes("dirt")) score += 3;
  if (a.surface === "mixed" && t.tags.includes("dirt") && t.tags.includes("cultural")) score += 3;
  if (a.duration === "tenday" && t.days === 10) score += 2;
  if (a.duration === "short" && t.days > 0 && t.days <= 7) score += 2;
  if (a.duration === "long" && (t.days >= 12 || t.days === -1)) score += 2;
  if (a.level === "new" && t.difficulty.startsWith("Beginner")) score += 2;
  if (a.level === "intermediate" && t.difficulty.includes("Intermediate")) score += 2;
  if (a.level === "advanced" && t.difficulty.includes("Advanced")) score += 2;
  if (a.level === "new" && t.slug === "enduro-park-andalusia-tour") score += 2;
  return score;
}

export function TourFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    level: "",
    scenery: "",
    duration: "",
    surface: "",
    bike: "",
  });
  const total = steps.length;
  const done = step >= total;

  const recommendations = useMemo(() => {
    if (!done) return [];
    return [...em.tours]
      .map((t) => ({ t, s: scoreTour(t, answers) }))
      .sort((a, b) => b.s - a.s)
      .slice(0, 3)
      .map((x) => x.t);
  }, [done, answers]);

  const reset = () => {
    setStep(0);
    setAnswers({ level: "", scenery: "", duration: "", surface: "", bike: "" });
  };

  return (
    <section
      id="finder"
      className="relative overflow-hidden bg-secondary/40 px-6 py-32 lg:px-10 lg:py-40"
    >
      <div className="topo-grid absolute inset-0 opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/15 blur-[160px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="text-center">
          <div className="inline-block">
            <SectionEyebrow number="07" label="Interactive Tour Finder" />
          </div>
          <h2 className="mt-6 font-display text-5xl font-bold uppercase leading-[1.02] tracking-tight text-ivory lg:text-6xl">
            Find your <span className="text-primary italic">expedition.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Five quick questions. Recommendations pulled from our real tour catalog.
          </p>
        </div>

        <div className="mt-14 overflow-hidden border border-border bg-card/80 backdrop-blur-xl shadow-elevated">
          {!done && (
            <div className="flex items-center justify-between gap-4 border-b border-border px-8 py-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <span>
                Step {step + 1} of {total}
              </span>
              <div className="flex flex-1 gap-1.5">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-px flex-1 transition-colors ${
                      i <= step ? "bg-primary" : "bg-border"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={reset}
                className="text-muted-foreground/80 hover:text-primary"
              >
                Reset
              </button>
            </div>
          )}

          <div className="p-8 md:p-14">
            <AnimatePresence mode="wait">
              {!done ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="font-display text-3xl font-bold leading-tight text-ivory md:text-4xl">
                    {steps[step].q}
                  </h3>
                  <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {steps[step].options.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => {
                          setAnswers((a) => ({ ...a, [steps[step].key]: opt.value }) as Answers);
                          setStep((s) => s + 1);
                        }}
                        className="group flex items-start justify-between gap-4 border border-border bg-background/40 p-5 text-left transition-all hover:border-primary hover:bg-background"
                      >
                        <div>
                          <div className="font-display text-lg font-semibold text-ivory">
                            {opt.label}
                          </div>
                          {opt.sub && (
                            <div className="mt-1 text-xs text-muted-foreground">{opt.sub}</div>
                          )}
                        </div>
                        <span className="mt-1 text-primary opacity-0 transition-opacity group-hover:opacity-100">
                          →
                        </span>
                      </button>
                    ))}
                  </div>
                  {step > 0 && (
                    <button
                      onClick={() => setStep((s) => s - 1)}
                      className="mt-10 text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-primary"
                    >
                      ← Back
                    </button>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                    Your recommended expeditions
                  </span>
                  <h3 className="mt-3 font-display text-3xl font-bold leading-tight text-ivory md:text-4xl">
                    Three routes worth your time.
                  </h3>
                  <div className="mt-10 space-y-4">
                    {recommendations.map((t, i) => (
                      <a
                        key={t.slug}
                        href={t.url}
                        className="group flex items-center gap-6 border border-border bg-background/40 p-5 transition-colors hover:border-primary hover:bg-background"
                      >
                        <div className="font-display text-3xl font-bold text-primary/60">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <img
                          src={t.image}
                          alt={t.name}
                          className="h-20 w-28 flex-shrink-0 object-cover"
                          loading="lazy"
                        />
                        <div className="min-w-0 flex-1">
                          <div className="font-display text-lg font-bold text-ivory">{t.name}</div>
                          <div className="mt-1 text-xs text-muted-foreground">
                            {t.region} • {t.difficulty} • {t.surface}
                          </div>
                        </div>
                        <div className="hidden text-right md:block">
                          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                            From
                          </div>
                          <div className="font-display text-sm font-semibold text-ivory">
                            {t.priceLabel}
                          </div>
                        </div>
                        <span className="text-primary transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <button
                      onClick={reset}
                      className="border border-border px-6 py-3 text-[10px] font-bold uppercase tracking-[0.3em] text-ivory hover:border-primary hover:text-primary"
                    >
                      ↺ Start over
                    </button>
                    <a
                      href="#consultation"
                      className="bg-primary px-6 py-3 text-[10px] font-bold uppercase tracking-[0.3em] text-primary-foreground hover:bg-ember"
                    >
                      Talk to an expedition planner →
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}