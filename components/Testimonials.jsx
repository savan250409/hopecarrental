"use client";

import React, { useState } from "react";
import { testimonials } from "@/data/site";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function TestimonialCard({ testimonial }) {
  const [imgError, setImgError] = useState(false);

  if (!testimonial) return null;

  const {
    id = "customer",
    name = "Customer",
    quote = "",
    image = "",
    rating = 5,
    role = "Verified customer",
  } = testimonial;

  return (
    <figure className="relative flex h-[390px] sm:h-[410px] w-[300px] sm:w-[350px] shrink-0 flex-col justify-between rounded-3xl bg-white p-6 sm:p-7 text-navy-900 shadow-card ring-1 ring-navy-100/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover dark:bg-navy-900 dark:text-white dark:ring-white/10 select-none">
      {/* Decorative quote mark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-3 right-5 font-display text-7xl font-bold leading-none text-gold-400/20 dark:text-gold-400/10 select-none"
      >
        {"“"}
      </span>

      {/* Top section: Avatar and Stars */}
      <div>
        <div className="relative mx-auto mb-4 h-20 w-20 sm:h-24 sm:w-24 shrink-0">
          <div className="h-full w-full rounded-full p-[3px] bg-gradient-to-tr from-gold-400 via-gold-300 to-lagoon-400 shadow-md">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-navy-100 dark:bg-navy-800">
              {!imgError && image ? (
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gold-400 font-display text-xl font-bold text-navy-950">
                  {name ? name.charAt(0) : "C"}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 5-Star Rating */}
        <div className="mb-2 flex items-center justify-center gap-1 text-gold-400">
          {Array.from({ length: rating }).map((_, i) => (
            <Icon
              key={`star-${id}-${i}`}
              name="star"
              className="h-4 w-4 fill-gold-400 text-gold-400"
            />
          ))}
        </div>
      </div>

      {/* Middle section: Quote text centered in identical space */}
      <div className="my-auto flex flex-1 items-center justify-center px-1">
        <blockquote className="text-center font-display text-sm sm:text-base font-medium leading-relaxed text-navy-800 dark:text-navy-100">
          {`“${quote}”`}
        </blockquote>
      </div>

      {/* Bottom section: Author Name and Verified Badge */}
      <figcaption className="border-t border-navy-100/90 pt-3 text-center dark:border-white/10">
        <span className="block font-semibold text-navy-950 dark:text-white text-sm sm:text-base">
          {name}
        </span>
        <span className="mt-0.5 inline-flex items-center gap-1 text-xs font-medium text-lagoon-600 dark:text-lagoon-300">
          <Icon name="check" className="h-3 w-3 stroke-[2.5] text-lagoon-500" />
          {role}
        </span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const [isPaused, setIsPaused] = useState(false);
  const items = Array.isArray(testimonials)
    ? [...testimonials, ...testimonials]
    : [];

  return (
    <section
      id="feedback"
      aria-label="Customer Feedback"
      className="relative w-full max-w-full scroll-mt-20 overflow-hidden bg-white py-20 transition-colors duration-500 dark:bg-navy-950 sm:py-28"
    >
      <div className="container-px">
        <SectionHeading
          eyebrow="Feedback"
          title="What our customers say"
          subtitle="Real words from travellers who explored Mauritius with Hope Car Rental."
        />

        {/* Controls and indicator */}
        <div className="mt-8 flex items-center justify-center gap-4 text-xs font-medium text-navy-500 dark:text-navy-400">
          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            aria-pressed={isPaused}
            className="inline-flex items-center gap-2 rounded-full border border-navy-200/80 bg-navy-50/60 px-4 py-2 transition-colors hover:border-gold-400 hover:text-navy-900 focus-visible:ring-2 dark:border-white/10 dark:bg-navy-900/60 dark:hover:border-gold-400 dark:hover:text-white cursor-pointer"
          >
            <Icon
              name={isPaused ? "play" : "pause"}
              className="h-3.5 w-3.5 fill-current text-gold-500"
            />
            <span>{isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}</span>
          </button>
          <span className="hidden sm:inline-block text-navy-300 dark:text-navy-700">
            |
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5">
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                isPaused ? "bg-amber-400" : "bg-emerald-500 animate-pulse"
              }`}
              aria-hidden="true"
            />
            {isPaused
              ? "Auto-scroll paused"
              : "Auto-scrolling (hover card to pause)"}
          </span>
        </div>
      </div>

      {/* Marquee Carousel - Right to Left Infinite Auto-Scroll */}
      <div className="group relative mt-12 flex w-full max-w-full overflow-hidden py-4">
        {/* Gradient edge masks */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-navy-950 dark:via-navy-950/80"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-navy-950 dark:via-navy-950/80"
        />

        {/* Track 1 */}
        <div
          className="flex shrink-0 items-stretch gap-6 pr-6 animate-marquee group-hover:[animation-play-state:paused]"
          style={{
            animationDuration: "50s",
            animationPlayState: isPaused ? "paused" : undefined,
          }}
        >
          {items.map((t, idx) => (
            <TestimonialCard
              key={`track1-${t.id || idx}-${idx}`}
              testimonial={t}
            />
          ))}
        </div>

        {/* Track 2 for infinite seamless loop */}
        <div
          aria-hidden="true"
          className="flex shrink-0 items-stretch gap-6 pr-6 animate-marquee group-hover:[animation-play-state:paused]"
          style={{
            animationDuration: "50s",
            animationPlayState: isPaused ? "paused" : undefined,
          }}
        >
          {items.map((t, idx) => (
            <TestimonialCard
              key={`track2-${t.id || idx}-${idx}`}
              testimonial={t}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="container-px">
        <Reveal delay={0.18}>
          <p className="mt-8 text-center text-sm text-navy-500 dark:text-navy-300">
            Rented with us?{" "}
            <a
              href="#contact"
              className="font-semibold text-navy-900 underline underline-offset-4 hover:text-gold-500 transition-colors dark:text-white dark:hover:text-gold-400"
            >
              Share your experience
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
