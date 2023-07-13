"use client";
import clsx from "clsx";
import { useTheme } from "next-themes";

export default function Badge(props: any) {
  const { theme } = useTheme();
  return (
    <a
      {...props}
      target="_blank"
      className={clsx(
        "flex items-center gap-1 p-1 text-xs border rounded md:text-sm leading-4 no-underline",
        theme === "dark"
          ? "border-gray-400 bg-slate-800"
          : "bg-gray-300 border-gray-400"
      )}
    />
  );
}
