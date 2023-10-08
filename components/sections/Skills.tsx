'use client';

import React, { useEffect, useState } from 'react';
import SkillsCircle from '@/components/SkillsCircle';
import Image from 'next/image';
import { getSkills } from '@/sanity/utils';

const SkillsSection = () => {
  const [skills, setSkills] = useState<any[]>([]);

  useEffect(() => {
    getSkills()
      .then(setSkills)
      .catch(console.error);
  }, []);

  return (
    <div className='w-full'>
      <div className='flex flex-wrap items-center justify-center gap-3'>
        {skills.map(({ _id, name, icon }, i) => (
          <SkillsCircle key={_id} delay={i} name={name} icon={icon} />
        ))}
      </div>

      <div className='relative mb-10 mt-10 w-full overflow-visible md:mt-20'>
        <div className='radial-gradient absolute left-1/4 top-4 h-full w-1/2 rounded-full blur-sm brightness-50 md:top-6 lg:top-8' />
        <Image
          src='/tech-solar.svg'
          alt='tech-solar'
          className='height-auto sticky mx-auto w-full object-contain  md:w-3/4'
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default SkillsSection;
