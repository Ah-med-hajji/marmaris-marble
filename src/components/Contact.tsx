"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-4">
            {t("title")}
          </h2>
          <p className="text-charcoal/60 text-lg">{t("subtitle")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Address */}
          <div className="text-center">
            <p className="text-charcoal/80 text-lg font-medium">
              📍 {t("address")}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* TODO: Replace with real WhatsApp number */}
            <a
              href="https://wa.me/21600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold px-8 py-4 rounded-lg transition-colors w-full sm:w-auto justify-center"
            >
              <FaWhatsapp className="w-6 h-6" />
              {t("whatsapp")}
            </a>

            {/* TODO: Replace with real Facebook page */}
            <a
              href="https://facebook.com/thalamarble"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#1877F2] hover:bg-[#1565c0] text-white font-semibold px-8 py-4 rounded-lg transition-colors w-full sm:w-auto justify-center"
            >
              <FaFacebookF className="w-5 h-5" />
              {t("facebook")}
            </a>
          </div>

          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <h3 className="text-center text-charcoal/60 text-sm font-medium mb-3 uppercase tracking-wider">
              {t("location")}
            </h3>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52773.35484871498!2d8.65!3d35.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f95e5c8b3e7c5f%3A0x7e8f8b8b8b8b8b8b!2sThala%2C%20Tunisia!5e0!3m2!1sfr!2stn!4v1700000000000!5m2!1sfr!2stn"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Thala, Kasserine, Tunisia"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
