import { motion } from "motion/react";
import { useState } from "react";
import { em } from "./data";
import { SectionEyebrow } from "./SectionEyebrow";

export function Consultation() {
  const [sent, setSent] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "Tours",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            interest: form.interest,
            message: form.message,
            _subject: `New expedition inquiry — ${form.name}`,
          }),
        });
        if (!res.ok) throw new Error("Request failed");
      } else {
        // No endpoint configured yet: open the visitor's mail client so the lead
        // still reaches us. Set VITE_CONTACT_ENDPOINT (e.g. a Formspree URL) to
        // capture submissions automatically instead.
        const subject = encodeURIComponent(`Expedition inquiry — ${form.name}`);
        const body = encodeURIComponent(
          `Name: ${form.name}\nEmail: ${form.email}\nInterest: ${form.interest}\n\n${form.message}`,
        );
        window.location.href = `mailto:${em.brand.email}?subject=${subject}&body=${body}`;
      }
      setStatus("idle");
      setSent(true);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="consultation"
      className="relative overflow-hidden bg-ink px-6 py-32 lg:px-10 lg:py-40"
    >
      <div
        className="pointer-events-none absolute -bottom-32 left-1/2 h-[480px] w-[680px] -translate-x-1/2 rounded-full bg-primary/20 blur-[180px]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <SectionEyebrow number="12" label="Plan Your Expedition" />
          <h2 className="mt-6 font-display text-5xl font-bold uppercase leading-[1.02] tracking-tight text-ivory lg:text-7xl">
            Let's plan your
            <br />
            <span className="text-primary italic">adventure.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Tell us a little about who you are and what you want from a ride. An expedition planner will
            be in touch within one business day.
          </p>

          <div className="mt-12 space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                Direct line
              </span>
              <a
                href={`tel:${em.brand.phone.replace(/\s/g, "")}`}
                className="mt-2 block font-display text-2xl font-bold text-ivory hover:text-primary"
              >
                {em.brand.phone}
              </a>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                Email
              </span>
              <a
                href={`mailto:${em.brand.email}`}
                className="mt-2 block font-display text-2xl font-bold text-ivory hover:text-primary"
              >
                {em.brand.email}
              </a>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                Hours
              </span>
              <p className="mt-2 text-ivory/90">{em.brand.hours}</p>
            </div>
          </div>
        </div>

        <motion.form
          id="contact"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          onSubmit={handleSubmit}
          className="border border-border bg-card/80 p-8 backdrop-blur-xl md:p-12"
        >
          {sent ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <div className="font-display text-5xl text-primary">✓</div>
              <h3 className="mt-6 font-display text-3xl font-bold text-ivory">
                Thanks — message received.
              </h3>
              <p className="mt-3 max-w-sm text-muted-foreground">
                An expedition planner will reach out to {form.email || "your email"} within one business
                day to start designing your ride.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", email: "", interest: "Tours", message: "" });
                }}
                className="mt-8 border border-border px-6 py-3 text-[10px] font-bold uppercase tracking-[0.3em] text-ivory hover:border-primary hover:text-primary"
              >
                Send another →
              </button>
            </div>
          ) : (
            <>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Your name">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border-0 border-b border-border bg-transparent py-3 text-ivory placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                    placeholder="Jane Rider"
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border-0 border-b border-border bg-transparent py-3 text-ivory placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                    placeholder="you@email.com"
                  />
                </Field>
              </div>
              <div className="mt-8">
                <Field label="What are you interested in?">
                  <div className="flex flex-wrap gap-2">
                    {["Tours", "Rentals", "Training", "Custom expedition"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setForm({ ...form, interest: opt })}
                        className={`border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] transition-colors ${
                          form.interest === opt
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border text-ivory/80 hover:border-primary hover:text-primary"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </Field>
              </div>
              <div className="mt-8">
                <Field label="Tell us about your ride">
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full resize-none border-0 border-b border-border bg-transparent py-3 text-ivory placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
                    placeholder="Group size, dates, dream route…"
                  />
                </Field>
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-10 inline-flex w-full items-center justify-center gap-3 bg-primary px-8 py-5 text-xs font-bold uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-ember disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? "Sending…" : "Send Inquiry →"}
              </button>
              {status === "error" && (
                <p className="mt-4 text-sm text-ember">
                  Something went wrong sending your message. Please email{" "}
                  <a href={`mailto:${em.brand.email}`} className="underline hover:text-primary">
                    {em.brand.email}
                  </a>{" "}
                  directly.
                </p>
              )}
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </span>
      <div className="mt-2">{children}</div>
    </label>
  );
}