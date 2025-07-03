import LocalizedLink from "@/components/LocalizedLink";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1B4F72] mb-2">
          Nos Offres de Services
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Choisissez l&apos;offre qui correspond à vos besoins — site vitrine,
          application personnalisée ou évolution technique continue.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Pack Starter */}
        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4 text-[#1B4F72]">
            Pack Starter
          </h2>
          <p className="text-gray-600 mb-4">
            Paiement unique — Site vitrine livré rapidement.
          </p>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>✅ Page d’accueil ou site vitrine personnalisé</li>
            <li>✅ Design responsive (mobile + ordinateur)</li>
            <li>✅ Hébergement + nom de domaine inclus 1 an</li>
            <li>✅ Livraison en 5 à 10 jours ouvrés</li>
          </ul>
          <p className="text-2xl font-bold text-[#00C896] mb-4">
            À partir de 600 € (paiement unique)
          </p>
          <LocalizedLink
            href="/contact"
            className="w-full px-4 py-2 rounded bg-gradient-to-r from-[#00C896] to-[#5ED6E5] text-white font-semibold"
          >
            Demander un devis
          </LocalizedLink>
        </div>

        {/* Pack Pro */}
        <div className="border rounded-xl p-6 shadow-lg bg-[#E6FCF4] ring-2 ring-[#00C896]">
          <h2 className="text-xl font-semibold mb-4 text-[#1B4F72]">
            Pack Pro
          </h2>
          <p className="text-gray-600 mb-4">
            Paiement unique — Application complète avec base de données.
          </p>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>✅ Application web ou mobile sur mesure</li>
            <li>✅ Authentification sécurisée + base de données</li>
            <li>✅ Tableau de bord administrateur inclus</li>
            <li>✅ Livraison en 3 à 5 semaines</li>
            <li>✅ Documentation technique incluse</li>
          </ul>
          <p className="text-2xl font-bold text-[#00C896] mb-4">
            À partir de 2 500 € (paiement unique)
          </p>
          <LocalizedLink
            href="/contact"
            className="w-full px-4 py-2 rounded bg-gradient-to-r from-[#00C896] to-[#5ED6E5] text-white font-semibold"
          >
            Lancer mon projet
          </LocalizedLink>
        </div>

        {/* Pack Maintenance */}
        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4 text-[#1B4F72]">
            Maintenance & Évolution
          </h2>
          <p className="text-gray-600 mb-4">
            Suivi continu, audits et améliorations techniques.
          </p>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>✅ Audit de performance et sécurité du code</li>
            <li>✅ Mises à jour techniques et correctifs</li>
            <li>✅ Livrables mensuels : rapports + roadmap</li>
            <li>✅ Forfait évolutif ou facturation mensuelle</li>
          </ul>
          <p className="text-2xl font-bold text-[#00C896] mb-4">
            À partir de 150 €/mois (abonnement)
          </p>
          <LocalizedLink
            href="/contact"
            className="w-full px-4 py-2 rounded bg-gradient-to-r from-[#00C896] to-[#5ED6E5] text-white font-semibold"
          >
            Souscrire
          </LocalizedLink>
        </div>
      </div>
    </main>
  );
}
