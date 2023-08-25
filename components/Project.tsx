import clsx from "clsx";
import Image from "next/image";
import React from "react";

const Project = ({ isEven }: { isEven: boolean }) => {
  return (
    <div
      className={clsx(
        "flex flex-col items-center gap-1",
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      )}
    >
      <div
        className={clsx(
          "flex flex-col shrink basis-[70%] md:basis-[85%] lg:basis-[90%] lg:py-12",
          !isEven && "lg:items-end"
        )}
      >
        <p className="font-bold text-primary-text">Featured Project</p>
        <h4 className="text-3xl text-secondary-text">Project Name</h4>

        <div
          className={clsx(
            " p-6 z-10 bg-blue-300 rounded-md backdrop-filter backdrop-blur-lg bg-opacity-10 self-start ",
            isEven ? "lg:-mr-12" : "lg:-ml-12"
          )}
        >
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates, enim voluptatum quos ab, earum commodi ut vel molestias
            eos dolores labore a mollitia debitis amet soluta praesentium
            temporibus ratione rem.
          </p>
        </div>
      </div>

      <div className="lg:p-10 p-6  relative w-full basis-auto flex-grow bg-[#2B0B3A] rounded-lg">
        <div className={clsx("radial-gradient brightness-50 -z-10 h-full rounded-full blur-sm absolute w-full top-0 lg:block hidden" , isEven? "-left-1/3 " : "left-1/3")} />
        <Image
          src="https://dummyimage.com/600x400/ffffff/7027ba.png"
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
