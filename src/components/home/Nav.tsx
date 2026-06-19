import { useEffect, useState } from "react";
import { em } from "./data";
import { Logo } from "./Logo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/75 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-6",
      ].join(" ")}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-8 px-6 lg:px-10">
        <a href="/" className="flex items-center gap-3 shrink-0" aria-label={em.brand.name}>
          <Logo className="h-7 text-xl text-ivory sm:h-9 sm:text-2xl" />
        </a>

        <nav className="hidden xl:flex items-center gap-8 text-[11px] font-medium uppercase tracking-[0.22em] text-ivory/75">
          {em.nav.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-primary transition-colors">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#consultation"
            className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-ember transition-colors"
          >
            Plan My Expedition
            <span aria-hidden>→</span>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="xl:hidden inline-flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className="block h-px w-6 bg-ivory" />
            <span className="block h-px w-6 bg-ivory" />
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <nav className="mx-auto flex max-w-[1400px] flex-col gap-4 px-6 py-6 text-sm uppercase tracking-[0.2em]">
            {em.nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-ivory/80 hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}