import React, { useState } from 'react';

import Slider from './index';

const SliderExample = () => {
  const [savedData, setSavedData] = useState(0);

  return (
    <Slider
      savedData={savedData}
      min={0}
      max={100}
      onChange={setSavedData}
      width='300px'
    />
  );
};

export default SliderExample;
