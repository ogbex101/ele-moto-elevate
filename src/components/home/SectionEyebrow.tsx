export function SectionEyebrow({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
      <span className="font-display text-base text-primary/60">{number}</span>
      <span className="h-px w-12 bg-primary/60" />
      {label}
    </div>
  );
}