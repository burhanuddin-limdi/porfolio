import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import "./intro.css";

export const Intro: React.FC = () => {
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
        width: "130vw",
        duration: 0.7,
      })
      .to(".center-circle", {
        duration: 1,
        width: "100vw",
        height: "100vh",
        borderRadius: 0,
      });

    // gsap.to(".mid-circle", { cssRule: { innerWidth: 2000 } });
  });

  return (
    <>
      <div className="h-[100vh] grid place-content-center">
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
        <img src="../src/assets/Arrow.png" alt="" />
      </div>
    </>
  );
};
