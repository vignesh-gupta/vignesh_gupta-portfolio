import { CONTACT_EMAIL } from '@/utils/constant';
import React from 'react';

const ContactSection = () => {
  return (
    <section data-cy='contact' className='mb-10'>
      <h2 className='text-2xl md:text-3xl lg:text-4xl'>Let&apos;s Connect!</h2>
      <p className='text-accent'>Take A Coffee & Chat With Me.</p>

      <div className='py-5 underline underline-offset-4'>
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </div>
    </section>
  );
};

export default ContactSection;
