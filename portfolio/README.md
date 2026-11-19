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

## Contact form

The contact form submits messages through FormSubmit to the email address in
`src/data/profile.js`. On the first submission, FormSubmit sends a confirmation
email to that address; confirm it before expecting messages to be delivered.
FormSubmit processes the submitted contact details, so update the form provider
and privacy notice if your deployment requires a different data-handling setup.

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
