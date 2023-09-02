import React from 'react';
import ExpertiseCard from '@/components/ExpertiseCard';
import { expertise } from '@/components/constants/mappingConstants';

const Expertise = () => {
  return (
    <div>
      <h2 className='text-2xl md:text-3xl lg:text-4xl'>Expertise</h2>

      {/* TODO: Update the Card with actually value */}
      <div className='grid grid-cols-1 gap-4 py-10 lg:grid-cols-2'>
        {expertise.map((val, i) => (
          <ExpertiseCard {...val} key={val.title} variant={i + 1} />
        ))}
      </div>
    </div>
  );
};

export default Expertise;
