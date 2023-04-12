"use client";
import CardProject from "@/components/card/CardProject";
import NextButton from "@/components/button/NextButton";
import { Toaster } from "react-hot-toast";
import shimami from "../../assets/shimami-app.png";
import notesApp from "../../assets/notes-app.png";
import todoApp from "../../assets/todo-app.jpg";
import pollsioApp from "../../assets/pollsio-app.png";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Shimami NFT",
      img: shimami,
      desc: "A web-based NFT landing page that allows users to buy and sell unique digital assets.",
      stack: "ReactJS, Tailwind CSS",
      url: "https://github.com/Irfanmqrb25/shimami-nfts-landing-page",
    },
    {
      title: "Notes App",
      img: notesApp,
      desc: "A web application for you to make a sticky notes.",
      stack: "React JS",
      url: "https://github.com/Irfanmqrb25/submission-react-note-app",
    },
    {
      title: "Todo App",
      img: todoApp,
      desc: "A simple web application for creating todos to keep your plans more organized.",
      stack: "ReactJS, ExpressJS, MongoDB",
      url: "develop",
    },
    {
      title: "Polls Io",
      img: pollsioApp,
      desc: "A voting application that makes it easy for you to vote in a large number of participants.",
      stack: "ReactJS, ExpressJS, MongoDB, Tailwind CSS",
      url: "develop",
    },
  ];

  return (
    <div className="flex flex-col mt-4 md:mt-0 mb-10 mx-4 gap-5 xs:gap-6 md:gap-7 xl:gap-2 2xl:gap-5">
      <div className="flex flex-col font-montserrat space-y-5 mx-auto items-center md:items-start md:mx-4">
        <h1 className="text-xl xxs:text-2xl xl:text-4xl font-bold py-2">
          My Projects
        </h1>
        <div className="flex flex-col lg:flex-row flex-wrap gap-10 animate__animated animate__fadeInUp animate__faster">
          {projects.map((project, i) => (
            <CardProject
              key={i}
              title={project.title}
              desc={project.desc}
              img={project.img}
              stack={project.stack}
              url={project.url}
            />
          ))}
        </div>
      </div>
      <Toaster />
      <NextButton url={"/blogs"} />
    </div>
  );
};

export default ProjectsPage;
