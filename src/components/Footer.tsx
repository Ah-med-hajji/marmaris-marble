import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-charcoal text-white/70 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-serif text-lg text-white mb-2">Marmaris Marble</p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Marmaris Marble. {t("rights")}
        </p>
        <p className="text-sm mt-1">{t("location")}</p>
      </div>
    </footer>
  );
}
