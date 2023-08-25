import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex flex-col md:items-start items-center">
      <div className="relative">
        <div className="spread-gradient" />
        <Hero />
      </div>

      <About />

      <div className="relative md:mt-20 mt-10 w-full">
        <div className="radial-gradient -z-10 h-full rounded-full blur-sm absolute w-1/2 left-1/4" />
        <Expertise />
      </div>

      <Skills />

      <Projects />
    </div>
  );
}
