'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <div className='mt-10' id='aboutMe'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl'>
        I&apos;m a{' '}
        <TypeAnimation
          sequence={[
            'Frontend Developer',
            1000, // pause 1 second between each message
            'Full Stack Developer',
            1000,
            'Software Developer',
            1000,
            'Software Engineer',
            1000,
          ]}
          wrapper='span'
          speed={50}
          repeat={Infinity}
        />
      </h2>
      <p>
        Currently, I&apos;m a Software Engineer at
        <span className='text-primary-text'> HCLTECH</span>.
      </p>

      <p className='mt-10 md:w-5/6'>
        A Self-taught Developer, functioning in the industry for 2+ years now.
        I&apos;m a passionate learner who&apos;s always willing to learn and
        work across technologies and domains. I love to explore new technologies
        and leverage them to solve real-life problems.
      </p>
    </div>
  );
};

export default About;
