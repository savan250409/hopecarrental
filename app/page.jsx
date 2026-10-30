import About from "@/components/About";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import FleetBrowser from "@/components/FleetBrowser";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhatsAppButton from "@/components/WhatsAppButton";
import { business, categories } from "@/data/site";

// SEO: structured data describing the business and its offer catalogue.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: business.name,
  description:
    "Car rental in Mauritius with a diverse automatic fleet, no deposit, free delivery & collection and 24hr mechanical assistance.",
  url: "https://hopecarrental.mu",
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.line1,
    addressLocality: "Grand Baie",
    postalCode: "30510",
    addressCountry: "MU",
  },
  areaServed: "Mauritius",
  priceRange: "€€",
  makesOffer: categories.map((c) => ({
    "@type": "Offer",
    name: `${c.label} rental`,
    priceCurrency: "EUR",
    price: c.from,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: c.from,
      priceCurrency: "EUR",
      unitText: "day",
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <FleetBrowser />
        <Booking />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
