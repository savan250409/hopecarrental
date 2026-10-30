import { about, pillars } from "@/data/site";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 bg-navy-50 py-20 transition-colors duration-500 dark:bg-navy-900 sm:py-28">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Intro */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow">About Us</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-3xl font-600 text-navy-900 dark:text-white sm:text-4xl">
                Your gateway to adventure in Mauritius
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-base leading-relaxed text-navy-600 dark:text-navy-300">
                {about.intro}
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#fleet" className="btn-dark">
                  Browse our fleet
                  <Icon name="arrow" className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="btn inline-flex border border-navy-200 text-navy-800 hover:bg-navy-100 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
                >
                  Talk to us
                </a>
              </div>
            </Reveal>
          </div>

          {/* Pillars */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {pillars.map((p, i) => (
              <Reveal key={p.key} delay={0.1 + i * 0.08}>
                <article className="group card h-full p-6 hover:-translate-y-1.5 hover:shadow-card-hover">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lagoon-100 text-lagoon-700 transition-colors group-hover:bg-gold-400 group-hover:text-navy-950 dark:bg-lagoon-400/15 dark:text-lagoon-200">
                    <Icon name={p.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-600 text-navy-900 dark:text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-navy-300">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
