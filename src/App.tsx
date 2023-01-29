import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./pages/about/about";
import { Contact } from "./pages/contact/contact";
import { Experience } from "./pages/experience/experience";
import { Intro } from "./pages/intro/intro";
import { Projects } from "./pages/projects/projects";

function App() {
  return (
    <>
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <div className="h-screen fixed w-[1px] bg-[#686868] right-[20vw] top-0 z-[1]"></div>
    </>
  );
}

export default App;
