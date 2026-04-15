import type { Metadata } from "next";
import Link from "next/link";
import { foundations, projects } from "@/lib/tracks";

export const metadata: Metadata = {
  title: "Roadmap",
  description: "The full path from printing Hello World to booting your own operating system."
};

export default function RoadmapPage() {
  const phases = [
    {
      title: "Phase 1 — Foundations",
      body: "Learn the language. Every concept, with examples that compile.",
      tracks: foundations
    },
    {
      title: "Phase 2 — First projects",
      body: "Small wins. Finishable in a weekend. Build confidence with real systems.",
      tracks: projects.filter((t) => t.difficulty <= 2)
    },
    {
      title: "Phase 3 — Systems in anger",
      body: "Real engineering. Networking, parsing, concurrency, persistence.",
      tracks: projects.filter((t) => t.difficulty === 3)
    },
    {
      title: "Phase 4 — Deep systems",
      body: "Databases, renderers, bots that run unattended. Hard things, done properly.",
      tracks: projects.filter((t) => t.difficulty === 4)
    },
    {
      title: "Phase 5 — The boss fights",
      body: "Compilers. Operating systems. Search engines. The things that change how you think.",
      tracks: projects.filter((t) => t.difficulty === 5)
    }
  ];

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.2em] text-mute mb-4">Roadmap</p>
      <h1 className="text-display font-semibold tracking-tight">From zero to OS.</h1>
      <p className="mt-6 text-lg text-mute max-w-2xl">
        Follow in order. Each phase unlocks the next.
      </p>

      <div className="mt-16 space-y-20">
        {phases.map((p) => (
          <section key={p.title}>
            <h2 className="text-2xl font-semibold tracking-tight">{p.title}</h2>
            <p className="mt-2 text-mute">{p.body}</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-2">
              {p.tracks.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/${t.kind === "foundation" ? "learn" : "projects"}/${t.slug}`}
                    className="block border border-line rounded-lg p-4 hover:border-ink transition-colors"
                  >
                    <div className="font-medium">{t.title}</div>
                    <div className="mt-1 text-xs text-mute">≈ {t.hours}h · Level {t.difficulty}/5</div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
