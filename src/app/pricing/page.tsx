import LocalizedLink from "@/components/LocalizedLink";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1B4F72] mb-2">
          Nos Offres de Service
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Choisissez la formule adaptée à vos besoins — développement mobile,
          web, ou accompagnement technique.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4 text-[#1B4F72]">
            Pack Découverte
          </h2>
          <p className="text-gray-600 mb-4">
            Idéal pour les petites structures ou les projets simples.
          </p>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>✅ Site vitrine ou landing page</li>
            <li>✅ Design responsive</li>
            <li>✅ Livraison rapide</li>
          </ul>
          <p className="text-2xl font-bold text-[#00C896] mb-4">
            À partir de 600€
          </p>
          <LocalizedLink
            href="/contact"
            className="w-full px-4 py-2 rounded bg-gradient-to-r from-[#00C896] to-[#5ED6E5] text-white font-semibold"
          >
            Demander un devis
          </LocalizedLink>
        </div>

        <div className="border rounded-xl p-6 shadow-lg bg-[#E6FCF4] ring-2 ring-[#00C896]">
          <h2 className="text-xl font-semibold mb-4 text-[#1B4F72]">
            Pack Pro
          </h2>
          <p className="text-gray-600 mb-4">
            Solution complète pour entreprises, startups ou MVP.
          </p>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>✅ Application web ou mobile</li>
            <li>✅ Authentification + base de données</li>
            <li>✅ Tableau de bord personnalisé</li>
          </ul>
          <p className="text-2xl font-bold text-[#00C896] mb-4">
            À partir de 2 500€
          </p>
          <LocalizedLink
            href="/contact"
            className="w-full px-4 py-2 rounded bg-gradient-to-r from-[#00C896] to-[#5ED6E5] text-white font-semibold"
          >
            Commencer mon projet
          </LocalizedLink>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4 text-[#1B4F72]">
            Support & Conseils
          </h2>
          <p className="text-gray-600 mb-4">
            Accompagnement technique, audit ou mise à jour continue.
          </p>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>✅ Audit de code ou performance</li>
            <li>✅ Maintenance évolutive</li>
            <li>✅ Assistance personnalisée</li>
          </ul>
          <p className="text-2xl font-bold text-[#00C896] mb-4">
            80€/h ou dès 150€/mois
          </p>
          <LocalizedLink
            href="/contact"
            className="w-full px-4 py-2 rounded bg-gradient-to-r from-[#00C896] to-[#5ED6E5] text-white font-semibold"
          >
            Réserver une session
          </LocalizedLink>
        </div>
      </div>
    </main>
  );
}
