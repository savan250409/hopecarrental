"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/data/site";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative scroll-mt-20 bg-navy-50 py-20 transition-colors duration-500 dark:bg-navy-900 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="FAQ"
          title="Good to know before you book"
          subtitle="Quick answers to the questions travellers ask us most."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl bg-white shadow-card dark:bg-navy-950 dark:ring-1 dark:ring-white/10">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-display text-base font-600 text-navy-900 dark:text-white sm:text-lg">
                        {item.q}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-700 transition-transform duration-300 dark:bg-white/10 dark:text-navy-200 ${
                          isOpen ? "rotate-45 bg-gold-400 text-navy-950 dark:bg-gold-400 dark:text-navy-950" : ""
                        }`}
                      >
                        <Icon name="plus" className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-navy-600 dark:text-navy-300">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
