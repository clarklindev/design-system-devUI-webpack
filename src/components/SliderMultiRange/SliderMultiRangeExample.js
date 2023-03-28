import React, { useState } from 'react';
import { SliderMultiRange } from './index';

//NOTE: track is non clickable... so use <Slider> if only single slider
export const SliderMultiRangeExample = () => {
  const [sliderValues, setSliderValues] = useState([20, 50]); //holds positions of sliders

  return (
    <SliderMultiRange sliderValues={sliderValues} min={0} max={100} onChange={setSliderValues}/>
  );
};