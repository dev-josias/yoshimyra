import Link from "next/link";

export default function Home() {
  return (
    <section className="py-24 px-6 text-center bg-gradient-to-b from-[#E6FCF4] to-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#1B4F72]">
        Des solutions digitales
        <br />
        intelligentes et inspirantes
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-700">
        Yoshimyra conçoit des applications mobiles, plateformes web et outils
        SaaS pour transformer vos idées en produits concrets, intuitifs et
        durables.
      </p>
      <Link
        href="/products"
        className="inline-block px-8 py-3 rounded-full text-white bg-gradient-to-r from-[#00C896] to-[#5ED6E5] shadow hover:opacity-90 transition"
      >
        Explorer nos produits
      </Link>
    </section>
  );
}
