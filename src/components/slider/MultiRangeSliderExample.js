import React, { useEffect, useState } from 'react';
import { MultiRangeSlider } from './MultiRangeSlider';
import { Heading } from '../Typography';

//NOTE: track is non clickable... so use <Slider> if only single slider
export const MultiRangeSliderExample = () => {
  const [sliderValues1, setSliderValues1] = useState([]); //holds positions of sliders
  const [sliderValues2, setSliderValues2] = useState([]); //holds positions of sliders

  useEffect(() => {
    setSliderValues1([10, 60]);
    setSliderValues2([10, 12, 30, 70, 80]);
  }, []);

  useEffect(() => {
    console.log('sliderValues1: ', sliderValues1);
    console.log('sliderValues2: ', sliderValues2);
  }, [sliderValues1, sliderValues2]);

  const configure1 = {
    width: '300px',
    update: (index, value) => {
      //update by reference is Okay
      let temp = sliderValues1.slice();
      temp[index] = value;
      setSliderValues1(temp);
    },
  };

  const configure2 = {
    update: (index, value) => {
      //update by reference is Okay
      let temp = sliderValues2.slice();
      temp[index] = value;
      setSliderValues2(temp);
    },
  };

  return (
    <>
      <div className='flex flex-col'>
        <div className='flex flex-col mb-10'>
          <Heading variation='h6'>fixed-width / Multi-range slider</Heading>
          <MultiRangeSlider
            sliderValues={sliderValues1}
            configure={configure1}
          />
        </div>

        <div className='flex flex-col'>
          <Heading variation='h6'>default / Multi-range slider</Heading>
          <MultiRangeSlider
            sliderValues={sliderValues2}
            configure={configure2}
          />
        </div>
      </div>
    </>
  );
};
