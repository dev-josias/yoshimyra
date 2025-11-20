"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import LocalizedLink from "@/components/LocalizedLink";

const packages = [
  {
    key: "showcase",
    fr: {
      title: "Site Vitrine",
      desc: "Un site web professionnel pour présenter vos services.",
      items: [
        "✅ 1 à 5 pages (Accueil, À propos, Contact…)",
        "✅ Design responsive (mobile & desktop)",
        "✅ Hébergement + domaine inclus 1 an",
        "✅ Livraison en 7 jours ouvrés",
      ],
      price: "600 €",
      cta: "Commander ce pack",
    },
    en: {
      title: "Showcase Website",
      desc: "A professional website to present your services.",
      items: [
        "✅ 1 to 5 pages (Home, About, Contact…)",
        "✅ Responsive design (mobile & desktop)",
        "✅ Hosting + domain included 1 year",
        "✅ Delivery in 7 business days",
      ],
      price: "€600",
      cta: "Order this pack",
    },
  },
  {
    key: "ecommerce",
    fr: {
      title: "E-commerce",
      desc: "Vendez vos produits en ligne avec une boutique moderne.",
      items: [
        "✅ Gestion produits, paniers, commandes",
        "✅ Paiement Stripe ou PayPal intégré",
        "✅ Admin dashboard",
        "✅ Livraison en 10 à 15 jours ouvrés",
      ],
      price: "1 200 €",
      cta: "Lancer ma boutique",
    },
    en: {
      title: "E-commerce",
      desc: "Sell your products online with a modern store.",
      items: [
        "✅ Product, cart & order management",
        "✅ Integrated Stripe or PayPal payment",
        "✅ Admin dashboard",
        "✅ Delivery in 10-15 business days",
      ],
      price: "€1,200",
      cta: "Launch my store",
    },
  },
  {
    key: "mobile-basic",
    fr: {
      title: "Application Mobile Basique",
      desc: "App Android/iOS simple avec formulaire, navigation et base Firebase.",
      items: [
        "✅ Application React Native (iOS & Android)",
        "✅ Formulaire + authentification",
        "✅ Firebase DB & hébergement",
        "✅ Livraison en 3 semaines",
      ],
      price: "1 800 €",
      cta: "Commander l'app",
    },
    en: {
      title: "Basic Mobile App",
      desc: "Simple iOS/Android app with form, auth, and Firebase backend.",
      items: [
        "✅ React Native App (iOS & Android)",
        "✅ Form + authentication",
        "✅ Firebase backend",
        "✅ Delivery in 3 weeks",
      ],
      price: "€1,800",
      cta: "Order the app",
    },
  },
  {
    key: "web-app-pro",
    fr: {
      title: "Application Web Pro",
      desc: "Plateforme SaaS ou outil métier connecté à une base de données.",
      items: [
        "✅ Authentification sécurisée",
        "✅ Gestion utilisateurs & données",
        "✅ Dashboard admin complet",
        "✅ Livraison en 4 semaines",
      ],
      price: "2 500 €",
      cta: "Commander la web app",
    },
    en: {
      title: "Pro Web App",
      desc: "SaaS or business platform connected to a full database.",
      items: [
        "✅ Secure authentication",
        "✅ User & data management",
        "✅ Full admin dashboard",
        "✅ Delivery in 4 weeks",
      ],
      price: "€2,500",
      cta: "Order the web app",
    },
  },
  {
    key: "social-app",
    fr: {
      title: "Application Réseau Social",
      desc: "App de type réseau social avec profils, posts, likes.",
      items: [
        "✅ Authentification, profils utilisateurs",
        "✅ Fil d'actualité avec posts & likes",
        "✅ Notifications & messagerie (option)",
        "✅ Livraison en 5 à 6 semaines",
      ],
      price: "3 500 €",
      cta: "Créer mon réseau",
    },
    en: {
      title: "Social Network App",
      desc: "Build a social media style app with profiles and posts.",
      items: [
        "✅ Authentication, user profiles",
        "✅ Feed with posts & likes",
        "✅ Messaging & notifications (optional)",
        "✅ Delivery in 5-6 weeks",
      ],
      price: "€3,500",
      cta: "Build my network",
    },
  },

  {
    key: "maintenance",
    fr: {
      title: "Maintenance & Support",
      desc: "Assistance technique continue et mises à jour mensuelles.",
      items: [
        "✅ 3h de développement/mois",
        "✅ Mises à jour sécurité & code",
        "✅ Rapport mensuel de performance",
        "✅ Support email prioritaire",
      ],
      price: "150 €/mois",
      cta: "Souscrire",
    },
    en: {
      title: "Maintenance & Support",
      desc: "Ongoing tech assistance and monthly updates.",
      items: [
        "✅ 3h/month dev time",
        "✅ Security & code updates",
        "✅ Monthly performance report",
        "✅ Priority email support",
      ],
      price: "€150/month",
      cta: "Subscribe",
    },
  },
];

export default function PricingPage() {
  const pathname = usePathname();
  const isFr = !pathname?.startsWith("/en");

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Hero section */}
      <section className="py-20 px-6 text-center bg-gradient-to-br from-[#00C896]/5 via-transparent to-[#5ED6E5]/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {isFr ? "Nos Packs Clés en Main" : "Our Fixed-Price Packages"}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {isFr
              ? "Tous nos prix sont transparents avec des livrables digitaux clairement définis."
              : "All pricing is transparent with clearly defined digital deliverables."}
          </p>
        </motion.div>
      </section>

      {/* Pricing cards */}
      <section className="py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((p, index) => {
            const content = isFr ? p.fr : p.en;
            const isPopular = p.key === "ecommerce" || p.key === "web-app-pro";

            return (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300 ${
                  isPopular
                    ? "bg-gradient-to-br from-[#00C896]/10 to-[#5ED6E5]/10 border-2 border-[#00C896] shadow-xl scale-105"
                    : "bg-white border border-slate-200 shadow-lg hover:shadow-xl hover:scale-105"
                }`}
              >
                {isPopular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-[#00C896] to-[#5ED6E5] text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    {isFr ? "Populaire" : "Popular"}
                  </div>
                )}

                <div className="p-8 flex flex-col h-full">
                  <h2 className="text-2xl font-bold mb-3 text-slate-900">
                    {content.title}
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {content.desc}
                  </p>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {content.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-700"
                      >
                        <svg
                          className="w-5 h-5 text-[#00C896] flex-shrink-0 mt-0.5"
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
                        <span className="text-sm leading-relaxed">
                          {item.replace("✅ ", "")}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <p className="text-3xl font-bold text-[#00C896] mb-6">
                      {content.price}
                    </p>
                    <LocalizedLink
                      href="/contact"
                      className={`block w-full px-6 py-3 rounded-xl text-white font-semibold text-center transition-all duration-300 ${
                        isPopular
                          ? "bg-gradient-to-r from-[#00C896] to-[#5ED6E5] hover:shadow-lg hover:shadow-[#00C896]/30 hover:scale-105"
                          : "bg-gradient-to-r from-[#00C896] to-[#5ED6E5] hover:shadow-lg hover:shadow-[#00C896]/20 hover:scale-105"
                      }`}
                    >
                      {content.cta}
                    </LocalizedLink>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
