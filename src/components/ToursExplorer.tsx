"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import TourCard from "./TourCard";
import { destinations } from "@/data/destinations";
import { categories, tours } from "@/data/tours";

const priceRanges = [
  { label: "Any price", value: "all" },
  { label: "Under $75", value: "under-75" },
  { label: "$75 – $150", value: "75-150" },
  { label: "$150 – $350", value: "150-350" },
  { label: "$350+", value: "350-plus" },
];

const sortOptions = [
  { label: "Recommended", value: "recommended" },
  { label: "Price: low to high", value: "price-asc" },
  { label: "Price: high to low", value: "price-desc" },
  { label: "Top rated", value: "rating" },
];

function matchesPrice(price: number, range: string) {
  if (range === "under-75") return price < 75;
  if (range === "75-150") return price >= 75 && price <= 150;
  if (range === "150-350") return price > 150 && price <= 350;
  if (range === "350-plus") return price > 350;
  return true;
}

export default function ToursExplorer() {
  const searchParams = useSearchParams();
  const initialDestination = searchParams.get("destination") ?? "All";

  const [query, setQuery] = useState("");
  const [destination, setDestination] = useState(initialDestination);
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState("all");
  const [sort, setSort] = useState("recommended");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const result = tours.filter((t) => {
      const dest = destinations.find((d) => d.slug === t.destination);
      const matchesQuery =
        !q ||
        t.title.toLowerCase().includes(q) ||
        t.summary.toLowerCase().includes(q) ||
        (dest?.name.toLowerCase().includes(q) ?? false);
      const matchesDestination =
        destination === "All" || t.destination === destination;
      const matchesCategory = category === "All" || t.category === category;
      return (
        matchesQuery &&
        matchesDestination &&
        matchesCategory &&
        matchesPrice(t.price, price)
      );
    });

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating || b.reviews - a.reviews);
        break;
      default:
        result.sort(
          (a, b) =>
            Number(Boolean(b.featured)) - Number(Boolean(a.featured)) ||
            b.rating - a.rating,
        );
    }

    return result;
  }, [query, destination, category, price, sort]);

  const activeFilters =
    (destination !== "All" ? 1 : 0) +
    (category !== "All" ? 1 : 0) +
    (price !== "all" ? 1 : 0) +
    (query.trim() ? 1 : 0);

  function reset() {
    setQuery("");
    setDestination("All");
    setCategory("All");
    setPrice("all");
    setSort("recommended");
  }

  return (
    <div>
      <div className="rounded-[28px] border border-ink/8 bg-white p-5 md:p-6">
        <div className="grid gap-3 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/35" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tours, places, experiences..."
              aria-label="Search tours"
              className="field rounded-2xl! py-3! pl-11"
            />
          </div>

          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            aria-label="Filter by destination"
            className="field rounded-2xl! py-3! cursor-pointer"
          >
            <option value="All">All destinations</option>
            {destinations.map((d) => (
              <option key={d.slug} value={d.slug}>
                {d.name}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort tours"
            className="field rounded-2xl! py-3! cursor-pointer"
          >
            {sortOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`rounded-full px-3.5 py-2 text-[11px] font-semibold transition ${
                category === c
                  ? "bg-forest text-cream"
                  : "border border-ink/10 text-ink/55 hover:border-forest/30 hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
          <span className="mx-1 hidden h-5 w-px bg-ink/10 sm:block" />
          {priceRanges.map((p) => (
            <button
              key={p.value}
              type="button"
              onClick={() => setPrice(p.value)}
              className={`rounded-full px-3.5 py-2 text-[11px] font-semibold transition ${
                price === p.value
                  ? "bg-clay text-cream"
                  : "border border-ink/10 text-ink/55 hover:border-clay/40 hover:text-ink"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
        <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/45">
          <SlidersHorizontal className="h-3.5 w-3.5" />
          {filtered.length} experience{filtered.length === 1 ? "" : "s"}
        </p>
        {activeFilters > 0 && (
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-clay transition hover:text-ink"
          >
            <X className="h-3.5 w-3.5" />
            Clear filters ({activeFilters})
          </button>
        )}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <TourCard key={t.slug} tour={t} />
          ))}
        </div>
      ) : (
        <div className="mt-5 rounded-3xl border border-dashed border-ink/15 py-20 text-center">
          <p className="font-display text-2xl text-ink">No tours match yet</p>
          <p className="mx-auto mt-2 max-w-sm text-sm text-ink/50">
            Try widening your filters — or let us design something just for
            you.
          </p>
          <button type="button" onClick={reset} className="btn-ghost mt-6">
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
