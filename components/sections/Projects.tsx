"use client";

import React, { useEffect, useState } from "react";

import Project from "../Project";
import clsx from "clsx";
import { poppins } from "../constants/designConstants";
import { getProjects } from "@/sanity/utils";

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    getProjects(true)
      .then((res) => setProjects(res))
      .catch(console.error);
  }, []);
  return (
    <div
      className={clsx("w-full my-10 flex flex-col gap-10", poppins.className)}
    >
      {/* TODO: Fetch Project and display */}

      {projects.map((project, i) => (
        <Project title={project.title} description={project.description} imgUrl={project.imgUrl} key={i} isEven={i % 2 === 0} />
      ))}
    </div>
  );
};

export default Projects;
