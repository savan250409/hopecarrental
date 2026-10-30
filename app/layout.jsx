import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { business } from "@/data/site";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const display = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://hopecarrental.mu"),
  title: {
    default: "Hope Car Rental Mauritius — Reliable Rides, Remarkable Experiences",
    template: "%s | Hope Car Rental Mauritius",
  },
  description:
    "Rent a car in Mauritius with Hope Car Rental. A diverse automatic fleet from €35/day, no deposit required, free delivery & collection and 24hr mechanical assistance. Book your ride today.",
  keywords: [
    "car rental Mauritius",
    "rent a car Mauritius",
    "Hope Car Rental",
    "Grand Baie car hire",
    "cheap car rental Mauritius",
    "SUV rental Mauritius",
    "luxury car hire Mauritius",
  ],
  authors: [{ name: business.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hopecarrental.mu",
    siteName: business.name,
    title: "Hope Car Rental Mauritius — Reliable Rides, Remarkable Experiences",
    description:
      "A diverse automatic fleet from €35/day, no deposit, free delivery & 24hr assistance. Explore Mauritius with Hope Car Rental.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [{ url: "/images/brand/hope-car-rental-logo.png", type: "image/png" }],
  },
};

export const viewport = {
  themeColor: "#0d1b33",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`} suppressHydrationWarning>
      <head>
        {/* Set the theme before paint to avoid a flash of the wrong mode. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;var e=document.documentElement;e.classList.toggle('dark',d);e.style.colorScheme=d?'dark':'light';}catch(e){}})();`,
          }}
        />
      </head>
      <body>
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
