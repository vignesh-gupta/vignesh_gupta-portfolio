import { poppins } from '@/components/constants/designConstants';
import ProjectsSection from '@/components/sections/Projects';
import clsx from 'clsx';
import React from 'react';

const ProjectsPage = () => {
  return (
    <>
      <h1
        className={clsx(
          'mt-3 text-center text-4xl text-accent underline underline-offset-8',
          poppins.className
        )}
      >
        Projects
      </h1>
      <ProjectsSection showAll />

      <p className='mb-5 text-center'>
        <a
          target='_blank'
          aria-label='GitHub Code'
          className='ml-1 underline underline-offset-4 hover:no-underline'
          href='https://github.com/vignesh-gupta'
        >
          Looking for more?
        </a>
      </p>
    </>
  );
};

export default ProjectsPage;
