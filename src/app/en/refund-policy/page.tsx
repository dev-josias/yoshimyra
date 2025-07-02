export default function RefundPolicyEn() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

      <p className="mb-4">Last updated: July 2, 2025</p>

      <p className="mb-4">
        At <strong>Yoshimyra</strong>, we’re committed to providing high-quality
        software and services. If you experience any issues, we’ll do our best
        to resolve them quickly.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Refund eligibility</h2>
      <p className="mb-4">
        You can request a refund within 14 days of purchase if:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>The product or service does not work as described</li>
        <li>You have not used or activated your license or access</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How to request</h2>
      <p className="mb-4">
        Please email us at{" "}
        <a href="mailto:support@yoshimyra.com" className="underline">
          support@yoshimyra.com
        </a>
        with your order number and a description of the issue.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Exceptions</h2>
      <p className="mb-4">We will not issue refunds:</p>
      <ul className="list-disc pl-5 mb-4">
        <li>After 14 days from the date of purchase</li>
        <li>If the product was downloaded, used, or activated</li>
        <li>For abusive or repetitive refund requests</li>
      </ul>

      <p className="text-sm text-gray-500 mt-8">
        This policy complies with EU consumer rights directive.
      </p>
    </main>
  );
}
