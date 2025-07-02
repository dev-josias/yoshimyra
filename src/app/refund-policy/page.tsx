export default function RefundPolicyFr() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Politique de Remboursement</h1>

      <p className="mb-4">Dernière mise à jour : 2 juillet 2025</p>

      <p className="mb-4">
        Chez <strong>Yoshimyra</strong>, nous nous engageons à fournir des
        services et logiciels de haute qualité. Si vous rencontrez un problème
        avec l’un de nos produits, nous ferons de notre mieux pour le résoudre
        rapidement.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        1. Éligibilité au remboursement
      </h2>
      <p className="mb-4">
        Vous pouvez demander un remboursement dans un délai de 14 jours après
        l’achat, uniquement si :
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>Le produit ou service ne fonctionne pas comme décrit</li>
        <li>Vous n’avez pas encore utilisé ou activé votre licence ou accès</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        2. Procédure de demande
      </h2>
      <p className="mb-4">
        Pour demander un remboursement, veuillez nous contacter à l’adresse
        suivante :{" "}
        <a href="mailto:hello@yoshimyra.com" className="underline">
          hello@yoshimyra.com
        </a>
        <br />
        Veuillez inclure votre numéro de commande et une description du
        problème.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Exceptions</h2>
      <p className="mb-4">Aucun remboursement ne sera accordé :</p>
      <ul className="list-disc pl-5 mb-4">
        <li>Après 14 jours suivant l’achat</li>
        <li>Si le produit a été utilisé, téléchargé ou activé</li>
        <li>Pour des demandes abusives ou répétées</li>
      </ul>

      <p className="text-sm text-gray-500 mt-8">
        Cette politique respecte la directive européenne relative aux droits des
        consommateurs.
      </p>
    </main>
  );
}
