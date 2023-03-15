import React, { useState } from 'react';
import { Input } from './Input';
import { Heading } from '../Typography';

//normal input
export const InputExample = () => {
  const [savedData, setSavedData] = useState('');
  const configure = {
    onChange: (event) => {
      console.log('normal');
      setSavedData(event.target.value);
    },
  };
  return (
    <div className='flex flex-col mb-10'>
      <Heading variation='h6'>Input</Heading>
      <Input savedData={savedData} configure={configure} />
    </div>
  );
};
