import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, Star } from "lucide-react";
import { getDestination } from "@/data/destinations";
import type { Tour } from "@/data/tours";

export default function TourCard({ tour }: { tour: Tour }) {
  const destination = getDestination(tour.destination);

  return (
    <Link
      href={`/tours/${tour.slug}`}
      className="group flex flex-col overflow-hidden rounded-[26px] border border-ink/8 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-35px_rgba(11,29,24,0.35)]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
        {tour.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-clay px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-cream">
            {tour.badge}
          </span>
        )}
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1.5 text-[11px] font-bold text-ink backdrop-blur">
          <Star className="h-3 w-3 fill-gold text-gold" />
          {tour.rating.toFixed(1)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/45">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-clay" />
            {destination?.name ?? "Egypt"}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3 w-3 text-clay" />
            {tour.duration}
          </span>
        </div>

        <h3 className="mt-3 font-display text-xl leading-snug text-ink transition-colors group-hover:text-clay">
          {tour.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-ink/55">
          {tour.summary}
        </p>

        <div className="mt-auto flex items-end justify-between border-t border-ink/8 pt-4">
          <span className="text-[11px] text-ink/45">
            From{" "}
            <span className="ml-1 font-display text-xl text-ink">
              ${tour.price}
            </span>
            {tour.oldPrice && (
              <span className="ml-1.5 line-through">${tour.oldPrice}</span>
            )}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-clay">
            View tour
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
