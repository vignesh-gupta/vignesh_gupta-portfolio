import React from "react";
import SkillsCircle from "../SkillsCircle";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="w-full">
      <p className="lg:text-2xl md:text-xl text-lg w-full text-center mb-5">
        I&apos;m currently looking to join a
        <span className="text-primary-text"> cross-functional</span> team
        <span className="md::text-base text-sm block">
          that values improving people&apos; lives through accessible design &
          technology.
        </span>
      </p>

      {/* TODO: Fetch Skills Dynamically */}
      <div className="flex justify-center items-center gap-3 flex-wrap">
        {Array(9)
          .fill(0)
          .map((val, i) => (
            <SkillsCircle key={i} />
          ))}
      </div>


      <div className="relative md:mt-20 mt-10 w-full mb-10 overflow-visible">
        <div className="radial-gradient h-full rounded-full brightness-50 blur-sm absolute left-1/4 lg:top-8 md:top-6 top-4 w-1/2" />
        <Image
          src="/tech-solar.svg"
          alt="tech-solar"
          className="mx-auto w-full height-auto object-contain md:w-3/4 z-[1] sticky"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Skills;
