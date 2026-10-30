"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { categories, carImages, fleetFacts } from "@/data/site";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

export default function FleetBrowser() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const reduce = useReducedMotion();
  const active = categories.find((c) => c.id === activeId) || categories[0];

  return (
    <section
      id="fleet"
      className="relative scroll-mt-20 overflow-hidden bg-navy-50/70 py-20 transition-colors duration-500 dark:bg-navy-950 sm:py-28"
    >
      {/* Ambient background glows for resort-luxury atmosphere in both light & dark mode */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-lagoon-400/10 blur-3xl dark:bg-lagoon-500/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-gold-400/10 blur-3xl dark:bg-gold-500/15"
      />

      <div className="container-px relative">
        <SectionHeading
          eyebrow="Our Fleet"
          title="Find the right car for your trip"
          subtitle="Browse by category. Every vehicle is offered with automatic transmission, no deposit and free delivery and collection."
        />

        {/* Category tabs - Segmented pill navigation */}
        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Vehicle categories"
            className="inline-flex max-w-full flex-wrap items-center justify-center gap-1.5 rounded-2xl border border-navy-200/80 bg-white/80 p-1.5 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-navy-900/80 sm:rounded-full"
          >
            {categories.map((c) => {
              const selected = c.id === activeId;
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`panel-${c.id}`}
                  id={`tab-${c.id}`}
                  onClick={() => setActiveId(c.id)}
                  className={`relative rounded-xl px-4 py-2 text-xs font-semibold transition-all duration-200 sm:rounded-full sm:text-sm ${
                    selected
                      ? "text-navy-950"
                      : "text-navy-600 hover:bg-navy-100/70 hover:text-navy-950 dark:text-navy-300 dark:hover:bg-white/10 dark:hover:text-white"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="fleet-pill"
                      className="absolute inset-0 rounded-xl bg-gold-400 shadow-sm dark:shadow-glow sm:rounded-full"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{c.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Panel */}
        <div
          role="tabpanel"
          id={`panel-${active.id}`}
          aria-labelledby={`tab-${active.id}`}
          className="mt-10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? {} : { opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Category summary header banner */}
              <div className="mb-8 rounded-3xl border border-navy-200/80 bg-white/95 p-6 shadow-card backdrop-blur-sm transition-colors duration-500 dark:border-white/10 dark:bg-navy-900/90 dark:shadow-none sm:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                  {/* Left: Heading & description */}
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-2xl font-bold tracking-tight text-navy-950 dark:text-white sm:text-3xl">
                        {active.label}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-lagoon-200/70 bg-lagoon-50 px-3 py-1 text-xs font-semibold text-lagoon-800 dark:border-lagoon-400/20 dark:bg-lagoon-400/15 dark:text-lagoon-200">
                        {active.cars.length} {active.cars.length === 1 ? "Model" : "Models"} Available
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-200 sm:text-base">
                      {active.blurb}
                    </p>
                  </div>

                  {/* Right: Key Specs and Pricing */}
                  <div className="flex flex-wrap items-center gap-4 border-t border-navy-100 pt-4 dark:border-white/10 sm:gap-6 lg:border-t-0 lg:pt-0">
                    <div className="flex items-center gap-2 rounded-xl border border-navy-200/60 bg-navy-50/80 px-3.5 py-2 text-navy-800 dark:border-white/5 dark:bg-white/5 dark:text-navy-100">
                      <Icon name="seat" className="h-4 w-4 text-lagoon-600 dark:text-lagoon-400" />
                      <span className="text-xs font-semibold sm:text-sm">{active.seats} Seats</span>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl border border-navy-200/60 bg-navy-50/80 px-3.5 py-2 text-navy-800 dark:border-white/5 dark:bg-white/5 dark:text-navy-100">
                      <Icon name="bag" className="h-4 w-4 text-lagoon-600 dark:text-lagoon-400" />
                      <span className="text-xs font-semibold sm:text-sm">{active.bags} Bags</span>
                    </div>

                    <div className="border-l border-navy-200 pl-4 dark:border-white/10">
                      <span className="block text-[0.68rem] font-bold uppercase tracking-wider text-navy-400 dark:text-navy-400">
                        Starting from
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-3xl font-bold text-gold-600 dark:text-gold-400">
                          €{active.from}
                        </span>
                        <span className="text-xs font-medium text-navy-500 dark:text-navy-400">/day</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cars Grid */}
              <motion.ul
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                initial={reduce ? false : "hidden"}
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.05 } } }}
              >
                {active.cars.map((car) => (
                  <motion.li
                    key={car}
                    className="flex h-full flex-col"
                    variants={{
                      hidden: { opacity: 0, y: 16 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
                      },
                    }}
                  >
                    <article className="group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-navy-200/80 bg-white shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover dark:border-white/10 dark:bg-navy-900/90 dark:shadow-none dark:hover:border-gold-400/40">
                      {/* Car Visual Stage */}
                      <div
                        className="relative flex h-48 items-center justify-center overflow-hidden border-b border-navy-100/80 transition-colors dark:border-white/5 sm:h-52"
                        style={{
                          background: `radial-gradient(ellipse at 50% 60%, ${active.accent}20 0%, ${active.accent}08 65%, transparent 100%)`,
                        }}
                      >
                        {/* Floor studio line */}
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute bottom-4 h-px w-3/4 bg-gradient-to-r from-transparent via-navy-300/40 to-transparent dark:via-white/20"
                        />

                        {/* Category tag (top left) */}
                        <div className="absolute left-3.5 top-3.5 z-10">
                          <span className="inline-flex items-center rounded-full border border-navy-200/70 bg-white/90 px-2.5 py-1 text-[0.7rem] font-semibold text-navy-800 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-navy-950/85 dark:text-navy-100">
                            {active.name}
                          </span>
                        </div>

                        {/* Price tag (top right) */}
                        <div className="absolute right-3.5 top-3.5 z-10">
                          <span className="inline-flex items-baseline gap-0.5 rounded-full border border-navy-900/10 bg-navy-950 px-3 py-1 text-xs font-bold text-white shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/95 dark:text-navy-950">
                            €{active.from}
                            <span className="text-[0.65rem] font-normal text-navy-200 dark:text-navy-600">/day</span>
                          </span>
                        </div>

                        {/* Real Car Image from hopecarrental.mu */}
                        <div className="relative z-0 flex h-36 w-full items-center justify-center px-4 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-0.5">
                          <img
                            src={carImages[car] || active.image || "/images/cars/nissan-micra.jpg"}
                            alt={`${car} rental in Mauritius - Hope Car Rental`}
                            className="max-h-32 w-auto max-w-[90%] object-contain drop-shadow-md rounded-md"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Card Content & Action Area */}
                      <div className="flex flex-1 flex-col justify-between gap-5 p-5 sm:p-6">
                        {/* Upper: Title & Spec Chips */}
                        <div>
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h4 className="font-display text-xl font-bold text-navy-950 transition-colors group-hover:text-gold-600 dark:text-white dark:group-hover:text-gold-400">
                                {car}
                              </h4>
                              <p className="mt-1 text-xs text-navy-500 dark:text-navy-300">
                                Automatic • Free delivery & collection
                              </p>
                            </div>
                          </div>

                          {/* Specification Chips */}
                          <div className="mt-4 grid grid-cols-3 gap-2">
                            <div className="flex items-center gap-1.5 rounded-xl border border-navy-100 bg-navy-50/90 px-2.5 py-2 text-xs font-medium text-navy-700 transition-colors dark:border-white/5 dark:bg-white/5 dark:text-navy-200">
                              <Icon name="gear" className="h-3.5 w-3.5 shrink-0 text-lagoon-600 dark:text-lagoon-400" />
                              <span className="truncate">Automatic</span>
                            </div>

                            <div className="flex items-center gap-1.5 rounded-xl border border-navy-100 bg-navy-50/90 px-2.5 py-2 text-xs font-medium text-navy-700 transition-colors dark:border-white/5 dark:bg-white/5 dark:text-navy-200">
                              <Icon name="seat" className="h-3.5 w-3.5 shrink-0 text-lagoon-600 dark:text-lagoon-400" />
                              <span className="truncate">{active.seats} Seats</span>
                            </div>

                            <div className="flex items-center gap-1.5 rounded-xl border border-navy-100 bg-navy-50/90 px-2.5 py-2 text-xs font-medium text-navy-700 transition-colors dark:border-white/5 dark:bg-white/5 dark:text-navy-200">
                              <Icon name="bag" className="h-3.5 w-3.5 shrink-0 text-lagoon-600 dark:text-lagoon-400" />
                              <span className="truncate">{active.bags} Bags</span>
                            </div>
                          </div>
                        </div>

                        {/* Lower: Dedicated Booking Button */}
                        <div className="pt-2">
                          <a
                            href={`#booking?car=${encodeURIComponent(car)}`}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy-950 px-4 py-3 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:bg-gold-500 hover:text-navy-950 hover:shadow-md focus-visible:ring-2 focus-visible:ring-gold-400 active:scale-[0.98] dark:bg-gold-400 dark:text-navy-950 dark:hover:bg-gold-300 dark:shadow-glow sm:text-sm"
                            data-car={car}
                            data-category={active.name}
                          >
                            <span>Enquire to book</span>
                            <Icon
                              name="arrow"
                              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                            />
                          </a>
                        </div>
                      </div>
                    </article>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Included facts / trust badges */}
              <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
                {[
                  { text: fleetFacts.transmission, icon: "gear" },
                  { text: fleetFacts.deposit, icon: "shield" },
                  { text: fleetFacts.delivery, icon: "check" },
                ].map((f) => (
                  <div
                    key={f.text}
                    className="inline-flex items-center gap-2.5 rounded-full border border-navy-200/80 bg-white/80 px-4 py-2 text-xs font-medium text-navy-700 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-navy-900/80 dark:text-navy-200 sm:text-sm"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lagoon-100 text-lagoon-700 dark:bg-lagoon-900/60 dark:text-lagoon-300">
                      <Icon name={f.icon} className="h-3 w-3" />
                    </span>
                    <span>{f.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

