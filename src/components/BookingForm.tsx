"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { Tour } from "@/data/tours";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  date: string;
  travelers: number;
  hotel: string;
  notes: string;
  agree: boolean;
};

export default function BookingForm({ tour }: { tour: Tour }) {
  const searchParams = useSearchParams();
  const paramDate = searchParams.get("date") ?? "";
  const paramTravelers = Number(searchParams.get("travelers") ?? "2");
  const initialTravelers = Number.isFinite(paramTravelers)
    ? Math.min(10, Math.max(1, paramTravelers))
    : 2;

  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    date: paramDate,
    travelers: initialTravelers,
    hotel: "",
    notes: "",
    agree: false,
  });
  const [reference, setReference] = useState("");
  const [done, setDone] = useState(false);

  const total = tour.price * form.travelers;

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    setReference(
      `MT-${Math.random().toString(36).slice(2, 6).toUpperCase()}${Math.floor(
        10 + Math.random() * 89,
      )}`,
    );
    setDone(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const prettyDate = form.date
    ? new Date(`${form.date}T12:00:00`).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "To be confirmed";

  if (done) {
    return (
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-[28px] border border-ink/10 bg-white p-8 text-center sm:p-12">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-forest text-cream">
            <Check className="h-7 w-7" />
          </span>
          <p className="eyebrow mt-6">Request received</p>
          <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
            Pack your bags, {form.firstName || "traveller"}.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/55">
            Our team will confirm availability and send your itinerary to{" "}
            <strong className="text-ink">{form.email || "your inbox"}</strong>{" "}
            within a few hours. No payment has been taken.
          </p>

          <div className="mx-auto mt-7 w-fit rounded-2xl border border-dashed border-clay/40 bg-clay/5 px-6 py-4">
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-ink/40">
              Your reference
            </p>
            <p className="mt-1 font-display text-2xl tracking-wide text-clay">
              {reference}
            </p>
          </div>

          <dl className="mx-auto mt-8 max-w-sm space-y-3 text-left">
            <div className="flex items-start justify-between gap-4 border-b border-ink/8 pb-3">
              <dt className="text-[12px] text-ink/45">Experience</dt>
              <dd className="text-right text-[13px] font-semibold text-ink">
                {tour.title}
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-ink/8 pb-3">
              <dt className="text-[12px] text-ink/45">Date</dt>
              <dd className="text-[13px] font-semibold text-ink">{prettyDate}</dd>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-ink/8 pb-3">
              <dt className="text-[12px] text-ink/45">Travellers</dt>
              <dd className="text-[13px] font-semibold text-ink">
                {form.travelers}
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4">
              <dt className="text-[12px] text-ink/45">Estimated total</dt>
              <dd className="font-display text-xl text-ink">${total}</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/my-tours" className="btn-primary">
              Find my booking
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link href="/tours" className="btn-ghost">
              Keep exploring
            </Link>
          </div>
        </div>

        <BookingSummary tour={tour} total={total} travelers={form.travelers} date={prettyDate} />
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
      <div className="space-y-6">
        <div className="rounded-[28px] border border-ink/10 bg-white p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-forest text-[12px] font-bold text-cream">
              1
            </span>
            <h2 className="font-display text-2xl text-ink">Who&apos;s coming?</h2>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="label">
                First name *
              </label>
              <input
                id="firstName"
                required
                value={form.firstName}
                onChange={(e) => update("firstName", e.target.value)}
                className="field"
                placeholder="Amelia"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="label">
                Last name *
              </label>
              <input
                id="lastName"
                required
                value={form.lastName}
                onChange={(e) => update("lastName", e.target.value)}
                className="field"
                placeholder="Grant"
              />
            </div>
            <div>
              <label htmlFor="email" className="label">
                Email *
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className="field"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="label">
                Phone / WhatsApp *
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className="field"
                placeholder="+44 7700 900000"
              />
            </div>
            <div>
              <label htmlFor="country" className="label">
                Country
              </label>
              <input
                id="country"
                value={form.country}
                onChange={(e) => update("country", e.target.value)}
                className="field"
                placeholder="United Kingdom"
              />
            </div>
            <div>
              <label htmlFor="hotel" className="label">
                Hotel or pickup address
              </label>
              <input
                id="hotel"
                value={form.hotel}
                onChange={(e) => update("hotel", e.target.value)}
                className="field"
                placeholder="Where should we meet you?"
              />
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-ink/10 bg-white p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-forest text-[12px] font-bold text-cream">
              2
            </span>
            <h2 className="font-display text-2xl text-ink">Trip details</h2>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="date" className="label">
                Travel date *
              </label>
              <input
                id="date"
                type="date"
                required
                value={form.date}
                onFocus={(e) => {
                  e.currentTarget.min = new Date().toISOString().slice(0, 10);
                }}
                onChange={(e) => update("date", e.target.value)}
                className="field"
              />
            </div>
            <div>
              <label htmlFor="travelers" className="label">
                Travellers *
              </label>
              <select
                id="travelers"
                value={form.travelers}
                onChange={(e) => update("travelers", Number(e.target.value))}
                className="field"
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "traveller" : "travellers"}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="notes" className="label">
                Anything we should know?
              </label>
              <textarea
                id="notes"
                rows={4}
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                className="field resize-none"
                placeholder="Dietary needs, accessibility, celebrations, children's ages..."
              />
            </div>
          </div>

          <label className="mt-5 flex items-start gap-3 text-[12px] leading-relaxed text-ink/55">
            <input
              type="checkbox"
              required
              checked={form.agree}
              onChange={(e) => update("agree", e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-[#0e3a30]"
            />
            I agree to the booking terms and understand that no payment is taken
            now. My dates will be confirmed by a travel specialist.
          </label>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 rounded-[28px] border border-ink/10 bg-sand/50 p-6 sm:flex-row sm:items-center">
          <p className="inline-flex items-center gap-2 text-[12px] text-ink/55">
            <ShieldCheck className="h-4 w-4 text-forest" />
            Free cancellation up to 48 hours before travel.
          </p>
          <button type="submit" className="btn-clay w-full sm:w-auto">
            Request booking
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <BookingSummary
        tour={tour}
        total={total}
        travelers={form.travelers}
        date={prettyDate}
      />
    </form>
  );
}

function BookingSummary({
  tour,
  total,
  travelers,
  date,
}: {
  tour: Tour;
  total: number;
  travelers: number;
  date: string;
}) {
  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <div className="overflow-hidden rounded-[28px] border border-ink/10 bg-white">
        <div className="relative aspect-[16/10]">
          <Image
            src={tour.image}
            alt={tour.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 35vw"
            className="object-cover"
          />
          <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-ink">
            {tour.category}
          </span>
        </div>
        <div className="p-6">
          <h3 className="font-display text-xl leading-snug text-ink">
            {tour.title}
          </h3>
          <div className="mt-3 space-y-2 text-[12px] text-ink/55">
            <p className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-clay" />
              {tour.meetingPoint}
            </p>
            <p className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-clay" />
              {tour.duration}
            </p>
            <p className="flex items-center gap-2">
              <CalendarDays className="h-3.5 w-3.5 text-clay" />
              {date}
            </p>
            <p className="flex items-center gap-2">
              <Users className="h-3.5 w-3.5 text-clay" />
              {travelers} {travelers === 1 ? "traveller" : "travellers"}
            </p>
          </div>

          <div className="mt-5 space-y-2 border-t border-ink/8 pt-4 text-[13px]">
            <div className="flex justify-between text-ink/55">
              <span>
                ${tour.price} × {travelers}
              </span>
              <span>${total}</span>
            </div>
            <div className="flex justify-between text-ink/55">
              <span>Booking fee</span>
              <span className="text-forest">Free</span>
            </div>
            <div className="flex items-center justify-between border-t border-ink/8 pt-3">
              <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/45">
                Total
              </span>
              <span className="font-display text-2xl text-ink">${total}</span>
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-forest/5 p-4">
            <p className="flex items-start gap-2 text-[11.5px] leading-relaxed text-ink/55">
              <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0 text-forest" />
              No payment today. We will confirm availability by email, then you
              can pay securely online.
            </p>
          </div>

          <Link
            href={`/tours/${tour.slug}`}
            className="mt-4 flex items-center justify-center gap-1 text-[11px] font-semibold text-ink/45 transition hover:text-clay"
          >
            Back to tour details
            <ChevronRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
