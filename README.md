# anton-morozov.dev

Single-page site for Anton Morozov Software Development — a Polish sole
proprietorship (JDG) providing custom software and web application development
(PKD 62.10.B / 62.20.B).

Static export, no server runtime, no analytics, no cookies.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Static output lands in `out/`.

## Deploy (Vercel)

Push to `main` — the connected Vercel project builds and deploys automatically.
Vercel detects Next.js; no special configuration is needed (`output: "export"`
is set in `next.config.js`).

## Languages

Polish is the default at `/`; English lives at `/en`. Each language has its
own root layout (`app/(pl)/layout.tsx`, `app/(en)/en/layout.tsx`) so the
`<html lang>` attribute and metadata are correct per page. Both pages carry
`hreflang` alternates and a small language switch in the header (hidden when
printing).

## Where to change things

- `app/content.ts` — all copy for both languages (`pl` and `en` objects),
  including the stack list, contact text, and the Polish legal footer
  (name, NIP, REGON, city). Edit here to change wording.
- `app/Site.tsx` — the page structure shared by both languages.
- `app/metadata.ts` — `<title>`, meta description, Open Graph tags,
  canonical and `hreflang` alternates, built from the content object.
- `app/fonts.ts` — Google font setup shared by both layouts.

Currently omitted on purpose (add in `app/page.tsx` when available):

- **LinkedIn URL** — add next to the GitHub link in the Contact section.
- **Years working** and **availability line** — no values were supplied, so
  the elements are left out entirely.
