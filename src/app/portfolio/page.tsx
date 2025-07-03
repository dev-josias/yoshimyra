export default function ProduitsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1B4F72] mb-2">Réalisations</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Voici quelques produits digitaux développés par Yoshimyra pour des
          clients à l’international.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition bg-white">
          <h2 className="text-xl font-semibold mb-2 text-[#1B4F72]">Mozahik</h2>
          <p className="text-sm text-gray-600 mb-4">
            Plateforme de rencontres avec reconnaissance faciale en direct et
            messagerie temps réel.
          </p>
          <a
            href="https://mozahik.com"
            className="text-sm text-[#00C896] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le site
          </a>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition bg-white">
          <h2 className="text-xl font-semibold mb-2 text-[#1B4F72]">
            CtrlKeyboard
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Clavier Android intelligent avec commandes vocales pour écrire,
            corriger, copier, coller…
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.mimshak.ctrlkeyboard"
            className="text-sm text-[#00C896] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir sur le Play Store
          </a>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition bg-white">
          <h2 className="text-xl font-semibold mb-2 text-[#1B4F72]">
            DomusAdvisor
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Plateforme immobilière pour maisons modulaires haut de gamme. Site
            multilingue.
          </p>
          <a
            href="https://www.domusadvisor.immo"
            className="text-sm text-[#00C896] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le site
          </a>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition bg-white">
          <h2 className="text-xl font-semibold mb-2 text-[#1B4F72]">
            Panda House
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Plateforme immobilière suisse moderne, responsive et optimisée
            mobile.
          </p>
          <a
            href="https://www.panda-house.ch/"
            className="text-sm text-[#00C896] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le site
          </a>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition bg-white">
          <h2 className="text-xl font-semibold mb-2 text-[#1B4F72]">Love2</h2>
          <p className="text-sm text-gray-600 mb-4">
            Application mobile de communication 1-to-1 avec appels vidéo/audio
            et messages sécurisés.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.app.love2"
            className="text-sm text-[#00C896] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir sur le Play Store
          </a>
        </div>
      </div>
    </main>
  );
}
