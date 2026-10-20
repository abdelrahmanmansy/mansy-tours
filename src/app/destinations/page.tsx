import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import DestinationExplorer from "@/components/DestinationExplorer";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore Egypt region by region — Cairo and Giza, Luxor and Aswan, the Red Sea, Sinai and the Western Desert.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Where to go"
        title="Ten places. A thousand stories."
        description="Egypt is not one destination. It is a desert, a river, a sea and a thousand years of city life. Start with the place that calls to you."
        image="/images/siwa.jpg"
        imageAlt="Palm trees and water at Siwa Oasis"
        crumbs={[{ label: "Destinations" }]}
      />

      <section className="container-page py-16 md:py-24">
        <DestinationExplorer />
      </section>

      <CtaBand />
    </>
  );
}
