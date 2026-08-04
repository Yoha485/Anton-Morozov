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

## Where to change things

All content lives in two files:

- `app/page.tsx` — every section, the stack list, the contact links, and the
  Polish legal footer (name, NIP, REGON, city).
- `app/layout.tsx` — page `<title>`, meta description, Open Graph tags,
  canonical URL.

Currently omitted on purpose (add in `app/page.tsx` when available):

- **LinkedIn URL** — add next to the GitHub link in the Contact section.
- **Years working** and **availability line** — no values were supplied, so
  the elements are left out entirely.
