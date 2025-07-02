"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LocalizedLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function LocalizedLink({
  href,
  children,
  className,
}: LocalizedLinkProps) {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const localizedHref = isEnglish
    ? `/en${href.startsWith("/") ? href : `/${href}`}`
    : href;

  return (
    <Link href={localizedHref} className={className}>
      {children}
    </Link>
  );
}
