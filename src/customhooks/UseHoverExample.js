import React, { useState } from 'react';

import { useHover } from './useHover';
import { Input } from '../components/Input';

export const UseHoverExample = () => {
  const [hovering, attrs] = useHover();
  const [savedData, setSavedData] = useState('');

  return (
    <div style={{ position: 'relative' }}>
      <Input
        {...attrs}
        savedData={savedData}
        onChange={(event) => {
          setSavedData(event.target.value);
        }}
      />
      {hovering && <div className='absolute'>hello world</div>}
    </div>
  );
};
