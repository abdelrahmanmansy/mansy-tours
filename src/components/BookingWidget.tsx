"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  CalendarDays,
  Check,
  Minus,
  Plus,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";
import type { Tour } from "@/data/tours";

export default function BookingWidget({ tour }: { tour: Tour }) {
  const router = useRouter();
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState(2);
  const [error, setError] = useState("");

  const total = tour.price * travelers;

  function book() {
    if (!date) {
      setError("Please choose a travel date first.");
      return;
    }
    setError("");
    router.push(
      `/booking/${tour.slug}?date=${encodeURIComponent(date)}&travelers=${travelers}`,
    );
  }

  return (
    <div className="overflow-hidden rounded-[28px] border border-ink/10 bg-white shadow-[0_30px_60px_-40px_rgba(11,29,24,0.4)]">
      <div className="flex items-end justify-between gap-3 border-b border-ink/8 bg-sand/40 px-6 py-5">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-ink/40">
            From
          </p>
          <p className="mt-1 font-display text-3xl text-ink">
            ${tour.price}
            <span className="ml-1 font-sans text-xs font-medium text-ink/45">
              / person
            </span>
          </p>
          {tour.oldPrice && (
            <p className="text-[11px] text-ink/35">
              <span className="line-through">${tour.oldPrice}</span> save $
              {tour.oldPrice - tour.price}
            </p>
          )}
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1.5 text-[11px] font-bold text-ink">
          <Star className="h-3 w-3 fill-gold text-gold" />
          {tour.rating.toFixed(1)}
          <span className="font-normal text-ink/40">({tour.reviews})</span>
        </span>
      </div>

      <div className="space-y-4 p-6">
        <div>
          <label htmlFor="tour-date" className="label">
            Travel date
          </label>
          <div className="relative">
            <CalendarDays className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-clay" />
            <input
              id="tour-date"
              type="date"
              value={date}
              onFocus={(e) => {
                e.currentTarget.min = new Date().toISOString().slice(0, 10);
              }}
              onChange={(e) => {
                setDate(e.target.value);
                setError("");
              }}
              className="field pl-11"
            />
          </div>
        </div>

        <div>
          <span className="label">Travellers</span>
          <div className="flex items-center justify-between rounded-2xl border border-ink/10 bg-white px-3 py-2">
            <span className="inline-flex items-center gap-2.5 pl-1 text-sm font-medium text-ink/65">
              <Users className="h-4 w-4 text-clay" />
              {travelers} {travelers === 1 ? "traveller" : "travellers"}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                aria-label="Fewer travellers"
                onClick={() => setTravelers((n) => Math.max(1, n - 1))}
                className="grid h-8 w-8 place-items-center rounded-full border border-ink/10 text-ink/60 transition hover:border-forest hover:text-forest disabled:opacity-30"
                disabled={travelers <= 1}
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                aria-label="More travellers"
                onClick={() => setTravelers((n) => Math.min(10, n + 1))}
                className="grid h-8 w-8 place-items-center rounded-full border border-ink/10 text-ink/60 transition hover:border-forest hover:text-forest disabled:opacity-30"
                disabled={travelers >= 10}
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-2xl bg-forest/5 px-4 py-3.5">
          <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink/50">
            Total
          </span>
          <span className="font-display text-2xl text-ink">${total}</span>
        </div>

        {error && (
          <p className="rounded-xl bg-clay/10 px-3 py-2 text-[12px] font-medium text-clay">
            {error}
          </p>
        )}

        <button type="button" onClick={book} className="btn-clay w-full">
          Reserve your spot
        </button>

        <ul className="space-y-2 pt-1">
          {[
            "Free cancellation up to 48h",
            "No deposit — pay later",
            "Instant confirmation by email",
          ].map((t) => (
            <li
              key={t}
              className="flex items-center gap-2 text-[11.5px] text-ink/55"
            >
              <Check className="h-3.5 w-3.5 text-forest" />
              {t}
            </li>
          ))}
        </ul>

        <p className="flex items-center gap-2 border-t border-ink/8 pt-4 text-[10.5px] text-ink/35">
          <ShieldCheck className="h-3.5 w-3.5 text-forest" />
          Secure booking · licensed operator · 24/7 support
        </p>
      </div>
    </div>
  );
}
