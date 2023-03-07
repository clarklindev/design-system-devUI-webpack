import React, { useState } from 'react';
import { ToggleSwitch } from './ToggleSwitch';

export const ToggleSwitchExample = () => {
  const [savedData1, setSavedData1] = useState(false);

  // ----------------------------------------------------------------

  return (
    <ToggleSwitch
      savedData={savedData1}
      configure={{
        color: 'grey',
        onChange: (event) => setSavedData1(event.target.checked),
      }}
    />
  );
};
