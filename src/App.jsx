import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero/Hero";
import Impact from "./components/Impact";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import SystemDesign from "./components/SystemDesign/SystemDesign";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact, { Footer } from "./components/Contact";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Impact />
        <About />
        <Experience />
        <Skills />
        <SystemDesign />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
