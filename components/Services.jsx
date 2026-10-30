import { categories, perks, servicesIntro } from "@/data/site";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 bg-white py-20 transition-colors duration-500 dark:bg-navy-950 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Services"
          title="A category for every journey"
          subtitle={servicesIntro}
        />

        {/* Pricing cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <Reveal key={c.id} delay={(i % 3) * 0.08}>
              <article className="group card flex h-full flex-col overflow-hidden hover:-translate-y-1.5 hover:shadow-card-hover">
                <div
                  className="relative flex h-40 items-center justify-center overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${c.accent}14, ${c.accent}33)` }}
                >
                  <div className="flex h-32 w-4/5 items-center justify-center transition-transform duration-500 group-hover:scale-105">
                    <img
                      src={c.image || "/images/cars/nissan-micra.jpg"}
                      alt={`${c.name} category car - Hope Car Rental Mauritius`}
                      className="max-h-28 w-auto max-w-full object-contain drop-shadow-md rounded-md"
                      loading="lazy"
                    />
                  </div>
                  <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy-800 shadow-sm dark:bg-navy-950/80 dark:text-white">
                    {c.seats} seats
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-600 text-navy-900 dark:text-white">{c.name}</h3>
                    <p className="text-right">
                      <span className="block text-[0.65rem] uppercase tracking-wide text-navy-400 dark:text-navy-400">
                        From
                      </span>
                      <span className="font-display text-xl font-700 text-gold-600 dark:text-gold-300">€{c.from}</span>
                      <span className="text-xs text-navy-400"> /day</span>
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-navy-600 dark:text-navy-300">{c.blurb}</p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {c.cars.slice(0, 4).map((car) => (
                      <li
                        key={car}
                        className="rounded-full bg-navy-50 px-2.5 py-1 text-[0.7rem] font-medium text-navy-600 dark:bg-white/5 dark:text-navy-200"
                      >
                        {car}
                      </li>
                    ))}
                    {c.cars.length > 4 && (
                      <li className="rounded-full bg-navy-50 px-2.5 py-1 text-[0.7rem] font-medium text-navy-500 dark:bg-white/5 dark:text-navy-300">
                        +{c.cars.length - 4} more
                      </li>
                    )}
                  </ul>

                  <a
                    href="#fleet"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 transition-colors hover:text-gold-600 dark:text-navy-100 dark:hover:text-gold-300"
                  >
                    View {c.name} fleet
                    <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Perks band */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="flex h-full items-start gap-5 rounded-3xl bg-gradient-to-br from-navy-50 to-white p-7 text-navy-800 ring-1 ring-navy-100 shadow-card dark:from-navy-900 dark:to-navy-800 dark:text-white dark:ring-0 dark:shadow-none">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold-400 text-navy-950">
                  <Icon name={p.icon} className="h-7 w-7" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-lg font-600 text-navy-900 dark:text-white">{p.title}</h3>
                    <span className="rounded-full bg-lagoon-100 px-2 py-0.5 text-[0.65rem] font-bold uppercase tracking-wide text-lagoon-700 dark:bg-lagoon-400/20 dark:text-lagoon-200">
                      {p.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600 dark:text-white/70">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
