import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          text: 'var(--primary-text)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          text: 'var(--secondary-text)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
