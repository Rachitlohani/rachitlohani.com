# Rachit Lohani — Personal Site

Static, SEO‑first website built with Astro + MDX. Content lives in Git and can be edited with simple Markdown.

## Stack
- Astro 5
- MDX for long‑form writing
- Static hosting friendly

## Project Structure
- `src/pages/` — Route files (Home, About, Insights, Personal, Contact)
- `src/layouts/` — Base layout with SEO metadata
- `src/components/` — Nav, Footer
- `src/content/` — MDX content collections (Insights)
- `src/data/medium.ts` — External blog links (Medium)
- `public/` — Static assets (images, robots.txt)

## Local Development
```bash
npm install
npm run dev
```

## Production Build
```bash
npm run build
npm run preview
```

## Content Editing

### Insights (local posts)
Add MDX files under `src/content/insights/`.

Example frontmatter:
```md
---
title: "My Post"
seoTitle: "Optional SEO Title"
description: "One‑sentence summary"
image: "/images/insights/my-post.jpg"
pubDate: 2026-02-11
tags: ["leadership", "systems"]
draft: false
---

Your content here.
```

### Medium links
Update `src/data/medium.ts`.

```ts
export const mediumPosts = [
  { title: "Title", url: "https://medium.com/...", image: "/images/medium/your-image.svg" }
];
```

## SEO Notes
- Canonical URLs, Open Graph, and Twitter metadata are set in `src/layouts/BaseLayout.astro`.
- Article JSON‑LD is added for each Insight in `src/pages/insights/[slug].astro`.
- Sitemap and robots are enabled via `astro.config.mjs` and `public/robots.txt`.

## Deployment
This site is static and can be hosted on any static host (e.g., GitHub Pages, Cloudflare Pages, Netlify, S3).

## Troubleshooting
- If `npm install` fails with Astro/MDX peer dependency errors, ensure Astro 5 is installed (see `package.json`).

---
Maintained by Rachit Lohani.
