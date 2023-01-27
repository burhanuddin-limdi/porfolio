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
  const navigateTo = (route: string) => {
    exitAnimation(location.pathname, route);
    setTimeout(() => {
      navigate(route);
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
          onClick={() => {
            navigateTo("/about");
          }}
        >
          {"<About/>"}
        </li>
        <li
          className={
            "cursor-pointer " + (currentPath == "/projects" ? "active" : "")
          }
          onClick={() => {
            navigateTo("/projects");
          }}
        >
          {"<Projects/>"}
        </li>
        <li
          className={
            "cursor-pointer " + (currentPath == "/skills" ? "active" : "")
          }
          onClick={() => {
            navigateTo("/skills");
          }}
        >
          {"<Experience/>"}
        </li>
        <li>
          <button className="bg-[#ff5c00] rounded-[9999px] py-2 px-5 text-[#101014]">
            {"<Contact/>"}
          </button>
        </li>
      </ul>
    </nav>
  );
};
