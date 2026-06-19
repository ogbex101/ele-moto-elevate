import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/home/Nav";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Expeditions } from "@/components/home/Expeditions";
import { WhyColombia } from "@/components/home/WhyColombia";
import { BMWPartnership } from "@/components/home/BMWPartnership";
import { Stories } from "@/components/home/Stories";
import { TourFinder } from "@/components/home/TourFinder";
import { Destinations } from "@/components/home/Destinations";
import { Timeline } from "@/components/home/Timeline";
import { Gallery } from "@/components/home/Gallery";
import { FAQ } from "@/components/home/FAQ";
import { Consultation } from "@/components/home/Consultation";
import { Footer } from "@/components/home/Footer";
import { MobileCTA } from "@/components/home/MobileCTA";

const title = "Elephant Moto — Premium BMW Motorcycle Expeditions in Colombia";
const description =
  "Premium guided BMW motorcycle expeditions through the Colombian Andes and beyond. Official BMW Motorrad partner since 2014. Bespoke routes, certified guides, factory-fresh GS fleet.";
const ogImage = "https://elephantmoto.com/wp-content/uploads/2025/02/em2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: ogImage },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "icon", href: "https://elephantmoto.com/wp-content/uploads/2025/04/cropped-FaviconElephant-1-32x32.png" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Expeditions />
        <WhyColombia />
        <BMWPartnership />
        <Stories />
        <TourFinder />
        <Destinations />
        <Timeline />
        <Gallery />
        <FAQ />
        <Consultation />
      </main>
      <Footer />
      <MobileCTA />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: "Elephant Moto",
            url: "https://elephantmoto.com",
            logo: "https://elephantmoto.com/wp-content/uploads/2024/08/66Recurso-1.svg",
            description,
            telephone: "+57 318 362 1661",
            email: "micho@elephantmoto.com",
            foundingDate: "2014",
            areaServed: ["Colombia", "Costa Rica", "Morocco", "Spain"],
          }),
        }}
      />
    </div>
  );
}
