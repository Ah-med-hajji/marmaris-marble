import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Sans_Arabic } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

// TODO: Replace SITE_URL with your production domain
const SITE_URL = "https://marmarismarble.com";

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
    // TODO: Replace with real telephone number
    telephone: "+216-00-000-000",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Thala",
      addressLocality: "Thala",
      addressRegion: "Kasserine",
      addressCountry: "TN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 35.55,
      longitude: 8.65,
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
    sameAs: [
      // TODO: Replace with real Facebook page
      "https://facebook.com/marmarismarble",
    ],
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
      </head>
      <body className={isRTL ? "font-arabic" : "font-sans"}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
