"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LanguageSwitch = ({ scrolled }: { scrolled?: boolean }) => {
  const pathname = usePathname();

  return pathname.includes("en") ? (
    <Link
      href={
        pathname === "/en"
          ? pathname.replace("en", "")
          : pathname.replace("/en", "")
      }
      className={clsx(
        "underline text-sm",
        scrolled ? "text-black" : "text-white"
      )}
    >
      EN
    </Link>
  ) : (
    <Link
      href={`/en${pathname}`}
      className={clsx(
        "underline text-sm",
        scrolled ? "text-black" : "text-white"
      )}
    >
      FR
    </Link>
  );
};

export default LanguageSwitch;
