import gsap from "gsap";
import React, { useLayoutEffect } from "react";
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
    <div className="w-screen h-screen" id="about">
      <div className="flex relative justify-center top-[30vh] place-items-center space-x-12 w-screen">
        <div className="relative">
          <p className="question">WHO IS BURHANUDDIN</p>
        </div>
        <HoverBox />
        <QuestionLines />
      </div>
    </div>
  );
};
