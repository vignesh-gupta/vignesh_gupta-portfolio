import React from "react";
import { IconType } from "react-icons";
import clsx from "clsx";
import { Poppins } from "next/font/google";
import { HiOutlineMail } from "react-icons/hi";

const poppins = Poppins({ subsets: ["latin"], weight: ["600", "500"] });

type ContactInfoProps = {
  Icon: IconType;
  href?: string;
  text: string;
};

const ContactInfo = ({ Icon, href, text }: ContactInfoProps) => {
  return (
    <a
      href={href ?? text.toLocaleLowerCase()}
      target="_blank"
      className=" cursor-pointer flex p-4 bg-secondary text-secondary-text text-xl justify-center items-center rounded-lg shadow-lg pr-10"
    >
      <Icon />
      <span className="ml-2 text-base block">{text}</span>
    </a>
  );
};

export default ContactInfo;


// might use this later
const Contact = () => {
  return (
    <div className={clsx(poppins.className, "w-full mb-10")}>
      <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center w-full">
        Take a Coffee &
        <span className="text-primary-text block">Talk with me</span>
      </h2>

      <div className="my-3 bg-[#2B0B3A] flex rounded-lg p-10 w-full gap-10">
        <div className="flex-1 flex-col gap-3 flex rounded-lg pr-10">
          <ContactInfo
            Icon={HiOutlineMail}
            text="vigneshgupta32@gmail.com"
            href="https://www.figma.com/file/Atd3ZE6CjSlQaSN8j2ju6n/Portfolio-Design?type=design&node-id=0-1&mode=design&t=f0ik29q2yZsmyw7T-0"
          />
          <ContactInfo
            Icon={HiOutlineMail}
            text="vigneshgupta32@gmail.com"
            href="mailto:vigneshgupta32@gmail.com"
          />
        </div>
        {/* <div className='' /> */}
        <div className="flex-1">
          <div className="flex-1 flex bg-secondary text-secondary-text rounded-lg shadow-lg pr-10"></div>
        </div>
      </div>
    </div>
  );
};
