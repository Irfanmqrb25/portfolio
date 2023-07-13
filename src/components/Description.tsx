"use client";
import BadgeList from "./BadgeList";

const Description = () => {
  return (
    <div className="py-3 px-2 border border-[#BDCDD6] rounded-md space-y-6 font-montserrat mx-auto md:mx-4">
      <p className="font-medium xxs:text-lg">Frontend Dev | Student</p>
      <p className="leading-10 text-justify xxxs:text-sm xxs:text-base">
        As a React developer, i really like some tech stack of web developments
        like Next.js for the main framework and Tailwind or Bootstrap for
        styling UI components and i also use Typescript language for safer code.
      </p>
      <BadgeList />
    </div>
  );
};

export default Description;
