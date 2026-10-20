import { CalendarDays, MapPin, Search, Users } from "lucide-react";
import { destinations } from "@/data/destinations";

export default function SearchBar({ compact = false }: { compact?: boolean }) {
  return (
    <form
      action="/tours"
      className={`w-full rounded-[26px] border border-ink/5 bg-white shadow-[0_24px_70px_-30px_rgba(11,29,24,0.45)] ${
        compact ? "p-2" : "p-2.5"
      }`}
    >
      <div className="grid items-stretch gap-1 md:grid-cols-[1.25fr_1fr_1fr_auto]">
        <label className="group flex cursor-pointer items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-sand/40">
          <MapPin className="h-[18px] w-[18px] shrink-0 text-clay" />
          <span className="min-w-0 flex-1">
            <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-ink/40">
              Destination
            </span>
            <select
              name="destination"
              aria-label="Destination"
              className="mt-1 w-full cursor-pointer appearance-none bg-transparent text-[13px] font-semibold text-ink outline-none"
            >
              <option value="">Anywhere in Egypt</option>
              {destinations.map((d) => (
                <option key={d.slug} value={d.slug}>
                  {d.name}
                </option>
              ))}
            </select>
          </span>
        </label>

        <label className="flex cursor-pointer items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-sand/40 md:border-l md:border-ink/8">
          <CalendarDays className="h-[18px] w-[18px] shrink-0 text-clay" />
          <span className="min-w-0 flex-1">
            <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-ink/40">
              When
            </span>
            <input
              type="date"
              name="date"
              aria-label="Travel date"
              className="mt-1 w-full bg-transparent text-[13px] font-semibold text-ink outline-none"
            />
          </span>
        </label>

        <label className="flex cursor-pointer items-center gap-3 rounded-2xl px-4 py-3 transition hover:bg-sand/40 md:border-l md:border-ink/8">
          <Users className="h-[18px] w-[18px] shrink-0 text-clay" />
          <span className="min-w-0 flex-1">
            <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-ink/40">
              Travellers
            </span>
            <select
              name="travelers"
              aria-label="Number of travellers"
              className="mt-1 w-full cursor-pointer appearance-none bg-transparent text-[13px] font-semibold text-ink outline-none"
            >
              <option value="1">1 traveller</option>
              <option value="2">2 travellers</option>
              <option value="3">3 travellers</option>
              <option value="4">4 travellers</option>
              <option value="5">5+ travellers</option>
            </select>
          </span>
        </label>

        <button type="submit" className="btn-clay rounded-2xl! md:rounded-[20px]!">
          <Search className="h-4 w-4" />
          Explore tours
        </button>
      </div>
    </form>
  );
}
