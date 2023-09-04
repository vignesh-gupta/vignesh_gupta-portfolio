import { poppins } from '@/components/constants/designConstants';
import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

const AboutPage = () => {
  return (
    <div
      className={clsx(
        'flex grow flex-col items-center justify-center gap-5 text-center',
        poppins.className
      )}
    >
      <h1 className='text-xl capitalize md:text-2xl'>
        About Page is under construction
      </h1>
      <Link href='/' className='rounded-lg bg-blue-950 px-5 py-3 text-base'>
        Go home
      </Link>
    </div>
  );
};

export default AboutPage;
