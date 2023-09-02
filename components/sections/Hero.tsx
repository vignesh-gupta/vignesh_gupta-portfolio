import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex md:pt-32 pt-10 flex-col md:flex-row justify-center md:justify-start gap-3 w-full">
      <div id="hero-img" className="relative flex justify-center items-start">
        <Image
          src="/radiant-circle.svg"
          alt="Vignesh Gupta"
          className="blur-lg"
          width={300}
          height={300}
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <Image
            priority
            src="/hero.png"
            alt="Vignesh Gupta"
            width={200}
            height={200}
          />
        </div>
      </div>

      <div id="hero-content" className="flex flex-col justify-evenly">
        <p className="md:-mb-7">
          Hello I&apos;m
          <span className="text-primary-text"> Vignesh Gupta</span>
        </p>

        <div className="md:ml-7">
          <p>An Engineer who...</p>
          <h1 className="lg:text-5xl md:text-4xl text-3xl">
            Loves to <br />
            have<span className="text-primary-text"> problem</span>...
          </h1>
          <p className="text-sm">
            Because if there is no problem then what’s there to engineer?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
