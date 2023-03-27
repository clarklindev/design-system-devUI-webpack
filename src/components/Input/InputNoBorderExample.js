import React, { useState } from 'react';
import { Input } from './index';

export const InputNoBorderExample = () => {
  const [savedData, setSavedData] = useState('');

  const configure = {
    modifiers: ['noborder'],
    placeholder: 'placeholder',
    onChange: (event) => {
      setSavedData(event.target.value);
    },
  };
  return (
    <Input savedData={savedData} configure={configure} />
  );
};
