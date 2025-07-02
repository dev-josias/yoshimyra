export default function TermsOfServiceEn() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#1B4F72] mb-2">
          Terms of Service
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          By using our services, you agree to the terms outlined below. Please
          read them carefully.
        </p>
      </section>

      <section className="max-w-4xl mx-auto space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-[#1B4F72] mb-2">
            1. About Yoshimyra
          </h2>
          <p className="text-gray-700">
            Yoshimyra is a company focused on designing and developing digital
            solutions including mobile apps, web platforms, SaaS tools, and
            custom software. Our products aim to deliver value, efficiency, and
            exceptional user experience.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#1B4F72] mb-2">
            2. Permitted Use
          </h2>
          <p className="text-gray-700">
            Our products are to be used for lawful personal or professional
            purposes. Any attempt at hacking, reverse engineering, or abusive
            use is strictly forbidden.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#1B4F72] mb-2">
            3. Data Privacy
          </h2>
          <p className="text-gray-700">
            Yoshimyra respects your privacy. We only collect the minimum data
            required and use it strictly to improve our services. We do not sell
            or share your personal data without explicit consent.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#1B4F72] mb-2">
            4. Intellectual Property
          </h2>
          <p className="text-gray-700">
            All materials on our products and sites (logos, UI, content, code,
            illustrations) are the exclusive property of Yoshimyra unless
            otherwise stated. Any reproduction or redistribution without
            permission is prohibited.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#1B4F72] mb-2">
            5. Updates & Maintenance
          </h2>
          <p className="text-gray-700">
            We reserve the right to update our products at any time to improve
            security, performance, or user experience. Updates may include new
            features, bug fixes, or UI changes.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#1B4F72] mb-2">
            6. Refund Policy
          </h2>
          <p className="text-gray-700">
            Refund requests may be submitted within 14 days of purchase. Each
            request will be reviewed case by case based on how the service has
            been used.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#1B4F72] mb-2">
            7. Contact
          </h2>
          <p className="text-gray-700">
            For questions, concerns, or specific requests regarding these terms,
            contact us at:{" "}
            <a
              href="mailto:support@yoshimyra.com"
              className="text-blue-600 underline"
            >
              hello@yoshimyra.com
            </a>
          </p>
        </div>

        <p className="text-sm text-gray-500 text-center mt-12">
          Last updated: {new Date().toLocaleDateString("en-GB")}
        </p>
      </section>
    </main>
  );
}
