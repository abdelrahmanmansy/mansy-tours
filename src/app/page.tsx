import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  Star,
} from "lucide-react";
import SearchBar from "@/components/SearchBar";
import StatsRow from "@/components/StatsRow";
import SectionHeading from "@/components/SectionHeading";
import DestinationCard from "@/components/DestinationCard";
import TourCard from "@/components/TourCard";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import CtaBand from "@/components/CtaBand";
import { destinations } from "@/data/destinations";
import { featuredTours } from "@/data/tours";
import { posts } from "@/data/posts";
import { site } from "@/data/site";

const promos = [
  "Licensed Egyptologist guides",
  "Free cancellation up to 48h",
  "No deposit to reserve",
];

const aboutPoints = [
  "Handpicked, family-run hotels",
  "Private guides, never scripts",
  "Small groups under 12",
  "24/7 WhatsApp support",
  "Honest, no-pressure pricing",
  "Fair pay for local crews",
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden bg-ink">
        <Image
          src="/images/giza.jpg"
          alt="The Great Sphinx and pyramids at Giza"
          fill
          priority
          sizes="100vw"
          className="animate-zoom-slow object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-ink/25" />

        <div className="container-page relative py-24 md:py-28">
          <div className="max-w-3xl">
            <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/75 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              Egypt&apos;s local travel studio · since {site.founded}
            </div>

            <h1
              className="animate-rise mt-7 font-display text-[clamp(3.2rem,8vw,6.8rem)] leading-[0.88] tracking-tight text-cream text-balance"
              style={{ animationDelay: "80ms" }}
            >
              Walk where
              <br />
              <em className="font-light italic text-gold">pharaohs</em> walked.
            </h1>

            <p
              className="animate-rise mt-7 max-w-xl text-[15px] leading-relaxed text-cream/70 sm:text-base"
              style={{ animationDelay: "160ms" }}
            >
              Private guides, quiet corners and journeys shaped around you — from
              the pyramids at dawn to a Red Sea reef at noon. Egypt, beyond the
              postcard.
            </p>

            <div
              className="animate-rise mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ animationDelay: "240ms" }}
            >
              <Link href="/tours" className="btn-clay">
                Explore tours
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/plan" className="btn-light">
                Plan a custom trip
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div
              className="animate-rise mt-10 flex flex-wrap items-center gap-x-7 gap-y-3"
              style={{ animationDelay: "320ms" }}
            >
              <span className="flex items-center gap-1.5 text-xs text-cream/70">
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-gold text-gold"
                    />
                  ))}
                </span>
                <strong className="text-cream">4.9</strong> from 1,200+ reviews
              </span>
              {promos.map((p) => (
                <span
                  key={p}
                  className="hidden items-center gap-1.5 text-[11px] text-cream/55 sm:flex"
                >
                  <Check className="h-3.5 w-3.5 text-gold" />
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container-page relative z-20 -mt-8 md:-mt-10">
        <SearchBar />
      </div>

      <div className="mt-16 md:mt-20">
        <StatsRow />
      </div>

      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="Where to next"
          title="Places that stay with you"
          text="From the last wonder of the ancient world to reefs that glow at noon — these are the corners of Egypt we know by heart."
          action={{ label: "All destinations", href: "/destinations" }}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.slice(0, 6).map((d) => (
            <DestinationCard key={d.slug} destination={d} />
          ))}
        </div>
      </section>

      <section className="bg-sand/55 py-20 md:py-28">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative mx-auto w-full max-w-lg lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px]">
              <Image
                src="/images/felucca.jpg"
                alt="A felucca sailing on the Nile at sunset"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-3 w-40 overflow-hidden rounded-3xl border-[6px] border-cream shadow-xl sm:-right-6 sm:w-56">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/khan.jpg"
                  alt="Lanterns in Khan el-Khalili bazaar"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -left-3 top-8 rounded-2xl bg-clay px-5 py-4 text-cream shadow-xl sm:-left-6">
              <p className="font-display text-3xl leading-none">14+</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-cream/75">
                Years of Egypt
              </p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.04] tracking-tight text-ink text-balance sm:text-5xl">
              Local guides. Real Egypt.
              <br />
              <em className="font-light italic text-clay">No scripts.</em>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-ink/60">
              Mansy Tours began with one guide, one car and a belief that Egypt
              deserves to be seen slowly. Fourteen years later we are still
              independent, still family-run, and still obsessed with the small
              details that turn a good trip into the one you talk about for
              years.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
              Our guides are Egyptologists, divers, Bedouin trackers and
              cooks — people who grew up here and love showing it off.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {aboutPoints.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2.5 text-[13px] font-medium text-ink/70"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-forest/10 text-forest">
                    <Check className="h-3 w-3" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/about" className="btn-primary">
                More about us
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Talk to a specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="Signature journeys"
          title="Tours our travellers love most"
          text="Small groups, private departures and guides who make the history feel like gossip. Every price includes the details that matter."
          action={{ label: "Browse all tours", href: "/tours" }}
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </section>

      <Features />
      <Testimonials />

      <section className="container-page py-20 md:py-28">
        <SectionHeading
          eyebrow="The journal"
          title="Notes from Egypt"
          text="Practical guides, quiet recommendations and the stories behind the places we love."
          action={{ label: "Read the journal", href: "/blog" }}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col"
            >
              <div className="relative aspect-[16/11] overflow-hidden rounded-[24px]">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-ink">
                  {post.category}
                </span>
              </div>
              <div className="mt-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/40">
                <span>{post.date}</span>
                <span className="h-0.5 w-0.5 rounded-full bg-ink/30" />
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
              </div>
              <h3 className="mt-2.5 font-display text-xl leading-snug text-ink transition-colors group-hover:text-clay">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-ink/55">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
