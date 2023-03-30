import React, { useState } from 'react';

import { useFocus } from './useFocus';
import { Input } from '../components/Input';

export const UseFocusExample = () => {
  const [isFocused, attrs] = useFocus();
  const [savedData, setSavedData] = useState('');

  return (
    <>
      <Input
        {...attrs}
        savedData={savedData}
        onChange={(event) => {
          setSavedData(event.target.value);
        }}
      />

      {isFocused && <div className='absolute'>hello world</div>}
    </>
  );
};
