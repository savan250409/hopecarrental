"use client";

import { business, categories, nav } from "@/data/site";
import Icon from "./Icon";
import TropicalWaves from "./TropicalWaves";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-navy-100 text-navy-700 transition-colors duration-500 dark:bg-navy-950 dark:text-white">
      <TropicalWaves flip className="block h-12 w-full text-navy-900/5 dark:text-white/5" />
      <div className="container-px grid gap-10 pb-10 pt-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <img
              src="/images/brand/hope-car-rental-logo.png"
              alt="Hope Car Rental Mauritius"
              className="h-11 w-auto object-contain mix-blend-multiply dark:mix-blend-normal"
            />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-500 dark:text-white/60">
            Reliable rides and remarkable experiences across Mauritius. Your trusted
            partner for exploring the island.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={business.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900/5 text-navy-700 transition-colors hover:bg-gold-400 hover:text-navy-950 dark:bg-white/10 dark:text-white"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
            </a>
            <a
              href={business.phoneHref}
              aria-label="Call us"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900/5 text-navy-700 transition-colors hover:bg-gold-400 hover:text-navy-950 dark:bg-white/10 dark:text-white"
            >
              <Icon name="phone" className="h-5 w-5" />
            </a>
            <a
              href={business.emailHref}
              aria-label="Email us"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900/5 text-navy-700 transition-colors hover:bg-gold-400 hover:text-navy-950 dark:bg-white/10 dark:text-white"
            >
              <Icon name="mail" className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Explore */}
        <nav aria-label="Footer">
          <h3 className="font-display text-sm font-600 uppercase tracking-wide text-navy-900 dark:text-white/90">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-sm text-navy-600 transition-colors hover:text-gold-600 dark:text-white/60 dark:hover:text-gold-300">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Fleet */}
        <div>
          <h3 className="font-display text-sm font-600 uppercase tracking-wide text-navy-900 dark:text-white/90">
            Our Fleet
          </h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {categories.map((c) => (
              <li key={c.id}>
                <a href="#fleet" className="text-sm text-navy-600 transition-colors hover:text-gold-600 dark:text-white/60 dark:hover:text-gold-300">
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-display text-sm font-600 uppercase tracking-wide text-navy-900 dark:text-white/90">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-600 dark:text-white/60">
            <li className="flex items-start gap-2.5">
              <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold-600 dark:text-gold-300" />
              <span>
                {business.address.line1}
                <br />
                {business.address.line2}
              </span>
            </li>
            <li>
              <a href={business.phoneHref} className="flex items-center gap-2.5 hover:text-gold-600 dark:hover:text-gold-300">
                <Icon name="phone" className="h-4 w-4 shrink-0 text-gold-600 dark:text-gold-300" />
                {business.phone}
              </a>
            </li>
            <li>
              <a href={business.emailHref} className="flex items-center gap-2.5 break-all hover:text-gold-600 dark:hover:text-gold-300">
                <Icon name="mail" className="h-4 w-4 shrink-0 text-gold-600 dark:text-gold-300" />
                {business.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-200 dark:border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-5 text-xs text-navy-500 dark:text-white/50 sm:flex-row">
          <p>
            © {year} {business.domain}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#legal" className="hover:text-navy-900 dark:hover:text-white">Legal Notice</a>
            <button type="button" onClick={() => window.dispatchEvent(new Event("privacy:open"))} className="hover:text-navy-900 dark:hover:text-white">Privacy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
