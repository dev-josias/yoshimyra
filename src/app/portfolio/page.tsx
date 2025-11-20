"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const projects = [
  {
    name: "BeatPoket",
    description: {
      fr: "Application iOS de séparation de stems musicales en temps réel. Séparez n'importe quelle chanson en voix, batterie, basse et instruments instantanément.",
      en: "iOS app for real-time music stem separation. Instantly separate any song into vocals, drums, bass, and instruments.",
    },
    url: "https://apps.apple.com/us/app/beatpoket/id6749765328",
    websiteUrl: "https://beatpoket.com",
    type: "Mobile App",
    icon: "🎵",
  },
  {
    name: "Mozahik",
    description: {
      fr: "Plateforme de rencontres avec reconnaissance faciale en direct et messagerie temps réel.",
      en: "Dating platform with live facial recognition and real-time messaging.",
    },
    url: "https://mozahik.com",
    type: "Web Platform",
    icon: "💑",
  },
  {
    name: "CtrlKeyboard",
    description: {
      fr: "Clavier Android intelligent avec commandes vocales pour écrire, corriger, copier, coller…",
      en: "Smart Android keyboard with voice commands for typing, correcting, copying, pasting…",
    },
    url: "https://play.google.com/store/apps/details?id=com.mimshak.ctrlkeyboard",
    type: "Mobile App",
    icon: "⌨️",
  },
  {
    name: "DomusAdvisor",
    description: {
      fr: "Plateforme immobilière pour maisons modulaires haut de gamme. Site multilingue.",
      en: "Real estate platform for high-end modular homes. Multilingual site.",
    },
    url: "https://www.domusadvisor.immo",
    type: "Web Platform",
    icon: "🏠",
  },
  {
    name: "Panda House",
    description: {
      fr: "Plateforme immobilière suisse moderne, responsive et optimisée mobile.",
      en: "Modern Swiss real estate platform, responsive and mobile-optimized.",
    },
    url: "https://www.panda-house.ch/",
    type: "Web Platform",
    icon: "🐼",
  },
  {
    name: "DR Media",
    description: {
      fr: "Site web professionnel pour services médiatiques et de communication.",
      en: "Professional website for media and communication services.",
    },
    url: "https://dr-media.ch",
    type: "Web Platform",
    icon: "📺",
  },
  {
    name: "Love2",
    description: {
      fr: "Application mobile de communication 1-to-1 avec appels vidéo/audio et messages sécurisés.",
      en: "1-to-1 mobile communication app with video/audio calls and secure messaging.",
    },
    url: "https://play.google.com/store/apps/details?id=com.app.love2",
    type: "Mobile App",
    icon: "💬",
  },
];

export default function ProduitsPage() {
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
            {isFr ? "Réalisations" : "Portfolio"}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {isFr
              ? "Voici quelques produits digitaux développés par Yoshimyra pour des clients à l'international."
              : "Here are some digital products developed by Yoshimyra for international clients."}
          </p>
        </motion.div>
      </section>

      {/* Projects grid */}
      <section className="py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="group block h-full p-8 bg-white rounded-2xl border border-slate-200 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden relative">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00C896]/0 to-[#5ED6E5]/0 group-hover:from-[#00C896]/5 group-hover:to-[#5ED6E5]/5 transition-all duration-300"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </div>

                  {/* Type badge */}
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#00C896]/10 text-[#00C896] mb-4">
                    {project.type}
                  </span>

                  <h2 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-[#00C896] transition-colors">
                    {project.name}
                  </h2>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {isFr ? project.description.fr : project.description.en}
                  </p>

                  {/* Links */}
                  <div className="space-y-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center text-[#00C896] font-semibold group-hover:translate-x-2 transition-transform duration-300"
                    >
                      {project.type === "Mobile App" &&
                      project.url.includes("apps.apple.com")
                        ? isFr
                          ? "Voir sur l'App Store"
                          : "View on App Store"
                        : isFr
                        ? "Voir le projet"
                        : "View project"}
                      <svg
                        className="w-5 h-5 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    {project.websiteUrl && (
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center text-slate-600 text-sm hover:text-[#00C896] transition-colors duration-300"
                      >
                        {isFr ? "Visiter le site web" : "Visit website"}
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
