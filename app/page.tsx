import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Expertise from "@/components/sections/Expertise";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default async function Home() {
  return (
    <div className="flex flex-col md:items-start items-center">
      <div className="relative">
        <div className="spread-gradient -right-1/4 top-1/3 w-[300px] h-[500px] lg:block hidden" />
        <Hero />
      </div>

      <About />

      <div className="relative md:mt-20 mt-10 w-full">
        <div className="radial-gradient -z-10 h-full rounded-full blur-sm absolute w-1/2 left-1/4" />
        <Expertise />
      </div>

      <Skills />

      <Projects />

      <div className="relative w-full">
        <div className="spread-gradient w-3/4 h-1/2" />
        <Contact />
      </div>
    </div>
  );
}
