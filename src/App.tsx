import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Navbar } from "./navbar/navbar";
import { About } from "./pages/about/about";
import { Intro } from "./pages/intro/intro";

function App() {
  const location = useLocation();

  useEffect(() => {
    console.log("Current route:", location.pathname);
  }, [location]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
