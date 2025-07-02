export default function ContactPageEn() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <section className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#1B4F72] mb-2">Contact Us</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Have a question, a project, or want a quote? We&apos;d love to hear
          from you.
        </p>
      </section>

      <form className="max-w-2xl mx-auto grid gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C896]"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C896]"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            rows={5}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C896]"
            placeholder="Describe your project or write your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-gradient-to-r from-[#00C896] to-[#5ED6E5] text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
