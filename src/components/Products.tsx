"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Marbre Blanc de Thala",
    description: "Pureté et élégance intemporelle",
    image: "/images/Beige Imperial.jpg",
    alt: "Marbre beige impérial de Thala, Kasserine, Tunisie",
  },
  {
    name: "Marbre Béché Crème",
    description: "Chaleur et douceur naturelle",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=85",
    alt: "Marbre béché crème, pierre naturelle tunisienne",
  },
  {
    name: "Marbre Gris",
    description: "Sophistication et modernité",
    image: "/images/Marbre gris.jpg",
    alt: "Marbre gris de Thala, Kasserine, Tunisie",
  },
  {
    name: "Marbre Noir",
    description: "Luxure et caractère audacieux",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=85",
    alt: "Marbre noir luxueux, collection Marmaris Marble",
  },
  {
    name: "Marbre Jaune Doré",
    description: "Éclat et noblesse",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=85",
    alt: "Marbre jaune doré, pierre naturelle de Tunisie",
  },
  {
    name: "Marbre Brèche",
    description: "Veines uniques et authenticité",
    image: "/images/Marbre éclaté.jpg",
    alt: "Marbre brèche éclaté de Thala, Kasserine, Tunisie",
  },
];

export default function Products() {
  const t = useTranslations("products");

  return (
    <section id="products" className="py-20 md:py-28 bg-cream">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard
              key={product.name}
              name={product.name}
              description={product.description}
              image={product.image}
              alt={product.alt}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
