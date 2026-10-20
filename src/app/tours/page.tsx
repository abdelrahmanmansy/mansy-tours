import { Suspense } from "react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ToursExplorer from "@/components/ToursExplorer";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Tours & experiences",
  description:
    "Browse handpicked Egypt tours — pyramids, Nile cruises, Red Sea diving, desert camps and private cultural days with local guides.",
};

export default function ToursPage() {
  return (
    <>
      <PageHero
        eyebrow="Tours & experiences"
        title="Small groups. Big stories."
        description="Every experience below is run by our own team of Egyptologists, divers and desert guides. Filter by place, pace or price — or ask us to build something entirely new."
        image="/images/dahab.jpg"
        imageAlt="The coastline of Dahab, Sinai"
        crumbs={[{ label: "Tours" }]}
      />

      <section className="container-page py-16 md:py-24">
        <Suspense
          fallback={
            <div className="rounded-[28px] border border-ink/8 bg-white p-6">
              <div className="h-12 animate-pulse rounded-2xl bg-sand" />
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-80 animate-pulse rounded-[26px] bg-sand/70"
                  />
                ))}
              </div>
            </div>
          }
        >
          <ToursExplorer />
        </Suspense>
      </section>

      <CtaBand />
    </>
  );
}
