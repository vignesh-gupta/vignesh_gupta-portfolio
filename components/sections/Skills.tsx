"use client";

import React, { useEffect, useState } from "react";
import SkillsCircle from "@/components/SkillsCircle";
import Image from "next/image";
import { getSkills } from "@/sanity/utils";

const Skills = () => {
  const [skills, setSkills] = useState<any[]>([]);

  useEffect(() => {
    getSkills()
      .then((res) => setSkills(res))
      .catch(console.error);
  }, []);

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

      <div className="flex justify-center items-center gap-3 flex-wrap">
        {skills.map(({ _id, name, icon }, i) => (
          <SkillsCircle key={_id} delay={i} name={name} icon={icon} />
        ))}
      </div>

      <div className="relative md:mt-20 mt-10 w-full mb-10 overflow-visible">
        <div className="radial-gradient h-full rounded-full brightness-50 blur-sm absolute left-1/4 lg:top-8 md:top-6 top-4 w-1/2" />
        <Image
          src="/tech-solar.svg"
          alt="tech-solar"
          className="mx-auto w-full height-auto object-contain md:w-3/4  sticky"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Skills;
