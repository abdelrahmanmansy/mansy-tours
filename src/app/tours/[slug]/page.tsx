import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  CalendarDays,
  Check,
  Clock,
  Globe2,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Users,
  X,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import BookingWidget from "@/components/BookingWidget";
import TourCard from "@/components/TourCard";
import CtaBand from "@/components/CtaBand";
import { getDestination, getDestinationGallery } from "@/data/destinations";
import { getTour, tours } from "@/data/tours";
import { site } from "@/data/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) return { title: "Tour not found" };
  return {
    title: tour.title,
    description: tour.summary,
    openGraph: { title: tour.title, description: tour.summary },
  };
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();

  const destination = getDestination(tour.destination);
  const related = tours
    .filter(
      (t) =>
        t.slug !== tour.slug &&
        (t.destination === tour.destination || t.category === tour.category),
    )
    .slice(0, 3);

  const gallery = [tour.image, ...getDestinationGallery(tour.destination)]
    .filter((src, i, arr) => arr.indexOf(src) === i)
    .slice(0, 3);

  const meta = [
    { icon: Clock, label: "Duration", value: tour.duration },
    { icon: Users, label: "Group", value: tour.groupSize },
    { icon: Globe2, label: "Languages", value: tour.languages.slice(0, 3).join(", ") },
    { icon: CalendarDays, label: "Starts", value: tour.startTime },
  ];

  return (
    <>
      <PageHero
        eyebrow={tour.category}
        title={tour.title}
        description={tour.summary}
        image={tour.image}
        imageAlt={tour.imageAlt}
        crumbs={[
          { label: "Tours", href: "/tours" },
          ...(destination
            ? [
                {
                  label: destination.name,
                  href: `/destinations/${destination.slug}`,
                },
              ]
            : []),
          { label: tour.title },
        ]}
      />

      <section className="container-page relative z-10 -mt-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[24px] bg-ink/8 shadow-[0_24px_60px_-40px_rgba(11,29,24,0.5)] lg:grid-cols-4">
          {meta.map((m) => (
            <div key={m.label} className="bg-white p-5">
              <m.icon className="h-4 w-4 text-clay" />
              <p className="mt-2.5 text-[9px] font-bold uppercase tracking-[0.18em] text-ink/40">
                {m.label}
              </p>
              <p className="mt-1 text-[12.5px] font-semibold text-ink">
                {m.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.55fr_1fr] lg:gap-14">
          <div className="min-w-0">
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:col-span-2 sm:row-span-2 sm:aspect-auto">
                <Image
                  src={gallery[0]}
                  alt={tour.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
              {gallery.slice(1).map((src, i) => (
                <div
                  key={src}
                  className="relative hidden aspect-[4/3] overflow-hidden rounded-2xl sm:block"
                >
                  <Image
                    src={src}
                    alt={`${tour.title} view ${i + 2}`}
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 border-y border-ink/8 py-5">
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                <Star className="h-4 w-4 fill-gold text-gold" />
                {tour.rating.toFixed(1)}
                <span className="font-normal text-ink/45">
                  ({tour.reviews} reviews)
                </span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-[13px] text-ink/55">
                <MapPin className="h-4 w-4 text-clay" />
                {destination?.name ?? "Egypt"}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[13px] text-ink/55">
                <Clock className="h-4 w-4 text-clay" />
                {tour.duration}
              </span>
              {tour.badge && (
                <span className="rounded-full bg-clay/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-clay">
                  {tour.badge}
                </span>
              )}
            </div>

            <div className="mt-10">
              <h2 className="font-display text-3xl text-ink sm:text-4xl">
                About this experience
              </h2>
              {tour.description.map((p) => (
                <p
                  key={p.slice(0, 30)}
                  className="mt-4 text-[15px] leading-relaxed text-ink/60"
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10">
              <h2 className="font-display text-2xl text-ink sm:text-3xl">
                What makes it special
              </h2>
              <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {tour.highlights.map((h) => (
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
            </div>

            <div className="mt-12">
              <h2 className="font-display text-2xl text-ink sm:text-3xl">
                Your itinerary
              </h2>
              <ol className="mt-7 space-y-0">
                {tour.itinerary.map((stop, i) => (
                  <li key={`${stop.day}-${stop.title}`} className="relative flex gap-5 pb-8">
                    {i < tour.itinerary.length - 1 && (
                      <span className="absolute left-[23px] top-12 h-[calc(100%-2.5rem)] w-px bg-ink/10" />
                    )}
                    <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-clay/25 bg-cream text-[10px] font-bold uppercase tracking-wide text-clay">
                      {i + 1}
                    </span>
                    <div className="pt-1">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-clay">
                        {stop.day}
                      </p>
                      <h3 className="mt-1.5 font-display text-xl text-ink">
                        {stop.title}
                      </h3>
                      <p className="mt-1.5 max-w-xl text-[13.5px] leading-relaxed text-ink/55">
                        {stop.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-forest/10 bg-forest/[0.04] p-6">
                <h3 className="font-display text-xl text-ink">What&apos;s included</h3>
                <ul className="mt-4 space-y-2.5">
                  {tour.included.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[13px] text-ink/60"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-ink/8 bg-white p-6">
                <h3 className="font-display text-xl text-ink">Not included</h3>
                <ul className="mt-4 space-y-2.5">
                  {tour.excluded.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[13px] text-ink/55"
                    >
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-clay/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-ink/8 bg-sand/40 p-6">
              <h3 className="flex items-center gap-2 font-display text-xl text-ink">
                <MapPin className="h-4 w-4 text-clay" />
                Meeting point
              </h3>
              <p className="mt-2 text-[13.5px] text-ink/60">
                {tour.meetingPoint}
              </p>
              <p className="mt-1 text-[12px] text-ink/40">
                Exact pickup time confirmed by WhatsApp the day before travel.
              </p>
            </div>
          </div>

          <aside>
            <div className="lg:sticky lg:top-28">
              <BookingWidget tour={tour} />

              <div className="mt-4 rounded-[28px] border border-ink/8 bg-sand/50 p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink/40">
                  Prefer to talk?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  A real person answers, usually within minutes.
                </p>
                <div className="mt-4 grid gap-2">
                  <a
                    href={site.phoneHref}
                    className="flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 text-[13px] font-semibold text-ink transition hover:bg-forest hover:text-cream"
                  >
                    <Phone className="h-4 w-4 text-clay" />
                    {site.phone}
                  </a>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 text-[13px] font-semibold text-ink transition hover:bg-forest hover:text-cream"
                  >
                    <MessageCircle className="h-4 w-4 text-clay" />
                    WhatsApp us
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="container-page pb-4">
          <SectionHeading
            eyebrow="You might also like"
            title="More journeys to consider"
            action={{ label: "All tours", href: "/tours" }}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((t) => (
              <TourCard key={t.slug} tour={t} />
            ))}
          </div>
        </section>
      )}

      <div className="mt-16">
        <CtaBand />
      </div>
    </>
  );
}
