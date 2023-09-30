'use client';

import clsx from 'clsx';
import { useTheme } from 'next-themes';
import React from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';

const ThemeSwitch = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={clsx('self-center', className)}>
      <button
        className='rounded-lg p-3 text-2xl hover:bg-primary'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <div className='dark:hidden block'>
          <HiMoon  />
        </div>

        <div className='hidden dark:block'>
          <HiSun />
        </div>
      </button>
    </div>
  );
};

export default ThemeSwitch;
