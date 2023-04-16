"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Lottie from "lottie-react";
import clsx from "clsx";
import sayHi from "../assets/sayHi.json";
import DarkButton from "./button/DarkButton";
import LightButton from "./button/LightButton";
import { useTheme } from "next-themes";

const SideBar = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const menus = [
    { title: "Profile", to: "/" },
    { title: "Socials", to: "/socials" },
    { title: "Projects", to: "/projects" },
    { title: "Blogs", to: "/blogs" },
    { title: "Guest", to: "/guestbook" },
  ];

  const handleIconSidebarClick = () => {
    setIsPlaying(true);
    setTimeout(() => {
      setIsPlaying(false);
    }, 2000);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* For Mobile only */}
      <div className="flex flex-col space-y-3 p-4 sm:hidden">
        <div className="flex justify-between items-center">
          <Image
            src="/assets/icon-sidebar.png"
            alt="..."
            width={50}
            height={50}
            className="rounded-sm"
            onClick={handleIconSidebarClick}
          />
          <div className="flex space-x-2">
            {theme === "dark" ? <LightButton /> : <DarkButton />}
          </div>
        </div>

        <ul
          className={clsx(
            "w-full flex flex-row xxxs:gap-1 sm:gap-0 xxs:justify-between text-sm xxxs:overflow-x-scroll rounded-md xxs:overflow-x-auto"
          )}
        >
          {menus.map((menu, i) => (
            <Link
              key={i}
              href={menu.to}
              className={`px-2 py-1 font-montserrat border border-[#d3d3d3] rounded-md hover:bg-[#F5F5F5] ${
                theme === "dark" && "hover:text-[#393646]"
              } ${
                menu.to === pathname && theme === "dark"
                  ? "bg-[#F5F5F5] text-black font-medium "
                  : ""
              }`}
            >
              {menu.title}
            </Link>
          ))}
        </ul>
      </div>

      {/* For Tablet to Desktop */}
      <div className="hidden md:flex md:flex-col md:space-y-2 md:items-center">
        <Image
          src="/assets/icon-sidebar.png"
          alt="..."
          width={70}
          height={70}
          className="rounded-sm cursor-pointer"
          onClick={handleIconSidebarClick}
        />
        <ul className="flex flex-col space-y-4 items-center">
          {menus.map((menu, i) => (
            <Link
              key={i}
              href={menu.to}
              className={`px-2 py-1 rounded-sm hover:bg-[#F5F5F5] ${
                theme === "dark" && "hover:text-[#393646] hover:bg-gray-400"
              } ${
                menu.to === pathname &&
                theme === "dark" &&
                "text-slate-900 bg-gray-400"
              } ${
                menu.to === pathname ? "bg-[#EEEEEE] scale-105 duration-75" : ""
              }`}
            >
              {menu.title}
            </Link>
          ))}
        </ul>
        <div className="mx-2 pt-7 w-full flex justify-center">
          {theme === "dark" ? <LightButton /> : <DarkButton />}
        </div>
      </div>
      {isPlaying && (
        <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-10">
          <div className="w-[300px] h-[300px] xxs:w-[350px] xxs:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-gray-800 rounded-[10%]">
            <Lottie animationData={sayHi} />
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
