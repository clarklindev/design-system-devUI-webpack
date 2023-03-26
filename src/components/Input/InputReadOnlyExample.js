import React, { useState } from 'react';
import { Input } from './index';

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
    <Input savedData={savedData} configure={configure} />
  );
};
