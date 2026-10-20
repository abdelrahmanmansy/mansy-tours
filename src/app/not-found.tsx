import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-page flex flex-1 flex-col items-center justify-center py-24 text-center">
      <span className="grid h-16 w-16 place-items-center rounded-full bg-forest text-cream">
        <Compass className="h-7 w-7" />
      </span>
      <p className="eyebrow mt-7">Lost in the desert</p>
      <h1 className="mt-3 font-display text-5xl text-ink sm:text-6xl">
        This path leads nowhere.
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/55">
        The page you were looking for has moved or never existed. Let us point
        you back toward something worth seeing.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-primary">
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>
        <Link href="/tours" className="btn-ghost">
          Browse tours
        </Link>
      </div>
    </section>
  );
}
