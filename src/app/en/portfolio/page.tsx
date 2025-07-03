export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1B4F72] mb-2">
          Our Portfolio
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Discover the digital solutions developed by Yoshimyra for our partners
          and clients across the globe.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition bg-white">
          <h2 className="text-xl font-semibold mb-2 text-[#1B4F72]">Mozahik</h2>
          <p className="text-sm text-gray-600 mb-4">
            A dating platform with live facial recognition and real-time chat.
            Web + Mobile (React Native).
          </p>
          <a
            href="https://mozahik.com"
            className="text-sm text-[#00C896] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition bg-white">
          <h2 className="text-xl font-semibold mb-2 text-[#1B4F72]">
            CtrlKeyboard
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Smart Android keyboard with voice editing and productivity commands.
            Available on Play Store.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.mimshak.ctrlkeyboard"
            className="text-sm text-[#00C896] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Play Store
          </a>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition bg-white">
          <h2 className="text-xl font-semibold mb-2 text-[#1B4F72]">
            DomusAdvisor
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Real estate platform showcasing luxury modular homes.
            Multi-language, modern UI.
          </p>
          <a
            href="https://www.domusadvisor.immo/en"
            className="text-sm text-[#00C896] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition bg-white">
          <h2 className="text-xl font-semibold mb-2 text-[#1B4F72]">
            Panda House
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Swiss real estate platform for a modern and mobile-first experience.
          </p>
          <a
            href="https://www.panda-house.ch/"
            className="text-sm text-[#00C896] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition bg-white">
          <h2 className="text-xl font-semibold mb-2 text-[#1B4F72]">Love2</h2>
          <p className="text-sm text-gray-600 mb-4">
            One-to-one mobile communication app with audio/video calls and
            secure chat.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.app.love2"
            className="text-sm text-[#00C896] underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Play Store
          </a>
        </div>
      </div>
    </main>
  );
}
