import About from "@/components/sections/About";
import Expertise from "@/components/sections/Expertise";
import Hero from "@/components/sections/Hero";

export default async function Home() {
  return (
    <div className="flex flex-col md:items-start items-center">
      <Hero />
      <About />
      <div className="relative md:mt-32 mt-20 w-full">
        <div className="gradient1" />
        <Expertise />
      </div>
    </div>
  );
}
