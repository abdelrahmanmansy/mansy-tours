import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Heart,
  Leaf,
  Sparkles,
  Users,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { site, whyUs } from "@/data/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Mansy Tours is an independent, family-run Egypt travel company founded in 2011 by licensed guide Ali Mansy. Meet the people behind the journeys.",
};

const icons = {
  sparkles: Sparkles,
  users: Users,
  leaf: Leaf,
  heart: Heart,
};

const timeline = [
  {
    year: "2011",
    title: "One guide, one car",
    text: "Ali Mansy starts running private pyramid days for friends of friends, with a notebook of trusted drivers and a very old Land Cruiser.",
  },
  {
    year: "2014",
    title: "The first Nile cruise",
    text: "We charter our first small riverboat between Aswan and Luxor — 12 guests, one Egyptologist and a cook who still works with us today.",
  },
  {
    year: "2018",
    title: "A Red Sea base",
    text: "Our diving team opens in Hurghada, adding reefs, wrecks and desert camps to the map without losing the small-group ethos.",
  },
  {
    year: "2022",
    title: "4,000 travellers",
    text: "A milestone year. We celebrate with a staff trip to Siwa and a promise to stay independent, whatever happens next.",
  },
  {
    year: "2026",
    title: "Still curious",
    text: "New routes in the Western Desert, a bigger guiding team and the same rule as day one: no scripts, no coaches, no shortcuts.",
  },
];

const team = [
  {
    initials: "AM",
    name: "Ali Mansy",
    role: "Founder & lead guide",
    bio: "Egyptologist, Giza local and the person who still answers the WhatsApp line at midnight.",
  },
  {
    initials: "YH",
    name: "Youssef Hassan",
    role: "Head Egyptologist",
    bio: "Fifteen years in the tombs of Luxor. Can read a wall of hieroglyphs like a morning newspaper.",
  },
  {
    initials: "NE",
    name: "Nour El Din",
    role: "Red Sea operations",
    bio: "Dive instructor and desert navigator. Knows every reef, wreck and shortcut between Hurghada and Marsa Alam.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="We are Mansy Tours."
        description="An independent, family-run travel company with one obsession: showing Egypt the way locals see it — slowly, warmly and without a script."
        image="/images/felucca.jpg"
        imageAlt="A felucca on the Nile at sunset"
        crumbs={[{ label: "About" }]}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-ink text-balance sm:text-5xl">
              Founded by a guide,
              <br />
              <em className="font-light italic text-clay">not a boardroom.</em>
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink/60">
              <p>
                Mansy Tours began in {site.founded} with Ali Mansy, a licensed
                Egyptologist from Giza who was tired of watching visitors rushed
                through the monuments he grew up with. He started with one car,
                one notebook of trusted drivers and a simple promise: no
                scripts, no queues, no forty-seat coaches.
              </p>
              <p>
                Fourteen years later, we are still independent and still
                family-run. Our guides are Egyptologists, divers, Bedouin
                trackers and cooks — people who live here, love it and know
                exactly when to slow down and let a place speak for itself.
              </p>
              <p>
                We are small on purpose. It means we can change plans when the
                weather turns, find the quiet corner of a temple, and remember
                your name on the second day.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/plan" className="btn-primary">
                Plan a trip with us
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Meet the team
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px]">
              <Image
                src="/images/khan.jpg"
                alt="A guide leading travellers through Khan el-Khalili"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-7 left-5 right-5 grid grid-cols-3 divide-x divide-ink/10 overflow-hidden rounded-2xl bg-cream shadow-[0_24px_50px_-25px_rgba(11,29,24,0.4)] sm:left-8 sm:right-8">
              {[
                ["14+", "Years"],
                ["4.8k", "Travellers"],
                ["60+", "Experiences"],
              ].map(([v, l]) => (
                <div key={l} className="px-3 py-4 text-center">
                  <p className="font-display text-2xl text-ink">{v}</p>
                  <p className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.16em] text-ink/40">
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-sand/55 py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we believe"
            title="Travel should feel personal"
            text="These are not slogans on a wall. They are the rules our guides are hired to keep."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => {
              const Icon = icons[item.icon as keyof typeof icons];
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-ink/8 bg-cream p-6"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-forest text-cream">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-display text-xl text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[13px] leading-relaxed text-ink/55">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow">The long way round</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">
              Fourteen years,
              <br />
              <em className="font-light italic text-clay">one river.</em>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/55">
              We grew slowly on purpose. Every new route was tested by our own
              team first, and every guide was chosen for character as much as
              knowledge.
            </p>
            <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-[28px] lg:block">
              <Image
                src="/images/aswan.jpg"
                alt="The Nile at Aswan"
                fill
                sizes="40vw"
                className="object-cover"
              />
            </div>
          </div>

          <ol className="relative space-y-8 border-l border-ink/10 pl-8">
            {timeline.map((item) => (
              <li key={item.year} className="relative">
                <span className="absolute -left-[41px] top-1 grid h-5 w-5 place-items-center rounded-full border-2 border-clay bg-cream">
                  <span className="h-1.5 w-1.5 rounded-full bg-clay" />
                </span>
                <p className="font-display text-2xl text-clay">{item.year}</p>
                <h3 className="mt-1 font-display text-xl text-ink">
                  {item.title}
                </h3>
                <p className="mt-1.5 max-w-lg text-[13.5px] leading-relaxed text-ink/55">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-forest py-16 md:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="The people"
            title="Names you will remember"
            text="You will spend your days with these people, not a call centre. They are the reason guests come back."
            light
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl border border-cream/10 bg-cream/[0.04] p-7"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full border border-gold/30 bg-gold/10 font-display text-xl text-gold">
                  {member.initials}
                </span>
                <h3 className="mt-5 font-display text-xl text-cream">
                  {member.name}
                </h3>
                <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-gold/70">
                  {member.role}
                </p>
                <p className="mt-3 text-[13px] leading-relaxed text-cream/55">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-16">
        <CtaBand />
      </div>
    </>
  );
}
