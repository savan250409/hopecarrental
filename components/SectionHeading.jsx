import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  const alignCls = align === "center" ? "mx-auto text-center items-center" : "text-left items-start";
  return (
    <div className={`flex max-w-2xl flex-col ${alignCls}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={`mt-4 font-display text-3xl font-600 sm:text-4xl ${
            light ? "text-white" : "text-navy-900 dark:text-white"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.16}>
          <p
            className={`mt-4 text-base leading-relaxed ${
              light ? "text-white/70" : "text-navy-600 dark:text-navy-300"
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
