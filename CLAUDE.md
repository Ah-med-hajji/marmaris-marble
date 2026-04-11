# CLAUDE.md — Marmaris Marble

## Project Overview
Landing page for **Marmaris Marble**, a Tunisian marble company based in Thala, Kasserine. Multilingual (French/Arabic) marketing site showcasing marble products with smooth animations.

## Tech Stack
- **Framework**: Next.js 14 (App Router, TypeScript)
- **Styling**: Tailwind CSS (custom palette: cream, charcoal, gold)
- **Animations**: Framer Motion
- **i18n**: next-intl with locale routing (`/fr`, `/ar`) and RTL support
- **SEO**: next-sitemap, JSON-LD structured data (LocalBusiness + Product), full Open Graph/Twitter cards
- **Fonts**: Playfair Display, Inter, Noto Sans Arabic (via next/font/google)
- **Icons**: react-icons (FontAwesome)
- **Deployment**: Vercel

## Architecture
```
src/
  app/
    globals.css              — Global styles with smooth scroll
    layout.tsx               — Root layout (redirects to locale)
    icon.svg                 — SVG favicon (gold M on charcoal)
    [locale]/
      layout.tsx             — Locale layout (metadata, fonts, Navbar/Footer, JSON-LD, skip-to-content, WhatsApp button)
      page.tsx               — Home page (Hero → About → Products → Testimonials → Contact)
      error.tsx              — Error boundary with retry button
      not-found.tsx          — 404 page
      loading.tsx            — Loading spinner
  components/
    Navbar.tsx               — Fixed navbar, scroll-aware, mobile menu with a11y (aria-expanded, Escape key, focus trap)
    Hero.tsx                 — Full-screen hero with Unsplash background
    About.tsx                — Company info + Unsplash image
    Products.tsx             — 6-product grid with Product JSON-LD schema
    ProductCard.tsx          — Hover-reveal card component
    Testimonials.tsx         — 3-client testimonial section with star ratings
    Contact.tsx              — Contact form (sends to WhatsApp) + WhatsApp/Facebook CTAs + Google Maps
    Footer.tsx               — 3-column footer with brand, links, contact info, social icons
    WhatsAppButton.tsx       — Persistent floating WhatsApp chat bubble
  i18n/
    routing.ts               — Locales: ['fr', 'ar'], default: 'fr'
    request.ts               — next-intl request config
  middleware.ts              — Locale routing middleware
messages/
  fr.json, ar.json           — Full translation files including products, testimonials, contact form
public/
  images/                    — Optimized marble images + logo (69KB, was 1.3MB)
  robots.txt                 — Sitemap reference
```

## Key Patterns
- All page sections are `"use client"` components using `useTranslations`
- Locale layout generates metadata dynamically based on locale
- Product data is fully internationalized via translation files
- All contact info (phone, WhatsApp, Facebook, map coords) pulled from env vars
- Animations use `whileInView` with `viewport={{ once: true }}`
- Security headers set in `next.config.mjs`

## Environment Variables
```env
NEXT_PUBLIC_SITE_URL=https://marmarismarble.com
NEXT_PUBLIC_PHONE=+216-00-000-000
NEXT_PUBLIC_WHATSAPP=21600000000
NEXT_PUBLIC_FACEBOOK=https://facebook.com/marmarismarble
NEXT_PUBLIC_MAP_LAT=35.55
NEXT_PUBLIC_MAP_LNG=8.65
```

## Build & Dev Commands
```bash
npm run dev       # Start dev server
npm run build     # Build + generate sitemap (postbuild: next-sitemap)
npm run start     # Start production server
npm run lint      # ESLint
```

## Completed Improvements
- [x] All hardcoded values moved to env vars
- [x] Product data fully internationalized (FR + AR)
- [x] Logo compressed from 1.3MB → 69KB (95% reduction)
- [x] All marble images optimized (JPEG quality 80)
- [x] SVG favicon added
- [x] Security headers (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy)
- [x] Package name fixed: thala-marble → marmaris-marble
- [x] Tailwind config cleaned (removed non-existent pages path)
- [x] Error boundary (`error.tsx`)
- [x] 404 page (`not-found.tsx`)
- [x] Loading spinner (`loading.tsx`)
- [x] Skip-to-content link for accessibility
- [x] `aria-expanded` on mobile menu toggle
- [x] Escape key closes mobile menu + returns focus
- [x] Body scroll lock when mobile menu open
- [x] `aria-label` on all sections
- [x] JSON-LD Product schema for all 6 products
- [x] Testimonials section with 3 client reviews (FR + AR)
- [x] Contact form with validation (sends via WhatsApp)
- [x] Floating WhatsApp button on all pages
- [x] Enhanced 3-column footer with links, contact info, social icons
- [x] Facebook URL consistency fixed across all components

## Remaining Improvements (Future Work)
- [ ] Replace placeholder env values with real contact info before launch
- [ ] Add Google Analytics or Vercel Analytics
- [ ] Add `next/image` unoptimized export for WebP if needed
- [ ] Consider hosting Unsplash images locally for reliability
- [ ] Add a blog/news section for content marketing
- [ ] Add admin panel or CMS integration for content updates
- [ ] Add lazy loading placeholder for Google Maps iframe
- [ ] Implement dark mode toggle
- [ ] Add product detail pages with dynamic routing
