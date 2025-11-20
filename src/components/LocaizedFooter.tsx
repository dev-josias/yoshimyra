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
    <footer className="relative py-12 px-6 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company info */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Yoshimyra</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {locale === "fr"
                ? "Solutions digitales intelligentes et inspirantes pour transformer vos idées en réalité."
                : "Smart and inspiring digital solutions to turn your ideas into reality."}
            </p>
          </div>

          {/* Legal links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">
              {locale === "fr" ? "Légal" : "Legal"}
            </h4>
            <ul className="space-y-2">
              {legalLinks[locale].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-600 hover:text-[#00C896] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Verification */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">
              {locale === "fr" ? "Vérification" : "Verification"}
            </h4>
            <div className="space-y-2 text-sm text-slate-600">
              <p>
                <span className="font-medium">D-U-N-S Number:</span>{" "}
                <strong className="text-slate-900">854869663</strong>
              </p>
              <a
                href="https://www.dnb.com/business-directory/company-profiles.yoshimyra.be5f769bd170fc72eae7ecf9b853c61e.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00C896] hover:underline inline-flex items-center gap-1"
              >
                {locale === "fr" ? "Voir sur D&B" : "View on D&B"}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Yoshimyra.{" "}
            {locale === "fr" ? "Tous droits réservés." : "All rights reserved."}
          </p>
          <p className="text-sm text-slate-500">
            {locale === "fr"
              ? "Fait avec ❤️ pour vos projets digitaux"
              : "Made with ❤️ for your digital projects"}
          </p>
        </div>
      </div>
    </footer>
  );
}
