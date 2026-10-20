import {
  CalendarCheck2,
  Compass,
  Headset,
  Map,
  ShieldCheck,
  Wallet,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { features } from "@/data/site";

const icons = {
  shield: ShieldCheck,
  calendar: CalendarCheck2,
  compass: Compass,
  wallet: Wallet,
  map: Map,
  headset: Headset,
};

export default function Features() {
  return (
    <section className="bg-sand/60 py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Why travel with us"
          title="The details that make a trip feel effortless"
          text="We have been guiding travellers through Egypt since 2011. These are the promises we make to every guest, on every departure."
          align="center"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = icons[f.icon as keyof typeof icons];
            return (
              <div
                key={f.title}
                className="group rounded-3xl border border-ink/8 bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:border-clay/25 hover:shadow-[0_24px_50px_-35px_rgba(11,29,24,0.35)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest text-cream transition-colors group-hover:bg-clay">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-xl text-ink">{f.title}</h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-ink/55">
                  {f.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
