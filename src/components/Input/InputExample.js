import React, { useState } from 'react';
import { Input } from './index';

//normal input
export const InputExample = () => {
  const [savedData, setSavedData] = useState('');

  const configure = {
    onChange: (event) => {
      setSavedData(event.target.value);
    },
  };
  return (
    <Input savedData={savedData} configure={configure} />
  );
};
