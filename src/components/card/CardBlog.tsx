import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import clsx from "clsx";

interface Props {
  title: string;
  desc: string;
  img: any;
  time: string;
  url: string;
}

const CardBlog = ({ title, desc, img, time, url }: Props) => {
  const notify = () => {
    toast.error("Sorry, the blogs in writing 😖", {
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
  };

  return (
    <div className="flex flex-col px-2 py-3 border border-[#BDCDD6] gap-2 lg:w-[340px] 2xl:w-[400px] rounded-sm hover:scale-105 duration-150">
      <Image
        src={img}
        alt="cover"
        className="rounded-sm h-[200px] object-cover"
      />
      <div className="flex flex-col gap-3 font-montserrat">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-slate-400 font-sm text-xs">{time}</p>
        <p className="text-justify text-sm">{desc}</p>
      </div>
      {url !== "writing" && (
        <Link
          href={url}
          target="_blank"
          className={clsx(
            "flex items-center mx-auto ml-0 gap-1 px-2 py-1 bg-blue-500 rounded-sm"
          )}
        >
          <span className="text-white text-sm">Read More</span>
          <Image
            width={20}
            height={20}
            src={"/assets/arrow-icon.svg"}
            alt="arrow icon"
          />
        </Link>
      )}
      {url === "writing" && (
        <button
          onClick={notify}
          className={clsx(
            "flex items-center mx-auto ml-0 gap-1 px-2 py-1 bg-blue-500 rounded-sm"
          )}
        >
          <span className="text-white text-xs">Read More</span>
          <Image
            width={18}
            height={18}
            src={"/assets/arrow-icon.svg"}
            alt="arrow icon"
          />
        </button>
      )}
    </div>
  );
};

export default CardBlog;
