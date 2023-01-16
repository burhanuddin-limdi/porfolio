import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./navbar/navbar";
import { About } from "./pages/about/about";
import { Intro } from "./pages/intro/intro";

function App() {
  return (
    <>
      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<p>Work</p>} />
          <Route path="/contact" element={<p>Contact</p>} />
        </Routes>
      </div>

      <div className="h-screen fixed w-[1px] bg-[#686868] right-[15vw] top-0"></div>
    </>
  );
}

export default App;
