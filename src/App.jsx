import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Simulator from "./components/Simulator";
import Impact from "./components/Impact";
import SystemDesign from "./components/SystemDesign/SystemDesign";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact, { Footer } from "./components/Contact";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Simulator />
        <SystemDesign />
        <Impact />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
