type LogoProps = {
  className?: string;
};

/**
 * Self-contained brand wordmark. Renders reliably from our own bundle instead
 * of hot-linking the SVG from elephantmoto.com (which is not served to other
 * origins and left the logo box empty). Color is inherited via `text-*`.
 */
export function Logo({ className }: LogoProps) {
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
