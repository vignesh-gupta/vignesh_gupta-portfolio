import React from "react";
import { BsLinkedin ,BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="h-20 flex justify-between xl:px-80 lg:px-48 md:px-32 sm:px-16 px-10 py-3 border-t border-secondary">
      <p>
        &copy; {new Date().getFullYear()} Vignesh Gupta. All Rights Reserved.
      </p>

      <div className="flex gap-3 text-xl">
        <a target="_blank" href="https://www.linkedin.com/in/vigneshgupta/">
          <BsLinkedin />
        </a>

        <a target="_blank" href="http://github.com/vignesh-gupta/">
          <BsGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
