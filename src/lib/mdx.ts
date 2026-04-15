import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_ROOT = path.join(process.cwd(), "content");

export async function loadLesson(trackSlug: string, lessonSlug: string) {
  const file = path.join(CONTENT_ROOT, trackSlug, `${lessonSlug}.mdx`);
  try {
    const raw = await fs.readFile(file, "utf8");
    const { content, data } = matter(raw);
    return { content, data: data as Record<string, unknown> };
  } catch {
    return null;
  }
}

export async function lessonExists(trackSlug: string, lessonSlug: string) {
  try {
    await fs.access(path.join(CONTENT_ROOT, trackSlug, `${lessonSlug}.mdx`));
    return true;
  } catch {
    return false;
  }
}
