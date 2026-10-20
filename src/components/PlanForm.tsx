"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";

const interests = [
  "History & monuments",
  "Food & markets",
  "Nile cruise",
  "Red Sea diving",
  "Desert & stars",
  "Family friendly",
  "Photography",
  "Relaxation",
];

export default function PlanForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [name, setName] = useState("");

  function toggle(item: string) {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );
  }

  if (done) {
    return (
      <div className="rounded-[28px] border border-ink/10 bg-white p-8 text-center sm:p-12">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-forest text-cream">
          <Check className="h-7 w-7" />
        </span>
        <p className="eyebrow mt-6">Trip request received</p>
        <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
          Leave it with us{name ? `, ${name}` : ""}.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink/55">
          A real specialist is reading your notes right now. You will receive a
          personal outline — route, hotels and honest pricing — within one
          working day.
        </p>
        {selected.length > 0 && (
          <div className="mx-auto mt-6 flex max-w-md flex-wrap justify-center gap-2">
            {selected.map((s) => (
              <span
                key={s}
                className="rounded-full bg-sand px-3 py-1.5 text-[11px] font-semibold text-ink/60"
              >
                {s}
              </span>
            ))}
          </div>
        )}
        <button
          type="button"
          onClick={() => {
            setDone(false);
            setSelected([]);
            setName("");
          }}
          className="btn-ghost mt-8"
        >
          Plan another trip
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="rounded-[28px] border border-ink/10 bg-white p-6 sm:p-8"
    >
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-clay/10 text-clay">
          <Sparkles className="h-4 w-4" />
        </span>
        <div>
          <h2 className="font-display text-2xl text-ink">Tell us about you</h2>
          <p className="text-[11.5px] text-ink/45">
            Two minutes now saves a lot of email later.
          </p>
        </div>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="plan-name" className="label">
            Full name *
          </label>
          <input
            id="plan-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="field"
            placeholder="Amelia Grant"
          />
        </div>
        <div>
          <label htmlFor="plan-email" className="label">
            Email *
          </label>
          <input
            id="plan-email"
            type="email"
            required
            className="field"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="plan-phone" className="label">
            Phone / WhatsApp
          </label>
          <input
            id="plan-phone"
            type="tel"
            className="field"
            placeholder="+44 7700 900000"
          />
        </div>
        <div>
          <label htmlFor="plan-country" className="label">
            Where are you travelling from?
          </label>
          <input
            id="plan-country"
            className="field"
            placeholder="United Kingdom"
          />
        </div>
        <div>
          <label htmlFor="plan-from" className="label">
            Arrival date
          </label>
          <input id="plan-from" type="date" className="field" />
        </div>
        <div>
          <label htmlFor="plan-to" className="label">
            Departure date
          </label>
          <input id="plan-to" type="date" className="field" />
        </div>
        <div>
          <label htmlFor="plan-travelers" className="label">
            Travellers
          </label>
          <select id="plan-travelers" className="field">
            {["1", "2", "3", "4", "5", "6", "7+"].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="plan-budget" className="label">
            Budget per person
          </label>
          <select id="plan-budget" className="field">
            <option>Under $1,000</option>
            <option>$1,000 – $2,500</option>
            <option>$2,500 – $5,000</option>
            <option>$5,000+</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <span className="label">What are you into?</span>
        <div className="flex flex-wrap gap-2">
          {interests.map((item) => {
            const active = selected.includes(item);
            return (
              <button
                key={item}
                type="button"
                onClick={() => toggle(item)}
                className={`rounded-full border px-3.5 py-2 text-[11.5px] font-semibold transition ${
                  active
                    ? "border-forest bg-forest text-cream"
                    : "border-ink/10 bg-white text-ink/55 hover:border-forest/30 hover:text-ink"
                }`}
              >
                {active && <Check className="mr-1 inline h-3 w-3" />}
                {item}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="plan-notes" className="label">
          Anything else we should know?
        </label>
        <textarea
          id="plan-notes"
          rows={4}
          className="field resize-none"
          placeholder="Must-sees, celebrations, dietary needs, mobility, children's ages..."
        />
      </div>

      <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-ink/8 pt-6 sm:flex-row">
        <p className="text-[11px] leading-relaxed text-ink/40">
          No deposit, no obligation. We reply within one working day.
        </p>
        <button type="submit" className="btn-clay w-full sm:w-auto">
          Send my trip request
        </button>
      </div>
    </form>
  );
}
