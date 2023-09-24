'use client';

import React, { useEffect, useState } from 'react';

import Project from '@/components/Project';
import clsx from 'clsx';
import { poppins } from '@/components/constants/designConstants';
import { getProjects } from '@/sanity/utils';

const Projects = ({ showAll }: { showAll?: boolean }) => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    getProjects(!showAll)
      .then((res) => setProjects(res))
      .catch(console.error);
  }, [showAll]);
  return (
    <div
      className={clsx('my-10 flex w-full flex-col gap-10', poppins.className)}
    >
      {projects.map((project, i) => (
        <Project
          title={project.title}
          codeLink={project.codeLink}
          projectLink={project.projectLink}
          description={project.description}
          imgUrl={project.imgUrl}
          key={i}
          isFeatured={project.isFeatured}
          isEven={(i + 1) % 2 === 0}
        />
      ))}
    </div>
  );
};

export default Projects;
