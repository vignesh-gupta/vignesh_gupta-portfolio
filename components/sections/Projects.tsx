'use client';

import React, { useEffect, useState } from 'react';

import Project from '@/components/Project';
import clsx from 'clsx';
import { poppins } from '@/components/constants/designConstants';
import { getProjects } from '@/sanity/utils';
import Loading from '@/components/Loading';
import { TProject } from '@/types';

const ProjectsSection = ({ showAll }: { showAll?: boolean }) => {
  const [projects, setProjects] = useState<TProject[]>([]);

  useEffect(() => {
    getProjects(!showAll).then(setProjects).catch(console.error);
  }, [showAll]);

  if (projects.length === 0) return <Loading />;

  return (
    <>
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
            key={project._id}
            isFeatured={project.isFeatured}
            isEven={(i + 1) % 2 === 0}
          />
        ))}
      </div>

      {showAll && (
        <p className='mb-5 text-center'>
          <a
            target='_blank'
            aria-label='GitHub Code'
            className='ml-1 underline underline-offset-4 hover:no-underline'
            href='https://github.com/vignesh-gupta?tab=repositories'
          >
            Looking for more?
          </a>
        </p>
      )}
    </>
  );
};

export default ProjectsSection;
