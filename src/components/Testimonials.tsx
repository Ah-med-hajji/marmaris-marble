"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  { key: "client1" },
  { key: "client2" },
  { key: "client3" },
];

export default function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section className="py-20 md:py-28 bg-charcoal" aria-label={t("title")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8"
            >
              <FaQuoteLeft className="w-8 h-8 text-gold/40 mb-4" />
              <p className="text-white/80 leading-relaxed mb-6">
                {t(`items.${item.key}.text`)}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-serif font-bold text-sm">
                    {t(`items.${item.key}.initials`)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">
                    {t(`items.${item.key}.name`)}
                  </p>
                  <p className="text-white/50 text-xs">
                    {t(`items.${item.key}.role`)}
                  </p>
                </div>
              </div>
              <div className="flex gap-0.5 mt-4">
                {[...Array(5)].map((_, si) => (
                  <FaStar key={si} className="w-3.5 h-3.5 text-gold" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
