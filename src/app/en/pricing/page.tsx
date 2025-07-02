import LocalizedLink from "@/components/LocalizedLink";

export default function PricingPageEn() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1B4F72] mb-2">
          Our Service Packages
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Choose the right plan for your needs — whether it&apos;s mobile/web
          development or technical support.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4 text-[#1B4F72]">
            Starter Pack
          </h2>
          <p className="text-gray-600 mb-4">
            Perfect for individuals and small projects.
          </p>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>✅ Landing page or showcase website</li>
            <li>✅ Responsive design</li>
            <li>✅ Quick delivery</li>
          </ul>
          <p className="text-2xl font-bold text-[#00C896] mb-4">From €600</p>
          <LocalizedLink
            href="/contact"
            className="w-full px-4 py-2 rounded bg-gradient-to-r from-[#00C896] to-[#5ED6E5] text-white font-semibold"
          >
            Request a quote
          </LocalizedLink>
        </div>

        <div className="border rounded-xl p-6 shadow-lg bg-[#E6FCF4] ring-2 ring-[#00C896]">
          <h2 className="text-xl font-semibold mb-4 text-[#1B4F72]">
            Pro Pack
          </h2>
          <p className="text-gray-600 mb-4">
            All-in-one for startups, MVPs, or established businesses.
          </p>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>✅ Web or mobile app</li>
            <li>✅ Auth + database integration</li>
            <li>✅ Admin dashboard</li>
          </ul>
          <p className="text-2xl font-bold text-[#00C896] mb-4">From €2,500</p>
          <LocalizedLink
            href="/contact"
            className="w-full px-4 py-2 rounded bg-gradient-to-r from-[#00C896] to-[#5ED6E5] text-white font-semibold"
          >
            Start your project
          </LocalizedLink>
        </div>

        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4 text-[#1B4F72]">
            Consulting & Support
          </h2>
          <p className="text-gray-600 mb-4">
            Code review, performance audit, or ongoing updates.
          </p>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>✅ Code or performance audit</li>
            <li>✅ Monthly maintenance</li>
            <li>✅ Personalized technical support</li>
          </ul>
          <p className="text-2xl font-bold text-[#00C896] mb-4">
            €80/h or from €150/mo
          </p>
          <LocalizedLink
            href="/contact"
            className="w-full px-4 py-2 rounded bg-gradient-to-r from-[#00C896] to-[#5ED6E5] text-white font-semibold"
          >
            Book a session
          </LocalizedLink>
        </div>
      </div>
    </main>
  );
}
