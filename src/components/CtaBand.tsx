import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export default function CtaBand() {
  return (
    <section className="container-page">
      <div className="relative isolate overflow-hidden rounded-[32px] bg-ink px-6 py-20 text-center md:px-16 md:py-24">
        <Image
          src="/images/abu-simbel.jpg"
          alt="The temples of Abu Simbel at sunrise"
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink/90" />
        <div className="relative mx-auto max-w-2xl">
          <p className="eyebrow text-gold!">Your Egypt, your way</p>
          <h2 className="mt-4 font-display text-4xl leading-[1.02] text-cream text-balance sm:text-5xl md:text-6xl">
            Ready for the journey of a lifetime?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-cream/65">
            Tell us what you dream of — a Nile cruise, a family adventure, a
            quiet week on the Red Sea — and we will build it around you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/plan" className="btn-clay">
              Plan your trip
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <a href={site.whatsapp} className="btn-light">
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
