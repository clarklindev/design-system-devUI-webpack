import React, { useState } from 'react';
import { Input } from './Input';
import { Heading } from '../Typography';
// no border
export const InputNoBorderExample = () => {
  const [savedData, setSavedData] = useState('');
  const configure = {
    modifiers: ['noborder'],
    placeholder: 'placeholder',
    onChange: (event) => {
      console.log('noborder');
      setSavedData(event.target.value);
    },
  };
  return (
    <div className='flex flex-col mb-10'>
      <Heading variation='h6'>No border</Heading>
      <Input savedData={savedData} configure={configure} />
    </div>
  );
};
