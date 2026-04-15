import type { Metadata } from "next";
import Link from "next/link";
import { foundations } from "@/lib/tracks";

export const metadata: Metadata = {
  title: "Learn C++ — Foundations",
  description: "The complete foundation curriculum. Every C++ concept you'll need to build real systems."
};

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.2em] text-mute mb-4">Foundations</p>
      <h1 className="text-display font-semibold tracking-tight">Learn C++, properly.</h1>
      <p className="mt-6 text-lg text-mute max-w-2xl">
        One track. Every concept, in the order you need it. No filler, no detours.
      </p>
      <div className="mt-16 space-y-16">
        {foundations.map((t) => (
          <section key={t.slug}>
            <h2 className="text-2xl font-semibold tracking-tight">{t.title}</h2>
            <p className="mt-2 text-mute">{t.tagline}</p>
            <ol className="mt-8 divide-y divide-line border-y border-line">
              {t.lessons.map((l, i) => (
                <li key={l.slug}>
                  <Link
                    href={`/learn/${t.slug}/${l.slug}`}
                    className="flex items-baseline gap-6 py-4 hover:bg-soft px-2 -mx-2 transition-colors"
                  >
                    <span className="font-mono text-sm text-mute tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-medium">{l.title}</span>
                    <span className="text-xs text-mute">{l.minutes} min</span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
