import React, { useLayoutEffect } from "react";
import "./projects.css";
import { Navbar } from "../../navbar/navbar";
import { gsap } from "gsap";
export const Projects: React.FC = () => {
  useLayoutEffect(() => {
    gsap.to("#projects", 1, {
      y: 0,
      opacity: 1,
    });
    gsap.to(".project", {
      duration: 1,
      delay: 1,
      y: 0,
      opacity: 1,
      stagger: 0.33,
    });
  });
  return (
    <>
      <Navbar />
      <div id="projects" className="w-screen h-screen overflow-clip">
        <div className="flex h-fit w-fit absolute inset-0 m-auto space-x-10 z-20 bottom-4 px-20">
          <div className="project border border-[#f5f5fa] rounded w-[340px] h-[250px] fredoka space-y-4 py-6 px-6 bg-[#101014] relative">
            <p className="font-medium text-xl">LIMFLIX - NETFLIX CLONE</p>
            <p className="text-[#ACABAB]">
              It is a web app which gives you information about the latest,
              trending and upcoming movies and tv shows. It is made using
              angular, typescript and TMDB API.
            </p>
            <div className="flex text-[#ff5c00] space-x-4 absolute bottom-6 left-6">
              <a
                className="link"
                href="https://limflix.netlify.app/"
                target="_blank"
              >
                <span className="letter">L</span>
                <span className="letter">i</span>
                <span className="letter">v</span>
                <span className="letter">e</span>
              </a>
              <a
                className="link"
                href="https://github.com/burhanuddin-limdi/Limflix_Movie_Website"
                target="_blank"
              >
                <span className="letter">C</span>
                <span className="letter">o</span>
                <span className="letter">d</span>
                <span className="letter">e</span>
              </a>
            </div>
          </div>
          <div className="project border border-[#f5f5fa] rounded w-[340px] h-[250px] fredoka space-y-4 py-6 px-6 bg-[#101014] relative">
            <p className="font-medium text-xl">CODEPENCIL</p>
            <p className="text-[#ACABAB]">
              Codepencil is basically a codepen clone. It is made using react,
              typescript, tailwindcss. I have used codemirror library to make
              the code editors.
            </p>
            <div className="flex text-[#ff5c00] space-x-4 absolute bottom-6 left-6">
              <a
                className="link"
                href="https://codepencil-project.netlify.app/"
                target="_blank"
              >
                <span className="letter">L</span>
                <span className="letter">i</span>
                <span className="letter">v</span>
                <span className="letter">e</span>
              </a>
              <a
                className="link"
                href="https://github.com/burhanuddin-limdi/Pencil-code"
                target="_blank"
              >
                <span className="letter">C</span>
                <span className="letter">o</span>
                <span className="letter">d</span>
                <span className="letter">e</span>
              </a>
            </div>
          </div>
          <div className="project border border-[#f5f5fa] rounded w-[340px] h-[250px] fredoka space-y-4 py-6 px-6 bg-[#101014] relative">
            <p className="font-medium text-xl">RESUME MAKER</p>
            <p className="text-[#ACABAB]">
              Resume maker is a React web application. Here, you enter your
              details and it sends them to NodeJS backend, which generates a pdf
              of your resume and sends it back.
            </p>
            <div className="flex text-[#ff5c00] space-x-4 absolute bottom-6 left-6">
              <a
                className="link"
                href="https://resume-maker-6skg.onrender.com/"
                target="_blank"
              >
                <span className="letter">L</span>
                <span className="letter">i</span>
                <span className="letter">v</span>
                <span className="letter">e</span>
              </a>
              <a
                className="link"
                href="https://github.com/burhanuddin-limdi/resume-maker-app"
                target="_blank"
              >
                <span className="letter">C</span>
                <span className="letter">o</span>
                <span className="letter">d</span>
                <span className="letter">e</span>
              </a>
            </div>
          </div>
        </div>
        <p className="absolute text-[14rem] text-[#151515] jetbrains font-medium z-[0] -left-[4rem] bottom-[3rem]">
          {"<Projects/>"}
        </p>
        <svg
          className="w-[97vw] absolute top-0 bottom-0 left-0 m-auto z-[19] project-line-in"
          id="projects-line"
          viewBox="0 0 1424 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 52H1397C1410.81 52 1422 40.8071 1422 27V27C1422 13.1929 1410.81 2 1397 2H0"
            stroke="#FF5C00"
            strokeWidth="3"
          />
        </svg>
      </div>
    </>
  );
};
