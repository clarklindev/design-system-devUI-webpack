import React, { useState } from 'react';
import { Counter } from './index';

export const CounterExample = () => {
  const [savedData, setSavedData] = useState('0');

  return (
    <Counter
      savedData={savedData}
      onChange={(newValue) => setSavedData(newValue)}
    />
  );
};
