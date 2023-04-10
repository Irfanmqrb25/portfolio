import linkWhite from "../../assets/linkWhite-icon.svg";
import avatar from "../../assets/avatar.svg";
import linkedin from "../../assets/linkedin-icon.svg";
import followerWhite from "../../assets/follower-white-icon.svg";
import connectionIcon from "../../assets/connection-icon.svg";
import Link from "next/link";
import Image from "next/image";

const CardLinkedIn = () => {
  return (
    <div className="custom-shadow w-[280px] xxs:w-[300px] h-[230px] flex flex-col bg-[#1F4290] border-4 border-[#000] hover:scale-105 duration-150">
      <div className="flex flex-row px-5 py-2 space-x-32 xxs:space-x-36">
        <div className="flex flex-row items-center space-x-1">
          <Image src={linkedin} alt="Logo" className="w-[25px]" />
          <p className="font-semibold font-montserrat text-white">LinkedIn</p>
        </div>
        <Link
          href={"https://www.linkedin.com/in/irfan-muqorib-62822422b/"}
          target="_blank"
        >
          <Image
            src={linkWhite}
            alt="Link Icon"
            className="w-[19px] cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex flex-col border-t-4 border-[#000] px-3 py-5 space-y-1">
        <div className="flex flex-row items-center space-x-2">
          <Image src={avatar} alt="avatar" className="w-[40px]" />
          <p className="font-montserrat font-medium text-lg text-white">
            Irfan Muqorib
          </p>
        </div>
        <div className="flex flex-row ml-12 space-x-2 items-center">
          <div className="flex flex-col space-y-2 items-center">
            <Image src={followerWhite} alt="" className="w-[22px] " />
            <Image src={connectionIcon} alt="" className="w-[22px]" />
          </div>
          <div className="flex flex-col ml-14 space-y-2 items-center text-white">
            <p className="font-semibold">3</p>
            <p className="font-semibold">2</p>
          </div>
          <div className="flex flex-col space-y-2 text-white">
            <p>Followers</p>
            <p>Connection</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLinkedIn;
