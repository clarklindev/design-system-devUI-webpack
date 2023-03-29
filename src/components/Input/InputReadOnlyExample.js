import React, { useState } from 'react';
import { Input } from './index';

export const InputReadOnlyExample = () => {
  const [savedData, setSavedData] = useState('this is readonly');

  return (
    <Input
      savedData={savedData}
      modifiers={['readonly']}
      onChange={(event) => {
        setSavedData(event.target.value);
      }}
    />
  );
};
