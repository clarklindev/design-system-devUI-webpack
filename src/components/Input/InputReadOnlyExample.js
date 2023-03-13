import React, { useState } from 'react';
import { Input } from './Input';
import { Heading } from '../Typography';

export const InputReadOnlyExample = () => {
  const [savedData, setSavedData] = useState('this is readonly');

  const configure = {
    modifiers: ['readonly'],
    onChange: (event) => {
      console.log('readonly');
      setSavedData(event.target.value);
    },
  };

  return (
    <div className='flex flex-col mb-10'>
      <Heading variation='h6'>Read-only</Heading>
      <Input savedData={savedData} configure={configure} />
    </div>
  );
};
