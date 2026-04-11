import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Sans_Arabic } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://marmarismarble.com";
const PHONE = process.env.NEXT_PUBLIC_PHONE || "+216-00-000-000";
const FACEBOOK = process.env.NEXT_PUBLIC_FACEBOOK || "https://facebook.com/marmarismarble";
const MAP_LAT = process.env.NEXT_PUBLIC_MAP_LAT || "35.55";
const MAP_LNG = process.env.NEXT_PUBLIC_MAP_LNG || "8.65";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "Marmaris Marble | رخام تونسي عالي الجودة — تالة، القصرين"
    : "Marmaris Marble | Marbre Tunisien de Qualité — Thala, Kasserine";

  const description = isAr
    ? "اكتشفوا مجموعة رخام تالة الأصيلة من القصرين، تونس. رخام أبيض، بيج، رمادي وأسود بجودة استثنائية وحرفية تونسية."
    : "Découvrez le marbre authentique de Thala, Kasserine. Blanc, beige, gris et noir — qualité premium, variété exceptionnelle, savoir-faire artisanal tunisien.";

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: {
        fr: `${SITE_URL}/fr`,
        ar: `${SITE_URL}/ar`,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: isAr ? "ar_TN" : "fr_TN",
      url: `${SITE_URL}/${locale}`,
      siteName: "Marmaris Marble",
      images: [
        {
          url: "/images/logo.png",
          width: 1200,
          height: 630,
          alt: "Marmaris Marble — Marbre Tunisien",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/logo.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// JSON-LD structured data for LocalBusiness
function LocalBusinessSchema({ locale }: { locale: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: "Marmaris Marble",
    description:
      "Marbre authentique de Thala, Kasserine, Tunisie. Qualité premium, variété de couleurs, savoir-faire artisanal tunisien depuis des générations.",
    url: SITE_URL,
    telephone: PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Thala",
      addressLocality: "Thala",
      addressRegion: "Kasserine",
      addressCountry: "TN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: parseFloat(MAP_LAT),
      longitude: parseFloat(MAP_LNG),
    },
    image: `${SITE_URL}/images/logo.png`,
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "17:00",
    },
    sameAs: [FACEBOOK],
    inLanguage: locale === "ar" ? "ar-TN" : "fr-TN",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "fr" | "ar")) {
    notFound();
  }

  const messages = await getMessages();
  const isRTL = locale === "ar";

  return (
    <html
      lang={locale}
      dir={isRTL ? "rtl" : "ltr"}
      className={`${playfair.variable} ${inter.variable} ${notoArabic.variable}`}
    >
      <head>
        <LocalBusinessSchema locale={locale} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta name="theme-color" content="#1a1a1a" />
      </head>
      <body className={isRTL ? "font-arabic" : "font-sans"}>
        <NextIntlClientProvider messages={messages}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:text-white focus:px-4 focus:py-2 focus:rounded"
          >
            {locale === "ar" ? "انتقل إلى المحتوى الرئيسي" : "Aller au contenu principal"}
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
