"use client";
import * as React from "react";
import ChatItem from "@/components/ChatItem";
import { useGuestbook } from "@/lib/useGuestbook";

interface Props {
  image: string;
}

const ChattItemList = ({ image }: Props) => {
  const { data } = useGuestbook();
  return (
    <div className="flex flex-col space-y-3 rounded-sm h-screen p-2 w-[80%]">
      {data
        ?.slice(0)
        .reverse()
        .map((data) => (
          <ChatItem
            key={data?.id}
            name={data?.created_by}
            chatt={data?.message}
            image={image}
          />
        ))}
    </div>
  );
};

export default ChattItemList;
