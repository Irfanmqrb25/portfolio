import linkIcon from "../../assets/link-icon.svg";
import avatar from "../../assets/avatar.svg";
import twitter from "../../assets/twitter-icon.svg";
import follower from "../../assets/follower-icon.svg";
import following from "../../assets/following-icon.svg";
import Link from "next/link";
import Image from "next/image";

interface Props {
  name: string;
  username: string;
  followings: number;
  followers: number;
}

const CardTwitter = ({ name, username, followings, followers }: Props) => {
  return (
    <div className="custom-shadow w-[280px] xxs:w-[300px] h-[230px] flex flex-col bg-[#D3FDF9] border-4 border-[#000] hover:scale-105 duration-150">
      <div className="flex flex-row px-5 py-2 space-x-32 xxs:space-x-40">
        <div className="flex flex-row items-center space-x-1">
          <Image src={twitter} alt="Logo" className="w-[25px]" />
          <p className="font-semibold font-montserrat">Twitter</p>
        </div>
        <Link href={"https://twitter.com/irfanmqrb"} target="_blank">
          <Image
            src={linkIcon}
            alt="Link Icon"
            className="w-[19px] cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex flex-col border-t-4 border-[#000] px-3 py-5 space-y-2">
        <div className="flex flex-row items-center space-x-2">
          <Image src={avatar} alt="avatar" className="w-[40px]" />
          <div className="flex flex-col">
            <p className="font-montserrat font-medium text-lg">{name}</p>
            <p className="text-xs text-[#ced1d4]">@{username}</p>
          </div>
        </div>
        <div className="flex flex-row ml-12 space-x-2 items-center">
          <div className="flex flex-col space-y-2 items-center">
            <Image src={follower} alt="" className="w-[22px]" />
            <Image src={following} alt="" className="w-[22px]" />
          </div>
          <div className="flex flex-col ml-14 space-y-2 items-center">
            <p className="font-semibold">{followers}</p>
            <p className="font-semibold">{followings}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <p>Followers</p>
            <p>Following</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTwitter;
