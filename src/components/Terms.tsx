"use client";

import { usePathname } from "next/navigation";
import LocalizedLink from "@/components/LocalizedLink";

export default function TermsPage() {
  const pathname = usePathname();
  const isFr = !pathname?.startsWith("/en");

  return (
    <main className="max-w-3xl mx-auto py-16 px-4 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">
        {isFr ? "Conditions Générales d’Utilisation" : "Terms of Service"}
      </h1>

      <p className="mb-4">
        {isFr
          ? "Dernière mise à jour : 2 juillet 2025"
          : "Last updated: July 2, 2025"}
      </p>

      <p className="mb-4">
        {isFr ? (
          <>
            Bienvenue sur le site web de <strong>Yoshimyra</strong>, une
            entreprise immatriculée sous le nom <strong>Yoshimyra SARL</strong>,
            dont le siège social est basé à Rabat, Maroc. En accédant ou en
            utilisant nos services, vous acceptez ces conditions.
          </>
        ) : (
          <>
            Welcome to the official website of <strong>Yoshimyra</strong>, a
            registered company under the name <strong>Yoshimyra SARL</strong>,
            headquartered in Rabat, Morocco. By accessing or using our services,
            you agree to these terms.
          </>
        )}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {isFr ? "1. Présentation des services" : "1. Overview of Services"}
      </h2>
      <p className="mb-4">
        {isFr
          ? "Yoshimyra développe des applications web et mobiles, propose des outils SaaS innovants, et offre des services techniques liés à ses produits numériques."
          : "Yoshimyra develops web and mobile applications, offers innovative SaaS tools, and provides technical services related to its digital products."}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {isFr ? "2. Utilisation de nos services" : "2. Use of Our Services"}
      </h2>
      <p className="mb-4">
        {isFr
          ? "Vous acceptez d’utiliser nos produits conformément à la loi, dans le respect de nos droits d’auteur et ceux de tiers. Toute tentative de piratage, rétro-ingénierie ou utilisation abusive est strictement interdite."
          : "You agree to use our products in accordance with the law and respect our copyrights and those of third parties. Any attempt at hacking, reverse engineering, or misuse is strictly prohibited."}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {isFr ? "3. Paiement & facturation" : "3. Payment & Billing"}
      </h2>
      <p className="mb-4">
        {isFr
          ? "Les modalités de paiement sont affichées sur nos pages de produits. Tous les montants sont indiqués en EUR ou USD selon votre région."
          : "Payment terms are displayed on our product pages. All prices are shown in EUR or USD depending on your region."}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {isFr ? "4. Politique de remboursement" : "4. Refund Policy"}
      </h2>
      <p className="mb-4">
        {isFr ? (
          <>
            Consultez notre{" "}
            <LocalizedLink href="/refund-policy" className="underline">
              Politique de remboursement
            </LocalizedLink>{" "}
            pour plus de détails.
          </>
        ) : (
          <>
            Please refer to our{" "}
            <LocalizedLink href="/en/refund-policy" className="underline">
              Refund Policy
            </LocalizedLink>{" "}
            for more details.
          </>
        )}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {isFr ? "5. Propriété intellectuelle" : "5. Intellectual Property"}
      </h2>
      <p className="mb-4">
        {isFr
          ? "Tous les contenus, logos, produits et interfaces sont protégés. Aucune reproduction ou revente n’est autorisée sans notre accord."
          : "All content, logos, products, and interfaces are protected. Reproduction or resale without our consent is strictly prohibited."}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        {isFr ? "6. Modification des conditions" : "6. Changes to the Terms"}
      </h2>
      <p className="mb-4">
        {isFr
          ? "Yoshimyra se réserve le droit de mettre à jour ces conditions à tout moment. Les utilisateurs seront notifiés par e-mail ou via notre site."
          : "Yoshimyra reserves the right to update these terms at any time. Users will be notified via email or through our website."}
      </p>

      <p className="mt-8 text-sm">
        {isFr
          ? "Pour toute question, contactez-nous à "
          : "For any questions, please contact us at "}
        <a href="mailto:hello@yoshimyra.com" className="underline">
          hello@yoshimyra.com
        </a>
        .
      </p>
    </main>
  );
}
