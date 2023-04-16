"use client";
import * as React from "react";
import ChatItem from "@/components/ChatItem";
import { useGuestbook } from "@/lib/useGuestbook";
import moment from "moment";
import ChattLoader from "./loader/chatt/ChattLoader";

const ChattItemList = () => {
  const { data, isLoading } = useGuestbook();
  return (
    <div className="flex flex-col space-y-5 rounded-sm p-2 w-[80%] pb-5">
      {isLoading ? (
        <ChattLoader />
      ) : (
        data
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
          ))
      )}
    </div>
  );
};

export default ChattItemList;
