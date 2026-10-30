# Hope Car Rental — Mauritius

A modern, animation-rich, fully responsive **frontend-only** redesign of
[hopecarrental.mu](https://hopecarrental.mu/), rebuilt with **React + Next.js**.

The site preserves all of the reference business's real information — vehicle
categories, models, prices, included services and contact details — while
delivering a premium, trustworthy, mobile-first experience.

---

## Tech stack

| Concern        | Choice                                  |
| -------------- | --------------------------------------- |
| Framework      | Next.js 14 (App Router)                 |
| UI library     | React 18                                |
| Styling        | Tailwind CSS 3 (custom design tokens)   |
| Animation      | Framer Motion 11 (reduced-motion aware) |
| Language       | JavaScript (JSX)                        |
| Backend        | **None** — fully frontend-only          |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # lint
```

## Project structure

```
app/
  layout.jsx        Root layout, fonts, SEO metadata, skip-link
  page.jsx          Home page — assembles all sections + JSON-LD
  globals.css       Tailwind layers, design tokens, a11y & reduced-motion
  robots.js         /robots.txt
  sitemap.js        /sitemap.xml
components/          One component per section + reusable primitives
  Navbar, Hero, About, Services, FleetBrowser, Booking,
  Testimonials, Faq, Contact, Footer, WhatsAppButton,
  ScrollProgress, Reveal, SectionHeading, Icon,
  CarIllustration, TropicalWaves
data/
  site.js           Single source of truth for ALL content
public/
  favicon.svg
```

## Where the content lives

All business content is centralised in [`data/site.js`](data/site.js):
business details, navigation, the About copy & trust pillars, every fleet
category (name, price, models, specs), included perks, the customer testimonial
and the FAQ. Edit that one file to update the site — no component changes needed.

### Preserved from the reference site

- **9 vehicle categories** with exact "from" prices (Economy €35 → SUV Luxury €1300)
- **All vehicle models** per category (e.g. Nissan Micra, BMW X5, …)
- Automatic transmission across the fleet
- **No deposit required**, **free delivery & collection**, **24hr mechanical assistance**
- Contact: Pereybere – Grand Baie, Port Louis 30510 · +230 58 097 529 · infohopecarrental@gmail.com · WhatsApp
- The real customer testimonials (Sebastien Zangbari, Mantas Varna, Disha Pertaub, Emma Miller, Mark Melone, Jessica 2112) with customer avatars and infinite right-to-left marquee auto-scroll
- About / Services / Diverse Fleet / Best Price / Exceptional Service / Meticulous Maintenance copy

## Frontend-only behaviour (no fake transactions)

The booking and contact forms are **enquiry** interfaces. They validate input
and then hand the request to a real channel (**WhatsApp** deep link or
`mailto:`). No server is called, no payment is taken, and the UI never claims a
booking or payment has been processed — the success screen explicitly says it is
an enquiry awaiting confirmation.

## Design & quality notes

- **Light & dark mode:** a theme toggle in the navbar (desktop + mobile) switches
  between light and dark. It defaults to the visitor's system preference, is
  persisted in `localStorage`, and is applied before first paint by a small inline
  script in `app/layout.jsx` (no flash of the wrong theme). Built on Tailwind's
  `darkMode: "class"`; every section has `dark:` variants.
- **Imagery:** vehicles use self-contained, themeable SVG illustrations
  (`CarIllustration.jsx`) — fast, reliable, no external image dependencies and
  no risk of misrepresenting a specific car. The contact map is a lazy-loaded
  Google Maps embed of the real location.
- **Animations:** scroll-reveals, hero stagger, animated nav underline, tab
  transitions, FAQ accordion, floating WhatsApp button, scroll-progress bar —
  all disabled automatically under `prefers-reduced-motion`.
- **Responsive:** verified with no horizontal overflow down to 375px; mobile
  menu, touch-friendly targets, fluid typography.
- **Accessibility:** semantic landmarks, skip-link, visible focus rings, ARIA
  on tabs/accordion/menu, labelled form fields, alt-free decorative SVGs marked
  `aria-hidden`.
- **SEO:** per-page metadata, Open Graph, `AutoRental` JSON-LD with the offer
  catalogue, `robots.txt`, `sitemap.xml`, semantic headings.

## Deployment safety

This project is independent of the live site. It does **not** touch, overwrite
or deploy to the production server. Deploy the production build (`npm run build`)
to a separate target (e.g. Vercel/Netlify/static host) and verify before
switching DNS. Keep a backup of the current live site so you can roll back.
