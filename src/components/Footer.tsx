import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";
import SocialIcon from "./SocialIcon";
import { site } from "@/data/site";

const explore = [
  { label: "Destinations", href: "/destinations" },
  { label: "Tours & experiences", href: "/tours" },
  { label: "Plan your trip", href: "/plan" },
  { label: "My Tours", href: "/my-tours" },
];

const company = [
  { label: "About Mansy Tours", href: "/about" },
  { label: "Journal", href: "/blog" },
  { label: "Contact us", href: "/contact" },
  { label: "FAQs", href: "/contact#faqs" },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-cream">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.9fr_1.3fr] lg:gap-10">
        <div>
          <Logo light />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/55">
            Handcrafted journeys across Egypt by local guides who grew up among
            the monuments. Independent, small-group and private travel since{" "}
            {site.founded}.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-full border border-cream/15 text-cream/65 transition hover:border-gold hover:text-gold"
              >
                <SocialIcon name={s.icon} className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold">
            Explore
          </h4>
          <ul className="mt-5 space-y-3">
            {explore.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-cream/60 transition hover:text-cream"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold">
            Company
          </h4>
          <ul className="mt-5 space-y-3">
            {company.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-cream/60 transition hover:text-cream"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold">
            Stay in touch
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-cream/60">
            <li>
              <a
                href={site.phoneHref}
                className="flex items-center gap-3 transition hover:text-cream"
              >
                <Phone className="h-4 w-4 text-gold" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 transition hover:text-cream"
              >
                <Mail className="h-4 w-4 text-gold" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              {site.address}
            </li>
          </ul>
          <div className="mt-6">
            <p className="mb-3 text-xs text-cream/40">
              Monthly Egypt notes, no noise.
            </p>
            <NewsletterForm dark />
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-cream/10">
        <p
          aria-hidden
          className="container-page select-none whitespace-nowrap pt-6 font-display text-[clamp(3.5rem,13vw,10rem)] leading-[0.8] tracking-tight text-cream/[0.04]"
        >
          Mansy Tours
        </p>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-[11px] text-cream/35 sm:flex-row">
          <p>
            © 2026 {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/contact" className="transition hover:text-cream/70">
              Privacy
            </Link>
            <Link href="/contact" className="transition hover:text-cream/70">
              Terms
            </Link>
            <span>Made with care in Cairo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
