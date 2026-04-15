import Link from "next/link";
import { foundations, projects } from "@/lib/tracks";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Pillars />
      <FoundationStrip />
      <ProjectGrid />
      <Promise />
    </>
  );
}

function Hero() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 pt-28 pb-24 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-mute mb-6">The complete C++ curriculum</p>
        <h1 className="text-hero font-semibold tracking-tightest text-ink">
          From <span className="text-mute">zero</span> to building<br />your own operating system.
        </h1>
        <p className="mt-8 mx-auto max-w-2xl text-lg text-mute leading-relaxed">
          Master C++ from first principles, then build 25+ real systems from scratch —
          a web server, a database, a compiler, a 3D renderer, an OS, and more.
        </p>
        <div className="mt-10 flex justify-center gap-3">
          <Link
            href="/learn/cpp-fundamentals/01-hello-world"
            className="rounded-full bg-ink text-paper px-6 py-3 text-sm font-medium hover:bg-black/80 transition-colors"
          >
            Start learning
          </Link>
          <Link
            href="/projects"
            className="rounded-full border border-line px-6 py-3 text-sm font-medium hover:border-ink transition-colors"
          >
            Browse projects
          </Link>
        </div>
      </div>
    </section>
  );
}

function Pillars() {
  const pillars = [
    { k: "Free", v: "Every lesson, every project. Forever." },
    { k: "From scratch", v: "No frameworks. You write the bytes." },
    { k: "Minimum viable", v: "Real systems, small enough to finish." }
  ];
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-3 gap-12">
        {pillars.map((p) => (
          <div key={p.k}>
            <div className="text-display font-semibold tracking-tight">{p.k}.</div>
            <div className="mt-2 text-mute">{p.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FoundationStrip() {
  const track = foundations[0];
  return (
    <section className="border-b border-line bg-soft">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-mute mb-3">Start here</p>
            <h2 className="text-display font-semibold tracking-tight">{track.title}</h2>
            <p className="mt-3 text-mute max-w-xl">{track.tagline}</p>
          </div>
          <Link href={`/learn/${track.slug}`} className="hidden md:inline text-sm underline underline-offset-4">
            View all {track.lessons.length} lessons →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line rounded-xl overflow-hidden">
          {track.lessons.slice(0, 8).map((l, i) => (
            <Link
              key={l.slug}
              href={`/learn/${track.slug}/${l.slug}`}
              className="bg-paper p-5 hover:bg-soft transition-colors"
            >
              <div className="text-xs text-mute font-mono">{String(i + 1).padStart(2, "0")}</div>
              <div className="mt-2 font-medium leading-snug">{l.title}</div>
              <div className="mt-3 text-xs text-mute">{l.minutes} min</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectGrid() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.2em] text-mute mb-3">Build everything</p>
        <h2 className="text-display font-semibold tracking-tight mb-10">
          {projects.length} projects. All from scratch.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((t) => (
            <Link
              key={t.slug}
              href={`/projects/${t.slug}`}
              className="group border border-line rounded-xl p-6 hover:border-ink transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="font-semibold text-ink leading-tight">{t.title}</div>
                <Difficulty level={t.difficulty} />
              </div>
              <div className="mt-3 text-sm text-mute leading-relaxed">{t.tagline}</div>
              <div className="mt-5 text-xs text-mute font-mono">≈ {t.hours}h</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Difficulty({ level }: { level: number }) {
  return (
    <div className="flex gap-[3px]" aria-label={`Difficulty ${level}/5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`h-1 w-2 rounded-full ${i <= level ? "bg-ink" : "bg-line"}`}
        />
      ))}
    </div>
  );
}

function Promise() {
  return (
    <section>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h2 className="text-display font-semibold tracking-tight">The promise.</h2>
        <p className="mt-6 text-lg text-mute leading-relaxed">
          Start with <code className="font-mono text-ink bg-soft px-1.5 py-0.5 rounded border border-line">int main()</code>.
          Finish with a kernel that boots on real hardware. Every lesson builds on the last.
          Every project is small enough to finish, real enough to matter.
        </p>
        <Link
          href="/learn/cpp-fundamentals/01-hello-world"
          className="mt-10 inline-block rounded-full bg-ink text-paper px-6 py-3 text-sm font-medium"
        >
          Begin at Lesson 1 →
        </Link>
      </div>
    </section>
  );
}
