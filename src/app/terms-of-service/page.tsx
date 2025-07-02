export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#1B4F72] mb-2">
          Conditions Générales d’Utilisation
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          En utilisant nos services, vous acceptez les conditions ci-dessous.
          Nous vous encourageons à les lire attentivement.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-[#1B4F72] mb-2">
            1. Présentation de Yoshimyra
          </h2>
          <p className="text-gray-700">
            Yoshimyra est une entreprise spécialisée dans la conception et le
            développement de solutions digitales : applications mobiles,
            plateformes web, SaaS et outils personnalisés. Nos produits sont
            conçus pour offrir de la valeur, de l’efficacité et une expérience
            utilisateur optimale.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#1B4F72] mb-2">
            2. Utilisation autorisée
          </h2>
          <p className="text-gray-700">
            L’utilisation de nos produits est strictement réservée à un usage
            légal, personnel ou professionnel. Toute tentative de piratage,
            d’ingénierie inverse, ou d’exploitation abusive est interdite.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#1B4F72] mb-2">
            3. Confidentialité des données
          </h2>
          <p className="text-gray-700">
            Yoshimyra s&#39;engage à respecter la vie privée de ses
            utilisateurs. Les données collectées sont limitées au strict
            nécessaire et utilisées uniquement à des fins d&#39;amélioration
            continue. Nous ne revendons ni ne partageons vos données à des tiers
            sans votre consentement explicite.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#1B4F72] mb-2">
            4. Propriété intellectuelle
          </h2>
          <p className="text-gray-700">
            Tous les éléments présents sur nos produits et sites (logos,
            interfaces, contenus, code, illustrations) sont la propriété
            exclusive de Yoshimyra, sauf mention contraire. Toute reproduction
            ou redistribution sans autorisation est interdite.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#1B4F72] mb-2">
            5. Mises à jour & maintenance
          </h2>
          <p className="text-gray-700">
            Nous nous réservons le droit de mettre à jour nos produits à tout
            moment pour améliorer la sécurité, les performances ou l’expérience
            utilisateur. Ces mises à jour peuvent inclure de nouvelles
            fonctionnalités, des corrections de bugs ou des changements
            d’interface.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#1B4F72] mb-2">
            6. Politique de remboursement
          </h2>
          <p className="text-gray-700">
            Les demandes de remboursement peuvent être adressées à notre support
            dans un délai de 14 jours suivant l’achat. Chaque demande sera
            évaluée au cas par cas, selon les modalités d’usage du service.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#1B4F72] mb-2">
            7. Contact
          </h2>
          <p className="text-gray-700">
            Pour toute question, remarque ou demande spécifique concernant ces
            conditions, veuillez nous contacter à :{" "}
            <a
              href="mailto:support@yoshimyra.com"
              className="text-blue-600 underline"
            >
              support@yoshimyra.com
            </a>
          </p>
        </div>

        <p className="text-sm text-gray-500 text-center mt-12">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
        </p>
      </section>
    </main>
  );
}
