# Portfolio

Personal portfolio of Juan Manuel Ruiz Fránquiz — [juanmaruizf.com](https://juanmaruizf.com).

Bilingual (EN/ES) single-page site with a retrowave hero featuring the silhouettes of Teide and Roque Nublo.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · shadcn/ui · Framer Motion · EmailJS

## Development

```bash
npm install
npm run dev      # http://localhost:8080
npm run build    # production build in dist/
npm run lint
```

The contact form needs an `.env` file with the EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

## Content

All texts and data live in `src/data/` and `src/i18n/translations.ts`.
