"use client";

import React from "react";
import clsx from "clsx";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { navLinks } from "../constants/mappingConstants";
import { motion } from "framer-motion";
import { plusJakartaSans , poppins } from "@/components/constants/designConstants";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header
      className={clsx(
        "bg-secondary z-50 sticky top-0 left-0 right-0 h-20 flex justify-between xl:px-80 lg:px-48 md:px-32 sm:px-16 px-10 py-3",
        plusJakartaSans.className
      )}
    >
      <div id="logo" className="flex items-center">
        <a href="/" className={clsx("text-3xl font-bold", poppins.className)}>
          VG
        </a>
      </div>

      <div className="hidden items-center gap-2 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.title.toLocaleLowerCase()}
            href={link.url}
            className="hover:bg-primary p-3 rounded-lg"
          >
            {link.title}
          </a>
        ))}
      </div>

      <div className="self-end md:hidden ">
        <button
          className="p-2 text-3xl bg-secondary-text text-secondary rounded-full"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <BiMenuAltRight />
        </button>
        {isMenuOpen && (
          // Backdrop for sliding menu
          <div
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="fixed top-0 right-0 backdrop-brightness-50 h-screen w-full flex justify-end"
          >
            <motion.div
              whileInView={{ x: [100, 0] }}
              transition={{ duration: 0.3, ease: "linear" }}
              className="bg-secondary w-2/3 h-full right-0 flex flex-col"
            >
              <div className="flex self-end text-2xl mx-8 px-8 my-5 py-5">
                <RxCross2 />
              </div>

              <div className="flex flex-col ">
                {navLinks.map((link) => (
                  <a
                    key={link.title.toLocaleLowerCase()}
                    href={link.url}
                    className="p-3  text-center"
                  >
                    {link.title}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
