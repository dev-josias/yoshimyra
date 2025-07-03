import LocalizedLink from "@/components/LocalizedLink";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1B4F72] mb-2">
          Our Service Packages
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Choose the package that fits your needs — from presentation websites
          to full applications.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Starter Pack */}
        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4 text-[#1B4F72]">
            Starter Pack
          </h2>
          <p className="text-gray-600 mb-4">
            One-time payment — Get a presentation website delivered quickly.
          </p>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>✅ Custom landing page or showcase website</li>
            <li>✅ Responsive design (mobile + desktop)</li>
            <li>✅ Hosting + domain name included for 1 year</li>
            <li>✅ Delivery within 5–10 business days</li>
          </ul>
          <p className="text-2xl font-bold text-[#00C896] mb-4">
            From €600 (one-time)
          </p>
          <LocalizedLink
            href="/contact"
            className="w-full px-4 py-2 rounded bg-gradient-to-r from-[#00C896] to-[#5ED6E5] text-white font-semibold"
          >
            Get a free quote
          </LocalizedLink>
        </div>

        {/* Pro Pack */}
        <div className="border rounded-xl p-6 shadow-lg bg-[#E6FCF4] ring-2 ring-[#00C896]">
          <h2 className="text-xl font-semibold mb-4 text-[#1B4F72]">
            Pro Pack
          </h2>
          <p className="text-gray-600 mb-4">
            One-time payment — Full application with integrated features.
          </p>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>✅ Custom web or mobile app</li>
            <li>✅ Secure authentication + database</li>
            <li>✅ Admin dashboard included</li>
            <li>✅ Delivered in 3 to 5 weeks</li>
            <li>✅ Includes technical documentation</li>
          </ul>
          <p className="text-2xl font-bold text-[#00C896] mb-4">
            From €2,500 (one-time)
          </p>
          <LocalizedLink
            href="/contact"
            className="w-full px-4 py-2 rounded bg-gradient-to-r from-[#00C896] to-[#5ED6E5] text-white font-semibold"
          >
            Start my project
          </LocalizedLink>
        </div>

        {/* Technical Maintenance Pack */}
        <div className="border rounded-xl p-6 shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4 text-[#1B4F72]">
            Maintenance & Upgrades
          </h2>
          <p className="text-gray-600 mb-4">
            Ongoing improvements and code quality reports.
          </p>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>✅ Code and performance audits</li>
            <li>✅ Security and stability updates</li>
            <li>✅ Monthly upgrade packages with changelogs</li>
            <li>✅ Includes deliverables: reports and improvement roadmap</li>
          </ul>
          <p className="text-2xl font-bold text-[#00C896] mb-4">
            From €150/month (subscription)
          </p>
          <LocalizedLink
            href="/contact"
            className="w-full px-4 py-2 rounded bg-gradient-to-r from-[#00C896] to-[#5ED6E5] text-white font-semibold"
          >
            Subscribe
          </LocalizedLink>
        </div>
      </div>
    </main>
  );
}
