import clsx from 'clsx';

import { poppins } from '@/components/constants/designConstants';
import ProjectsSection from '@/components/sections/Projects';

const ProjectsPage = () => {
  return (
    <>
      <h3
        className={clsx(
          'mt-3 text-center text-4xl text-accent underline underline-offset-8',
          poppins.className
        )}
      >
        Projects
      </h3>
      <ProjectsSection showAll />
    </>
  );
};

export default ProjectsPage;
