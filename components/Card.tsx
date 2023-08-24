import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";
import clsx from "clsx";

const poppins = Poppins({ subsets: ["latin"], weight: ["600", "500"] });

const Card = ({variant: variant} : {variant : number}) => {
  return (
    <div
      className={clsx(
        "flex justify-center items-center px-8 py-5 gap-4 border-t-4 border-[#4F228D] ",
        poppins.className, "card-gradient-"+ variant
      )}
    >
      <div className="shrink-0">
        <Image
          src={`/icons/expertise${variant}.svg`}
          alt="Expertise"
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl">Frontend</h3>
        <p className="text-xs my-2">
          Take your client onboard seamlessly by our amazing tool of digital
          onboard process.
        </p>
      <button
        type="button"
        // className="w-fit stroke-2 p-3 stroke-[#693B93] text-sm fill-[#2C1250]"
        className="px-4 py-2  my-1 rounded-lg bg-[#2C1250] border-4 border-[#693B93] text-xs  w-fit"
      >
        Learn More
      </button>
      </div>
    </div>
  );
};

export default Card;
