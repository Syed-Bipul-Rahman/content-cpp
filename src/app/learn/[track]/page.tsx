import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { foundations, getTrack } from "@/lib/tracks";

export function generateStaticParams() {
  return foundations.map((t) => ({ track: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ track: string }> }): Promise<Metadata> {
  const { track } = await params;
  const t = getTrack(track);
  if (!t) return {};
  return { title: t.title, description: t.tagline };
}

export default async function TrackPage({ params }: { params: Promise<{ track: string }> }) {
  const { track } = await params;
  const t = getTrack(track);
  if (!t || t.kind !== "foundation") notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <Link href="/learn" className="text-sm text-mute hover:text-ink">← All foundations</Link>
      <h1 className="mt-6 text-display font-semibold tracking-tight">{t.title}</h1>
      <p className="mt-4 text-lg text-mute max-w-2xl">{t.tagline}</p>
      <ol className="mt-16 divide-y divide-line border-y border-line">
        {t.lessons.map((l, i) => (
          <li key={l.slug}>
            <Link
              href={`/learn/${t.slug}/${l.slug}`}
              className="flex items-baseline gap-6 py-4 hover:bg-soft px-2 -mx-2 transition-colors"
            >
              <span className="font-mono text-sm text-mute tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <span className="flex-1 font-medium">{l.title}</span>
              <span className="text-xs text-mute">{l.minutes} min</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
