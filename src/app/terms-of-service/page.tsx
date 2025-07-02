import LocalizedLink from "@/components/LocalizedLink";

export default function TermsFr() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        Conditions Générales d’Utilisation
      </h1>

      <p className="mb-4">Dernière mise à jour : 2 juillet 2025</p>

      <p className="mb-4">
        Bienvenue sur le site web de <strong>Yoshimyra</strong>, une entreprise
        immatriculée sous le nom <strong>Yoshimyra SARL</strong>, dont le siège
        social est basé à Rabat, Maroc. En accédant ou en utilisant nos
        services, vous acceptez ces conditions.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Présentation des services
      </h2>
      <p className="mb-4">
        Yoshimyra développe des applications web et mobiles, propose des outils
        SaaS innovants, et offre des services techniques liés à ses produits
        numériques.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Utilisation de nos services
      </h2>
      <p className="mb-4">
        Vous acceptez d’utiliser nos produits conformément à la loi, dans le
        respect de nos droits d’auteur et ceux de tiers. Toute tentative de
        piratage, rétro-ingénierie ou utilisation abusive est strictement
        interdite.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        3. Paiement & facturation
      </h2>
      <p className="mb-4">
        Les paiements sont gérés par notre partenaire Paddle, qui agit en tant
        que marchand officiel (Merchant of Record). Tous les montants sont
        affichés en EUR ou USD selon votre région. (Paddle est actuellement en
        cours d’approbation sur notre site.)
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        4. Politique de remboursement
      </h2>
      <p className="mb-4">
        Consultez notre{" "}
        <LocalizedLink href="/refund-policy" className="underline">
          Politique de remboursement
        </LocalizedLink>{" "}
        pour plus de détails.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        5. Propriété intellectuelle
      </h2>
      <p className="mb-4">
        Tous les contenus, logos, produits et interfaces sont protégés. Aucune
        reproduction ou revente n’est autorisée sans notre accord.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        6. Modification des conditions
      </h2>
      <p className="mb-4">
        Yoshimyra se réserve le droit de mettre à jour ces conditions à tout
        moment. Les utilisateurs seront notifiés par e-mail ou via notre site.
      </p>

      <p className="mt-8 text-sm">
        Pour toute question, veuillez nous contacter à{" "}
        <a href="mailto:hello@yoshimyra.com" className="underline">
          hello@yoshimyra.com
        </a>
        .
      </p>
    </main>
  );
}
