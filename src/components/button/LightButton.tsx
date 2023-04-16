"use client";
import * as React from "react";
import blink from "../../assets/blinkDark.svg";
import Image from "next/image";
import { useTheme } from "next-themes";
import { MdLightMode } from "react-icons/md";

const LightButton = () => {
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
      className="button control font-montserrat tracking-wider"
      onClick={() => setTheme("Light")}
    >
      <span className="backdrop"></span>
      <span className="text py-[3px] px-2 flex items-center">
        <MdLightMode className="text-yellow-500" />
        Light
      </span>
    </button>
  );
};

export default LightButton;
