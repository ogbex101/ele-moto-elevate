# Elephant Moto — Premium Homepage Redesign

A faithful evolution of elephantmoto.com — same brand, elevated as a premium expedition company. Built in three phases.

## Phase 1 — Scrape & Asset Inventory

Connect Firecrawl, then scrape the live site to extract real brand material:

1. Link the Firecrawl connector.
2. Scrape `elephantmoto.com` with `formats: ['markdown', 'links', 'branding', 'screenshot']` to capture brand colors, fonts, logo, OG image, and a hero screenshot.
3. Map the site (`/tours`, `/about`, `/rentals`, `/training`, `/contact`, etc.) and scrape each tour page for: name, region, duration, difficulty, highlights, hero image URL.
4. Pull the homepage hero video URL and key photography URLs from the scraped HTML/links.
5. Save normalized output to `src/data/elephant-moto-content.json` (brand tokens, nav labels, tour catalog, testimonials, FAQ, copy blocks, asset URLs).

All real photography and the hero video are referenced by their original URLs (no re-hosting, no AI-generated stand-ins).

## Phase 2 — Three Rendered Design Directions

Using the scraped brand tokens as **locked constraints** (logo, palette, typography, photography), generate 3 distinct premium directions via `design--create_directions`. Variation lives in composition, density, and motion register — not in brand identity.

- **Direction A — Editorial Expedition** (National Geographic / Patagonia): magazine layout, large serif/grotesk pairing, generous whitespace, restrained motion, photography-led.
- **Direction B — Cinematic Motorrad** (BMW Motorrad Travel / Land Rover): dark luxury, full-bleed video, parallax mountain layers, glassmorphic nav, kinetic typography, particle effects.
- **Direction C — Immersive 3D Atlas** (Four Seasons Journeys with depth): subtle WebGL terrain, interactive globe of international riders, animated route lines on a 3D map, floating glass cards with perspective hover.

The captured homepage screenshot rides along as visual reference. You pick one before any production code is written.

## Phase 3 — Build the Chosen Direction (13 sections)

Faithful implementation of the picked direction with all sections from the brief:

1. Cinematic Hero (existing video, overlay, parallax, dual CTA)
2. Trust Bar (BMW partner, 10+ years, animated counters)
3. Featured Expeditions (editorial cards from scraped tours)
4. Why Ride Colombia (split editorial)
5. BMW Partnership showcase
6. Stories From Riders (horizontal scroll testimonials)
7. **Interactive Tour Finder** — quiz (level, scenery, duration, luxury, adventure, bike) → recommends from the real scraped tour catalog
8. Featured Destinations (interactive map with animated routes)
9. Why Elephant Moto (animated timeline)
10. Gallery (masonry + lightbox, real photos)
11. FAQ (accordion + JSON-LD FAQPage schema)
12. Consultation CTA ("Let's Plan Your Adventure" form)
13. Footer (logo, socials, newsletter, links)

Plus: sticky glass nav that shrinks on scroll, sticky mobile "Plan My Tour" CTA, context-aware CTAs, full SEO/AEO metadata per route.

## Technical Notes

- **Stack**: TanStack Start (existing). Homepage is `src/routes/index.tsx`; sections split into `src/components/home/*`.
- **Animation**: Motion (Framer Motion) for parallax, reveals, counters, magnetic hover. GSAP only if needed for the map route-draw.
- **3D**: `@react-three/fiber` + `drei` for the globe / terrain depth (Direction C only, or as a subtle accent if A/B is picked).
- **Form**: Consultation form posts to a `createServerFn` that stores the lead — Lovable Cloud enabled in this phase if you want persistence; otherwise the form just validates and shows a thank-you state.
- **Data**: Scraped JSON committed to repo; tours and testimonials read statically. Easy to re-scrape later.
- **Tour Finder**: pure client-side scoring against the scraped catalog, no backend required.
- **Performance**: lazy-load video, route-based code splitting, image `loading="lazy"`, Tour Finder + 3D dynamically imported.

## Open question for after approval

Do you want the Consultation form to actually save leads (requires enabling Lovable Cloud) or just show a confirmation for now? Default: confirmation only — we can wire persistence later.
