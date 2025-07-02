"use client";

import { usePathname } from "next/navigation";
import { useForm, ValidationError } from "@formspree/react";
import LocalizedLink from "./LocalizedLink";

const ContactForm = () => {
  const pathname = usePathname();
  const isFrench = !pathname.startsWith("/en");

  const [state, handleSubmit] = useForm("meokdeyb");

  const t = {
    title: isFrench ? "Contactez-nous" : "Contact Us",
    description: isFrench
      ? "Une question, un projet, ou besoin d’un devis ? Nous sommes à votre écoute."
      : "Have a question, project idea, or need a quote? We’re here to help.",
    name: isFrench ? "Nom complet" : "Full Name",
    email: isFrench ? "Adresse e-mail" : "Email Address",
    message: isFrench ? "Message" : "Message",
    placeholderName: isFrench ? "Votre nom" : "Your name",
    placeholderEmail: isFrench ? "vous@example.com" : "you@example.com",
    placeholderMessage: isFrench
      ? "Décrivez votre besoin ou posez votre question..."
      : "Describe your needs or ask your question...",
    submit: isFrench ? "Envoyer le message" : "Send Message",
    sending: isFrench ? "Envoi en cours..." : "Sending...",
    success: isFrench
      ? "✅ Merci pour votre message ! Nous vous répondrons rapidement."
      : "✅ Thank you for your message! We’ll get back to you shortly.",
    back: isFrench ? "Retour" : "Back",
  };

  return state.succeeded ? (
    <p className="flex space-x-4  flex-col items-center justify-center text-center text-green-600 text-lg font-medium">
      <span>{t.success}</span>
      <LocalizedLink href="/contact" className="text-black">
        {t.back}
      </LocalizedLink>
    </p>
  ) : (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid gap-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {t.name}
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder={t.placeholderName}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C896]"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {t.email}
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder={t.placeholderEmail}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C896]"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {t.message}
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder={t.placeholderMessage}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00C896]"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-gradient-to-r from-[#00C896] to-[#5ED6E5] text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition"
      >
        {state.submitting ? t.sending : t.submit}
      </button>
    </form>
  );
};

export default ContactForm;
