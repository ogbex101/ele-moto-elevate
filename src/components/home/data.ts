import emData from "../../data/elephant-moto.json";

export const em = emData as unknown as {
  brand: {
    name: string;
    tagline: string;
    founded: number;
    phone: string;
    email: string;
    hours: string;
    founder: string;
    logo: string;
    bmwPartnerBadge: string;
    bmwMotorradLogo: string;
    bmwMotorradAlt: string;
    favicon: string;
    socials: { instagram: string; facebook: string; youtube: string };
  };
  photos: { hero: string; lineup: string; ig: string[] };
  nav: { label: string; href: string }[];
  trust: { value: string; label: string }[];
  tours: {
    slug: string;
    name: string;
    subtitle: string;
    days: number;
    distanceKm: number;
    difficulty: string;
    region: string;
    surface: string;
    price: number;
    priceLabel: string;
    image: string;
    highlights: string[];
    url: string;
    tags: string[];
  }[];
  rentals: { model: string; pricePerDay: number; image: string; blurb: string }[];
  destinations: { name: string; kind: string; coord: [number, number] }[];
  stories: { name: string; origin: string; bike: string; quote: string; image: string }[];
  timeline: { year: string; title: string; body: string }[];
  faq: { q: string; a: string }[];
};