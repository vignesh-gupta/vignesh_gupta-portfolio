import React from 'react';
import { IconType } from 'react-icons';
import clsx from 'clsx';
import { HiOutlineMail } from 'react-icons/hi';
import { poppins } from './constants/designConstants';
import { CONTACT_EMAIL } from '@/utils/constant';

type ContactInfoProps = {
  Icon: IconType;
  href?: string;
  text: string;
};

const ContactInfo = ({ Icon, href, text }: ContactInfoProps) => {
  return (
    <a
      href={href ?? text.toLocaleLowerCase()}
      target='_blank'
      className=' text-secondary-text flex cursor-pointer items-center justify-center rounded-lg bg-secondary p-4 pr-10 text-xl shadow-lg'
    >
      <Icon />
      <span className='ml-2 block text-base'>{text}</span>
    </a>
  );
};

export default ContactInfo;

// might use this later
const Contact = () => {
  return (
    <div className={clsx(poppins.className, 'mb-10 w-full')}>
      <h2 className='w-full text-center text-2xl font-bold md:text-3xl lg:text-4xl'>
        Take a Coffee &<span className='block text-accent'>Talk with me</span>
      </h2>

      <div className='my-3 flex w-full gap-10 rounded-lg bg-[#2B0B3A] p-10'>
        <div className='flex flex-1 flex-col gap-3 rounded-lg pr-10'>
          <ContactInfo
            Icon={HiOutlineMail}
            text={CONTACT_EMAIL}
            href='https://www.figma.com/file/Atd3ZE6CjSlQaSN8j2ju6n/Portfolio-Design?type=design&node-id=0-1&mode=design&t=f0ik29q2yZsmyw7T-0'
          />
          <ContactInfo
            Icon={HiOutlineMail}
            text={CONTACT_EMAIL}
            href={`mailto:${CONTACT_EMAIL}`}
          />
        </div>
      </div>
    </div>
  );
};
