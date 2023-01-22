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
      <div className="w-screen h-screen" id="about">
        <div className="flex relative justify-center top-[30vh] place-items-center space-x-12 w-screen z-20">
          <div className="relative">
            <p className="question">WHO IS BURHANUDDIN</p>
          </div>
          <HoverBox />
          <QuestionLines />
        </div>
        <p className="absolute text-[14rem] text-[#151515] jetbrains font-medium z-[19] -left-[4rem] bottom-[4rem]">
          {"<About/>"}
        </p>
      </div>
    </>
  );
};
