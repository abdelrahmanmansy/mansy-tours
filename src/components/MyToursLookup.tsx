"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  MapPin,
  Search,
  Users,
} from "lucide-react";
import { tours } from "@/data/tours";

export default function MyToursLookup() {
  const [reference, setReference] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [found, setFound] = useState(false);
  const tour = tours[0];

  function lookup(e: FormEvent) {
    e.preventDefault();
    if (!reference.trim() || !email.trim()) {
      setError("Please enter both your reference and email address.");
      return;
    }
    setError("");
    setFound(true);
  }

  if (found) {
    return (
      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-forest/15 bg-forest/[0.04] px-5 py-4">
          <p className="inline-flex items-center gap-2 text-[12.5px] text-ink/60">
            <Check className="h-4 w-4 text-forest" />
            Booking found and confirmed
          </p>
          <button
            type="button"
            onClick={() => {
              setFound(false);
              setReference("");
              setEmail("");
            }}
            className="text-[11px] font-semibold text-clay transition hover:text-ink"
          >
            Search another booking
          </button>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-ink/10 bg-white">
          <div className="relative aspect-[21/8]">
            <Image
              src={tour.image}
              alt={tour.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
            <div className="absolute inset-x-6 bottom-5">
              <span className="rounded-full bg-gold px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-ink">
                Confirmed
              </span>
              <h3 className="mt-2 font-display text-2xl text-cream sm:text-3xl">
                {tour.title}
              </h3>
            </div>
          </div>

          <div className="grid gap-px bg-ink/8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: CalendarDays,
                label: "Travel date",
                value: "12 November 2026",
              },
              { icon: Users, label: "Travellers", value: "2 adults" },
              {
                icon: MapPin,
                label: "Pickup",
                value: "Your hotel in Giza",
              },
              { icon: Check, label: "Reference", value: reference },
            ].map((item) => (
              <div key={item.label} className="bg-white p-5">
                <item.icon className="h-4 w-4 text-clay" />
                <p className="mt-2.5 text-[9px] font-bold uppercase tracking-[0.18em] text-ink/40">
                  {item.label}
                </p>
                <p className="mt-1 truncate text-[13px] font-semibold text-ink">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start justify-between gap-4 border-t border-ink/8 p-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink/40">
                Your guide
              </p>
              <p className="mt-1 text-[13px] text-ink/60">
                Ali Mansy will confirm your exact pickup time by WhatsApp the
                day before travel.
              </p>
            </div>
            <div className="flex gap-2">
              <Link href={`/tours/${tour.slug}`} className="btn-ghost px-5!">
                View itinerary
              </Link>
              <Link href="/contact" className="btn-primary px-5!">
                Contact us
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[28px] border border-ink/10 bg-white p-6 sm:p-8">
      <form onSubmit={lookup}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="lookup-ref" className="label">
              Booking reference
            </label>
            <input
              id="lookup-ref"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              className="field"
              placeholder="MT-8K2P4"
            />
          </div>
          <div>
            <label htmlFor="lookup-email" className="label">
              Email address
            </label>
            <input
              id="lookup-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="field"
              placeholder="you@example.com"
            />
          </div>
        </div>

        {error && (
          <p className="mt-4 rounded-xl bg-clay/10 px-4 py-2.5 text-[12px] font-medium text-clay">
            {error}
          </p>
        )}

        <div className="mt-5 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-[11px] leading-relaxed text-ink/40">
            Demo preview: any reference and email will show a sample booking.
          </p>
          <button type="submit" className="btn-primary w-full sm:w-auto">
            <Search className="h-4 w-4" />
            Find my booking
          </button>
        </div>
      </form>
    </div>
  );
}
