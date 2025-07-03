import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LocalizedFooter from "@/components/LocaizedFooter";
import LocalizedHeader from "@/components/LocalizedHeader";
import PaddingWrapper from "@/components/PaddingWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Yoshimyra – Digital Solutions & SaaS Development - Mobile Development",
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
          <LocalizedHeader />
          <PaddingWrapper> {children}</PaddingWrapper>
          <LocalizedFooter />
        </main>
      </body>
    </html>
  );
}
