import React from 'react';
import { VscLoading } from 'react-icons/vsc';

const Loading = () => {
  return (
    <div className='flex grow items-center justify-center'>
      <div className='text-5xl animate-spin'>
        <VscLoading />
      </div>
    </div>
  );
};

export default Loading;
