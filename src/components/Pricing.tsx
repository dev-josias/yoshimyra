"use client";

import { usePathname } from "next/navigation";
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
      price: "1 200 €",
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
      price: "1 800 €",
      cta: "Commander l’app",
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
      price: "2 500 €",
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
        "✅ Fil d’actualité avec posts & likes",
        "✅ Notifications & messagerie (option)",
        "✅ Livraison en 5 à 6 semaines",
      ],
      price: "3 500 €",
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
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#1B4F72] mb-2">
          {isFr ? "Nos Packs Clés en Main" : "Our Fixed-Price Packages"}
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {isFr
            ? "Tous nos prix sont transparents avec des livrables digitaux clairement définis."
            : "All pricing is transparent with clearly defined digital deliverables."}
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {packages.map((p) => {
          const content = isFr ? p.fr : p.en;
          return (
            <div
              key={p.key}
              className="border rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col"
            >
              <h2 className="text-xl font-semibold mb-2 text-[#1B4F72]">
                {content.title}
              </h2>
              <p className="text-gray-600 mb-4">{content.desc}</p>
              <ul className="text-sm text-gray-700 space-y-2 mb-6">
                {content.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <p className="text-2xl font-bold text-[#00C896] mb-4">
                {content.price}
              </p>
              <LocalizedLink
                href="/contact"
                className="w-full mt-auto px-4 py-2 rounded bg-gradient-to-r from-[#00C896] to-[#5ED6E5] text-white font-semibold text-center"
              >
                {content.cta}
              </LocalizedLink>
            </div>
          );
        })}
      </div>
    </main>
  );
}
