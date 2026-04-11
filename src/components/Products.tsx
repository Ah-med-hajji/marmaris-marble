"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://marmarismarble.com";

const productKeys = [
  {
    key: "blanc",
    image: "/images/Beige Imperial.jpg",
  },
  {
    key: "beche",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=85",
  },
  {
    key: "gris",
    image: "/images/Marbre gris.jpg",
  },
  {
    key: "noir",
    image: "https://images.unsplash.com/photo-1550053808-52a75a05955d?w=600&q=85",
  },
  {
    key: "jaune",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=85",
  },
  {
    key: "breche",
    image: "/images/Marbre éclaté.jpg",
  },
];

export default function Products() {
  const t = useTranslations("products");

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: productKeys.map((product, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: t(`items.${product.key}.name`),
        description: t(`items.${product.key}.description`),
        image: product.image.startsWith("http")
          ? product.image
          : `${SITE_URL}${product.image}`,
        brand: {
          "@type": "Brand",
          name: "Marmaris Marble",
        },
        material: "Marbre naturel",
        countryOfOrigin: {
          "@type": "Country",
          name: "Tunisie",
        },
      },
    })),
  };

  return (
    <section id="products" className="py-20 md:py-28 bg-cream" aria-label={t("title")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4">
            {t("title")}
          </h2>
          <p className="text-charcoal/60 text-lg max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productKeys.map((product, i) => (
            <ProductCard
              key={product.key}
              name={t(`items.${product.key}.name`)}
              description={t(`items.${product.key}.description`)}
              image={product.image}
              alt={t(`items.${product.key}.alt`)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
