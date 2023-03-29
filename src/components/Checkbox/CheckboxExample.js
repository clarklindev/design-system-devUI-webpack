import React, { useState } from 'react';
import { Checkbox } from './index';

export const CheckboxExample = () => {
  const [savedData, setSavedData] = useState(false);

  return (
    <Checkbox
      checked={savedData}
      name='checkbox'
      label='label'
      onChange={(event) => {
        setSavedData(event.target.checked);
      }}
    />
  );
};
