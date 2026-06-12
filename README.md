# Dr Arunav — Neurologist Website

Premium, responsive single-page React website for Dr Arunav, Neurologist.

---

## Tech Stack

- **React** (JavaScript, no TypeScript)
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **Framer Motion** (animations)
- **Lucide React** (icons)

---

## Getting Started (Local)

### Prerequisites
- Node.js 18+
- npm 9+

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:5173

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## Deploy to Vercel

1. Push the project to a GitHub/GitLab/Bitbucket repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Framework Preset: **Vite** (auto-detected)
4. Click **Deploy** — done!

Or via Vercel CLI:
```bash
npm i -g vercel
vercel
```

---

## Deploy to Netlify

1. Push to a Git repo
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy site**

Or drag-and-drop the `dist/` folder directly in Netlify dashboard.

---

## Project Structure

```
dr-arunav/
├── public/
├── src/
│   ├── assets/
│   │   └── doctor.jpeg          # Doctor profile image
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── WhyChoose.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Blog.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── CTAStrip.jsx
│   │   │   └── Contact.jsx
│   │   ├── ui/
│   │   │   ├── ScrollReveal.jsx
│   │   │   └── Toast.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── FloatingWhatsApp.jsx
│   ├── data/
│   │   └── siteContent.js       # ← All content lives here
│   ├── hooks/
│   │   ├── useScrollSpy.js
│   │   └── useScrollBlur.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── vercel.json
└── netlify.toml
```

---

## Customisation

All content is centralised in `src/data/siteContent.js`:

- **brand** — name, phone, email, WhatsApp message, map link
- **hero** — headline, stats
- **about** — paragraphs, highlights
- **services** — service cards (icon, title, desc)
- **whyChoose** — trust points
- **conditions** — tags list
- **testimonials** — patient reviews
- **faqs** — accordion Q&A
- **blogPosts** — blog cards

To replace the doctor image, update `src/assets/doctor.jpeg`.

---

## Key Features

- Sticky navbar with scroll spy + active section highlight
- Glassmorphism cards with hover lift + tilt
- Glossy gradient buttons (primary, WhatsApp, outline)
- Framer Motion staggered hero entrance + scroll reveal
- FAQ accordion with smooth height animation
- Contact form with inline validation + toast notifications
- Floating WhatsApp button (bottom-right, pulsing)
- Fully responsive (mobile → 4K)
- Semantic HTML + keyboard navigation
- `prefers-reduced-motion` respected
