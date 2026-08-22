import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import FloatingBlobs from "./components/FloatingBlobs";
import Navbar from "./components/Navbar";
import HomePage from "./components/Home/HomePage";
import Contact from "./components/Home/Contact";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import SystemDesign from "./components/SystemDesign/SystemDesign";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <FloatingBlobs />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <main>
          <HomePage />
          <About />
          <Projects />
          <SystemDesign />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
