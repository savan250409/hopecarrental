"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { business, categories } from "@/data/site";
import Icon from "./Icon";
import Reveal from "./Reveal";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  category: "",
  pickup: "",
  dropoff: "",
  location: "",
  message: "",
  privacy: false,
};

export default function Booking() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.phone.trim()) e.phone = "A contact number helps us reach you.";
    if (!form.category) e.category = "Choose a vehicle category.";
    if (!form.pickup) e.pickup = "Select a pick-up date.";
    if (form.dropoff && form.pickup && form.dropoff < form.pickup)
      e.dropoff = "Drop-off must be after pick-up.";
    if (!form.privacy) e.privacy = "Please accept the privacy policy to continue.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function whatsappText() {
    const cat = categories.find((c) => c.id === form.category);
    return encodeURIComponent(
      `Hello Hope Car Rental, I'd like to enquire about a booking.%0A` +
        `Name: ${form.name}%0A` +
        `Category: ${cat ? cat.label : "-"}%0A` +
        `Pick-up: ${form.pickup || "-"}%0A` +
        `Drop-off: ${form.dropoff || "-"}%0A` +
        `Location: ${form.location || "-"}%0A` +
        `Phone: ${form.phone}%0A` +
        `Email: ${form.email}%0A` +
        `Message: ${form.message || "-"}`
    ).replace(/%2520/g, "%20");
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    if (!validate()) return;
    // Frontend-only: no real booking is processed. We capture the enquiry and
    // offer direct channels (WhatsApp / email) so the request actually reaches
    // the team. Nothing is sent to a server.
    setSent(true);
  }

  const field =
    "w-full rounded-xl border border-navy-200 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 transition focus:border-gold-400 focus:ring-2 focus:ring-gold-200 dark:border-white/10 dark:bg-navy-900 dark:text-white dark:placeholder:text-navy-400 dark:focus:ring-gold-400/30 dark:[color-scheme:dark]";

  return (
    <section id="booking" className="relative scroll-mt-20 overflow-hidden bg-navy-50 py-20 transition-colors duration-500 dark:bg-navy-900 sm:py-28">
      <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-gold-400/15 blur-3xl dark:bg-gold-500/15" />
      <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-lagoon-400/15 blur-3xl dark:bg-lagoon-500/15" />

      <div className="container-px relative grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy */}
        <div className="lg:pt-6">
          <Reveal>
            <span className="eyebrow">Booking</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 font-display text-3xl font-600 text-navy-900 dark:text-white sm:text-4xl">
              Send your request
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-4 max-w-md text-base leading-relaxed text-navy-600 dark:text-white/70">
              Tell us what you need and our friendly team will confirm availability and
              guide you from booking to drop-off. No deposit, free delivery and 24-hour
              assistance — included with every rental.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <ul className="mt-8 space-y-3">
              {[
                "No deposit required",
                "Free delivery & collection",
                "24hr mechanical assistance",
                "Automatic transmission fleet",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-navy-700 dark:text-white/80">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-lagoon-100 text-lagoon-700 dark:bg-lagoon-400/20 dark:text-lagoon-200">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={business.phoneHref} className="btn-ghost">
                <Icon name="phone" className="h-4 w-4" /> {business.phone}
              </a>
              <a href={business.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <Icon name="whatsapp" className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </Reveal>
        </div>

        {/* Form card */}
        <Reveal delay={0.1}>
          <div className="rounded-3xl bg-white p-6 shadow-card dark:bg-navy-950 dark:ring-1 dark:ring-white/10 sm:p-8">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-lagoon-100 text-lagoon-700">
                    <Icon name="check" className="h-9 w-9" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-600 text-navy-900 dark:text-white">
                    Request ready to send
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-navy-600 dark:text-navy-300">
                    Thanks, {form.name.split(" ")[0] || "there"}! This is an enquiry, not a
                    confirmed booking yet. Send it to our team through one of the channels
                    below and we&apos;ll confirm availability and pricing.
                  </p>
                  <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
                    <a
                      href={`${business.whatsappHref}?text=${whatsappText()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <Icon name="whatsapp" className="h-4 w-4" /> Send via WhatsApp
                    </a>
                    <a href={business.emailHref} className="btn-dark">
                      <Icon name="mail" className="h-4 w-4" /> Email us
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setForm(emptyForm);
                      setSent(false);
                    }}
                    className="mt-5 text-sm font-semibold text-navy-500 underline-offset-4 hover:text-navy-800 hover:underline dark:text-navy-300 dark:hover:text-white"
                  >
                    Start a new request
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full name" error={errors.name} htmlFor="bk-name">
                      <input
                        id="bk-name"
                        className={field}
                        placeholder="Jane Doe"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                      />
                    </Field>
                    <Field label="Email" error={errors.email} htmlFor="bk-email">
                      <input
                        id="bk-email"
                        type="email"
                        className={field}
                        placeholder="you@email.com"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Phone" error={errors.phone} htmlFor="bk-phone">
                      <input
                        id="bk-phone"
                        className={field}
                        placeholder="+230 ..."
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                      />
                    </Field>
                    <Field label="Vehicle category" error={errors.category} htmlFor="bk-cat">
                      <select
                        id="bk-cat"
                        className={field}
                        value={form.category}
                        onChange={(e) => update("category", e.target.value)}
                      >
                        <option value="">Select a category</option>
                        {categories.map((c) => (
                          <option key={c.id} value={c.id}>
                            {c.name} — from €{c.from}/day
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Pick-up date" error={errors.pickup} htmlFor="bk-pickup">
                      <input
                        id="bk-pickup"
                        type="date"
                        min={today}
                        className={field}
                        value={form.pickup}
                        onChange={(e) => update("pickup", e.target.value)}
                      />
                    </Field>
                    <Field label="Drop-off date" error={errors.dropoff} htmlFor="bk-dropoff">
                      <input
                        id="bk-dropoff"
                        type="date"
                        min={form.pickup || today}
                        className={field}
                        value={form.dropoff}
                        onChange={(e) => update("dropoff", e.target.value)}
                      />
                    </Field>
                  </div>

                  <Field label="Delivery location (optional)" htmlFor="bk-loc">
                    <input
                      id="bk-loc"
                      className={field}
                      placeholder="Hotel, airport or address"
                      value={form.location}
                      onChange={(e) => update("location", e.target.value)}
                    />
                  </Field>

                  <Field label="Message (optional)" htmlFor="bk-msg">
                    <textarea
                      id="bk-msg"
                      rows={3}
                      className={`${field} resize-none`}
                      placeholder="Anything else we should know?"
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                    />
                  </Field>

                  <div>
                    <label className="flex items-start gap-3 text-sm text-navy-600 dark:text-navy-300">
                      <input
                        type="checkbox"
                        className="mt-0.5 h-4 w-4 rounded border-navy-300 text-gold-500 focus:ring-gold-400 dark:border-white/20 dark:bg-navy-900"
                        checked={form.privacy}
                        onChange={(e) => update("privacy", e.target.checked)}
                      />
                      <span>
                        I have read and understand the{" "}
                        <a href="#privacy" className="font-semibold text-navy-900 underline underline-offset-2 dark:text-white">
                          privacy policy
                        </a>
                        .
                      </span>
                    </label>
                    {errors.privacy && (
                      <p className="mt-1 text-xs font-medium text-red-600">{errors.privacy}</p>
                    )}
                  </div>

                  <button type="submit" className="btn-primary w-full">
                    Send your request
                    <Icon name="arrow" className="h-4 w-4" />
                  </button>
                  <p className="text-center text-xs text-navy-400 dark:text-navy-500">
                    This form prepares an enquiry — no payment is taken and no booking is
                    confirmed until our team replies.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, error, htmlFor, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-navy-700 dark:text-navy-200">
        {label}
      </label>
      {children}
      {error && <p className="mt-1 text-xs font-medium text-red-600">{error}</p>}
    </div>
  );
}
