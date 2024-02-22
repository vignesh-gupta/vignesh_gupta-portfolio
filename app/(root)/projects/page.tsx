import clsx from 'clsx';

import { poppins } from '@/components/constants/designConstants';
import ProjectsSection from '@/components/sections/Projects';

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
