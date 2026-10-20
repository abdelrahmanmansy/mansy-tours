import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, User } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { getPost, posts } from "@/data/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Story not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        image={post.image}
        imageAlt={post.imageAlt}
        crumbs={[
          { label: "Journal", href: "/blog" },
          { label: post.title },
        ]}
      />

      <article className="container-page py-14 md:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-5 border-b border-ink/10 pb-6 text-[11px] text-ink/45">
            <span className="inline-flex items-center gap-1.5">
              <User className="h-3.5 w-3.5 text-clay" />
              {post.author}
            </span>
            <span>{post.date}</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-clay" />
              {post.readTime}
            </span>
          </div>

          <div className="mt-9 space-y-7">
            {post.content.map((section, i) => (
              <section key={i}>
                {section.heading && (
                  <h2 className="mb-3 font-display text-2xl leading-snug text-ink sm:text-3xl">
                    {section.heading}
                  </h2>
                )}
                <p
                  className={`text-[15.5px] leading-[1.85] text-ink/65 ${
                    i === 0
                      ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-[58px] first-letter:leading-[0.78] first-letter:text-clay"
                      : ""
                  }`}
                >
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border-l-2 border-clay bg-sand/50 px-6 py-5">
            <p className="font-display text-xl leading-relaxed text-ink/80">
              “The best trips in Egypt are not the busiest ones. They are the
              ones with time to sit still.”
            </p>
            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ink/40">
              {post.author} · Mansy Tours
            </p>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-6 sm:flex-row sm:items-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[12px] font-semibold text-ink/55 transition hover:text-clay"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to the journal
            </Link>
            <Link href="/plan" className="btn-primary">
              Plan a trip like this
            </Link>
          </div>
        </div>
      </article>

      <section className="bg-sand/55 py-16 md:py-20">
        <div className="container-page">
          <SectionHeading
            eyebrow="Keep reading"
            title="More notes from Egypt"
            action={{ label: "All stories", href: "/blog" }}
          />
          <div className="mt-9 grid gap-6 sm:grid-cols-2">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group grid overflow-hidden rounded-[24px] border border-ink/8 bg-white sm:grid-cols-[0.9fr_1.1fr]"
              >
                <div className="relative aspect-[16/11] sm:aspect-auto">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-clay">
                    {p.category}
                  </p>
                  <h3 className="mt-2 font-display text-lg leading-snug text-ink transition-colors group-hover:text-clay">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[11px] text-ink/40">{p.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-16">
        <CtaBand />
      </div>
    </>
  );
}
