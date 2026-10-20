import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Destination } from "@/data/destinations";

export default function DestinationCard({
  destination,
}: {
  destination: Destination;
}) {
  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className="group relative block overflow-hidden rounded-[26px] bg-ink"
    >
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={destination.image}
          alt={destination.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent opacity-90" />
      </div>

      <span className="absolute left-5 top-5 rounded-full border border-cream/25 bg-ink/35 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-cream backdrop-blur-sm">
        {destination.region}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
          {destination.tagline}
        </p>
        <h3 className="mt-2 font-display text-[26px] leading-tight text-cream">
          {destination.name}
        </h3>
        <div className="mt-4 flex items-center justify-between border-t border-cream/15 pt-4">
          <span className="text-xs text-cream/65">
            From{" "}
            <span className="text-sm font-semibold text-cream">
              ${destination.startingPrice}
            </span>{" "}
            / person
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-full border border-cream/30 text-cream transition-all duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
