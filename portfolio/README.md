# Portfolio

A modern, dark-themed personal portfolio built with React, JavaScript (JSX), Vite,
Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/   Reusable UI building blocks (Navbar, Footer, Section, etc.)
  sections/     Page-level sections (Hero, About, Skills, Projects, ...)
  pages/        Route-level pages (Home, NotFound)
  hooks/        Custom hooks (scroll position, active section, typewriter)
  data/         Content data — edit these files to make the site your own
  utils/        Small helpers (motion variants, scroll-to)
```

## Customizing content

Personal content lives in `src/data/*.js` and at the top of each file in
`src/sections/`. Replace names, bio, skills, projects, experience, education,
and links there. Replace `/public/resume.pdf`, `/public/og-cover.png`, and the
avatar initials in `Hero.jsx` with your own.

## Git workflow

This project is ready to push as-is:

```bash
git init
git add .
git commit -m "chore: scaffold portfolio + hero section"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

Each new section will be added as its own commit as we build — e.g.
`feat: add about section`, `feat: add skills section`, etc.
