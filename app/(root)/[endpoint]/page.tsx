'use client';

import { poppins } from '@/components/constants/designConstants';
import { navLinks } from '@/components/constants/mappingConstants';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';

export default function Page({
  params: { endpoint },
}: {
  params: { endpoint: string };
}) {
  const validLinks = navLinks.map((link) =>
    link.url.toLocaleLowerCase().replace('/', '')
  );

  const router = useRouter();

  const handleGoToHome = () => {
    router.push('/');
  };

  return (
    <div
      className={clsx(
        'flex grow flex-col items-center justify-center gap-5 text-center',
        poppins.className
      )}
    >
      <h1 className='text-xl capitalize md:text-2xl'>
        {validLinks.includes(endpoint.toLocaleLowerCase())
          ? `${endpoint} Page is under construction`
          : '404 | Oops seems like a wrong page'}
      </h1>
      <button
        onClick={handleGoToHome}
        className='rounded-lg bg-blue-950 px-5 py-3 text-base'
      >
        Go home
      </button>
    </div>
  );
}
