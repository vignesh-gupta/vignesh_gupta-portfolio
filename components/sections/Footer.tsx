import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const FooterSection = () => {
  return (
    <footer className='flex h-20 items-center justify-between border-t border-secondary px-10 py-3 sm:px-16 md:px-32 lg:px-48 xl:px-80'>
      <p>
        &copy; {new Date().getFullYear()} Vignesh Gupta. Checkout on
        <a
          target='_blank'
          aria-label='GitHub Code'
          className='ml-1 underline underline-offset-4'
          href='https://github.com/vignesh-gupta/vignesh_gupta-portfolio'
        >
          GitHub
        </a>
      </p>

      <div className='flex gap-3 text-xl'>
        <a
          target='_blank'
          aria-label='LinkedIn Link'
          href='https://linkedin.com/in/vigneshgupta/'
        >
          <BsLinkedin />
        </a>

        <a
          target='_blank'
          aria-label='GitHub Link'
          href='https://github.com/vignesh-gupta/'
        >
          <BsGithub />
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;
