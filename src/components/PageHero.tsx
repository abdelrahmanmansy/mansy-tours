import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  crumbs = [],
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  imageAlt: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/30" />

      <div className="container-page relative py-20 md:py-28">
        {crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-1.5 text-[11px] text-cream/45"
          >
            <span className="flex items-center gap-1.5">
              <Link href="/" className="transition hover:text-cream">
                Home
              </Link>
              <ChevronRight className="h-3 w-3 text-cream/25" />
            </span>
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-1.5">
                {c.href ? (
                  <Link href={c.href} className="transition hover:text-cream">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-cream/75">{c.label}</span>
                )}
                {i < crumbs.length - 1 && (
                  <ChevronRight className="h-3 w-3 text-cream/25" />
                )}
              </span>
            ))}
          </nav>
        )}

        <p className="eyebrow text-gold!">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[0.98] tracking-tight text-cream text-balance sm:text-6xl md:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-cream/65">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
