"use client";

import { usePathname } from "next/navigation";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center text-center space-y-6 p-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-200"
    >
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <p className="text-green-700 text-xl font-semibold">{t.success}</p>
      <LocalizedLink
        href="/contact"
        className="px-6 py-2 rounded-full text-slate-700 font-medium bg-white border border-slate-200 hover:border-[#00C896] hover:text-[#00C896] transition-colors"
      >
        {t.back}
      </LocalizedLink>
    </motion.div>
  ) : (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          {t.name}
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder={t.placeholderName}
          className="w-full px-5 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00C896] focus:border-transparent transition-all duration-300 bg-white hover:border-slate-300"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          {t.email}
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder={t.placeholderEmail}
          className="w-full px-5 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00C896] focus:border-transparent transition-all duration-300 bg-white hover:border-slate-300"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          {t.message}
        </label>
        <textarea
          name="message"
          required
          rows={6}
          placeholder={t.placeholderMessage}
          className="w-full px-5 py-3 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#00C896] focus:border-transparent transition-all duration-300 bg-white hover:border-slate-300 resize-none"
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
        className="group w-full bg-gradient-to-r from-[#00C896] to-[#5ED6E5] text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-[#00C896]/30 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 relative overflow-hidden"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {state.submitting ? (
            <>
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              {t.sending}
            </>
          ) : (
            <>
              {t.submit}
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </>
          )}
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-[#5ED6E5] to-[#00C896] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </button>
    </form>
  );
};

export default ContactForm;
