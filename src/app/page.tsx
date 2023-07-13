import Image from "next/image";
import NextButton from "@/components/button/NextButton";
import Description from "@/components/Description";

const ProfilePage = () => {
  return (
    <div className="flex flex-col gap-5 mx-4 mt-4 mb-10 md:mt-0 xs:gap-6 md:gap-7 xl:gap-2 2xl:gap-5">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col items-center mx-auto font-montserrat md:items-start md:mx-4">
          <h1 className="py-2 text-2xl font-bold xxs:text-3xl xl:text-4xl animate__animated animate__jackInTheBox">
            Hey, I&apos;m Irfan 👋🏼
          </h1>
          <Image
            src="/assets/profile.png"
            alt="..."
            width={260}
            height={260}
            className="xxs:w-[290px] xl:w-[310px] mt-2 rounded-sm"
          />
          <h3 className="mt-2 text-xl font-semibold xxs:text-2xl xl:text-2xl">
            Irfan Muqorib
          </h3>
          <p className="text-sm xxs:text-base text-[#BDCDD6]">@Irfanmqrbdev</p>
        </div>
        <Description />
      </div>
      <NextButton url={"/socials"} />
    </div>
  );
};

export default ProfilePage;
