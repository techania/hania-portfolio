# Hania Guiagoussou — Portfolio

Personal portfolio built with Vite + React + Tailwind, animated with Framer Motion.

## Develop

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

The easiest path:

```bash
npm i -g vercel
vercel
```

Or connect the GitHub repo at https://vercel.com/new — Vercel auto-detects Vite and ships. No extra config needed; `vercel.json` handles SPA routing.

## Customize

All site content lives in one place:

- [src/data/content.js](src/data/content.js) — name, bio, projects, disciplines, contact links

Swap project images by replacing the colored tiles in [src/components/ProjectCard.jsx](src/components/ProjectCard.jsx) with real `<img>` elements (drop images into `public/` and reference as `/your-image.jpg`).

## Structure

```
src/
├── App.jsx
├── main.jsx
├── index.css
├── data/content.js        ← edit me
└── components/
    ├── Nav.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Work.jsx
    ├── ProjectCard.jsx
    ├── Disciplines.jsx
    ├── Contact.jsx
    └── Footer.jsx
```
