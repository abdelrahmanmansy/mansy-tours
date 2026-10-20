import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <span
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-full font-display text-xl transition-transform duration-300 group-hover:rotate-6 ${
          light
            ? "border border-cream/25 bg-cream/10 text-cream"
            : "bg-forest text-cream"
        }`}
      >
        M
      </span>
      <span className="leading-none">
        <span
          className={`block font-display text-[22px] tracking-tight ${
            light ? "text-cream" : "text-ink"
          }`}
        >
          Mansy
        </span>
        <span
          className={`mt-1 block text-[8px] font-bold uppercase tracking-[0.34em] ${
            light ? "text-cream/55" : "text-ink/45"
          }`}
        >
          Tours · Egypt
        </span>
      </span>
    </Link>
  );
}
