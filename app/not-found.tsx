'use client';

import { poppins } from '@/components/constants/designConstants';
import clsx from 'clsx';
import Link from 'next/link';

export default function Page404() {
  return (
    <div
      className={clsx(
        'flex min-h-screen w-full grow flex-col items-center justify-center gap-5 bg-primary text-center text-foreground',
        poppins.className
      )}
    >
      <h1 className='text-xl capitalize md:text-2xl'>
        404 | Oops seems like a wrong page
      </h1>
      <Link href='/' className='rounded-lg bg-blue-950 px-5 py-3 text-base'>
        Go home
      </Link>
    </div>
  );
}
