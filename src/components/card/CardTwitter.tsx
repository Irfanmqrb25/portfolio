"use client";
import * as React from "react";
import linkIcon from "../../assets/link-icon.svg";
import avatar from "../../assets/avatar.svg";
import twitter from "../../assets/twitter-icon.svg";
import follower from "../../assets/follower-icon.svg";
import following from "../../assets/following-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import clsx from "clsx";

interface Props {
  name: string;
  username: string;
  followings: number;
  followers: number;
}

const CardTwitter = ({ name, username, followings, followers }: Props) => {
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
        "custom-shadow w-[280px] xxs:w-[300px] h-[230px] flex flex-col bg-[#D3FDF9] border-4 border-[#000] hover:scale-105 duration-150",
        theme === "dark" && "border-[#333333] custom-shadow-dark"
      )}
    >
      <div className="flex flex-row px-5 py-2 space-x-32 xxs:space-x-40">
        <div className="flex flex-row items-center space-x-1">
          <Image src={twitter} alt="Logo" className="w-[25px]" />
          <p
            className={clsx(
              "font-semibold font-montserrat",
              theme === "dark" && "text-slate-950"
            )}
          >
            Twitter
          </p>
        </div>
        <Link href={"https://twitter.com/irfanmqrb"} target="_blank">
          <Image
            src={linkIcon}
            alt="Link Icon"
            className="w-[19px] cursor-pointer"
          />
        </Link>
      </div>
      <div
        className={clsx(
          "flex flex-col border-t-4 border-[#000] px-3 py-5 space-y-2",
          theme === "dark" && "border-[#333333]"
        )}
      >
        <div className="flex flex-row items-center space-x-2">
          <Image src={avatar} alt="avatar" className="w-[40px]" />
          <div className="flex flex-col">
            <p
              className={clsx(
                "font-montserrat font-medium text-lg",
                theme === "dark" && "text-slate-950"
              )}
            >
              {name}
            </p>
            <p className="text-xs text-[#ced1d4]">@{username}</p>
          </div>
        </div>
        <div className="flex flex-row ml-12 space-x-2 items-center">
          <div className="flex flex-col space-y-2 items-center">
            <Image src={follower} alt="" className="w-[22px]" />
            <Image src={following} alt="" className="w-[22px]" />
          </div>
          <div
            className={clsx(
              "flex flex-col ml-14 space-y-2 items-center",
              theme === "dark" && "text-slate-950"
            )}
          >
            <p className="font-semibold">{followers}</p>
            <p className="font-semibold">{followings}</p>
          </div>
          <div
            className={clsx(
              "flex flex-col space-y-2",
              theme === "dark" && "text-slate-950"
            )}
          >
            <p>Followers</p>
            <p>Following</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTwitter;
