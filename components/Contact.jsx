"use client";

import { useState } from "react";
import { business } from "@/data/site";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", privacy: false });
  const [status, setStatus] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    if (!form.privacy) {
      setStatus("privacy");
      return;
    }
    // Frontend-only: open the user's mail client with a prefilled message.
    const subject = encodeURIComponent(`Website enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `${business.emailHref}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  const field =
    "w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 transition focus:border-gold-400 focus:ring-2 focus:ring-gold-200 dark:border-white/10 dark:bg-navy-950 dark:text-white dark:placeholder:text-navy-400 dark:focus:ring-gold-400/30";

  const details = [
    { icon: "pin", label: "Visit us", lines: [business.address.line1, business.address.line2, business.address.country] },
    { icon: "phone", label: "Call us", lines: [business.phone], href: business.phoneHref },
    { icon: "mail", label: "Email us", lines: [business.email], href: business.emailHref },
    { icon: "whatsapp", label: "WhatsApp", lines: ["Chat with us"], href: business.whatsappHref },
  ];

  return (
    <section id="contact" className="relative scroll-mt-20 bg-white py-20 transition-colors duration-500 dark:bg-navy-950 sm:py-28">
      <div className="container-px">
        <SectionHeading
          eyebrow="Contact"
          title="We are happy to assist you"
          subtitle="Reach out any time — our team is ready to help you plan the perfect trip around Mauritius."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Details */}
          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {details.map((d, i) => {
                const inner = (
                  <div className="group flex h-full items-start gap-4 rounded-2xl border border-navy-100 bg-navy-50/60 p-5 transition-all hover:-translate-y-1 hover:border-gold-200 hover:bg-white hover:shadow-card dark:border-white/10 dark:bg-navy-900 dark:hover:border-gold-400/30 dark:hover:bg-navy-900">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-900 text-gold-300 transition-colors group-hover:bg-gold-400 group-hover:text-navy-950 dark:bg-white/10">
                      <Icon name={d.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-navy-400">
                        {d.label}
                      </p>
                      {d.lines.map((l) => (
                        <p key={l} className="text-sm font-medium text-navy-800 dark:text-navy-100">
                          {l}
                        </p>
                      ))}
                    </div>
                  </div>
                );
                return (
                  <Reveal key={d.label} delay={i * 0.06}>
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.icon === "whatsapp" ? "_blank" : undefined}
                        rel={d.icon === "whatsapp" ? "noopener noreferrer" : undefined}
                        className="block h-full"
                      >
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.25}>
              <div className="mt-4 overflow-hidden rounded-2xl border border-navy-100 dark:border-white/10">
                <iframe
                  title="Hope Car Rental location — Grand Baie, Mauritius"
                  src="https://www.google.com/maps?q=Pereybere%20Grand%20Baie%20Mauritius&output=embed"
                  className="h-56 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          {/* Mini contact form */}
          <Reveal delay={0.12}>
            <form onSubmit={submit} noValidate className="rounded-3xl bg-navy-50 p-6 shadow-card dark:bg-navy-900 dark:ring-1 dark:ring-white/10 sm:p-8">
              <h3 className="font-display text-xl font-600 text-navy-900 dark:text-white">Send a message</h3>
              <p className="mt-1 text-sm text-navy-500 dark:text-navy-300">We usually reply within a day.</p>
              <div className="mt-5 space-y-4">
                <input
                  className={field}
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  aria-label="Your name"
                />
                <input
                  className={field}
                  type="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  aria-label="Your email"
                />
                <textarea
                  className={`${field} resize-none`}
                  rows={4}
                  placeholder="How can we help?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  aria-label="Your message"
                />
                <label className="flex items-start gap-3 text-sm text-navy-600 dark:text-navy-300">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-navy-300 text-gold-500 focus:ring-gold-400 dark:border-white/20 dark:bg-navy-950"
                    checked={form.privacy}
                    onChange={(e) => setForm({ ...form, privacy: e.target.checked })}
                  />
                  <span>I have read and understand the privacy policy.</span>
                </label>

                {status === "error" && (
                  <p className="text-xs font-medium text-red-600">Please fill in all fields.</p>
                )}
                {status === "privacy" && (
                  <p className="text-xs font-medium text-red-600">
                    Please accept the privacy policy.
                  </p>
                )}
                {status === "sent" && (
                  <p className="text-xs font-medium text-lagoon-700">
                    Opening your email app to send the message…
                  </p>
                )}

                <button type="submit" className="btn-primary w-full">
                  Send
                  <Icon name="arrow" className="h-4 w-4" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
