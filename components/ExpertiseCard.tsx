import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';
import { poppins } from './constants/designConstants';

type ExpertiseCardProps = {
  variant: number;
  description: string;
  icon: string;
  title: string;
};

const ExpertiseCard = ({
  variant,
  description,
  title,
  icon,
}: ExpertiseCardProps) => {
  return (
    <div
      className={clsx(
        'z-10 flex items-center justify-center gap-4 border-t-4 border-[#4F228D] px-2 py-5 pl-4 md:px-8 ',
        poppins.className,
        'card-gradient-' + variant
      )}
    >
      <div>
        <Image src={`/icons/${icon}`} alt={title} width={100} height={100} />
      </div>
      <div className='flex shrink grow flex-col py-5 '>
        <h3 className='text-xl'>{title}</h3>
        <p className='my-2 text-xs'>{description}</p>
        {/* <button
          type="button"
          className="px-4 py-2  my-1 rounded-lg bg-secondary border-4 border-[#693B93] text-xs  w-fit"
        >
          Learn More
        </button> */}
      </div>

      {/* TODO: Add a model on learn more btn click */}
    </div>
  );
};

export default ExpertiseCard;
