import Image from "next/image";
import HeroSection from "./components/HeroSection";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mx-[40px]" >
      <HeroSection />
      <About/>
    </main>
  );
}
