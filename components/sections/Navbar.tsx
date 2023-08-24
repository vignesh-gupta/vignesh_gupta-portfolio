import React from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import clsx from "clsx";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700"],
});

export const navLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  return (
    <header
      className={clsx(
        "bg-secondary sticky top-0 left-0 right-0 h-20 flex justify-between xl:px-80 lg:px-60 px-10 sm:px-16 md:px-32   py-3",
        plusJakartaSans.className
      )}
    >
      <div id="logo" className="flex items-center">
        <p className="text-3xl">VG</p>
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
    </header>
  );
};

export default Navbar;
