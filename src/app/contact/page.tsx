import ContactForm from "@/components/ContactForm";

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

      <section className="text-center mb-6">
        <p className="text-md text-gray-700">
          📧 Email :{" "}
          <a
            href="mailto:hello@yoshimyra.com"
            className="text-[#00C896] underline"
          >
            hello@yoshimyra.com
          </a>
        </p>
        <p className="text-md text-gray-700">
          📱 WhatsApp :{" "}
          <a
            href="https://wa.me/212776987747"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00C896] underline"
          >
            +212 776 987 747
          </a>
        </p>
      </section>

      <ContactForm />
    </main>
  );
}
