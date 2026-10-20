import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  action?: { label: string; href: string };
  align?: "left" | "center";
  light?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  text,
  action,
  align = "left",
  light = false,
}: Props) {
  return (
    <div
      className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${
        align === "center" ? "text-center md:flex-col md:items-center" : ""
      }`}
    >
      <div className={align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}>
        <p className={`eyebrow ${light ? "!text-gold" : ""}`}>{eyebrow}</p>
        <h2
          className={`mt-4 font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl ${
            light ? "text-cream" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {text && (
          <p
            className={`mt-5 max-w-xl text-[15px] leading-relaxed ${
              light ? "text-cream/60" : "text-ink/60"
            }`}
          >
            {text}
          </p>
        )}
      </div>

      {action && (
        <Link
          href={action.href}
          className={`group inline-flex shrink-0 items-center gap-2 border-b pb-1 text-sm font-semibold transition ${
            light
              ? "border-cream/25 text-cream hover:border-gold hover:text-gold"
              : "border-ink/20 text-ink hover:border-clay hover:text-clay"
          }`}
        >
          {action.label}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}
