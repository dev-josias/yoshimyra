export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#1B4F72] mb-2">
          Contactez-nous
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Une question, un projet, ou besoin d’un devis ? Nous sommes à votre
          écoute.
        </p>
      </section>

      <form className="max-w-2xl mx-auto grid gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nom complet
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C896]"
            placeholder="Votre nom"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Adresse e-mail
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C896]"
            placeholder="vous@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            rows={5}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C896]"
            placeholder="Décrivez votre besoin ou posez votre question..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-[#00C896] to-[#5ED6E5] text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition"
        >
          Envoyer le message
        </button>
      </form>
    </main>
  );
}
