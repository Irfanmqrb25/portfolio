"use client";
import reactCover from "../../assets/react-cover.jpg";
import cleanCodeCover from "../../assets/cleanCode-cover.jpg";
import CardBlog from "@/components/card/CardBlog";
import { Toaster } from "react-hot-toast";
import NextButton from "@/components/button/NextButton";

const BlogsPage = () => {
  const blogs = [
    {
      title: "Reasons why you should learn ReactJS",
      time: "Tuesday, April 4, 2023",
      desc: "React.js is a sought-after front-end JavaScript library due to its code reusability, performance, and supportive community. It's highly valued in the job market, making it a valuable skill to possess.",
      img: reactCover,
      url: "writing",
    },
    {
      title: "Clean code is Important for the long term",
      time: "Wednesday, April 5, 2023",
      desc: "Clean code is important because it improves software quality, reduces technical debt, and increases productivity. It makes code easier to read, maintain, and update, resulting in fewer errors.",
      img: cleanCodeCover,
      url: "writing",
    },
  ];

  return (
    <div className="flex flex-col mt-4 md:mt-0 mb-10 mx-4 gap-5 xs:gap-6 md:gap-7 xl:gap-2 2xl:gap-5">
      <div className="flex flex-col font-montserrat space-y-5 mx-auto items-center md:items-start md:mx-4">
        <h1 className="text-xl xxs:text-2xl xl:text-4xl font-bold py-2">
          Visit My Blog
        </h1>
        <div className="flex flex-col lg:flex-row flex-wrap gap-10 animate__animated animate__fadeInUp animate__faster">
          {blogs.map((blog, i) => (
            <CardBlog
              key={i}
              title={blog.title}
              time={blog.time}
              desc={blog.desc}
              img={blog.img}
              url={blog.url}
            />
          ))}
        </div>
      </div>
      <Toaster />
      <NextButton url={"/guestbook"} />
    </div>
  );
};

export default BlogsPage;
