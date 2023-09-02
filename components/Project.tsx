import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

type ProjectProps = {
  title: string;
  isEven: boolean;
  description: string;
  imgUrl: string;
  projectLink: string;
  codeLink: string;
};

const Project = ({
  isEven,
  title,
  description,
  imgUrl,
  codeLink,
  projectLink,
}: ProjectProps) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-center gap-1",
        isEven ? "lg:flex-row-reverse" : "lg:flex-row",
      )}
    >
      <div
        className={clsx(
          "flex flex-col shrink basis-[70%] md:basis-[85%] lg:basis-[90%] lg:py-12",
          isEven && "lg:items-end",
        )}
      >
        <p className="font-bold text-primary-text">Featured Project</p>
        <h4 className="text-3xl text-secondary-text">{title}</h4>

        <div
          className={clsx(
            " p-6 z-10 lg:w-[calc(100%+3rem)] flex flex-col gap-3  bg-blue-300 rounded-md backdrop-filter backdrop-blur-lg bg-opacity-10 self-start ",
            isEven ? "lg:-ml-12" : "lg:-mr-12",
          )}
        >
          <p>{description}</p>
          <div
            className={clsx("flex gap-3 items-center", isEven && "justify-end")}
          >
            <Link
              href={projectLink}
              target="_blank"
              className="px-4 py-2 my-1 flex gap-2 rounded-lg bg-[#2C1250] border-4 border-[#693B93] text-xs  w-fit"
            >
              <BsBoxArrowUpRight /> Live site
            </Link>

            <Link
              href={codeLink}
              target="_blank"
              className="px-4 py-2 my-1 flex gap-2 rounded-lg bg-[#2C1250] border-4 border-[#693B93] text-xs  w-fit"
            >
              <BsGithub /> GitHub Repo
            </Link>
          </div>
        </div>
      </div>

      <div className="lg:p-10 p-6  relative w-full basis-auto flex-grow bg-[#2B0B3A] rounded-lg">
        <div
          className={clsx(
            "radial-gradient brightness-50 h-full rounded-full blur-sm absolute w-full top-0 lg:block hidden",
            isEven ? "-left-1/3 " : "left-1/3",
          )}
        />
        <Image
          src={imgUrl}
          className="transform rounded-lg object-cover w-full h-full shadow-xl"
          alt="project name"
          width={300}
          height={200}
        />
      </div>
    </div>
  );
};

export default Project;
