import React from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col" >
      <div className="mx-10">
        <HeroSection/>
        {/* <About/> */}
      </div>
      <Skills/>
      <Project/>
    </main>
  );
}
