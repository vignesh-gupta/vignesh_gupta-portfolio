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
      <SkillsSection />
    </div>
  );
};

export default AboutPage;
