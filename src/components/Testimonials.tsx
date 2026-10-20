import { Quote, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "@/data/site";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 md:py-28">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-moss/30 blur-3xl" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Traveller stories"
          title="Kind words from the road"
          text="More than 4,800 travellers have explored Egypt with us. Here is what a few of them remember most."
          light
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-cream/10 bg-cream/[0.04] p-7 backdrop-blur-sm"
            >
              <Quote className="h-7 w-7 text-gold/70" />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-cream/70">
                “{t.text}”
              </blockquote>
              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <figcaption className="mt-5 border-t border-cream/10 pt-5">
                <p className="text-sm font-semibold text-cream">{t.name}</p>
                <p className="mt-0.5 text-[11px] text-cream/40">
                  {t.country} · {t.tour}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
