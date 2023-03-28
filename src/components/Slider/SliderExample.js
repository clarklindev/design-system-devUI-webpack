import React from 'react';

import { useState } from 'react';
import { Slider } from './index';

export const SliderExample = () => {
  const [savedData, setSavedData] = useState(0);

  return <Slider savedData={savedData} width='300px' min={0} max={100} onChange={setSavedData} />
};
