"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import DestinationCard from "./DestinationCard";
import { destinations, regions } from "@/data/destinations";

export default function DestinationExplorer() {
  const [region, setRegion] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return destinations.filter((d) => {
      const matchesRegion = region === "All" || d.region === region;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.tagline.toLowerCase().includes(q) ||
        d.region.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q);
      return matchesRegion && matchesQuery;
    });
  }, [region, query]);

  const allRegions = ["All", ...regions];

  return (
    <div>
      <div className="flex flex-col gap-5 rounded-[28px] border border-ink/8 bg-white p-5 md:flex-row md:items-center md:justify-between md:p-6">
        <div className="relative w-full md:max-w-sm">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search destinations, regions, moods..."
            aria-label="Search destinations"
            className="field rounded-full! py-3! pl-11"
          />
        </div>

        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/40">
          <SlidersHorizontal className="h-3.5 w-3.5" />
          {filtered.length} destination{filtered.length === 1 ? "" : "s"}
        </div>
      </div>

      <div className="no-scrollbar mt-5 flex gap-2 overflow-x-auto pb-1">
        {allRegions.map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRegion(r)}
            className={`shrink-0 rounded-full px-4 py-2.5 text-[12px] font-semibold transition ${
              region === r
                ? "bg-forest text-cream"
                : "border border-ink/10 bg-cream text-ink/60 hover:border-forest/30 hover:text-ink"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <DestinationCard key={d.slug} destination={d} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-3xl border border-dashed border-ink/15 py-20 text-center">
          <p className="font-display text-2xl text-ink">No destinations found</p>
          <p className="mt-2 text-sm text-ink/50">
            Try another region, or ask us — we plan trips all over Egypt.
          </p>
          <button
            type="button"
            onClick={() => {
              setRegion("All");
              setQuery("");
            }}
            className="btn-ghost mt-6"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
