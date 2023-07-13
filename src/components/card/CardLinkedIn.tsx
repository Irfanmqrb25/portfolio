"use client";
import * as React from "react";
import linkWhite from "../../assets/linkWhite-icon.svg";
import avatar from "../../assets/avatar.svg";
import linkedin from "../../assets/linkedin-icon.svg";
import followerWhite from "../../assets/follower-white-icon.svg";
import connectionIcon from "../../assets/connection-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import clsx from "clsx";

const CardLinkedIn = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={clsx(
        "custom-shadow w-[280px] xxs:w-[300px] h-[230px] flex flex-col bg-[#1F4290] border-4 border-[#000] hover:scale-105 duration-150",
        theme === "dark" && "border-[#333333] custom-shadow-dark"
      )}
    >
      <div className="flex flex-row px-5 py-2 space-x-32 xxs:space-x-36">
        <div className="flex flex-row items-center space-x-1">
          <Image src={linkedin} alt="Logo" className="w-[25px]" />
          <p className="font-semibold text-white font-montserrat">LinkedIn</p>
        </div>
        <Link
          href={"https://www.linkedin.com/in/irfan-muqorib-62822422b/"}
          target="_blank"
        >
          <Image
            src={linkWhite}
            alt="Link Icon"
            className="w-[19px] cursor-pointer"
          />
        </Link>
      </div>
      <div
        className={clsx(
          "flex flex-col border-t-4 border-[#000] px-3 py-5 space-y-1",
          theme === "dark" && "border-[#333333]"
        )}
      >
        <div className="flex flex-row items-center space-x-2">
          <Image src={avatar} alt="avatar" className="w-[40px]" />
          <p className="text-lg font-medium text-white font-montserrat">
            Irfan Muqorib
          </p>
        </div>
        <div className="flex flex-row items-center ml-12 space-x-2">
          <div className="flex flex-col items-center space-y-2">
            <Image src={followerWhite} alt="" className="w-[22px] " />
            <Image src={connectionIcon} alt="" className="w-[22px]" />
          </div>
          <div className="flex flex-col items-center space-y-2 text-white ml-14">
            <p className="font-semibold">6</p>
            <p className="font-semibold">6</p>
          </div>
          <div className="flex flex-col space-y-2 text-white">
            <p>Followers</p>
            <p>Connection</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLinkedIn;
