import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { projects, getLesson } from "@/lib/tracks";
import { loadLesson } from "@/lib/mdx";
import { Lesson } from "@/components/Lesson";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return projects.flatMap((t) => t.lessons.map((l) => ({ track: t.slug, lesson: l.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ track: string; lesson: string }> }): Promise<Metadata> {
  const { track, lesson } = await params;
  const data = getLesson(track, lesson);
  if (!data) return {};
  const title = `${data.lesson.title} — ${data.track.title}`;
  const description = `${data.track.title}: ${data.track.tagline}`;
  const url = `${site.url}/projects/${track}/${lesson}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title, description, siteName: site.name }
  };
}

export default async function ProjectLessonPage({ params }: { params: Promise<{ track: string; lesson: string }> }) {
  const { track, lesson } = await params;
  const data = getLesson(track, lesson);
  if (!data || data.track.kind !== "project") notFound();
  const mdx = await loadLesson(track, lesson);

  const ld = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `${data.track.title} — ${data.lesson.title}`,
    description: data.track.tagline,
    totalTime: `PT${data.track.hours}H`,
    url: `${site.url}/projects/${track}/${lesson}`
  };

  return (
    <>
      <Script id="ld" type="application/ld+json" strategy="beforeInteractive">{JSON.stringify(ld)}</Script>
      <Lesson
        track={data.track}
        lesson={data.lesson}
        prev={data.prev}
        next={data.next}
        index={data.index}
        basePath="projects"
        body={mdx?.content ?? null}
      />
    </>
  );
}
