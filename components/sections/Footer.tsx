import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className='flex h-20 justify-between border-t border-secondary px-10 py-3 sm:px-16 md:px-32 lg:px-48 xl:px-80'>
      <p>
        &copy; {new Date().getFullYear()} Vignesh Gupta. All Rights Reserved.
      </p>

      <div className='flex gap-3 text-xl'>
        <a
          target='_blank'
          aria-label='LinkedIn Link'
          href='https://www.linkedin.com/in/vigneshgupta/'
        >
          <BsLinkedin />
        </a>

        <a
          target='_blank'
          aria-label='GitHub Link'
          href='http://github.com/vignesh-gupta/'
        >
          <BsGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
