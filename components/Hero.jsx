"use client";

import { motion, useReducedMotion } from "framer-motion";
import { categories } from "@/data/site";
import Icon from "./Icon";
import TropicalWaves from "./TropicalWaves";

const stats = [
  { value: "9", label: "Vehicle categories" },
  { value: "€35", label: "From, per day" },
  { value: "24/7", label: "Assistance" },
  { value: "€0", label: "Deposit" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const anim = reduce ? {} : { variants: container, initial: "hidden", animate: "show" };
  const childAnim = reduce ? {} : { variants: item };

  return (
    <section id="home" className="relative overflow-hidden bg-white pt-28 transition-colors duration-500 dark:bg-navy-950 lg:pt-36">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-lagoon-50 via-white to-gold-50 dark:from-navy-950 dark:via-navy-900 dark:to-navy-800" />
      <div className="absolute inset-0 bg-hero-grid-light opacity-70 [background-size:26px_26px] dark:bg-hero-grid dark:opacity-60" />
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-lagoon-400/20 blur-3xl dark:bg-lagoon-500/20" />
      <div className="absolute -right-10 top-40 h-96 w-96 rounded-full bg-gold-400/20 blur-3xl dark:bg-gold-500/20" />

      <div className="container-px relative grid items-center gap-12 pb-28 lg:grid-cols-2 lg:gap-8 lg:pb-36">
        <motion.div {...anim} className="relative z-10 text-center lg:text-left">
          <motion.span {...childAnim} className="eyebrow">
            <Icon name="sun" className="h-4 w-4" /> Car rental in Mauritius
          </motion.span>

          <motion.h1
            {...childAnim}
            className="mt-5 font-display text-4xl font-600 leading-[1.05] text-navy-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            Reliable Rides,
            <span className="block bg-gradient-to-r from-gold-500 via-gold-600 to-lagoon-600 bg-clip-text text-transparent dark:from-gold-300 dark:via-gold-400 dark:to-lagoon-300">
              Remarkable Experiences
            </span>
          </motion.h1>

          <motion.p
            {...childAnim}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-navy-600 dark:text-white/75 lg:mx-0"
          >
            Discover every corner of the island in comfort. A diverse, meticulously
            maintained automatic fleet — delivered to your door with no deposit and
            round-the-clock support.
          </motion.p>

          <motion.div {...childAnim} className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a href="#fleet" className="btn-primary">
              Explore the fleet
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <a href="#booking" className="btn-ghost">
              Book your ride
            </a>
          </motion.div>

          {/* Trust row */}
          <motion.dl
            {...childAnim}
            className="mx-auto mt-12 grid max-w-lg grid-cols-4 gap-4 lg:mx-0"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <dt className="font-display text-2xl font-600 text-gold-600 dark:text-gold-300 sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-[0.7rem] uppercase tracking-wide text-navy-500 dark:text-white/55">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Hero visual */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          animate={reduce ? {} : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative z-10"
        >
          <div className="relative mx-auto max-w-lg">
            <div className="absolute inset-0 -rotate-3 rounded-[2.5rem] bg-gradient-to-br from-lagoon-400/30 to-gold-400/20 blur-xl" />
            <div className="relative rounded-[2.5rem] border border-navy-200/70 bg-white/60 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
              <div className={`relative flex h-56 sm:h-64 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-white/95 via-navy-50/50 to-navy-100/30 p-5 shadow-inner dark:from-white/10 dark:via-white/5 dark:to-transparent ${reduce ? "" : "animate-float"}`}>
                <img
                  src="/images/cars/nissan-micra.jpg"
                  alt="Nissan Micra - Hope Car Rental Mauritius"
                  className="max-h-52 w-auto max-w-full object-contain drop-shadow-xl transition-transform duration-500 hover:scale-105"
                  loading="eager"
                />
              </div>
              <div className="mt-4 flex items-center justify-between rounded-2xl bg-navy-50 px-5 py-4 dark:bg-navy-950/60">
                <div>
                  <p className="text-xs uppercase tracking-wide text-navy-500 dark:text-white/50">Nissan Micra • Today from</p>
                  <p className="font-display text-2xl font-600 text-navy-900 dark:text-white">€35 / day</p>
                </div>
                <a href="#booking" className="btn-primary !px-5 !py-2.5">
                  Reserve
                </a>
              </div>
            </div>

            {/* Floating category chips */}
            {!reduce && (
              <>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -left-6 top-6 hidden rounded-2xl bg-white px-4 py-3 shadow-card sm:block"
                >
                  <p className="text-xs font-semibold text-navy-900">No deposit</p>
                  <p className="text-[0.65rem] text-navy-500">Free delivery</p>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-4 bottom-24 hidden rounded-2xl bg-white px-4 py-3 shadow-card sm:block"
                >
                  <div className="flex items-center gap-1 text-gold-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon key={i} name="star" className="h-3.5 w-3.5" />
                    ))}
                  </div>
                  <p className="mt-1 text-[0.65rem] text-navy-500">Loved by travellers</p>
                </motion.div>
              </>
            )}
          </div>
        </motion.div>
      </div>

      {/* Category ticker */}
      <div className="relative z-10 border-t border-navy-200/70 bg-white/40 dark:border-white/10 dark:bg-navy-950/40">
        <div className="container-px flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-4 text-xs font-medium uppercase tracking-wide text-navy-500 dark:text-white/50">
          {categories.map((c) => (
            <a key={c.id} href="#fleet" className="transition-colors hover:text-gold-600 dark:hover:text-gold-300">
              {c.name}
            </a>
          ))}
        </div>
      </div>

      <TropicalWaves className="relative z-10 block h-16 w-full text-navy-50 transition-colors duration-500 dark:text-navy-900 sm:h-20" />
    </section>
  );
}
