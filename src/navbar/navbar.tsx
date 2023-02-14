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
  let navVisible = false;
  const showNav = () => {
    gsap.to(".side-nav", {
      duration: 1,
      right: "64px",
      top: "64px",
    });
    gsap.to(".hamburger-line:nth-child(1)", {
      duration: 0.5,
      rotate: "45deg",
      top: "5px",
    });
    gsap.to(".hamburger-line:nth-child(3)", {
      duration: 0.5,
      rotate: "-45deg",
      bottom: "8px",
    });
    gsap.to(".hamburger-line:nth-child(2)", {
      duration: 0.5,
      opacity: 0,
    });
    navVisible = true;
  };
  const hideNav = () => {
    gsap.to(".side-nav", {
      duration: 2,
      right: "-500px",
      top: "-500px",
    });
    gsap.to(".hamburger-line:nth-child(1)", {
      duration: 0.5,
      rotate: "0deg",
      top: "0px",
    });
    gsap.to(".hamburger-line:nth-child(3)", {
      duration: 0.5,
      rotate: "0deg",
      bottom: "0px",
    });
    gsap.to(".hamburger-line:nth-child(2)", {
      duration: 0.5,
      opacity: 1,
    });
    navVisible = false;
  };
  return (
    <>
      <nav className="fixed text-[#f5f5fa] z-[30] flex justify-between place-items-center w-screen  px-5 lg:px-28 xl:px-44 pt-5 md:pt-0">
        <p className="text-[#ff5c00] koulen text-xl">BURHANUDDIN.DEV</p>
        <ul className=" w-fit justify-center space-x-10 my-5 place-items-center hidden md:flex">
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
              "cursor-pointer " + (currentPath == "/experience" ? "active" : "")
            }
            onClick={() => {
              navigateTo("/experience");
            }}
          >
            {"<Experience/>"}
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
        </ul>
        <button
          className="bg-[#ff5c00] rounded-[9999px] py-1.5 px-4 text-[#101014] hidden md:block"
          onClick={() => {
            navigateTo("/contact");
          }}
        >
          {"<Contact/>"}
        </button>
        <button
          className="block md:hidden w-[35px] h-fit space-y-1"
          onClick={() => {
            if (navVisible) {
              hideNav();
            } else {
              showNav();
            }
          }}
        >
          <div className="bg-[#f5f5fa] h-[3px] w-[35px] hamburger-line relative"></div>
          <div className="bg-[#f5f5fa] h-[3px] w-[35px] hamburger-line relative"></div>
          <div className="bg-[#f5f5fa] h-[3px] w-[35px] hamburger-line relative"></div>
        </button>
        <div className="fixed z-[30] side-nav h-fit rounded-lg p-5 block md:hidden">
          {/* <button className="absolute right-5 top-5" onClick={hideNav}>
          <img src="/close.png" alt="" className="h-[30px]" />
        </button> */}
          <ul className=" w-fit jetbrains">
            <li
              className={
                "cursor-pointer " +
                (currentPath == "/about"
                  ? "line-through decoration-[#101014] decoration-[2px]"
                  : "")
              }
              onClick={() => {
                navigateTo("/about");
              }}
            >
              {"<About/>"}
            </li>
            <li
              className={
                "cursor-pointer " +
                (currentPath == "/experience"
                  ? "line-through decoration-[#101014] decoration-[2px]"
                  : "")
              }
              onClick={() => {
                navigateTo("/experience");
              }}
            >
              {"<Experience/>"}
            </li>
            <li
              className={
                "cursor-pointer " +
                (currentPath == "/projects"
                  ? "line-through decoration-[#101014] decoration-[2px]"
                  : "")
              }
              onClick={() => {
                navigateTo("/projects");
              }}
            >
              {"<Projects/>"}
            </li>
            <li>
              <button
                className="text-[#101014] mt-5"
                onClick={() => {
                  navigateTo("/contact");
                }}
              >
                {"<Contact/>"}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
