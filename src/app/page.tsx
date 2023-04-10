import Image from "next/image";
import Link from "next/link";
import NextButton from "@/components/button/NextButton";
import Head from "next/head";

const ProfilePage = () => {
  return (
    <div className="flex flex-col mt-4 md:mt-0 mb-10 mx-4 gap-5 xs:gap-6 md:gap-7 xl:gap-2 2xl:gap-5">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col font-montserrat mx-auto items-center md:items-start md:mx-4">
          <h1 className="text-2xl xxs:text-3xl xl:text-4xl font-bold py-2 animate__animated animate__jackInTheBox">
            Hello Everyone 👋🏼
          </h1>
          <Image
            src="/assets/profile.png"
            alt="..."
            width={260}
            height={260}
            className="xxs:w-[290px] xl:w-[310px] mt-2 rounded-sm"
          />
          <h3 className="text-xl xxs:text-2xl xl:text-2xl font-semibold mt-2">
            Irfan Muqorib
          </h3>
          <p className="text-sm xxs:text-base text-[#BDCDD6]">@Irfanmqrbdev</p>
        </div>
        <div className="py-3 p-2 border border-[#BDCDD6] rounded-md space-y-6 font-montserrat mx-auto md:mx-4">
          <p className="xxs:text-lg font-medium">
            I&apos;m Irfan, a react developer and I&apos;m a student at Gunadrma
            University.
          </p>
          <p className="xxxs:text-sm xxs:text-base text-justify">
            As a React developer, of course I am very good at using React. I
            have developed several web applications using this technology and
            supported by other technologies such as next js, tailwaind css,
            bootstrap, typescript and others.
          </p>
          <div className="flex flex-row gap-4 items-center">
            <Link href={"https://www.typescriptlang.org/"} target="_blank">
              <Image
                src="/assets/typescript-icon.svg"
                alt=""
                width={28}
                height={28}
                className="hover:scale-105 duration-150 cursor-pointer"
              />
            </Link>
            <Link href={"https://react.dev/"} target="_blank">
              <Image
                src="/assets/react-icon.svg"
                alt=""
                width={30}
                height={30}
                className="hover:scale-105 duration-150 cursor-pointer"
              />
            </Link>
            <Link href={"https://nextjs.org/"} target="_blank">
              <Image
                src="/assets/nextjs-icon.svg"
                alt=""
                width={52}
                height={52}
                className="hover:scale-110 duration-150 cursor-pointer"
              />
            </Link>
            <Link href={"https://tailwindcss.com/"} target="_blank">
              <Image
                src="/assets/tailwind-icon.svg"
                alt=""
                width={30}
                height={30}
                className="hover:scale-105 duration-150 cursor-pointer"
              />
            </Link>
            <Link href={"https://getbootstrap.com/"} target="_blank">
              <Image
                src="/assets/bootstrap-icon.svg"
                alt=""
                width={30}
                height={30}
                className="hover:scale-105 duration-150 cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
      <NextButton url={"/socials"} />
    </div>
  );
};

export default ProfilePage;
