"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const switchLocale = locale === "fr" ? "ar" : "fr";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: t("home") },
    { href: "#about", label: t("about") },
    { href: "#products", label: t("products") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Marmaris Marble"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span
            className={`font-serif text-xl font-bold ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
          >
            Marmaris Marble
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Link
            href={`/${switchLocale}`}
            locale={switchLocale}
            className={`px-3 py-1 rounded border text-sm font-semibold transition-colors hover:bg-gold hover:text-white hover:border-gold ${
              scrolled
                ? "border-charcoal text-charcoal"
                : "border-white text-white"
            }`}
          >
            {t("language")}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <FaTimes
              className={`w-6 h-6 ${scrolled ? "text-charcoal" : "text-white"}`}
            />
          ) : (
            <FaBars
              className={`w-6 h-6 ${scrolled ? "text-charcoal" : "text-white"}`}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-charcoal text-sm font-medium py-2 hover:text-gold transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Link
              href={`/${switchLocale}`}
              locale={switchLocale}
              className="block text-charcoal text-sm font-semibold py-2 hover:text-gold transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {t("language")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
