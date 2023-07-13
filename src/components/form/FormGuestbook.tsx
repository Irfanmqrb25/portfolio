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
      <div
        className={clsx(
          "flex justify-between w-full p-1 space-x-2 border rounded-sm",
          theme === "dark" ? "border-white" : "border-black"
        )}
      >
        <input
          type="text"
          placeholder="Your message..."
          className="w-full bg-transparent focus:outline-none placeholder:text-sm"
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
          "items-center rounded-sm bg-black text-white p-[11px] border-slate-800",
          theme === "dark" && "bg-white"
        )}
      >
        <IoMdSend className={theme === "dark" ? "text-black" : "text-white"} />
      </button>
      <Toaster />
    </form>
  );
};

export default FormGuestbook;
