"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import LocalizedLink from "@/components/LocalizedLink";
import LanguageSwitch from "@/components/LanguageSwitch";
import clsx from "clsx";

export default function LocalizedHeader() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "fr";
  const [scrolled, setScrolled] = useState(false);
  const [logo, setLogo] = useState("/logo-transparent.png");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = {
    en: [
      { href: "/pricing", label: "Pricing" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/contact", label: "Contact" },
      { href: "/terms-of-service", label: "Terms & Conditions" },
    ],
    fr: [
      { href: "/pricing", label: "Tarifs" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/contact", label: "Contact" },
      { href: "/terms-of-service", label: "Conditions Générales" },
    ],
  };

  useEffect(() => {
    setLogo(scrolled ? "/logo.png" : "/logo-transparent.png");
  }, [scrolled]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition-colors duration-300",
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <LocalizedLink href="/" className="flex items-center space-x-2">
          <Image src={logo} width={50} height={50} alt="Logo Yoshimyra" />
          <h1
            className={clsx(
              "text-2xl font-bold",
              scrolled ? "text-[#1B4F72]" : "text-white"
            )}
          >
            Yoshimyra
          </h1>
        </LocalizedLink>

        <nav className="space-x-4">
          {navItems[locale].map(({ href, label }) => (
            <LocalizedLink
              key={href}
              href={href}
              className={clsx(
                "font-bold hover:underline",
                scrolled ? "text-[#1B4F72]" : "text-white"
              )}
            >
              {label}
            </LocalizedLink>
          ))}
          <LanguageSwitch scrolled={scrolled} />
        </nav>
      </div>
    </header>
  );
}
