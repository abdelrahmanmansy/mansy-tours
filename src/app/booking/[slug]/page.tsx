import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ShieldCheck } from "lucide-react";
import BookingForm from "@/components/BookingForm";
import { getDestination } from "@/data/destinations";
import { getTour, tours } from "@/data/tours";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTour(slug);
  return { title: tour ? `Book — ${tour.title}` : "Booking" };
}

export default async function BookingPage({ params }: Props) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();

  const destination = getDestination(tour.destination);

  return (
    <>
      <section className="bg-forest py-14 md:py-20">
        <div className="container-page">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 text-[11px] text-cream/45"
          >
            <Link href="/" className="transition hover:text-cream">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-cream/25" />
            <Link href="/tours" className="transition hover:text-cream">
              Tours
            </Link>
            <ChevronRight className="h-3 w-3 text-cream/25" />
            <Link
              href={`/tours/${tour.slug}`}
              className="max-w-[220px] truncate transition hover:text-cream"
            >
              {tour.title}
            </Link>
            <ChevronRight className="h-3 w-3 text-cream/25" />
            <span className="text-cream/75">Book</span>
          </nav>

          <p className="eyebrow mt-8 text-gold!">Reserve your place</p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl leading-[1.02] text-cream text-balance sm:text-5xl md:text-6xl">
            Complete your booking
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/60">
            {destination?.name ?? "Egypt"} · {tour.duration} · from ${tour.price}{" "}
            per person. Reserve now, pay later — we confirm every date by hand.
          </p>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-2 text-[11px] text-cream/60">
            <ShieldCheck className="h-3.5 w-3.5 text-gold" />
            Free cancellation up to 48 hours before departure
          </p>
        </div>
      </section>

      <section className="container-page py-12 md:py-16">
        <Suspense
          fallback={
            <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
              <div className="h-96 animate-pulse rounded-[28px] bg-sand/70" />
              <div className="h-96 animate-pulse rounded-[28px] bg-sand/70" />
            </div>
          }
        >
          <BookingForm tour={tour} />
        </Suspense>
      </section>
    </>
  );
}
