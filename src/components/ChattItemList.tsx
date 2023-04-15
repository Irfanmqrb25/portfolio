"use client";
import * as React from "react";
import ChatItem from "@/components/ChatItem";
import { useGuestbook } from "@/lib/useGuestbook";
import moment from "moment";

const ChattItemList = () => {
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
            image={data?.image}
            time={moment(data?.created_at).format("HH.mm")}
          />
        ))}
    </div>
  );
};

export default ChattItemList;
