"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "BeatPoket",
    description: {
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
      en: "A dating platform with live facial recognition and real-time chat. Web + Mobile (React Native).",
    },
    url: "https://mozahik.com",
    type: "Web Platform",
    icon: "💑",
  },
  {
    name: "CtrlKeyboard",
    description: {
      en: "Smart Android keyboard with voice editing and productivity commands. Available on Play Store.",
    },
    url: "https://play.google.com/store/apps/details?id=com.mimshak.ctrlkeyboard",
    type: "Mobile App",
    icon: "⌨️",
  },
  {
    name: "DomusAdvisor",
    description: {
      en: "Real estate platform showcasing luxury modular homes. Multi-language, modern UI.",
    },
    url: "https://www.domusadvisor.immo/en",
    type: "Web Platform",
    icon: "🏠",
  },
  {
    name: "Panda House",
    description: {
      en: "Swiss real estate platform for a modern and mobile-first experience.",
    },
    url: "https://www.panda-house.ch/",
    type: "Web Platform",
    icon: "🐼",
  },
  {
    name: "DR Media",
    description: {
      en: "Professional website for media and communication services.",
    },
    url: "https://dr-media.ch",
    type: "Web Platform",
    icon: "📺",
  },
  {
    name: "Love2",
    description: {
      en: "One-to-one mobile communication app with audio/video calls and secure chat.",
    },
    url: "https://play.google.com/store/apps/details?id=com.app.love2",
    type: "Mobile App",
    icon: "💬",
  },
];

export default function ProductsPage() {
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
            Our Portfolio
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Discover the digital solutions developed by Yoshimyra for our
            partners and clients across the globe.
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
                    {project.description.en}
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
                        ? "View on App Store"
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
                        Visit website
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
