import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { exitAnimation } from "./exitAnimations";
export const Navbar: React.FC = () => {
  const location = useLocation();
  const [currentPath, setcurrentPath] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setcurrentPath(location.pathname);
    gsap.to("nav", 1, {
      y: 0,
      opacity: 1,
    });
  }, [location]);
  const navigateToProjects = () => {
    exitAnimation(location.pathname);
    setTimeout(() => {
      navigate("/projects");
    }, 1000);
  };
  const navigateToAbout = () => {
    exitAnimation(location.pathname);
    setTimeout(() => {
      navigate("/about");
    }, 1000);
  };
  return (
    <nav className="fixed text-[#f5f5fa] z-[30] flex justify-between place-items-center w-screen px-44">
      <p className="text-[#ff5c00] koulen text-xl">BURHANUDDIN.DEV</p>
      <ul className="flex w-fit justify-center space-x-10 my-5 place-items-center">
        <li
          className={
            "cursor-pointer " + (currentPath == "/about" ? "active" : "")
          }
          onClick={navigateToAbout}
        >
          {"<About/>"}
        </li>
        <li
          className={
            "cursor-pointer " + (currentPath == "/projects" ? "active" : "")
          }
          onClick={navigateToProjects}
        >
          {"<Projects/>"}
        </li>
        <li>{"<Skills/>"}</li>
        <li>
          <button className="bg-[#ff5c00] rounded-[9999px] py-2 px-5 text-[#101014]">
            {"<Contact/>"}
          </button>
        </li>
      </ul>
    </nav>
  );
};
