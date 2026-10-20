import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import NewsletterForm from "@/components/NewsletterForm";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "The Journal",
  description:
    "Egypt travel guides, itineraries and quiet recommendations from the guides at Mansy Tours.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Notes from Egypt."
        description="Practical guides, slow itineraries and the small discoveries that never make it into guidebooks — written by the people who live here."
        image="/images/luxor.jpg"
        imageAlt="Luxor Temple in the evening"
        crumbs={[{ label: "Journal" }]}
      />

      <section className="container-page py-16 md:py-24">
        {featured && (
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-[32px] border border-ink/10 bg-white lg:grid-cols-2"
          >
            <div className="relative aspect-[16/11] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[900ms] group-hover:scale-105"
              />
              <span className="absolute left-5 top-5 rounded-full bg-cream/95 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-ink">
                Featured
              </span>
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <div className="flex flex-wrap items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/40">
                <span className="text-clay">{featured.category}</span>
                <span className="h-0.5 w-0.5 rounded-full bg-ink/25" />
                <span>{featured.date}</span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {featured.readTime}
                </span>
              </div>
              <h2 className="mt-4 font-display text-3xl leading-tight text-ink transition-colors group-hover:text-clay sm:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-ink/55">
                {featured.excerpt}
              </p>
              <span className="mt-7 inline-flex items-center gap-2 text-[12px] font-semibold text-ink">
                Read the story
                <ArrowUpRight className="h-4 w-4 text-clay transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </Link>
        )}

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col"
            >
              <div className="relative aspect-[16/11] overflow-hidden rounded-[24px]">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[900ms] group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-ink">
                  {post.category}
                </span>
              </div>
              <div className="mt-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/40">
                <span>{post.date}</span>
                <span className="h-0.5 w-0.5 rounded-full bg-ink/25" />
                <span>{post.readTime}</span>
              </div>
              <h3 className="mt-2.5 font-display text-xl leading-snug text-ink transition-colors group-hover:text-clay">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-ink/55">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-5 rounded-[28px] border border-ink/10 bg-white p-7 sm:flex-row">
          <div>
            <p className="font-display text-2xl text-ink">
              Egypt notes, once a month.
            </p>
            <p className="mt-1 text-[12.5px] text-ink/50">
              New guides, quiet places and the odd piece of good news.
            </p>
          </div>
          <div className="w-full sm:w-80">
            <NewsletterForm />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
