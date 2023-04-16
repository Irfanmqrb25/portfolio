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
          "flex flex-col px-2 py-1 text-black bg-[#E9E8E8] rounded-r-lg rounded-bl-lg"
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
