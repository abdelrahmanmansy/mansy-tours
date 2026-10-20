import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mansy Tours — Egypt, beyond the postcard",
    template: "%s | Mansy Tours",
  },
  description:
    "Handcrafted Egypt tours, private guides and once-in-a-lifetime experiences from the pyramids of Giza to the Red Sea reefs. Plan your trip with local experts.",
  keywords: [
    "Egypt tours",
    "Egypt travel agency",
    "Luxor tours",
    "Nile cruise",
    "Red Sea diving",
    "Cairo day tours",
  ],
  openGraph: {
    title: "Mansy Tours — Egypt, beyond the postcard",
    description:
      "Handcrafted Egypt tours, private guides and once-in-a-lifetime experiences.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
