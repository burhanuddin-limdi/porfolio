import gsap from "gsap";
import React, { useLayoutEffect } from "react";
import { Navbar } from "../../navbar/navbar";
import "./about.css";
import { HoverBox } from "./components/hoverBox/hoverBox";
import { QuestionLines } from "./components/question-lines/questionLines";
export const About: React.FC = () => {
  useLayoutEffect(() => {
    gsap.to("#about", 1, {
      y: 0,
      opacity: 1,
    });
  });

  return (
    <>
      <Navbar />
      <div className="w-screen h-screen overflow-clip" id="about">
        <div className="flex-col ml:flex-row hidden md:flex relative justify-center top-[30vh] place-items-center lg:space-x-12 w-screen z-20 ">
          <div className="relative">
            <p className="question">WHO IS BURHANUDDIN</p>
          </div>
          <HoverBox />
          <QuestionLines />
        </div>
        <div className="block md:hidden relative w-fit m-auto top-[20vh] ml-7 z-20 space-y-7">
          <p className="fredoka font-medium text-[3rem] w-fit">
            WHO IS BURHANUDDIN?
          </p>
          <div className="fredoka text-xl w-[70%] space-y-3">
            <p>
              I am a full stack web developer and a UI/UX designer, experienced
              in creating and maintaining web applications using a variety of
              technologies.
            </p>
            <p>
              I am also a team player and can work with designers, project
              managers and other developers to successfully execute projects.
            </p>
          </div>
        </div>
        <p className="absolute text-[14rem] text-[#151515] jetbrains font-medium z-[19] -left-[4rem] bottom-[4rem]">
          {"<About/>"}
        </p>
      </div>
    </>
  );
};
