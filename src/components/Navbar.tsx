"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const switchLocale = locale === "fr" ? "ar" : "fr";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

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
      role="navigation"
      aria-label={t("home")}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3" aria-label="Marmaris Marble — Accueil">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-sm">
            <Image
              src="/images/logo.png"
              alt=""
              width={44}
              height={44}
              className="object-contain"
            />
          </div>
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
            aria-label={t("language")}
          >
            {t("language")}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={toggleRef}
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
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
        <div
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden bg-white/95 backdrop-blur-md shadow-lg border-t"
          role="menu"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-charcoal text-sm font-medium py-2 hover:text-gold transition-colors"
                onClick={closeMobile}
                role="menuitem"
              >
                {link.label}
              </a>
            ))}
            <Link
              href={`/${switchLocale}`}
              locale={switchLocale}
              className="block text-charcoal text-sm font-semibold py-2 hover:text-gold transition-colors"
              onClick={closeMobile}
              role="menuitem"
            >
              {t("language")}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
