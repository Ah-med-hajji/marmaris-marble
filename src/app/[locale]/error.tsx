"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center px-4">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-charcoal mb-4">
          Oups !
        </h1>
        <p className="text-charcoal/60 text-lg mb-8">
          Une erreur inattendue s&apos;est produite.
        </p>
        <button
          onClick={reset}
          className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
}
