import { useState } from "react";

type LogoProps = {
  className?: string;
};

/**
 * Brand logo.
 *
 * Tries to render the self-hosted elephant emblem from `public/elephant-logo.svg`.
 * Drop that file into the repo's `public/` folder and the real emblem appears
 * automatically — served from our own origin so it can never be blocked (the
 * previous version hot-linked the SVG from elephantmoto.com and rendered empty).
 *
 * Until that file exists, it falls back to a self-contained wordmark so the
 * brand is always visible. Color is inherited via `text-*` utilities.
 */
export function Logo({ className }: LogoProps) {
  const [useEmblem, setUseEmblem] = useState(true);

  if (useEmblem) {
    return (
      <img
        src="/elephant-logo.svg"
        alt="Elephant Moto"
        onError={() => setUseEmblem(false)}
        className={["w-auto", className].filter(Boolean).join(" ")}
      />
    );
  }

  return (
    <span
      className={[
        "inline-flex items-baseline font-display font-bold uppercase leading-none tracking-tight",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label="Elephant Moto"
    >
      Elephant
      <span className="ml-[0.3em] text-primary">Moto</span>
    </span>
  );
}
