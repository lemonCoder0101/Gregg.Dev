# Gregg.Dev — Personal Portfolio

> Personal portfolio website of **Gregg Anthony Jimenez** — IT Graduate & Aspiring Full-Stack Developer.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## ✨ Features

- **Glassmorphism** dark theme with cyan / blue / purple accents
- **Typewriter** role animation in the Hero section
- **Scroll-triggered** skill bar animations
- **Animated timeline** for work experience
- **Project cards** with image swap support via `/public/projects/`
- **Dark / Light mode** toggle
- **Sticky navbar** with active section indicator
- **Loading screen** with animated progress bar
- **Back-to-top** button
- **Contact form** (EmailJS-ready)
- **Resume download** button
- Fully **SEO-optimized** — meta tags, Open Graph, Twitter cards, sitemap
- **Fully responsive** — mobile-first layout

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
├── app/
│   ├── data/portfolio.ts        ← ⭐ Edit ALL content here
│   ├── components/
│   │   ├── ui/                  ← FadeUp animation, social icons
│   │   ├── sections/            ← Hero, About, Skills, Experience...
│   │   ├── Navbar.tsx
│   │   ├── LoadingScreen.tsx
│   │   └── BackToTop.tsx
│   ├── hooks/
│   ├── lib/
│   ├── globals.css              ← Design system & tokens
│   ├── layout.tsx               ← SEO metadata
│   ├── page.tsx
│   └── sitemap.ts
└── public/
    ├── projects/                ← Drop project screenshots here
    ├── profile.png              ← Profile photo
    └── resume.pdf               ← Downloadable resume
```

---

## 🖼️ Replacing Project Images

Drop your actual screenshots into `/public/projects/` using these filenames:

```
evaluation.png
payroll.png
document-tracking.png
therapease.png
banking.png
```

Then update the `image` field for each project in `app/data/portfolio.ts`.

---

## ✉️ Activating the Contact Form

In `app/components/sections/Contact.tsx`, replace the `setTimeout` stub with:

```ts
import emailjs from '@emailjs/browser';
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY');
```

Sign up at [emailjs.com](https://emailjs.com) (free tier: 200 emails/month).

---

## 🌐 Deployment

Deploy instantly to Vercel:

```bash
npx vercel
```

Or connect this repository at [vercel.com/new](https://vercel.com/new) — zero configuration needed.

After deployment, update `metadataBase` in `app/layout.tsx` and the URL in `app/sitemap.ts` to your live domain.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Vanilla CSS with custom tokens |
| Animations | Framer Motion |
| Icons | Lucide React |
| Deployment | Vercel |

---

## 📄 License

MIT © 2026 Gregg Anthony Jimenez
