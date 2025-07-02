"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LanguageSwitch = () => {
  const pathname = usePathname();

  return pathname.includes("en") ? (
    <Link
      href={
        pathname === "/en"
          ? pathname.replace("en", "")
          : pathname.replace("/en", "")
      }
      className="hover:underline text-sm"
    >
      FR
    </Link>
  ) : (
    <Link href={`/en${pathname}`} className="hover:underline text-sm">
      EN
    </Link>
  );
};

export default LanguageSwitch;
