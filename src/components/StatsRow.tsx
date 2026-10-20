import { stats } from "@/data/site";

export default function StatsRow() {
  return (
    <section className="bg-forest">
      <div className="container-page grid grid-cols-2 divide-cream/10 md:grid-cols-4 md:divide-x">
        {stats.map((s) => (
          <div
            key={s.label}
            className="px-2 py-8 text-center md:px-8 md:py-10"
          >
            <p className="font-display text-4xl text-cream md:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/45">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
