# Nonna Lodge — Website

A professional marketing website for **Nonna Lodge**, a boutique hotel. Built with
Next.js (App Router), TypeScript and Tailwind CSS v4. Mobile-first, accessible and
optimised for page speed.

## Tech stack

- **Next.js 16** (App Router, React Server Components, `next/image` optimisation)
- **TypeScript**
- **Tailwind CSS v4** (CSS-first theme in `src/app/globals.css`)
- **lucide-react** (icons), **yet-another-react-lightbox** (gallery)
- Self-hosted fonts via `@fontsource` (Cormorant Garamond + Inter)

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (type-check + lint + build)
npm run start      # serve the production build
npm run lint
```

## Project structure

```
src/
├── app/            # pages: /, /rooms, /gallery, /experiences, /dining, /about, /contact
│                   # plus not-found, sitemap.ts, robots.ts
├── components/     # layout (Header/Footer), ui, sections, rooms, amenities, gallery, forms
├── data/           # site.ts, rooms.ts, amenities.ts, images.ts  (content + image manifest)
└── lib/            # cn.ts (class helper), seo.ts (metadata helper)
```

Content lives in typed files under `src/data/` — edit those to change copy, rooms,
amenities, contact details and navigation.

## Adding the real photos

Image slots are declared in `src/data/` (the manifest in `src/data/images.ts`, plus
per-room/`experience` images). Until a slot has a real `src`, the UI shows a labelled
placeholder so every intended photo is visible.

To wire in real photos:

1. Put the originals in `public/images/_inbox/` (subfolders are fine).
2. Optimise them: `npm run optimize:images` → writes compressed WebP to
   `public/images/_optimized/`.
3. Move the optimised files into descriptive folders, e.g.
   `public/images/hero/`, `public/images/rooms/garden-room/`, `public/images/dining/`.
4. Fill in the `src` (and improve `alt`) for each slot in `src/data/`.
5. Anything genuinely gallery-worthy that doesn't fit a section goes in
   `galleryImages` in `src/data/images.ts`.

Goal: **every photo is used in a context that matches what it shows**, with no
unused images and no broken paths.

## Outstanding TODOs (placeholder content)

Search the codebase for `TODO` to find everything that needs real data:

- **Contact** — address, phone, email, hours (`src/data/site.ts`)
- **Rooms** — real rates, sizes, descriptions (`src/data/rooms.ts`)
- **Testimonials** — real guest reviews (`src/components/sections/Testimonials.tsx`)
- **About** — the real story of the lodge (`src/app/about/page.tsx`)
- **Maps** — embed real coordinates (About + Contact pages)
- **Booking** — point `site.bookingUrl` at a real booking engine (`src/data/site.ts`)
- **Contact form** — connect to an email service / API route (currently shows a
  confirmation only — `src/components/forms/ContactForm.tsx`)
- **Site URL** — set the live domain for SEO/canonical (`src/data/site.ts`)

## Photos

All 114 supplied photos are integrated and optimised (originals → WebP, ~91%
smaller). 21 are placed in specific sections (hero, rooms, dining, reception,
exterior, etc.) and the remaining 93 fill the filterable gallery, so every photo
is used in a context that matches what it shows. To swap or add photos, drop new
files in `public/images/_inbox/`, run `npm run optimize:images`, move them into the
right folder under `public/images/`, and reference them in `src/data/`.

## Deployment

Deploy to Vercel or Netlify with the default Next.js image optimisation on (do not
use static export, so optimisation is preserved).
