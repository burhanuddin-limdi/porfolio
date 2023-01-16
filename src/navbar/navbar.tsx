import React from "react";
import "./navbar.css";
export const Navbar: React.FC = () => {
  return (
    <nav className="fixed text-[#f5f5fa]">
      <ul className="flex w-screen justify-center space-x-[120px] my-5">
        <li>{"<About/>"}</li>
        <li>{"<Work/>"}</li>
        <li>{"<Contact/>"}</li>
      </ul>
    </nav>
  );
};
