"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { business, nav } from "@/data/site";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 py-2 shadow-lg backdrop-blur-md dark:bg-navy-950/90"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container-px flex items-center justify-between" aria-label="Primary">
        <a href="#home" className="group flex items-center gap-2.5" aria-label={`${business.name} home`}>
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gold-400 text-navy-950 shadow-glow">
            <Icon name="fleet" className="h-6 w-6" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-600 text-navy-900 dark:text-white">Hope Car Rental</span>
            <span className="text-[0.62rem] uppercase tracking-[0.25em] text-gold-600 dark:text-gold-300">
              Mauritius
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-gold-600 dark:text-gold-300"
                      : "text-navy-600 hover:text-navy-900 dark:text-white/80 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gold-400"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={business.phoneHref} className="text-sm font-semibold text-navy-700 hover:text-navy-900 dark:text-white/90 dark:hover:text-white">
            {business.phone}
          </a>
          <ThemeToggle />
          <a href="#booking" className="btn-primary">
            Book Now
            <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy-900/5 text-navy-800 backdrop-blur dark:bg-white/10 dark:text-white"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <div className="container-px mt-2 rounded-3xl bg-white p-4 shadow-xl ring-1 ring-navy-100 backdrop-blur dark:bg-navy-900/95 dark:ring-white/10">
              <ul className="flex flex-col">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-base font-medium text-navy-800 hover:bg-navy-100 dark:text-white/90 dark:hover:bg-white/10"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="btn-primary mt-3 w-full"
              >
                Book Now
                <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a
                href={business.phoneHref}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-full border border-navy-200 px-6 py-3 text-sm font-semibold text-navy-800 dark:border-white/20 dark:text-white"
              >
                <Icon name="phone" className="h-4 w-4" /> {business.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
