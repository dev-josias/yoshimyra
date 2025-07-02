"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LanguageSwitch = () => {
  const pathname = usePathname();

  return pathname.includes("en") ? (
    <Link href="/" className="hover:underline text-sm">
      FR
    </Link>
  ) : (
    <Link href="/en" className="hover:underline text-sm">
      EN
    </Link>
  );
};

export default LanguageSwitch;
