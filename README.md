# Curdworks

A marketing site for a fictional high-tech cheese dairy in the Allgäu. It is a pet project: the brand, people and numbers are all invented.

**Pages:** Home (landing), About, Technologies and Careers, in English and German (`/en`, `/de`).

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack), React 19, TypeScript
- **Styling:** Tailwind CSS v4, plus a project UI kit built on shadcn/ui (Base UI)
- **Motion:** GSAP (ScrollTrigger, SplitText) and Lenis smooth scroll. Animations turn off when the system's reduced-motion setting is on.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
npm run lint
```

Set `NEXT_PUBLIC_SITE_URL` to the production URL. It is used for canonical links, the sitemap and Open Graph images.

## Project structure

```
src/
  app/[lang]/           routes, metadata, OG images (kit/ is the UI kit showcase)
  components/
    ui/                 shadcn base components
    brand/              project UI kit (ImageSlot, Art, cards, stats…)
    sections/           page sections, one folder per page
    motion/             GSAP + Lenis wiring
  content/
    en/, de/            typed dictionaries (types.ts is the source of truth)
    visuals.ts          art and photo for every image slot
  proxy.ts              locale redirect based on Accept-Language
```

## Images

Every image slot renders a generated SVG illustration in the brand palette (`components/brand/art.tsx`).
A photo in `public/photos/` whose name matches the slot in `content/visuals.ts` replaces the illustration automatically.
The extension can be `.webp`, `.jpg`, `.png` or `.avif`.
