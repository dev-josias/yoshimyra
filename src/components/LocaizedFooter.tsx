"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LocalizedFooter() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "fr";

  const legalLinks = {
    en: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms-of-service", label: "Terms & Conditions" },
      { href: "/refund-policy", label: "Refund Policy" },
    ],
    fr: [
      { href: "/privacy-policy", label: "Politique de confidentialité" },
      { href: "/terms-of-service", label: "Conditions générales" },
      { href: "/refund-policy", label: "Politique de remboursement" },
    ],
  };

  return (
    <footer className="py-6 border-t text-center text-sm text-gray-500 bg-white space-y-2">
      <div>© {new Date().getFullYear()} Yoshimyra. All rights reserved.</div>

      <div className="flex justify-center flex-wrap items-center gap-4">
        {legalLinks[locale].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="underline hover:text-black transition"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex justify-center items-center space-x-2">
        <span className="font-medium">
          D-U-N-S Number: <strong>854869663</strong>
        </span>
        <a
          href="https://www.dnb.com/business-directory/company-profiles.yoshimyra.be5f769bd170fc72eae7ecf9b853c61e.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-black transition"
        >
          View on D&B
        </a>
      </div>
    </footer>
  );
}
