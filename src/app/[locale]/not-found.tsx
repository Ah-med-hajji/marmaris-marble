import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-4">
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-charcoal mb-4">
          404
        </h1>
        <p className="text-charcoal/60 text-lg mb-8">
          Page non trouvée / الصفحة غير موجودة
        </p>
        <Link
          href="/"
          className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
