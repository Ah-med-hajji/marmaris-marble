"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

const highlights = [
  { key: "location", icon: "📍" },
  { key: "quality", icon: "✦" },
  { key: "variety", icon: "◆" },
  { key: "authentic", icon: "❖" },
] as const;

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4">
              {t("title")}
            </h2>
            <p className="text-gold font-medium text-lg mb-6">
              {t("subtitle")}
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              {t("description1")}
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-8">
              {t("description2")}
            </p>

            {/* Highlight Badges */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div
                  key={h.key}
                  className="flex items-center gap-2 bg-cream rounded-lg px-4 py-3"
                >
                  <span className="text-gold text-lg">{h.icon}</span>
                  <span className="text-sm font-medium text-charcoal">
                    {t(`highlights.${h.key}`)}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=85"
                alt="Carrière de marbre à Thala, Kasserine, Tunisie"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/20 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
