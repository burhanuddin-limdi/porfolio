import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import "./intro.css";
import { useNavigate } from "react-router-dom";

export const Intro: React.FC = () => {
  const navigate = useNavigate();
  const navigateToAbout = () => {
    navigate("/about");
  };
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    })
      .to(".mid-circle", {
        duration: 0.5,
        top: 0,
        delay: 1,
      })
      .to(".arrow-tail", {
        width: "100vw",
        duration: 0.5,
      })
      .to(".center-circle", {
        duration: 1,
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
        onComplete: navigateToAbout,
      });

    // gsap.to(".mid-circle", { cssRule: { innerWidth: 2000 } });
  });

  return (
    <>
      <div className="h-screen w-screen bg-[#f5f5f0] text-[#101014] grid place-content-center">
        <h1>
          <div className="word">
            <div className="char">H</div>
            <div className="char">E</div>
            <div className="char">L</div>
            <div className="char">L</div>
            <div className="char">O</div>
            <div className="char mid-circle"></div>
            <div className="char">W</div>
            <div className="char">O</div>
            <div className="char">R</div>
            <div className="char">L</div>
            <div className="char">D</div>
          </div>
        </h1>
      </div>
      <div className="center-circle"></div>
      <div className="arrow-container">
        <div className="arrow-tail"></div>
      </div>
    </>
  );
};
