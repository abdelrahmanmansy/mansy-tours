import type { Metadata } from "next";
import { MessageCircle, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import PlanForm from "@/components/PlanForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Plan your trip",
  description:
    "Tell us your dates, budget and interests and a local Egypt specialist will design a private itinerary for you within one working day.",
};

const steps = [
  {
    number: "01",
    title: "Tell us the shape of it",
    text: "Dates, budget, who is coming and the things you cannot miss. A few honest notes are enough.",
  },
  {
    number: "02",
    title: "We design it by hand",
    text: "A local specialist builds a route with real hotels, real timings and honest pricing — no generic packages.",
  },
  {
    number: "03",
    title: "Refine, then relax",
    text: "Change anything, as many times as you like. When it feels right, we reserve it — no deposit needed.",
  },
];

export default function PlanPage() {
  return (
    <>
      <PageHero
        eyebrow="Tailor-made travel"
        title="Your trip, designed by hand."
        description="No packages, no fillers. Tell us how you like to travel and we will build the Egypt that fits — then look after every detail."
        image="/images/white-desert.jpg"
        imageAlt="The White Desert of Egypt at sunset"
        crumbs={[{ label: "Plan your trip" }]}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
          <PlanForm />

          <aside className="space-y-4">
            <div className="rounded-[28px] bg-forest p-7 text-cream">
              <p className="eyebrow text-gold!">What happens next</p>
              <div className="mt-5 space-y-6">
                {steps.map((s) => (
                  <div key={s.number} className="flex gap-4">
                    <span className="font-display text-lg text-gold/80">
                      {s.number}
                    </span>
                    <div>
                      <h3 className="font-display text-lg text-cream">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-[12.5px] leading-relaxed text-cream/55">
                        {s.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-ink/10 bg-white p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink/40">
                Rather talk it through?
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-ink/55">
                Call us or send a WhatsApp. A specialist — not a bot — will
                answer.
              </p>
              <div className="mt-4 grid gap-2">
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-2.5 rounded-2xl bg-sand/60 px-4 py-3 text-[13px] font-semibold text-ink transition hover:bg-forest hover:text-cream"
                >
                  <Phone className="h-4 w-4 text-clay" />
                  {site.phone}
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 rounded-2xl bg-sand/60 px-4 py-3 text-[13px] font-semibold text-ink transition hover:bg-forest hover:text-cream"
                >
                  <MessageCircle className="h-4 w-4 text-clay" />
                  WhatsApp us
                </a>
              </div>
              <p className="mt-4 text-[10.5px] leading-relaxed text-ink/35">
                {site.hours} · We reply to every request personally.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
