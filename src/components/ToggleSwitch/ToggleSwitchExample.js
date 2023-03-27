import React, { useState } from 'react';
import { ToggleSwitch } from './index';

export const ToggleSwitchExample = () => {
  const [savedData, setSavedData] = useState(false);

  // ----------------------------------------------------------------

  return (
    <ToggleSwitch
      savedData={savedData}
      color='grey'
      onChange={(event) => setSavedData(event.target.checked)}
    />
  );
};
