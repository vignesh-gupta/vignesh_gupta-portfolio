import React from "react";
import { Poppins } from "next/font/google";

import Project from "../Project";
import clsx from "clsx";

const poppins = Poppins({ subsets: ["latin"], weight: ["600", "500"] });

const Projects = () => {
  return (
    <div
      className={clsx("w-full my-10 flex flex-col gap-4", poppins.className)}
    >
      {/* TODO: Fetch Project and display */}

      {Array<number>(3)
        .fill(0)
        .map((_, i) => (
          <Project key={i} isEven={i % 2 === 0} />
        ))}
    </div>
  );
};

export default Projects;
