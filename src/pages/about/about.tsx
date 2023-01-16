import React from "react";
import "./about.css";
export const About: React.FC = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex relative justify-evenly top-[30vh]">
        <p className="question">WHO IS BURHANUDDIN</p>
        <div className="w-[500px] h-[300px] rounded-3xl border border-[#f5f5fa] bg-[#101014]"></div>
      </div>
    </div>
  );
};
