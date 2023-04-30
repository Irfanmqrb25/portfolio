import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { MdOutlineNavigateNext } from "react-icons/md";

interface Props {
  url: string;
}

const NextButton = ({ url }: Props) => {
  return (
    <Link
      href={url}
      className={clsx(
        "py-1 flex flex-row mx-auto ml-0 md:ml-4 md:mt-4 text-sm text-white px-3 bg-[#A9907E] hover:scale-105 duration-150 hover:bg-[#675D50] rounded-sm items-center font-montserrat"
      )}
    >
      <span>Next</span>
      <MdOutlineNavigateNext className="text-lg" />
    </Link>
  );
};

export default NextButton;
