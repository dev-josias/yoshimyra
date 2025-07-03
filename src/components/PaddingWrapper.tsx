"use client";

import { usePathname } from "next/navigation";

export default function PaddingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/en";

  return <div className={isHome ? "" : "pt-[80px]"}>{children}</div>;
}
