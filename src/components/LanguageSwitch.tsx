"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LanguageSwitch = ({ scrolled }: { scrolled?: boolean }) => {
  const pathname = usePathname();
  const isEnglish = pathname.includes("en");

  return (
    <Link
      href={
        isEnglish
          ? pathname === "/en"
            ? pathname.replace("en", "")
            : pathname.replace("/en", "")
          : `/en${pathname}`
      }
      className={clsx(
        "px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105",
        scrolled
          ? "text-slate-700 hover:bg-slate-100 hover:text-[#00C896]"
          : "text-white/90 hover:bg-white/10 hover:text-white",
        isEnglish ? "bg-white/10" : ""
      )}
    >
      {isEnglish ? "FR" : "EN"}
    </Link>
  );
};

export default LanguageSwitch;
