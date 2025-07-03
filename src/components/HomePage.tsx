"use client";

import { usePathname } from "next/navigation";
import LocalizedLink from "@/components/LocalizedLink";
import { motion } from "framer-motion";

export default function HomePage() {
  const pathname = usePathname();
  const isFr = !pathname?.startsWith("/en");

  const slogan = isFr
    ? "Ce que vous achetez, c’est ce que vous recevez"
    : "(WYBIWG) What You Buy Is What You Get";

  return (
    <main>
      <section
        className="relative py-24 px-6 text-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-bg.jpg')", // Image à placer dans /public
        }}
      >
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-[#1B4F72]"
          >
            {isFr
              ? "Des solutions digitales intelligentes et inspirantes"
              : "Smart and Inspiring Digital Solutions"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-700 mb-4"
          >
            {isFr
              ? "Yoshimyra conçoit des applications mobiles, plateformes web et outils SaaS pour transformer vos idées en produits concrets, intuitifs et durables."
              : "Yoshimyra designs mobile apps, web platforms, and SaaS tools to turn your ideas into intuitive, durable, and impactful products."}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-sm uppercase tracking-wide font-semibold text-[#00C896] mb-8"
          >
            {slogan}
          </motion.p>

          <LocalizedLink
            href="/products"
            className="inline-block px-8 py-3 rounded-full text-white bg-gradient-to-r from-[#00C896] to-[#5ED6E5] shadow hover:opacity-90 transition"
          >
            {isFr ? "Explorer nos réalisations" : "Explore our works"}
          </LocalizedLink>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-[#1B4F72] mb-6">
          {isFr ? "Nos services" : "Our Services"}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          {isFr
            ? "Du site vitrine à l’application mobile avancée, nous proposons des services adaptés à chaque besoin."
            : "From landing pages to advanced mobile apps, we provide services tailored to your business needs."}
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <LocalizedLink
            href="/products#web"
            className="p-6 border rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-[#1B4F72] mb-2">
              {isFr ? "Développement Web" : "Web Development"}
            </h3>
            <p className="text-sm text-gray-600">
              {isFr
                ? "Sites vitrines, plateformes, SaaS... performants et responsive."
                : "Landing pages, platforms, SaaS... fast and responsive."}
            </p>
          </LocalizedLink>

          <LocalizedLink
            href="/products#mobile"
            className="p-6 border rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-[#1B4F72] mb-2">
              {isFr ? "Applications Mobiles" : "Mobile Apps"}
            </h3>
            <p className="text-sm text-gray-600">
              {isFr
                ? "Apps Android/iOS fluides et modernes avec React Native."
                : "Modern Android/iOS apps built with React Native."}
            </p>
          </LocalizedLink>

          <LocalizedLink
            href="/products#design"
            className="p-6 border rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-[#1B4F72] mb-2">
              {isFr ? "UI/UX Design" : "UI/UX Design"}
            </h3>
            <p className="text-sm text-gray-600">
              {isFr
                ? "Interfaces modernes, ergonomiques et pensées pour l'utilisateur."
                : "Modern and user-centered interface design."}
            </p>
          </LocalizedLink>
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
            href="/products"
            className="inline-block px-6 py-2 mt-2 rounded-full text-white bg-[#00C896] hover:opacity-90 transition"
          >
            {isFr ? "En savoir plus" : "Learn more"}
          </LocalizedLink>
        </div>
      </section> */}

      {/* Call to Action */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#E6FCF4] to-white text-center">
        <h2 className="text-3xl font-bold text-[#1B4F72] mb-4">
          {isFr ? "Un projet en tête ?" : "Got a project in mind?"}
        </h2>
        <p className="text-gray-700 mb-6">
          {isFr
            ? "Faites-nous part de vos idées, nous les transformons en réalité digitale."
            : "Tell us your idea, we’ll bring it to life with smart digital tools."}
        </p>
        <LocalizedLink
          href="/contact"
          className="inline-block px-8 py-3 rounded-full text-white bg-gradient-to-r from-[#00C896] to-[#5ED6E5] shadow hover:opacity-90 transition"
        >
          {isFr ? "Contactez-nous" : "Contact us"}
        </LocalizedLink>
      </section>
    </main>
  );
}
