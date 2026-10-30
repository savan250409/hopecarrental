"use client";

import { useEffect } from "react";
import { business } from "@/data/site";
import Icon from "./Icon";

export default function PrivacyPolicyDialog({ onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-title"
        className="flex max-h-[min(85vh,760px)] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-navy-900"
      >
        <header className="flex items-start justify-between gap-4 border-b border-navy-100 px-6 py-5 dark:border-white/10 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lagoon-700 dark:text-lagoon-300">Hope Car Rental Mauritius</p>
            <h2 id="privacy-title" className="mt-1 font-display text-2xl font-semibold text-navy-950 dark:text-white">Privacy policy</h2>
            <p className="mt-1 text-xs text-navy-500 dark:text-navy-300">How this website handles your information</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close privacy policy" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-700 transition-colors hover:bg-navy-100 dark:bg-white/10 dark:text-white dark:hover:bg-white/20">
            <Icon name="close" className="h-5 w-5" />
          </button>
        </header>

        <div className="overflow-y-auto px-6 py-5 text-sm leading-relaxed text-navy-700 dark:text-navy-200 sm:px-8">
          <p>
            Hope Car Rental respects your privacy. This notice explains what information you enter on this website, what happens when you choose to send an enquiry, and how to contact us about your information.
          </p>

          <h3 className="mt-5 font-semibold text-navy-950 dark:text-white">Information you provide</h3>
          <p className="mt-1">
            The booking form may ask for your name, email address, phone number, vehicle category and model, pick-up and drop-off dates, delivery location, and an optional message. The contact form asks for your name, email address, and message.
          </p>

          <h3 className="mt-5 font-semibold text-navy-950 dark:text-white">How enquiries are sent</h3>
          <p className="mt-1">
            The forms do not submit information to a booking database on this website. Your entries remain in the page while you fill in the form. After you submit, you choose whether to open WhatsApp or your email app with a prepared message. Information is sent only if you complete that action. WhatsApp, your email provider, and the receiving mailbox then handle the message under their own privacy terms.
          </p>

          <h3 className="mt-5 font-semibold text-navy-950 dark:text-white">Why we use it</h3>
          <p className="mt-1">
            We use enquiry details to respond to you, discuss vehicle availability and rental arrangements, and provide customer support. Please do not include payment card details, identity documents, or other sensitive information in the message form.
          </p>

          <h3 className="mt-5 font-semibold text-navy-950 dark:text-white">Website services and device storage</h3>
          <p className="mt-1">
            This site is hosted by Firebase Hosting and embeds a Google Map in the contact section. Those services may receive technical information such as your IP address and browser data when the relevant page or map loads; see Google&apos;s privacy information for details. The site stores your light or dark theme preference in your browser&apos;s local storage. No advertising or analytics tracking is configured in this website.
          </p>

          <h3 className="mt-5 font-semibold text-navy-950 dark:text-white">Retention and security</h3>
          <p className="mt-1">
            This website does not retain booking or contact form submissions in a server database. If you send an enquiry, copies may remain in your email or WhatsApp account and in the business mailbox used to reply, for as long as needed to handle the enquiry and related business records. Please review the privacy terms of the service you use to send it.
          </p>

          <h3 className="mt-5 font-semibold text-navy-950 dark:text-white">Your choices and rights</h3>
          <p className="mt-1">
            You can choose not to submit a form, clear the theme preference through your browser settings, or contact us to ask about personal information in an enquiry. Under Mauritius&apos; Data Protection Act 2017, individuals may have rights to access and correct personal information and, in certain circumstances, request erasure, restriction, or object to processing. You may also contact the Data Protection Office of Mauritius.
          </p>

          <h3 className="mt-5 font-semibold text-navy-950 dark:text-white">Contact</h3>
          <p className="mt-1">
            For privacy questions or requests, contact <a className="font-semibold text-lagoon-700 underline underline-offset-2 dark:text-lagoon-300" href={business.emailHref}>{business.email}</a> or write to Hope Car Rental, {business.address.line1}, {business.address.line2}, {business.address.country}.
          </p>
          <p className="mt-4 text-xs text-navy-500 dark:text-navy-400">
            Official information: <a className="underline underline-offset-2" href="https://dataprotection.govmu.org/Pages/The%20Law/Data-Protection-Act-2017.aspx" target="_blank" rel="noopener noreferrer">Mauritius Data Protection Act 2017</a> · <a className="underline underline-offset-2" href="https://dataprotection.govmu.org/Pages/Data%20Subjects/Rights-of-Accesss.aspx" target="_blank" rel="noopener noreferrer">Data subject rights</a>.
          </p>
        </div>

        <footer className="border-t border-navy-100 px-6 py-4 dark:border-white/10 sm:px-8">
          <button type="button" onClick={onClose} className="btn-primary w-full sm:w-auto">Close policy</button>
        </footer>
      </section>
    </div>
  );
}
