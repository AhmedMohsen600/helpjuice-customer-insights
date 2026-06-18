# Helpjuice Customer Insights

A single-page executive research brief built with Next.js, TypeScript, and Tailwind CSS.

The page presents qualitative customer-review intelligence for Helpjuice and adjacent knowledge base products. It focuses on what users praise, what they complain about, and which product opportunities emerge from real review patterns.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks

```bash
npm run lint
npm run build
```

## Content structure

- `src/data/research.ts` contains the editable research content.
- `src/components/` contains reusable presentation components.
- `src/app/page.tsx` assembles the executive brief.

## Typography

The page uses `Instrument Sans` for body, UI, and headlines, with `IBM Plex Mono` for labels and numbering. This keeps the brief modern, premium, and easy to read without the sharp contrast of a display serif.
