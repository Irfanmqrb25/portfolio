"use client";
import * as React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import clsx from "clsx";

interface Props {
  name: string;
  chatt: string;
  image: string;
  time: string;
}

const ChatItem = ({ name, chatt, image, time }: Props) => {
  const [mounted, setMounted] = React.useState(false);
  const { theme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full flex space-x-2 text-sm">
      <div className="mt-1">
        <Image
          src={image}
          alt="..."
          width={25}
          height={25}
          className="rounded-full min-w-[25px]"
        />
      </div>
      <div
        className={clsx(
          "flex flex-col px-2 py-1 bg-slate-100 rounded-r-lg rounded-bl-lg",
          theme === "dark" && "bg-[#2C3333]"
        )}
      >
        <p className="font-medium">{name}</p>
        <div className="flex space-x-2 items-center justify-between">
          <p>{chatt}</p>
          <span className="tracking-wider text-[10px] mt-2">{time}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
