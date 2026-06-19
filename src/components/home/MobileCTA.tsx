import { useEffect, useState } from "react";

export function MobileCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 720);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur-xl transition-transform sm:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href="#consultation"
        className="flex w-full items-center justify-center gap-2 bg-primary px-4 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground"
      >
        Plan My Tour →
      </a>
    </div>
  );
}