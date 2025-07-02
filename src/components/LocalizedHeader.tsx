"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import LocalizedLink from "@/components/LocalizedLink";
import LanguageSwitch from "@/components/LanguageSwitch";

export default function LocalizedHeader() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "fr";

  const navItems = {
    en: [
      { href: "/pricing", label: "Pricing" },
      { href: "/products", label: "Products" },
      { href: "/contact", label: "Contact" },
      { href: "/terms-of-service", label: "Terms & Conditions" },
    ],
    fr: [
      { href: "/pricing", label: "Tarifs" },
      { href: "/products", label: "Produits" },
      { href: "/contact", label: "Contact" },
      { href: "/terms-of-service", label: "Conditions Générales" },
    ],
  };

  return (
    <header className="p-6 border-b flex justify-between items-center shadow-sm">
      <LocalizedLink href="/" className="flex items-center relative space-x-2">
        <Image src="/logo.png" width={50} height={50} alt="Logo Yoshimyra" />
        <h1 className="text-2xl font-bold">Yoshimyra</h1>
      </LocalizedLink>

      <nav className="space-x-4">
        {navItems[locale].map(({ href, label }) => (
          <LocalizedLink key={href} href={href} className="hover:underline">
            {label}
          </LocalizedLink>
        ))}
        <LanguageSwitch />
      </nav>
    </header>
  );
}
