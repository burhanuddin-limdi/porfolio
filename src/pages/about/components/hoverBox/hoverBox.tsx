import React, { useState } from "react";
import "./hoverBox.css";
import gsap from "gsap";

export const HoverBox: React.FC = () => {
  const [showLightBtn, setshowLightBtn] = useState(false);
  const [isopen, setIsopen] = useState(false);
  const setSpotlight = (e: any) => {
    const hoverBox: any = document.querySelector(".hoverBox");
    const boxX = hoverBox?.offsetLeft;
    const boxY = hoverBox?.offsetTop;

    const { clientX, clientY } = e;

    const x = Math.round(((clientX - boxX) / hoverBox?.offsetWidth) * 100);
    const y = Math.round(
      ((clientY - (boxY + hoverBox?.offsetHeight) + 30) /
        hoverBox?.offsetHeight) *
        100
    );
    gsap.to(".hover-top", {
      "--x": `${x}%`,
      "--y": `${y}%`,
      duration: 0.3,
      ease: "sine.out",
    });
    setshowLightBtn(true);
  };
  const resetSpotlight = () => {
    gsap.to(".hover-top", {
      "--x": "-20%",
      "--y": "-20%",
      duration: 0.3,
      ease: "sine.out",
    });
    setshowLightBtn(false);
  };
  const open = () => {
    setIsopen((s) => !s);
    document.querySelector(".hover-top")?.classList.toggle("is-open");
  };
  return (
    <div
      className="relative hoverBox"
      onMouseMove={setSpotlight}
      onMouseLeave={resetSpotlight}
    >
      <div className="w-[400px] h-[250px] rounded-3xl border border-[#f5f5fa] bg-[#101014] hover-bottom">
        <p className="font-medium text-6xl text-[#222222] relative top-5 left-5">
          {"hover:{}"}
        </p>
      </div>
      {/* <div className="bg-[#f5f5fa] absolute inset-0 rounded-3xl text-[#101014] hover-top">
        <p className="font-normal text-xl m-8">
          I am a full stack web developer and designer. I build small to large
          scale web apps for businesses.
        </p>
        <p className="font-medium text-2xl m-8">YOUR IDEAS, MY EXECUTION</p>
      </div> */}
      <div className="bg-[#f5f5fa] absolute inset-0 rounded-3xl text-[#101014] hover-top">
        <div className="font-normal text-[17px] m-7 space-y-3">
          <p>
            I am a full stack web developer and a UI/UX designer, experienced in
            creating and maintaining web applications using a variety of
            technologies.
          </p>
          <p>
            I am also a team player and can work with designers, project
            managers and other developers to successfully execute projects.
          </p>
        </div>
      </div>
      {showLightBtn && !isopen && (
        <img
          src="/lightning_duotone_line.png"
          alt=""
          className="absolute right-3 bottom-3 w-8 cursor-pointer"
          onClick={open}
        />
      )}
      {showLightBtn && isopen && (
        <img
          src="/Vector 29.png"
          alt=""
          className="absolute right-5 bottom-4 w-4 cursor-pointer"
          onClick={open}
        />
      )}
    </div>
  );
};
