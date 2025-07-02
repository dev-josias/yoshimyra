export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1B4F72] mb-2">Nos Produits</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Découvrez les solutions digitales conçues par Yoshimyra pour inspirer
          et simplifier le quotidien.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition bg-white">
          <h2 className="text-xl font-semibold mb-2 text-[#1B4F72]">Kolmx</h2>
          <p className="text-sm text-gray-600 mb-4">
            Lecteur de musique avec séparation automatique des pistes audio :
            voix, batterie, basse, etc.
          </p>
          <span className="inline-block text-sm px-3 py-1 bg-[#E6FCF4] text-[#00C896] rounded-full">
            Musique / IA
          </span>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition bg-white">
          <h2 className="text-xl font-semibold mb-2 text-[#1B4F72]">
            CtrlKeyboard
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Clavier intelligent pour mobile avec commandes vocales pour écrire,
            corriger, copier, coller, annuler…
          </p>
          <span className="inline-block text-sm px-3 py-1 bg-[#E6FCF4] text-[#00C896] rounded-full">
            Accessibilité / Productivité
          </span>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition bg-white">
          <h2 className="text-xl font-semibold mb-2 text-[#1B4F72]">
            App de Méditation Chrétienne
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Application de méditation biblique guidée avec versets, objectifs
            spirituels et résumés de lecture.
          </p>
          <span className="inline-block text-sm px-3 py-1 bg-[#E6FCF4] text-[#00C896] rounded-full">
            Foi / Bien-être
          </span>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition bg-white">
          <h2 className="text-xl font-semibold mb-2 text-[#1B4F72]">
            Dashboards SaaS
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Tableaux de bord web pour gestion d’entreprise, productivité, suivi
            client, ou pilotage de données.
          </p>
          <span className="inline-block text-sm px-3 py-1 bg-[#E6FCF4] text-[#00C896] rounded-full">
            Business / Analyse
          </span>
        </div>
      </div>
    </main>
  );
}
