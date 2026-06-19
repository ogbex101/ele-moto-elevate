import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { em } from "./data";

const VIDEO_SRC = "https://elephantmoto.com/wp-content/uploads/2026/04/file.webm";

export function FilmShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  function toggleSound() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) {
      v.play().catch(() => {});
    }
  }

  return (
    <section
      ref={ref}
      id="film"
      className="relative h-[92svh] min-h-[620px] w-full overflow-hidden bg-ink"
    >
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          src={VIDEO_SRC}
          poster={em.photos.hero}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Elephant Moto expedition film"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-6 pb-20 lg:px-10 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-primary"
        >
          <span className="h-px w-10 bg-primary" />
          Watch · The Film
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-4xl font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-ivory sm:text-6xl lg:text-7xl"
        >
          This is what
          <br />
          <span className="bg-gradient-to-r from-ivory via-primary to-ember bg-clip-text text-transparent">
            we ride for.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl text-lg font-light leading-relaxed text-ivory/80"
        >
          No stock footage. Real expeditions, real riders, real Colombian roads —
          shot on the mountain passes we ride every season.
        </motion.p>

        <div className="mt-10 flex items-center justify-between gap-6">
          <button
            type="button"
            onClick={toggleSound}
            aria-pressed={!muted}
            className="group inline-flex items-center gap-3 border border-ivory/30 bg-ivory/5 px-6 py-4 text-xs font-bold uppercase tracking-[0.22em] text-ivory backdrop-blur-md transition-colors hover:bg-ivory/10"
          >
            {muted ? (
              <VolumeX className="h-4 w-4 text-primary" aria-hidden />
            ) : (
              <Volume2 className="h-4 w-4 text-primary" aria-hidden />
            )}
            {muted ? "Tap for sound" : "Mute"}
          </button>
        </div>
      </div>
    </section>
  );
}
