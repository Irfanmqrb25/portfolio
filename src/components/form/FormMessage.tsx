"use client";
import * as React from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import clsx from "clsx";

const FormMessage = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //validate input form
    if (!name || !email || !message) {
      toast.error("All fields must be filled", {
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

    setIsLoading(true);

    //post data
    try {
      await axios.post("/api/message", {
        name,
        email,
        message,
      });
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message has been sent", {
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
      console.error("Terjadi kesalahan:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-3 lg:flex-row">
        <div className="flex flex-col">
          <label className="font-montserrat font-medium font-lg">
            Your Name
          </label>
          <input
            className="border bg-transparent border-[#BDCDD6] w-[285px] px-2 py-1 rounded-sm"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="font-montserrat font-medium font-lg">
            Your Email
          </label>
          <input
            className="border border-[#BDCDD6] bg-transparent w-[285px] px-2 py-1 rounded-sm"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <textarea
        placeholder="Type your message here..."
        className="h-36 bg-transparent border border-[#BDCDD6] px-2 py-1 rounded-sm placeholder:text-sm placeholder:tracking-wider"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        disabled={isLoading}
        className={clsx(
          "bg-[#454545] text-white hover:bg-[#383838] p-2 mx-auto text-sm rounded-sm"
        )}
      >
        {isLoading ? (
          <svg
            aria-hidden="true"
            className="inline w-[101px] h-5 text-gray-200 animate-spin dark:text-gray-600 fill-white"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
};

export default FormMessage;
