import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Expertise from '@/components/sections/Expertise';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';

export default async function Home() {
  return (
    <div className='flex flex-col items-center md:items-start'>
      <div className='relative'>
        <div className='spread-gradient -right-1/4 top-1/3 hidden h-[500px] w-[300px] lg:block' />
        <Hero />
      </div>

      <About />

      <div className='relative mt-10 w-full md:mt-20'>
        <div className='radial-gradient absolute left-1/4 h-full w-1/2 rounded-full blur-sm' />
        <Expertise />
      </div>

      <p className='mb-5 w-full text-center text-lg md:text-xl lg:text-2xl'>
        I&apos;m currently looking to join a
        <span className='text-accent'> cross-functional</span> team
        <span className='md::text-base block text-sm'>
          that values improving people&apos; lives through accessible design &
          technology.
        </span>
      </p>
      <Skills />

      <div id='projects' />
      <Projects />

      <div className='relative w-full'>
        <div className='spread-gradient h-1/2 w-3/4' />
        <Contact />
      </div>
    </div>
  );
}
