"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { FaWhatsapp, FaFacebookF, FaEnvelope, FaUser, FaRegCommentDots } from "react-icons/fa";
import { useState, FormEvent } from "react";

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || "21600000000";
const FACEBOOK = process.env.NEXT_PUBLIC_FACEBOOK || "https://facebook.com/marmarismarble";
const MAP_LAT = process.env.NEXT_PUBLIC_MAP_LAT || "35.55";
const MAP_LNG = process.env.NEXT_PUBLIC_MAP_LNG || "8.65";

export default function Contact() {
  const t = useTranslations("contact");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const whatsappText = encodeURIComponent(
      `Nom: ${formState.name}\nEmail: ${formState.email}\nMessage: ${formState.message}`
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${whatsappText}`, "_blank");
    setStatus("sent");
    setFormState({ name: "", email: "", message: "" });

    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white" aria-label={t("title")}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">
                  {t("formName")}
                </label>
                <div className="relative">
                  <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40 w-4 h-4" />
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 border border-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors bg-white text-charcoal"
                    placeholder={t("formNamePlaceholder")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">
                  {t("formEmail")}
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal/40 w-4 h-4" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 border border-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors bg-white text-charcoal"
                    placeholder={t("formEmailPlaceholder")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">
                  {t("formMessage")}
                </label>
                <div className="relative">
                  <FaRegCommentDots className="absolute left-3 top-3 text-charcoal/40 w-4 h-4" />
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    className="w-full pl-10 pr-4 py-3 border border-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-colors bg-white text-charcoal resize-none"
                    placeholder={t("formMessagePlaceholder")}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending"
                  ? t("formSending")
                  : status === "sent"
                  ? t("formSent")
                  : t("formSubmit")}
              </button>
            </form>

            {/* Social Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1da851] text-white font-semibold px-6 py-3 rounded-lg transition-colors w-full sm:w-auto justify-center"
              >
                <FaWhatsapp className="w-5 h-5" />
                {t("whatsapp")}
              </a>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#1877F2] hover:bg-[#1565c0] text-white font-semibold px-6 py-3 rounded-lg transition-colors w-full sm:w-auto justify-center"
              >
                <FaFacebookF className="w-5 h-5" />
                {t("facebook")}
              </a>
            </div>
          </motion.div>

          {/* Map & Address */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center md:text-start">
              <p className="text-charcoal/80 text-lg font-medium">
                {t("address")}
              </p>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52773.35484871498!2d${MAP_LNG}!3d${MAP_LAT}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f95e5c8b3e7c5f%3A0x7e8f8b8b8b8b8b8b!2sThala%2C%20Tunisia!5e0!3m2!1sfr!2stn!4v1700000000000!5m2!1sfr!2stn`}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Thala, Kasserine, Tunisia"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
