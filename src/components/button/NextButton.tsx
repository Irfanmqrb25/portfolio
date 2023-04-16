"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface Props {
  url: string;
}

const NextButton = ({ url }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Link
      href={url}
      className={clsx(
        "py-1 flex flex-row mx-auto ml-0 md:ml-4 md:mt-4 text-sm text-white px-3 bg-slate-800 hover:scale-105 duration-150 hover:bg-slate-900 space-x-2 rounded-sm items-center font-montserrat",
        theme === "dark" && "bg-gray-400 hover:bg-gray-600 text-white"
      )}
    >
      <span>Next</span>
      <Image
        src="/assets/arrow-icon.svg"
        alt="arrow icon"
        width={20}
        height={20}
      />
    </Link>
  );
};

export default NextButton;
