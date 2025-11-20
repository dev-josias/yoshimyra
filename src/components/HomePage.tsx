"use client";

import { usePathname } from "next/navigation";
import LocalizedLink from "@/components/LocalizedLink";
import { motion } from "framer-motion";

export default function HomePage() {
  const pathname = usePathname();
  const isFr = !pathname?.startsWith("/en");

  const slogan = isFr
    ? "Ce que vous achetez, c'est ce que vous recevez"
    : "(WYBIWG) What You Buy Is What You Get";

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6 py-20 md:py-32"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Enhanced overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/60 to-slate-900/70 backdrop-blur-[2px]"></div>

        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00C896]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#5ED6E5]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-[#00C896]/10 text-[#00C896] border border-[#00C896]/30 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C896] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00C896]"></span>
              </span>
              WYBIWG
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white"
          >
            <span className="block mb-2">
              {isFr ? "Des solutions digitales" : "Smart Digital Solutions"}
            </span>
            <span className="block bg-gradient-to-r from-[#00C896] via-[#5ED6E5] to-[#00C896] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              {isFr ? "intelligentes et inspirantes" : "That Inspire"}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {isFr
              ? "Yoshimyra conçoit des applications mobiles, plateformes web et outils SaaS pour transformer vos idées en produits concrets, intuitifs et durables."
              : "Yoshimyra designs mobile apps, web platforms, and SaaS tools to turn your ideas into intuitive, durable, and impactful products."}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
            className="text-base md:text-lg font-semibold uppercase tracking-wider text-[#85efd5] mb-10"
          >
            {slogan}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <LocalizedLink
              href="/portfolio"
              className="group relative px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-[#00C896] to-[#5ED6E5] shadow-lg shadow-[#00C896]/30 hover:shadow-xl hover:shadow-[#00C896]/40 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">
                {isFr ? "Explorer nos réalisations" : "Explore our works"}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#5ED6E5] to-[#00C896] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </LocalizedLink>

            <LocalizedLink
              href="/contact"
              className="px-8 py-4 rounded-full text-white font-semibold bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              {isFr ? "Nous contacter" : "Contact us"}
            </LocalizedLink>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {isFr ? "Nos services" : "Our Services"}
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              {isFr
                ? "Du site vitrine à l'application mobile avancée, nous proposons des services adaptés à chaque besoin."
                : "From landing pages to advanced mobile apps, we provide services tailored to your business needs."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: isFr ? "Développement Web" : "Web Development",
                description: isFr
                  ? "Sites vitrines, plateformes, SaaS... performants et responsive."
                  : "Landing pages, platforms, SaaS... fast and responsive.",
                icon: "🌐",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: isFr ? "Applications Mobiles" : "Mobile Apps",
                description: isFr
                  ? "Apps Android/iOS fluides et modernes avec React Native."
                  : "Modern Android/iOS apps built with React Native.",
                icon: "📱",
                gradient: "from-[#00C896] to-[#5ED6E5]",
              },
              {
                title: isFr ? "UI/UX Design" : "UI/UX Design",
                description: isFr
                  ? "Interfaces modernes, ergonomiques et pensées pour l'utilisateur."
                  : "Modern and user-centered interface design.",
                icon: "🎨",
                gradient: "from-purple-500 to-pink-500",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <LocalizedLink
                  href="/portfolio"
                  className="group relative block h-full p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-transparent overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  ></div>

                  {/* Icon */}
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#00C896] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-6 flex items-center text-[#00C896] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    {isFr ? "En savoir plus" : "Learn more"}
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </LocalizedLink>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product */}
      {/* <section className="py-16 px-6 bg-[#F9F9F9] text-center">
        <h2 className="text-3xl font-bold text-[#1B4F72] mb-6">
          {isFr ? "Produit en vedette" : "Featured Product"}
        </h2>
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-[#00C896]">Kolmx</h3>
          <p className="text-gray-600 mb-4">
            {isFr
              ? "Application de lecture musicale avec séparation automatique des pistes audio : voix, batterie, basse…"
              : "Music player with automatic stem separation: vocals, drums, bass, and more."}
          </p>
          <LocalizedLink
            href="/portfolio"
            className="inline-block px-6 py-2 mt-2 rounded-full text-white bg-[#00C896] hover:opacity-90 transition"
          >
            {isFr ? "En savoir plus" : "Learn more"}
          </LocalizedLink>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00C896]/10 via-[#5ED6E5]/5 to-transparent"></div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00C896]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#5ED6E5]/5 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {isFr ? "Un projet en tête ?" : "Got a project in mind?"}
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {isFr
              ? "Faites-nous part de vos idées, nous les transformons en réalité digitale."
              : "Tell us your idea, we'll bring it to life with smart digital tools."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <LocalizedLink
              href="/contact"
              className="group relative px-10 py-4 rounded-full text-white font-semibold text-lg bg-gradient-to-r from-[#00C896] to-[#5ED6E5] shadow-lg shadow-[#00C896]/30 hover:shadow-xl hover:shadow-[#00C896]/40 hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">
                {isFr ? "Contactez-nous" : "Contact us"}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#5ED6E5] to-[#00C896] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </LocalizedLink>

            <LocalizedLink
              href="/pricing"
              className="px-10 py-4 rounded-full text-slate-900 font-semibold text-lg bg-white border-2 border-slate-200 hover:border-[#00C896] hover:text-[#00C896] hover:scale-105 transition-all duration-300"
            >
              {isFr ? "Voir nos tarifs" : "View pricing"}
            </LocalizedLink>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
