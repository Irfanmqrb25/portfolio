"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import clsx from "clsx";

interface Props {
  name?: string;
  followers?: number;
  followings?: number;
  posts?: number;
}

const CardInstagram = ({ name, followers, followings, posts }: Props) => {
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
        "custom-shadow flex flex-col w-[280px] xxs:w-[300px] h-[230px] bg-[#DCD1FF] border-4 border-[#000] hover:scale-105 duration-150",
        theme === "dark" && "border-[#333333] custom-shadow-dark"
      )}
    >
      <div className="flex flex-row px-5 py-2 space-x-32 xxs:space-x-32">
        <div className="flex flex-row items-center space-x-1">
          <Image
            src="/assets/instagram-icon.svg"
            alt="Logo"
            width={25}
            height={25}
          />
          <p
            className={clsx(
              "font-semibold font-montserrat",
              theme === "dark" && "text-slate-950"
            )}
          >
            Instagram
          </p>
        </div>
        <Link
          href={"https://www.instagram.com/_irfanmqrb/?hl=id"}
          target="_blank"
        >
          <Image
            src={"/assets/link-icon.svg"}
            alt="Link Icon"
            width={19}
            height={19}
            className="cursor-pointer"
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
          <Image
            src={"/assets/avatar.svg"}
            alt="avatar"
            width={40}
            height={40}
          />
          <p
            className={clsx(
              "font-montserrat font-medium text-lg",
              theme === "dark" && "text-slate-950"
            )}
          >
            @{name}
          </p>
        </div>
        <div className="flex flex-row ml-12 space-x-2 items-center">
          <div className="flex flex-col space-y-2 items-center">
            <Image
              src={"/assets/follower-icon.svg"}
              alt=""
              width={22}
              height={22}
            />
            <Image
              src={"/assets/following-icon.svg"}
              alt=""
              width={22}
              height={22}
            />
            <Image
              src={"/assets/post-icon.svg"}
              alt=""
              width={22}
              height={22}
            />
          </div>
          <div
            className={clsx(
              "flex flex-col ml-14 space-y-2 items-center",
              theme === "dark" && "text-slate-950"
            )}
          >
            <p className="font-semibold">{followers}</p>
            <p className="font-semibold">{followings}</p>
            <p className="font-semibold">{posts}</p>
          </div>
          <div
            className={clsx(
              "flex flex-col space-y-2",
              theme === "dark" && "text-slate-950"
            )}
          >
            <p>Followers</p>
            <p>Following</p>
            <p>Posts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInstagram;
