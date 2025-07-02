"use client";

import { usePathname } from "next/navigation";
import LocalizedLink from "@/components/LocalizedLink";

export default function Home() {
  const pathname = usePathname();
  const isFr = !pathname?.startsWith("/en");

  return (
    <main>
      <section className="py-24 px-6 text-center bg-gradient-to-b from-[#E6FCF4] to-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#1B4F72]">
          {isFr
            ? "Des solutions digitales\nintelligentes et inspirantes"
            : "Smart and Inspiring\nDigital Solutions"}
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-700">
          {isFr
            ? "Yoshimyra conçoit des applications mobiles, plateformes web et outils SaaS pour transformer vos idées en produits concrets, intuitifs et durables."
            : "Yoshimyra designs mobile apps, web platforms, and SaaS tools to turn your ideas into intuitive, durable, and impactful products."}
        </p>
        <LocalizedLink
          href="/products"
          className="inline-block px-8 py-3 rounded-full text-white bg-gradient-to-r from-[#00C896] to-[#5ED6E5] shadow hover:opacity-90 transition"
        >
          {isFr ? "Explorer nos réalisations" : "Explore our works"}
        </LocalizedLink>
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
            href="/products#audit"
            className="p-6 border rounded-lg shadow hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold text-[#1B4F72] mb-2">
              {isFr ? "Audit & Conseil" : "Audit & Consulting"}
            </h3>
            <p className="text-sm text-gray-600">
              {isFr
                ? "Analyse de vos projets et accompagnement technique personnalisé."
                : "Project audits and expert technical guidance for your needs."}
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
