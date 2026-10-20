"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function NewsletterForm({ dark = false }: { dark?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div
        className={`flex items-center gap-2 rounded-2xl px-4 py-3.5 text-sm ${
          dark ? "bg-cream/10 text-cream" : "bg-forest/5 text-forest"
        }`}
      >
        <Check className="h-4 w-4 text-gold" />
        You are on the list. Expect stories, not spam.
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className={`flex items-center gap-2 rounded-full border p-1.5 ${
        dark ? "border-cream/15 bg-cream/5" : "border-ink/10 bg-white"
      }`}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        aria-label="Email address"
        className={`w-full bg-transparent px-4 text-sm outline-none ${
          dark
            ? "text-cream placeholder:text-cream/35"
            : "text-ink placeholder:text-ink/35"
        }`}
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-clay text-cream transition hover:bg-[#a9542e]"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
