export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="text-center">
        <div className="inline-block w-12 h-12 border-4 border-charcoal/20 border-t-gold rounded-full animate-spin" />
        <p className="text-charcoal/60 mt-4 text-sm font-medium">Chargement...</p>
      </div>
    </div>
  );
}
