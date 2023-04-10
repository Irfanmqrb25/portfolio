import Image from "next/image";
import Link from "next/link";

interface Props {
  name: string;
  followers: number;
  followings: number;
  posts: number;
}

const CardInstagram = ({ name, followers, followings, posts }: Props) => {
  return (
    <div className="custom-shadow flex flex-col w-[280px] xxs:w-[300px] h-[230px] bg-[#DCD1FF] border-4 border-[#000] hover:scale-105 duration-150">
      <div className="flex flex-row px-5 py-2 space-x-32 xxs:space-x-32">
        <div className="flex flex-row items-center space-x-1">
          <Image
            src="/assets/instagram-icon.svg"
            alt="Logo"
            width={25}
            height={25}
          />
          <p className="font-semibold font-montserrat">Instagram</p>
        </div>
        <Link
          href={"https://www.instagram.com/_irfanmqrb/?hl=id"}
          target="_blank"
        >
          <Image
            src={"/assets/link-icon.svg"}
            alt="Link Icon"
            width={19}
            height={19}
            className="cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex flex-col border-t-4 border-[#000] px-3 py-5 space-y-1">
        <div className="flex flex-row items-center space-x-2">
          <Image
            src={"/assets/avatar.svg"}
            alt="avatar"
            width={40}
            height={40}
          />
          <p className="font-montserrat font-medium text-lg">@{name}</p>
        </div>
        <div className="flex flex-row ml-12 space-x-2 items-center">
          <div className="flex flex-col space-y-2 items-center">
            <Image
              src={"/assets/follower-icon.svg"}
              alt=""
              width={22}
              height={22}
            />
            <Image
              src={"/assets/following-icon.svg"}
              alt=""
              width={22}
              height={22}
            />
            <Image
              src={"/assets/post-icon.svg"}
              alt=""
              width={22}
              height={22}
            />
          </div>
          <div className="flex flex-col ml-14 space-y-2 items-center">
            <p className="font-semibold">{followers}</p>
            <p className="font-semibold">{followings}</p>
            <p className="font-semibold">{posts}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <p>Followers</p>
            <p>Following</p>
            <p>Posts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInstagram;
