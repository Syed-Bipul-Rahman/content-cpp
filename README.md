# learncpp.dev

A Next.js 15 site teaching C++ from zero through 25+ from-scratch projects.

## Dev

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export-ready build
npm start
```

## Structure

- `src/app/` — App Router pages, layout, sitemap, robots
- `src/components/Lesson.tsx` — lesson renderer with MDX + prev/next nav
- `src/lib/site.ts` — site metadata (edit `site.url` before deploying)
- `src/lib/tracks.ts` — single source of truth for all tracks & lessons
- `content/<track>/<lesson>.mdx` — lesson content (optional per lesson — missing
  files render a structured outline)

## Writing lessons

Create `content/<track-slug>/<lesson-slug>.mdx` with frontmatter:

```mdx
---
title: Lesson title
description: One-line description for SEO
---

# Lesson title

Markdown + code fences.
```

## SEO

- Dynamic `sitemap.xml` at build
- `robots.txt`
- Per-lesson Open Graph, canonical URLs, JSON-LD (`LearningResource` for
  foundations, `HowTo` for projects)

## Adding a track or lesson

Edit `src/lib/tracks.ts` — the nav, sitemap, and routes update automatically.

## Deploy

Static or SSR. Set `site.url` in `src/lib/site.ts`, then deploy to Vercel,
Netlify, Cloudflare Pages, or any static host.
