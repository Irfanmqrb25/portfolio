import Link from "next/link";
import Image from "next/image";

interface Props {
  url: string;
}

const NextButton = ({ url }: Props) => {
  return (
    <Link
      href={url}
      className="py-1 flex flex-row mx-auto ml-0 md:ml-4 md:mt-4 text-sm text-white px-3 bg-slate-900 space-x-2 rounded-sm items-center font-montserrat"
    >
      <span>Next</span>
      <Image
        src="/assets/arrow-icon.svg"
        alt="arrow icon"
        width={20}
        height={20}
      />
    </Link>
  );
};

export default NextButton;
