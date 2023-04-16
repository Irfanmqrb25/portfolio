"use client";
import axios from "axios";
import * as React from "react";
import { Toaster, toast } from "react-hot-toast";
import { useGuestbook } from "@/lib/useGuestbook";
import { IoMdSend } from "react-icons/io";
import { useTheme } from "next-themes";
import clsx from "clsx";

interface Props {
  name: String;
}

const FormGuestbook = ({ name }: Props) => {
  const [message, setMessage] = React.useState("");
  const { theme } = useTheme();

  const { mutate } = useGuestbook();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!message) {
      toast.error("Please input message", {
        duration: 1500,
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
      return;
    }

    if (message.length > 255) {
      toast.error("Message maximum limit of 255 characters", {
        duration: 1500,
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
      return;
    }

    try {
      await axios.post("/api/guestbook", {
        created_by: name,
        message,
      });
      mutate();
      setMessage("");
      toast.success("Message sent", {
        duration: 1500,
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
    } catch (error: any) {
      console.log("error: ", error.messgae);
    }
  };

  const handleClearMessage = () => {
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full space-x-2"
    >
      <div className="border flex p-1 rounded-sm space-x-2 justify-between w-full">
        <input
          type="text"
          placeholder="Your message..."
          className="focus:outline-none bg-transparent placeholder:text-sm w-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <span
          onClick={handleClearMessage}
          className={clsx(
            "text-gray-600 cursor-pointer text-lg px-1",
            theme === "dark" && "text-white"
          )}
        >
          x
        </span>
      </div>
      <button
        type="submit"
        className={clsx(
          "flex items-center rounded-sm bg-black text-white px-3 py-[6px]",
          theme === "dark" && "bg-gray-500"
        )}
      >
        <IoMdSend className="mr-1" />
        Send
      </button>
      <Toaster />
    </form>
  );
};

export default FormGuestbook;
