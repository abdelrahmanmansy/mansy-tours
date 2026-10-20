import type { Metadata } from "next";
import { MessageCircle, Phone, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import MyToursLookup from "@/components/MyToursLookup";
import CtaBand from "@/components/CtaBand";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "My Tours",
  description:
    "Look up your Mansy Tours booking, check your travel date and find your guide's contact details.",
};

export default function MyToursPage() {
  return (
    <>
      <PageHero
        eyebrow="Your journeys"
        title="Find my booking."
        description="Enter the reference from your confirmation email to see your trip details, pickup information and guide contact."
        image="/images/sharm.jpg"
        imageAlt="The Red Sea coast at Sharm El Sheikh"
        crumbs={[{ label: "My Tours" }]}
      />

      <section className="container-page py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <MyToursLookup />
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Secure lookup",
              text: "Your reference and email must match our records.",
            },
            {
              icon: MessageCircle,
              title: "Need a change?",
              text: "WhatsApp us and we will handle it directly.",
            },
            {
              icon: Phone,
              title: "Lost your reference?",
              text: "Call us with your travel dates and name.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-ink/8 bg-white p-5"
            >
              <item.icon className="h-4 w-4 text-clay" />
              <p className="mt-3 text-[13px] font-semibold text-ink">
                {item.title}
              </p>
              <p className="mt-1 text-[11.5px] leading-relaxed text-ink/45">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-center text-[11px] text-ink/35">
          Need a hand? Call{" "}
          <a href={site.phoneHref} className="font-semibold text-clay">
            {site.phone}
          </a>{" "}
          or email{" "}
          <a
            href={`mailto:${site.email}`}
            className="font-semibold text-clay"
          >
            {site.email}
          </a>
          .
        </p>
      </section>

      <CtaBand />
    </>
  );
}
