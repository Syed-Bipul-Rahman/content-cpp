import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import type { Track } from "@/lib/site";

type Props = {
  track: Track;
  lesson: { slug: string; title: string; minutes: number };
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
  index: number;
  basePath: "learn" | "projects";
  body: string | null;
};

export function Lesson({ track, lesson, prev, next, index, basePath, body }: Props) {
  return (
    <article className="mx-auto max-w-prose px-6 py-16">
      <nav className="text-sm text-mute mb-10 flex items-center gap-2">
        <Link href={`/${basePath}`} className="hover:text-ink">{basePath === "learn" ? "Foundations" : "Projects"}</Link>
        <span>/</span>
        <Link href={`/${basePath}/${track.slug}`} className="hover:text-ink">{track.title}</Link>
      </nav>

      <p className="text-sm text-mute font-mono mb-2">
        Lesson {String(index + 1).padStart(2, "0")} · {lesson.minutes} min
      </p>

      <div className="prose-cpp">
        {body ? (
          <MDXRemote
            source={body}
            options={{
              parseFrontmatter: false,
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [
                  [
                    rehypePrettyCode,
                    { theme: { dark: "github-dark-default", light: "github-light" }, keepBackground: false }
                  ]
                ]
              }
            }}
          />
        ) : (
          <>
            <h1>{lesson.title}</h1>
            <p className="text-mute">
              This lesson is part of the <strong>{track.title}</strong> track. The full content is being written.
              In the meantime, here's what this lesson will cover:
            </p>
            <Outline track={track} lessonSlug={lesson.slug} />
          </>
        )}
      </div>

      <hr className="my-16 border-line" />

      <div className="grid grid-cols-2 gap-4">
        {prev ? (
          <Link
            href={`/${basePath}/${track.slug}/${prev.slug}`}
            className="rounded-xl border border-line p-5 hover:border-ink transition-colors"
          >
            <div className="text-xs text-mute">← Previous</div>
            <div className="mt-1 font-medium leading-tight">{prev.title}</div>
          </Link>
        ) : <div />}
        {next ? (
          <Link
            href={`/${basePath}/${track.slug}/${next.slug}`}
            className="rounded-xl border border-line p-5 hover:border-ink transition-colors text-right"
          >
            <div className="text-xs text-mute">Next →</div>
            <div className="mt-1 font-medium leading-tight">{next.title}</div>
          </Link>
        ) : <div />}
      </div>
    </article>
  );
}

function Outline({ track, lessonSlug }: { track: Track; lessonSlug: string }) {
  const pos = track.lessons.findIndex((l) => l.slug === lessonSlug);
  return (
    <ul>
      <li>Why this lesson matters for the {track.title} path</li>
      <li>Core concepts and their C++ idioms</li>
      <li>Worked examples you can compile and run</li>
      <li>Common pitfalls and how to avoid them</li>
      <li>Exercises to cement the material</li>
      {pos < track.lessons.length - 1 && (
        <li>How this connects to <em>{track.lessons[pos + 1].title}</em></li>
      )}
    </ul>
  );
}
