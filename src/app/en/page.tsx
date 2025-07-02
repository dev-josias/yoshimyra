import Link from "next/link";

export default function HomeEn() {
  return (
    <section className="py-24 px-6 text-center bg-gradient-to-b from-[#E6FCF4] to-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#1B4F72]">
        Inspiring & Powerful Digital Solutions
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 text-gray-700">
        Yoshimyra is a software company building modern mobile apps, web
        platforms, and SaaS tools to turn your ideas into impactful digital
        products. From education and productivity to music and communication,
        our mission is to bring clarity and creativity to every project.
      </p>
      <Link
        href="/en/products"
        className="inline-block px-8 py-3 rounded-full text-white bg-gradient-to-r from-[#00C896] to-[#5ED6E5] shadow hover:opacity-90 transition"
      >
        Explore Our Products
      </Link>
    </section>
  );
}
