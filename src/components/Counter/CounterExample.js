import React, { useState } from 'react';
import { Counter } from './Counter';
import { Heading } from '../Heading';

export const CounterExample = () => {
  const [savedData, setSavedData] = useState('0');
  const configure = {
    onChange: (newValue) => {
      setSavedData(newValue);
    },
  };

  return (
    <>
      <Heading variation='h6'>Controlled counter</Heading>
      <Counter savedData={savedData} configure={configure} />
    </>
  );
};
