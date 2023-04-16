"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import NextjsIcon from "../assets/nextjs-icon.svg";
import BlackVersionNext from "../assets/nextjsblack-icon.svg";

const IconList = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-row gap-4 items-center">
      <Link href={"https://www.typescriptlang.org/"} target="_blank">
        <Image
          src="assets/typescript-icon.svg"
          alt=""
          width={28}
          height={28}
          className="hover:scale-105 duration-150 cursor-pointer"
        />
      </Link>
      <Link href={"https://react.dev/"} target="_blank">
        <Image
          src="/assets/react-icon.svg"
          alt=""
          width={30}
          height={30}
          className="hover:scale-105 duration-150 cursor-pointer"
        />
      </Link>
      <Link href={"https://nextjs.org/"} target="_blank">
        <Image
          src={theme === "dark" ? NextjsIcon : BlackVersionNext}
          alt=""
          width={52}
          height={52}
          className="hover:scale-110 duration-150 cursor-pointer text-gray-500"
        />
      </Link>
      <Link href={"https://tailwindcss.com/"} target="_blank">
        <Image
          src="/assets/tailwind-icon.svg"
          alt=""
          width={30}
          height={30}
          className="hover:scale-105 duration-150 cursor-pointer"
        />
      </Link>
      <Link href={"https://getbootstrap.com/"} target="_blank">
        <Image
          src="/assets/bootstrap-icon.svg"
          alt=""
          width={30}
          height={30}
          className="hover:scale-105 duration-150 cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default IconList;
