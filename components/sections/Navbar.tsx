'use client';

import React from 'react';
import clsx from 'clsx';
import { BiMenuAltRight } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { navLinks } from '@/components/constants/mappingConstants';
import { motion } from 'framer-motion';
import {
  plusJakartaSans,
  poppins,
} from '@/components/constants/designConstants';
import ThemeSwitch from '../ThemeSwitch';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header
      className={clsx(
        'sticky left-0 right-0 top-0 z-50 flex h-20 justify-between bg-secondary px-10 py-3 sm:px-16 md:px-32 lg:px-48 xl:px-80',
        plusJakartaSans.className
      )}
    >
      <div id='logo' className='flex items-center'>
        <a href='/' className={clsx('text-3xl font-bold', poppins.className)}>
          VG
        </a>
      </div>

      <div className='hidden items-center gap-2 md:flex'>
        {navLinks.map((link) => (
          <a
            key={link.title.toLocaleLowerCase()}
            href={link.url}
            className='rounded-lg p-3 hover:bg-primary'
          >
            {link.title}
          </a>
        ))}
      </div>
      <ThemeSwitch className='hidden md:block' />
      <div className='flex gap-2 self-center md:hidden '>
        <ThemeSwitch />
        <button
          aria-labelledby='menu-open'
          className='rounded-full bg-accent p-2 text-3xl text-white'
          aria-label='menu-open'
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <BiMenuAltRight />
        </button>
        {isMenuOpen && (
          // Backdrop for sliding menu
          <div
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className='fixed right-0 top-0 flex h-screen w-full justify-end backdrop-brightness-50'
          >
            <motion.div
              whileInView={{ x: [100, 0] }}
              transition={{ duration: 0.3, ease: 'linear' }}
              className='right-0 flex h-full w-2/3 flex-col bg-secondary'
            >
              <div className='mx-8 my-5 flex self-end px-8 py-5 text-2xl'>
                <RxCross2 />
              </div>

              <div className='flex flex-col '>
                {navLinks.map((link) => (
                  <a
                    key={link.title.toLocaleLowerCase()}
                    href={link.url}
                    className='p-3  text-center'
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
