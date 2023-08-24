import About from "@/components/About";
import Hero from "@/components/Hero";

export default async function Home() {

  return (
    <div className="flex flex-col md:items-start items-center">
      <Hero />
      <About />
    </div>
  );
}
