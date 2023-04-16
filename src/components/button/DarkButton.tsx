"use client";
import * as React from "react";
import Image from "next/image";
import blinkLight from "../../assets/blinkLight.svg";
import { useTheme } from "next-themes";
import { MdDarkMode } from "react-icons/md";

const DarkButton = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme("dark")}
      className="button dark control font-montserrat tracking-wider"
    >
      <span className="backdrop"></span>
      <span className="text py-[3px] px-2 flex items-center">
        <MdDarkMode />
        Dark
      </span>
    </button>
  );
};

export default DarkButton;
