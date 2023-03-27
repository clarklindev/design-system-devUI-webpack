import React, { useState } from 'react';
import { Input } from './index';

export const InputNoBorderExample = () => {
  const [savedData, setSavedData] = useState('');

  return (
    <Input savedData={savedData} modifiers={['noborder']}  placeholder='placeholder' onChange={(event) => { setSavedData(event.target.value) }}/>
  );
};
