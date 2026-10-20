import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { faqs, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to a real Egypt specialist. Call, WhatsApp or email Mansy Tours — we reply within one working day.",
};

const contactCards = [
  {
    icon: Phone,
    label: "Call us",
    value: site.phone,
    href: site.phoneHref,
    note: "Sat – Thu, 9:00 – 19:00",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with a specialist",
    href: site.whatsapp,
    note: "Usually replies in minutes",
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Replies within one day",
  },
  {
    icon: MapPin,
    label: "Office",
    value: site.address,
    href: "https://maps.google.com/?q=Garden+City+Cairo",
    note: "Visits by appointment",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Say hello"
        title="Real people. Real answers."
        description="No call centres, no chatbots. Talk directly to the guides and planners who will look after your trip."
        image="/images/cairo.jpg"
        imageAlt="The skyline of Cairo"
        crumbs={[{ label: "Contact" }]}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-14">
          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {contactCards.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group rounded-3xl border border-ink/8 bg-white p-5 transition hover:-translate-y-0.5 hover:border-clay/30 hover:shadow-lg"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-forest/5 text-forest transition group-hover:bg-clay group-hover:text-cream">
                    <c.icon className="h-4 w-4" />
                  </span>
                  <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.18em] text-ink/40">
                    {c.label}
                  </p>
                  <p className="mt-1 text-[13px] font-semibold leading-snug text-ink">
                    {c.value}
                  </p>
                  <p className="mt-1 text-[11px] text-ink/40">{c.note}</p>
                </a>
              ))}
            </div>

            <div className="relative mt-4 aspect-[16/10] overflow-hidden rounded-3xl">
              <Image
                src="/images/cairo.jpg"
                alt="Cairo streets near the Mansy Tours office"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gold">
                  Our home
                </p>
                <p className="mt-1 font-display text-xl text-cream">
                  Garden City, Cairo
                </p>
                <p className="mt-0.5 text-[11px] text-cream/60">
                  {site.hours}
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow">Write to us</p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl">
              Tell us what you are dreaming of
            </h2>
            <p className="mt-3 mb-7 max-w-lg text-[14px] leading-relaxed text-ink/55">
              Dates, budget, who is coming, the things you cannot miss — the
              more we know, the better the trip. A specialist will reply
              personally.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section id="faqs" className="bg-sand/55 py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Good to know"
              title="Questions, answered"
              text="The things travellers ask us most. Still curious? Send a message — we like the odd question."
            />
            <Link href="/contact" className="btn-ghost mt-7">
              Ask us anything
            </Link>
          </div>

          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                  <span className="text-[14px] font-semibold text-ink">
                    {f.q}
                  </span>
                  <ChevronDown className="h-4 w-4 shrink-0 text-ink/40 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 max-w-xl pr-8 text-[13.5px] leading-relaxed text-ink/55">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-14">
        <div className="flex flex-col items-center justify-between gap-5 rounded-[28px] border border-ink/10 bg-white p-6 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-forest/5 text-forest">
              <Clock className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-xl text-ink">
                Need an answer right now?
              </p>
              <p className="mt-0.5 text-[12.5px] text-ink/50">
                Our WhatsApp line is monitored from 8:00 to 22:00 Cairo time.
              </p>
            </div>
          </div>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="btn-primary shrink-0"
          >
            <MessageCircle className="h-4 w-4" />
            Message us now
          </a>
        </div>
      </section>
    </>
  );
}
