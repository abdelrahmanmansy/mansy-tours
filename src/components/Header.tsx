"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Clock, Mail, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import SocialIcon from "./SocialIcon";
import { nav, site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <div className="hidden bg-ink text-cream/70 md:block">
        <div className="container-page flex h-10 items-center justify-between text-[11px] tracking-wide">
          <div className="flex items-center gap-6">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 transition hover:text-cream"
            >
              <Phone className="h-3.5 w-3.5 text-gold" />
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 transition hover:text-cream"
            >
              <Mail className="h-3.5 w-3.5 text-gold" />
              {site.email}
            </a>
            <span className="flex items-center gap-2">
              <Clock className="h-3.5 w-3.5 text-gold" />
              {site.hours}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="uppercase tracking-[0.2em] text-cream/40">
              Follow the journey
            </span>
            {site.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-cream/60 transition hover:text-gold"
              >
                <SocialIcon name={s.icon} className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-ink/8 bg-cream/90 backdrop-blur-xl">
        <div className="container-page flex h-20 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-[13px] font-semibold transition ${
                  isActive(item.href)
                    ? "bg-forest/5 text-clay"
                    : "text-ink/65 hover:bg-forest/5 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <Link
              href="/my-tours"
              className="text-[13px] font-semibold text-ink/60 transition hover:text-clay"
            >
              My Tours
            </Link>
            <Link href="/plan" className="btn-primary px-5! py-3!">
              Plan your trip
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink transition hover:bg-forest hover:text-cream md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-ink/10 bg-cream md:hidden">
            <div className="container-page flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                    isActive(item.href)
                      ? "bg-forest text-cream"
                      : "text-ink/70 hover:bg-sand"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/my-tours"
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-ink/70 transition hover:bg-sand"
              >
                My Tours
              </Link>
              <div className="mt-3 grid grid-cols-2 gap-3 border-t border-ink/10 pt-4">
                <a href={site.phoneHref} className="btn-ghost px-4!">
                  <Phone className="h-4 w-4" />
                  Call us
                </a>
                <Link
                  href="/plan"
                  onClick={() => setOpen(false)}
                  className="btn-primary px-4!"
                >
                  Plan trip
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
