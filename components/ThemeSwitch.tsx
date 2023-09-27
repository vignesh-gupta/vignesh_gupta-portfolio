'use client';

import { useTheme } from 'next-themes';
import React from 'react';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      ThemeSwitch
    </button>
  );
};

export default ThemeSwitch;
