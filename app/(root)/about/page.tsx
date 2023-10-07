import React from 'react';
import HeroSection from '@/components/sections/Hero';
import SkillsSection from '@/components/sections/Skills';
import AboutSection from '@/components/sections/About';
import ExperienceSection from '@/components/sections/Experience';

const AboutPage = () => {
  return (
    <div className='flex flex-col gap-10'>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <p className='w-full text-center text-lg md:text-xl lg:text-2xl'>
        I&apos;m good with
        <span className='text-accent'> these techs</span>
        <span className='md::text-base block text-sm'>
          to build some awesome stuff
        </span>
      </p>
      <SkillsSection />
    </div>
  );
};

export default AboutPage;
