import clsx from 'clsx';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import { preahvihear } from '@/components/constants/designConstants';
import { Providers } from '@/components/providers';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body
      className={clsx(
        '-z-50 flex min-h-screen w-full flex-col bg-background text-foreground',
        preahvihear.className
      )}
    >
      <Providers
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
        <main className='flex grow flex-col px-10 sm:px-16 md:px-32 lg:px-48 xl:px-80'>
          {children}
        </main>
        <Footer />
      </Providers>
      <SpeedInsights />
      <Analytics />
    </body>
  );
};

export default HomeLayout;
