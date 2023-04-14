"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Lottie from "lottie-react";
import clsx from "clsx";
import sayHi from "../assets/sayHi.json";

const SideBar = () => {
  const menus = [
    { title: "Profile", to: "/" },
    { title: "Socials", to: "/socials" },
    { title: "Projects", to: "/projects" },
    { title: "Blogs", to: "/blogs" },
    { title: "Guestbook", to: "/guestbook" },
  ];

  const [isPlaying, setIsPlaying] = useState(false);

  const pathname = usePathname();

  const handleIconSidebarClick = () => {
    setIsPlaying(true);
    setTimeout(() => {
      setIsPlaying(false);
    }, 2000);
  };

  return (
    <>
      <div className="w-screen flex flex-row p-4 space-x-3 xs:space-x-5 items-center xs:px-5 xs:py-4 md:hidden">
        <Image
          src="/assets/icon-sidebar.png"
          alt="..."
          width={50}
          height={50}
          className="rounded-sm"
          onClick={handleIconSidebarClick}
        />
        <ul
          className={clsx(
            "w-full flex flex-row xxxs:gap-1 sm:gap-0 xxs:justify-between text-sm xxxs:overflow-x-scroll xxs:overflow-x-auto"
          )}
        >
          {menus.map((menu, i) => (
            <Link
              key={i}
              href={menu.to}
              className={`px-2 py-1 font-montserrat border border-[#d3d3d3] rounded-2xl hover:bg-[#F5F5F5] ${
                menu.to === pathname ? "bg-[#F5F5F5] font-medium" : ""
              }`}
            >
              {menu.title}
            </Link>
          ))}
        </ul>
      </div>

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
                menu.to === pathname ? "bg-[#F5F5F5] scale-105 duration-75" : ""
              }`}
            >
              {menu.title}
            </Link>
          ))}
        </ul>
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
