import type { MetadataRoute } from "next";
import { foundations, projects } from "@/lib/tracks";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = [
    "",
    "/learn",
    "/projects",
    "/roadmap",
    "/about"
  ].map((p) => ({ url: `${site.url}${p}`, lastModified: now, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.8 }));

  const trackUrls = [...foundations, ...projects].map((t) => ({
    url: `${site.url}/${t.kind === "foundation" ? "learn" : "projects"}/${t.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7
  }));

  const lessonUrls = [...foundations, ...projects].flatMap((t) =>
    t.lessons.map((l) => ({
      url: `${site.url}/${t.kind === "foundation" ? "learn" : "projects"}/${t.slug}/${l.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  );

  return [...base, ...trackUrls, ...lessonUrls];
}
