import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowUpRight,
  CalendarRange,
  Check,
  MapPin,
  Timer,
  Wallet,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import TourCard from "@/components/TourCard";
import DestinationCard from "@/components/DestinationCard";
import CtaBand from "@/components/CtaBand";
import {
  destinations,
  getDestination,
  getDestinationGallery,
} from "@/data/destinations";
import { getToursByDestination, tours } from "@/data/tours";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) return { title: "Destination not found" };
  return {
    title: `${destination.name} — ${destination.tagline}`,
    description: destination.description,
  };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) notFound();

  const destinationTours = getToursByDestination(destination.slug);
  const others = destinations
    .filter((d) => d.slug !== destination.slug)
    .slice(0, 3);

  const gallery = getDestinationGallery(destination.slug);

  const facts = [
    {
      icon: CalendarRange,
      label: "Best time",
      value: destination.bestTime,
    },
    { icon: Timer, label: "Ideal stay", value: destination.idealStay },
    {
      icon: Wallet,
      label: "Tours from",
      value: `$${destination.startingPrice} / person`,
    },
    { icon: MapPin, label: "Region", value: destination.region },
  ];

  const fallbackTours =
    destinationTours.length > 0
      ? destinationTours
      : tours.filter((t) => t.category === "Day tours").slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={destination.region}
        title={destination.name}
        description={destination.description}
        image={destination.image}
        imageAlt={destination.imageAlt}
        crumbs={[
          { label: "Destinations", href: "/destinations" },
          { label: destination.name },
        ]}
      />

      <section className="container-page relative z-10 -mt-10">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[26px] bg-ink/8 shadow-[0_24px_60px_-40px_rgba(11,29,24,0.5)] md:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="bg-white p-5 md:p-6">
              <f.icon className="h-4 w-4 text-clay" />
              <p className="mt-3 text-[9px] font-bold uppercase tracking-[0.18em] text-ink/40">
                {f.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-ink">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <p className="eyebrow">The feeling</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-ink text-balance sm:text-5xl">
              {destination.tagline}
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-ink/60">
              {destination.longDescription}
            </p>

            <div className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {destination.highlights.map((h) => (
                <div
                  key={h}
                  className="flex items-start gap-2.5 rounded-2xl border border-ink/8 bg-white px-4 py-3.5 text-[13px] font-medium text-ink/70"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-forest/10 text-forest">
                    <Check className="h-3 w-3" />
                  </span>
                  {h}
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {gallery.map((src, i) => (
                <div
                  key={src}
                  className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                >
                  <Image
                    src={src}
                    alt={`${destination.name} gallery image ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:pt-2">
            <div className="rounded-[28px] border border-ink/8 bg-sand/50 p-7">
              <p className="eyebrow">Make it yours</p>
              <h3 className="mt-3 font-display text-2xl leading-snug text-ink">
                Want this trip built around your dates?
              </h3>
              <p className="mt-3 text-[13px] leading-relaxed text-ink/55">
                Tell us who is travelling and how long you have. We will send a
                personal itinerary for {destination.name} within one working
                day — no deposit, no pressure.
              </p>
              <Link href="/plan" className="btn-primary mt-6 w-full">
                Plan my trip
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="mt-3 block text-center text-[12px] font-semibold text-ink/50 underline-offset-4 transition hover:text-clay hover:underline"
              >
                Or ask a question first
              </Link>
            </div>

            <div className="mt-5 rounded-[28px] border border-ink/8 bg-white p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink/40">
                Good to know
              </p>
              <ul className="mt-4 space-y-3 text-[13px] leading-relaxed text-ink/60">
                <li>Airport transfers arranged door to door.</li>
                <li>Guides in English, Spanish, German or French.</li>
                <li>Free cancellation up to 48 hours before travel.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-sand/55 py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow={`Experiences in ${destination.name}`}
            title="Tours worth building a trip around"
            text={
              destinationTours.length > 0
                ? "Handpicked by our local team, with private departures available on every one."
                : "These journeys pair beautifully with a stay in the region — tell us and we will connect the dots."
            }
            action={{ label: "All tours", href: "/tours" }}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {fallbackTours.map((t) => (
              <TourCard key={t.slug} tour={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <SectionHeading
          eyebrow="Keep exploring"
          title="More of Egypt"
          action={{ label: "All destinations", href: "/destinations" }}
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((d) => (
            <DestinationCard key={d.slug} destination={d} />
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
