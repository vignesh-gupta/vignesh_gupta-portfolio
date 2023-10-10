'use client';

import { poppins } from '@/components/constants/designConstants';
import { sanityClient } from '@/sanity/utils';
import clsx from 'clsx';
import React, { useState } from 'react';

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(
    localStorage?.getItem('isSubmitted') === 'true' ? true : false
  );

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    sanityClient
      .create({
        _type: 'contact',
        ...formData,
      })
      .then(() => {
        setIsSubmitted(true);
        localStorage?.setItem('isSubmitted', 'true');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch(console.error);
  };

  if (isSubmitted)
    return (
      <div
        className={clsx(
          'flex grow flex-col items-center justify-center gap-5 text-center',
          poppins.className
        )}
      >
        <h1 className='text-xl  capitalize md:text-2xl'>
          Thank You For Your Time
        </h1>
        <span className='block text-accent'>
          Feel free to reach out on{' '}
          <a className='underline' href='mailto:vigneshgupta32@gmail.com'>
            vigneshgupta32@gmail.com
          </a>
        </span>
      </div>
    );

  return (
    <div
      className={clsx(
        'flex grow flex-col items-center justify-center gap-5 text-center',
        poppins.className
      )}
    >
      <h1 className='text-xl capitalize md:text-2xl'>
        Take A Coffee
        <span className='block text-accent'>& Chat With Me</span>
      </h1>

      <form
        onSubmit={handleFormSubmit}
        method='post'
        className='flex w-full flex-col gap-4'
      >
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Vignesh Gupta'
          className='rounded-lg bg-secondary p-3 text-foreground'
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          id='email'
          placeholder='xyz@abc.com'
          className='rounded-lg bg-secondary p-3 text-foreground'
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name='message'
          id='message'
          cols={30}
          rows={10}
          placeholder='Drop you comments'
          className='rounded-lg bg-secondary p-3 text-foreground'
          value={formData.message}
          onChange={handleChange}
        />

        <button
          type='submit'
          className='rounded-lg bg-accent p-3 text-foreground'
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
