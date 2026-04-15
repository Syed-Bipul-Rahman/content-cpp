import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/tracks";

export const metadata: Metadata = {
  title: "Projects — Build Everything From Scratch",
  description:
    "Build a web server, database, compiler, operating system, 3D renderer, blockchain, and more — entirely in C++."
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <p className="text-sm uppercase tracking-[0.2em] text-mute mb-4">Projects</p>
      <h1 className="text-display font-semibold tracking-tight">Build everything.</h1>
      <p className="mt-6 text-lg text-mute max-w-2xl">
        {projects.length} real systems. Each in C++, from scratch, small enough to finish. Pick any one — after the foundations.
      </p>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((t) => (
          <Link
            key={t.slug}
            href={`/projects/${t.slug}`}
            className="group border border-line rounded-xl p-6 hover:border-ink transition-colors flex flex-col"
          >
            <div className="flex justify-between items-start">
              <div className="font-semibold text-ink leading-tight">{t.title}</div>
              <div className="flex gap-[3px]" aria-label={`Difficulty ${t.difficulty}/5`}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className={`h-1 w-2 rounded-full ${i <= t.difficulty ? "bg-ink" : "bg-line"}`} />
                ))}
              </div>
            </div>
            <div className="mt-3 text-sm text-mute leading-relaxed flex-1">{t.tagline}</div>
            <div className="mt-5 text-xs text-mute font-mono">≈ {t.hours}h · {t.lessons.length} lessons</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
