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
  const isHome = pathname === "/" || pathname === "/en";
  const [scrolled, setScrolled] = useState(false);
  const [logo, setLogo] = useState("/logo-transparent.png");

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

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
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md shadow-slate-200/50"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <LocalizedLink href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <Image
              src={logo}
              width={50}
              height={50}
              alt="Logo Yoshimyra"
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <h1
            className={clsx(
              "text-2xl font-bold transition-colors duration-300",
              scrolled ? "text-slate-900" : "text-white",
              "group-hover:text-[#00C896]"
            )}
          >
            Yoshimyra
          </h1>
        </LocalizedLink>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems[locale].map(({ href, label }) => (
            <LocalizedLink
              key={href}
              href={href}
              className={clsx(
                "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 relative group",
                scrolled
                  ? "text-slate-700 hover:text-[#00C896] hover:bg-slate-50"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              {label}
              <span
                className={clsx(
                  "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full",
                  scrolled ? "bg-[#00C896]" : "bg-white"
                )}
              ></span>
            </LocalizedLink>
          ))}
          <div className="ml-2 pl-2 border-l border-slate-200">
            <LanguageSwitch scrolled={scrolled} />
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className={clsx(
            "md:hidden p-2 rounded-lg transition-colors",
            scrolled
              ? "text-slate-700 hover:bg-slate-100"
              : "text-white hover:bg-white/10"
          )}
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
