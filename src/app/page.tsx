import React from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col" >
      <div className="mx-[40px]">
        <HeroSection/>
        <About/>
      </div>
      <Skills/>
    </main>
  );
}
