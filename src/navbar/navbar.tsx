import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
export const Navbar: React.FC = () => {
  const location = useLocation();
  const [currentPath, setcurrentPath] = useState("");
  useEffect(() => {
    console.log("Current route:", location.pathname);
    setcurrentPath(location.pathname);
  }, [location]);
  return (
    <nav className="fixed text-[#f5f5fa]">
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
        >
          {" "}
          <Link to={"/work"}>{"<Work/>"}</Link>
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
