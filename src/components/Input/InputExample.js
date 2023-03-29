import React, { useState } from 'react';
import { Input } from './index';

//normal input
export const InputExample = () => {
  const [savedData, setSavedData] = useState('');

  return (
    <Input
      savedData={savedData}
      onChange={(event) => {
        setSavedData(event.target.value);
      }}
    />
  );
};
