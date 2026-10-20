"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";

export default function ContactForm() {
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");

  if (done) {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-[28px] border border-ink/10 bg-white px-6 py-16 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-forest text-cream">
          <Check className="h-6 w-6" />
        </span>
        <h3 className="mt-5 font-display text-2xl text-ink">
          Message received{name ? `, ${name}` : ""}.
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink/55">
          One of our travel specialists will reply within one working day. If it
          is urgent, WhatsApp is the fastest way to reach us.
        </p>
        <button
          type="button"
          onClick={() => {
            setDone(false);
            setName("");
          }}
          className="btn-ghost mt-6"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="rounded-[28px] border border-ink/10 bg-white p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="label">
            Your name *
          </label>
          <input
            id="contact-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="field"
            placeholder="Amelia Grant"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="label">
            Email *
          </label>
          <input
            id="contact-email"
            type="email"
            required
            className="field"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="label">
            Phone / WhatsApp
          </label>
          <input
            id="contact-phone"
            type="tel"
            className="field"
            placeholder="+44 7700 900000"
          />
        </div>
        <div>
          <label htmlFor="contact-subject" className="label">
            How can we help?
          </label>
          <select id="contact-subject" className="field">
            <option>Planning a trip</option>
            <option>Question about a tour</option>
            <option>Existing booking</option>
            <option>Group or family travel</option>
            <option>Press & partnerships</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="label">
            Your message *
          </label>
          <textarea
            id="contact-message"
            required
            rows={5}
            className="field resize-none"
            placeholder="Tell us about your dates, who is travelling and what you would love to see..."
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-[11px] leading-relaxed text-ink/40">
          We reply within one working day. No newsletters unless you ask.
        </p>
        <button type="submit" className="btn-primary w-full sm:w-auto">
          Send message
          <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
