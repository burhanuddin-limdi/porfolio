import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
export const Navbar: React.FC = () => {
  const location = useLocation();
  const [currentPath, setcurrentPath] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setcurrentPath(location.pathname);
  }, [location]);

  useLayoutEffect(() => {
    gsap.to("nav", 1, {
      y: 0,
      opacity: 1,
    });
  });
  const aboutExitAnimation = () => {
    document.querySelector("#question-arrow")?.classList.add("arrow-out");
    gsap.to("#about", 1, {
      y: 15,
      opacity: 0,
    });
  };
  const navigateToWork = () => {
    aboutExitAnimation();
    setTimeout(() => {
      navigate("/work");
    }, 1000);
  };
  return (
    <nav className="fixed text-[#f5f5fa] z-[30]">
      <ul className="flex w-screen justify-center space-x-[120px] my-5">
        <li
          className={
            "cursor-pointer " + (currentPath == "/about" ? "active" : "")
          }
        >
          <Link to={"/about"}>{"<About/>"}</Link>
        </li>
        <li
          className={
            "cursor-pointer " + (currentPath == "/work" ? "active" : "")
          }
          onClick={navigateToWork}
        >
          {"<Work/>"}
        </li>
        <li
          className={
            "cursor-pointer " + (currentPath == "/contact" ? "active" : "")
          }
        >
          {" "}
          <Link to={"/contact"}>{"<Contact/>"}</Link>
        </li>
      </ul>
    </nav>
  );
};
