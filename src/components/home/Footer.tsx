import { em } from "./data";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink px-6 pb-12 pt-20 lg:px-10 lg:pt-28">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo className="text-2xl text-ivory" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Premium guided motorcycle expeditions through Colombia and beyond. Official BMW Motorrad
              partner since 2014. Founded by Mauricio Escobar.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <img
                src={em.brand.bmwPartnerBadge}
                alt="BMW Motorrad Partner"
                className="h-12 w-auto brightness-0 invert opacity-90"
                loading="lazy"
              />
            </div>
          </div>
          <FooterCol
            title="Expeditions"
            links={em.tours.map((t) => ({ label: t.name, href: t.url }))}
          />
          <FooterCol
            title="Services"
            links={[
              { label: "BMW Rentals", href: "https://elephantmoto.com/rentals/" },
              { label: "On-Road Training", href: "https://elephantmoto.com/on-road-school-of-riding/" },
              { label: "Off-Road Training", href: "https://elephantmoto.com/off-road-school-of-riding/" },
              { label: "Custom Tour", href: "https://elephantmoto.com/create-a-custom-tour/" },
            ]}
          />
          <div>
            <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
              Newsletter
            </h5>
            <p className="mt-4 text-sm text-ivory/80">
              Expedition openings, route previews, and stories from the road. No spam.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-5 flex items-center border-b border-border"
            >
              <input
                type="email"
                required
                placeholder="you@email.com"
                className="w-full bg-transparent py-3 text-sm text-ivory placeholder:text-muted-foreground/60 focus:outline-none"
              />
              <button className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                Subscribe →
              </button>
            </form>
            <div className="mt-8 flex gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-ivory/80">
              <a href={em.brand.socials.instagram} className="hover:text-primary" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={em.brand.socials.facebook} className="hover:text-primary" target="_blank" rel="noreferrer">
                Facebook
              </a>
              <a href={em.brand.socials.youtube} className="hover:text-primary" target="_blank" rel="noreferrer">
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Elephant Moto • Bogotá, Colombia</span>
          <span>{em.brand.phone} • {em.brand.email}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
        {title}
      </h5>
      <ul className="mt-4 space-y-3 text-sm text-ivory/80">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="hover:text-primary">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}