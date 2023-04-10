import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";

interface Props {
  title: string;
  desc: string;
  img: any;
  stack: string;
  url: string;
}

const CardProject = ({ title, desc, img, stack, url }: Props) => {
  const notify = () => {
    toast.error("Sorry, code is under development 😖", {
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
      <div className="flex flex-col font-montserrat gap-3">
        <h1 className="font-semibold text-xl">{title}</h1>
        <p>{desc}</p>
      </div>
      <Image
        src={img}
        alt="cover"
        className="rounded-sm h-[200px] object-cover"
      />
      <p className="font-medium text-sm">Stack: {stack}</p>
      {url !== "develop" && (
        <Link
          href={url}
          target="_blank"
          className="flex items-center mx-auto ml-0 gap-1 px-2 py-1 bg-slate-900 rounded-sm"
        >
          <span className="text-white text-sm">Code</span>
          <Image
            src={"/assets/arrow-icon.svg"}
            alt="arrow icon"
            width={20}
            height={20}
          />
        </Link>
      )}
      {url === "develop" && (
        <button
          onClick={notify}
          className="flex items-center mx-auto ml-0 gap-1 px-2 py-1 bg-slate-900 rounded-sm"
        >
          <span className="text-white text-sm">Code</span>
          <Image
            src={"assets/arrow-icon.svg"}
            alt="arrow icon"
            width={20}
            height={20}
          />
        </button>
      )}
    </div>
  );
};
export default CardProject;
