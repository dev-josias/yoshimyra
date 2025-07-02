import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LanguageSwitch from "@/components/LanguageSwitch";
import LocalizedLink from "@/components/LocalizedLink";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yoshimyra – Digital Solutions & SaaS Development",
  description:
    "Yoshimyra est une société de développement logiciel spécialisée dans la création d'applications mobiles, de plateformes web et de solutions SaaS innovantes.",
  keywords: [
    "Yoshimyra",
    "développement logiciel",
    "applications mobiles",
    "SaaS",
    "Next.js",
    "solutions digitales",
    "React",
    "tailored software",
    "entreprise tech",
    "startup digitale",
  ],
  openGraph: {
    title: "Yoshimyra – Digital Solutions & SaaS Development",
    description:
      "Yoshimyra conçoit des applications web et mobiles modernes dans les domaines de la musique, de l’éducation, de la productivité et bien plus.",
    url: "https://yoshimyra.com",
    siteName: "Yoshimyra",
    images: [
      {
        url: "https://yoshimyra.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Yoshimyra - Digital SaaS Solutions",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoshimyra – Digital Solutions & SaaS Development",
    description:
      "Explore our range of innovative mobile apps, SaaS tools, and web platforms.",
    images: ["https://yoshimyra.com/og-image.jpg"],
  },
  metadataBase: new URL("https://yoshimyra.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="min-h-screen bg-white text-gray-900">
          <header className="p-6 border-b flex justify-between items-center shadow-sm">
            <LocalizedLink
              href="/"
              className="flex items-center relative space-x-2"
            >
              <Image
                src={"/logo.png"}
                width={50}
                height={50}
                alt="Logo Yoshimyra"
              />
              <h1 className="text-2xl font-bold">Yoshimyra</h1>
            </LocalizedLink>

            <nav className="space-x-4">
              <LocalizedLink href="/pricing" className="hover:underline">
                Pricing
              </LocalizedLink>
              <LocalizedLink href="/products" className="hover:underline">
                Products
              </LocalizedLink>
              <LocalizedLink
                href="/terms-of-service"
                className="hover:underline"
              >
                Terms
              </LocalizedLink>
              <LocalizedLink href="/contact" className="hover:underline">
                Contact
              </LocalizedLink>
              <LanguageSwitch />
            </nav>
          </header>
          {children}

          <footer className="py-6 border-t text-center text-sm text-gray-500 bg-white">
            © {new Date().getFullYear()} Yoshimyra. All rights reserved.
          </footer>
        </main>
      </body>
    </html>
  );
}
