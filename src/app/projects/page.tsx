"use client";
import CardProject from "@/components/card/CardProject";
import NextButton from "@/components/button/NextButton";
import { Toaster } from "react-hot-toast";
import { projects } from "@/utils/data";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col mt-4 md:mt-0 mb-10 mx-4 gap-5 xs:gap-6 md:gap-7 xl:gap-2 2xl:gap-5 xl:w-[750px] 2xl:w-full">
      <div className="flex flex-col font-montserrat space-y-5 mx-auto items-center md:items-start md:mx-4 xl:mr-0">
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
              demoUrl={project.demoUrl || null || undefined}
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
