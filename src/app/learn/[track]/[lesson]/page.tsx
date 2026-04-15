import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { foundations, getLesson } from "@/lib/tracks";
import { loadLesson } from "@/lib/mdx";
import { Lesson } from "@/components/Lesson";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return foundations.flatMap((t) => t.lessons.map((l) => ({ track: t.slug, lesson: l.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ track: string; lesson: string }> }): Promise<Metadata> {
  const { track, lesson } = await params;
  const data = getLesson(track, lesson);
  if (!data) return {};
  const title = `${data.lesson.title} — ${data.track.title}`;
  const description = `${data.track.title}: lesson ${String(data.index + 1).padStart(2, "0")}. ${data.lesson.title}.`;
  const url = `${site.url}/learn/${track}/${lesson}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title, description, siteName: site.name }
  };
}

export default async function LessonPage({ params }: { params: Promise<{ track: string; lesson: string }> }) {
  const { track, lesson } = await params;
  const data = getLesson(track, lesson);
  if (!data || data.track.kind !== "foundation") notFound();
  const mdx = await loadLesson(track, lesson);

  const ld = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: data.lesson.title,
    description: data.track.tagline,
    inLanguage: "en",
    learningResourceType: "Lesson",
    educationalLevel: "Beginner",
    timeRequired: `PT${data.lesson.minutes}M`,
    isPartOf: { "@type": "Course", name: data.track.title },
    url: `${site.url}/learn/${track}/${lesson}`
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
        basePath="learn"
        body={mdx?.content ?? null}
      />
    </>
  );
}
