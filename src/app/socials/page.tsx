"use client";
import * as React from "react";
import CardInstagram from "@/components/card/CardInstagram";
import CardGithub from "@/components/card/CardGithub";
import CardLinkedIn from "@/components/card/CardLinkedIn";
import CardTwitter from "@/components/card/CardTwitter";
import toast, { Toaster } from "react-hot-toast";
import FormMessage from "@/components/form/FormMessage";
import NextButton from "@/components/button/NextButton";
import {
  fetchInstagram,
  fetchGithub,
  fetchTwitter,
} from "@/services/socialMedia";
import Image from "next/image";
import SocialsLoader from "@/components/loader/card/SocialsLoader";
import clsx from "clsx";

const SocialsPage = () => {
  const myEmail = "irfanmqrbdev@gmail.com";
  const [githubData, setGithubData] = React.useState<UserGithub>();
  const [githubStars, setGithubStars] = React.useState<number>(0);
  const [instagramData, setInstagramData] = React.useState<any>();
  const [twitterData, setTwitterData] = React.useState<UserTwitter>();
  const [loading, setLoading] = React.useState(true);

  function copyToClipboard() {
    navigator.clipboard.writeText(myEmail);
    toast.success("Email copied to clipboard", {
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
  }

  React.useEffect(() => {
    const fetchInstagramData = async () => {
      const data: any = await fetchInstagram();
      setInstagramData(data?.data?.data?.user);
      setLoading(false);
    };
    fetchInstagramData();
  }, []);

  React.useEffect(() => {
    const fetchGithubData = async () => {
      const github = await fetchGithub();
      setGithubData(github?.data?.response);
      setGithubStars(github?.data?.stars);
      setLoading(false);
    };
    fetchGithubData();
  }, []);

  React.useEffect(() => {
    const fetchTwitterData = async () => {
      const data = await fetchTwitter();
      setTwitterData(data?.data?.data?.user?.result?.legacy);
      setLoading(false);
    };
    fetchTwitterData();
  }, []);

  return (
    <div className="flex flex-col mt-4 md:mt-0 mb-10 mx-4 gap-5 xs:gap-6 md:gap-7 xl:gap-2 2xl:gap-5">
      <div className="flex flex-col font-montserrat space-y-5 mx-auto items-center md:items-start md:mx-4">
        <h1 className="text-xl xxs:text-2xl xl:text-4xl font-bold py-2">
          Visit My Social Media
        </h1>
        {loading ? (
          <div className="flex flex-col md:flex-row flex-wrap gap-14">
            <SocialsLoader />
            <SocialsLoader />
            <SocialsLoader />
            <SocialsLoader />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row flex-wrap gap-14 animate__animated animate__fadeInUp animate__faster">
            <CardInstagram
              name={instagramData?.username}
              followings={instagramData?.edge_follow?.count}
              followers={instagramData?.edge_followed_by?.count}
              posts={instagramData?.edge_media_collections?.count}
            />
            <CardLinkedIn />
            <CardTwitter
              name={twitterData?.name!}
              username={twitterData?.screen_name!}
              followers={twitterData?.followers_count!}
              followings={twitterData?.friends_count!}
            />
            <CardGithub
              name={githubData?.name!}
              username={githubData?.login!}
              repos={githubData?.public_repos!}
              stars={githubStars}
              follower={githubData?.followers!}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col font-montserrat mt-10 space-y-5 mx-auto items-center md:items-start md:mx-4">
        <h1 className="text-xl xxs:text-2xl xl:text-4xl font-bold py-2">
          -Or Contact Me-
        </h1>
        <div className="flex flex-col">
          <label className="font-montserrat font-medium font-lg">Email</label>
          <div className="flex gap-2 font-montserrat">
            <input
              className="border bg-transparent border-[#BDCDD6] w-[245px] px-2 py-1 rounded-sm"
              type="email"
              value={myEmail}
              readOnly
              disabled
            />
            <button
              onClick={copyToClipboard}
              title="copy"
              className={clsx(
                "px-2 bg-[#454545] text-white hover:bg-[#383838] rounded-sm"
              )}
            >
              <Image
                src={"/assets/copy-icon.svg"}
                alt="copy icon"
                width={18}
                height={18}
              />
            </button>
          </div>
        </div>
        <FormMessage />
      </div>
      <Toaster />
      <NextButton url={"/projects"} />
    </div>
  );
};

export default SocialsPage;
