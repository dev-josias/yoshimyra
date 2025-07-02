export default function ProductsPageEn() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1B4F72] mb-2">Our Products</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Discover the digital solutions developed by Yoshimyra to simplify life
          and spark innovation.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition bg-white">
          <h2 className="text-xl font-semibold mb-2 text-[#1B4F72]">Kolmx</h2>
          <p className="text-sm text-gray-600 mb-4">
            Music player app with AI-based stem separation: vocals, drums, bass,
            and more.
          </p>
          <span className="inline-block text-sm px-3 py-1 bg-[#E6FCF4] text-[#00C896] rounded-full">
            Music / AI
          </span>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition bg-white">
          <h2 className="text-xl font-semibold mb-2 text-[#1B4F72]">
            CtrlKeyboard
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Smart mobile keyboard with voice command features for editing,
            navigation, formatting, and control.
          </p>
          <span className="inline-block text-sm px-3 py-1 bg-[#E6FCF4] text-[#00C896] rounded-full">
            Accessibility / Productivity
          </span>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition bg-white">
          <h2 className="text-xl font-semibold mb-2 text-[#1B4F72]">
            Christian Meditation App
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Guided Bible meditation app with spiritual goals, scripture plans,
            and reading summaries.
          </p>
          <span className="inline-block text-sm px-3 py-1 bg-[#E6FCF4] text-[#00C896] rounded-full">
            Faith / Wellness
          </span>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition bg-white">
          <h2 className="text-xl font-semibold mb-2 text-[#1B4F72]">
            SaaS Dashboards
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Web dashboards for business productivity, data tracking, CRM, and
            performance monitoring.
          </p>
          <span className="inline-block text-sm px-3 py-1 bg-[#E6FCF4] text-[#00C896] rounded-full">
            Business / Analytics
          </span>
        </div>
      </div>
    </main>
  );
}
