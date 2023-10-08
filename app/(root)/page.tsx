'use client';

import { useEffect, useState } from 'react';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Expertise from '@/components/sections/Expertise';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Loading from '@/components/Loading';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) return <Loading />;

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
        <span className='block text-sm md:text-base'>
          that values improving people&apos; lives through accessible design &
          technology.
        </span>
      </p>
      <Skills />

      <Projects />

      <div className='relative w-full'>
        <div className='spread-gradient h-1/2 w-3/4' />
        <Contact />
      </div>
    </div>
  );
}
