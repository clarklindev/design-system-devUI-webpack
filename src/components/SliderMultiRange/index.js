import React from 'react';
import styled from 'styled-components';
import { Slider } from '../Slider';

const SliderMultiRangeContainer = styled.div`
  width: ${({width})=> width}
  box-sizing:border-box;
  height: 30px;
`;

const SliderWrapper = styled.div`
  box-sizing:border-box;
  width: 100%;
  height: 15px;
  display: flex;
  position: relative;
`;

//this is the background track for all the scrollbars - you want to show this instead of sliders' own track
const SliderTrack = styled.div`
  box-sizing:border-box;
  height: 5px;
  width: 100%;
  border-radius: 2px;
  background: lightGray;
  display: flex;
  align-self: center;
`;

export const SliderMultiRange = ({ 
  sliderValues, 
  onChange,
  step = 1,
  min=0,
  max=0,
  thumbSize = '16px',
  backgroundColor = 'red',
  width = '100%',
}) => {

  const restrictBoundaries = (index, value) => {
    //min
    let min;
    if (sliderValues.length === 1 || index === 0) {
      min = min;
    } else {
      min = sliderValues[index - 1] ;
    }

    let max;
    //check if single element in sliderValues || if last element in sliderValues
    if (sliderValues.length === 1 || index === (sliderValues.length - 1) ) {
      max = max;
    } else {
      max = sliderValues[index + 1] ;
    }

    if (value <= min) {
      value= min;
    }
    if (value >= max) {
      value=max;
    }
    console.log("value: ", value);
    return value;
  };

  //function that gets called everytime one of the sliders value changes
  const onChangeHandler = (value, index=0) => {
    const restricted = restrictBoundaries(index, parseInt(value));

    let updatedValues = sliderValues.slice();
    updatedValues[index] = restricted;

    onChange(updatedValues);
  };

  //----------------------------------------------------------------------------------
  return (
    <SliderMultiRangeContainer className="SliderMultiRange" width={width}>
      <SliderWrapper>
        <SliderTrack backgroundColor="blue"/>
        {(sliderValues || []).map((sliderValue, index) => { 
            return <Slider
              className='absolute' //you want to leave this absolute for multirange input so they stack ontop of each other, for testing remove 'absolute class' 
              key={index}
              savedData={sliderValue}
              step={step}
              index={index}
              onChange={onChangeHandler}
              min={min}
              max={max}
              //x position to place the <Slider/> you cant see this of each individual slider if <Slider className="absolute">. only when className = "" and hideTrack="false"
              trackClickable={false} //you want to leave this FALSE for multirange input
              hideTrack={true} //you want to leave this as TRUE for multirange input - <SliderTrack /> replaces this
              thumbSize={thumbSize}
              backgroundColor="rgba(0,255,0,.5)"
            /> 
        })}
   
      </SliderWrapper> 
    </SliderMultiRangeContainer>
  );
};
