import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";

export default async function Home() {

  return (
    <div className="flex flex-col md:items-start items-center">
      <Hero />
      <About />
    </div>
  );
}
