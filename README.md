# Thala Marble — Landing Page

A professional, minimalist landing page for a Tunisian marble company based in Thala, Kasserine, Tunisia.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **i18n:** next-intl (French / Arabic with RTL)
- **Icons:** react-icons
- **Fonts:** Playfair Display, Inter, Noto Sans Arabic (Google Fonts)
- **Deployment:** Vercel

## Features

- Fully responsive (mobile-first)
- French (default) and Arabic language support with automatic RTL
- Smooth scroll navigation
- Scroll-triggered animations
- Product gallery with hover effects
- WhatsApp & Facebook contact buttons
- Embedded Google Maps
- SEO meta tags

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── [locale]/       # Locale-based routing (fr/ar)
│   │   ├── layout.tsx  # Root layout with fonts & RTL
│   │   └── page.tsx    # Main page
│   └── globals.css     # Tailwind + custom styles
├── components/         # Page sections (one file each)
├── i18n/               # next-intl configuration
└── middleware.ts        # Locale detection
messages/               # Translation files (fr.json, ar.json)
public/images/          # Marble images & logo
```

## Customization

Search for `TODO` comments in the codebase to find placeholders that need to be replaced:

- Company name
- WhatsApp phone number (`https://wa.me/21600000000`)
- Facebook page URL (`https://facebook.com/thalamarble`)
- OG image

## Deployment

This project is configured for [Vercel](https://vercel.com) deployment:

1. Push to GitHub
2. Import the repository on Vercel
3. Deploy — no additional configuration needed

## License

All rights reserved.
