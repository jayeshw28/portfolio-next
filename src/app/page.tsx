import React from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/ContactForm";
import Eyes from "./utils/Eyes";
import Loader from "./components/Loader";

export default function Home() {
  return (
    <main className="scrollbar flex min-h-screen flex-col" >
      <div className="mx-10">
        <HeroSection/>
        <About/>
      </div>
      <Skills/>
      <Project/>
      <Experience/>
      <div className="mx-10">
        <Contact/>
      </div>
    </main>
  );
}
