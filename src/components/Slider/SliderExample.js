import { useState } from 'react';
import { Slider } from './Slider';

export const SliderExample = () => {
  const [savedData, setSavedData] = useState(0);
  const configure = {
    width: '200px',
    min: 0,
    max: 100,
    step: '1',
    onChange: (event) => {
      console.log('event.target.value: ', event.target.value);
      setSavedData(event.target.value);
    },
  };

  return <Slider savedData={savedData} configure={configure} />;
};
