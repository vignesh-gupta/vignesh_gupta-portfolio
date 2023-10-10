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
    </>
  );
};

export default ProjectsPage;
