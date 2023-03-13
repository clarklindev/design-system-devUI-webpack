import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Slider } from './Slider';

const MultiRangeSliderContainer = styled.div`
  width: ${(props) => props.width};
`;

const SliderWrapper = styled.div`
  position: relative;
  height: 20px;
`;

//this is the background track for all the scrollbars - you want to show this instead of sliders' own track
const SliderTrack = styled.div.attrs((props) => ({
  style: {
    borderRadius: '2px',
    background: props.backgroundColor || props.theme.formElementBackground,
  },
}))`
  position: absolute;
  top: 6px;
  width: 100%;
  height: 4px;
`;

//===================================================================================================

export const MultiRangeSlider = ({ sliderValues, configure }) => {
  const {
    width = '100%',
    step = 1,
    boundaries = [0, 100],
    update,
    minDifference = 0,
    thumbSize = '16px',
    backgroundColor = 'lightgrey',
  } = configure;

  const containerRef = useRef();

  const [containerWidth, setContainerWidth] = useState();

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setContainerWidth(containerRef.current.offsetWidth);
      // setContainerWidth(containerRef.current.offsetWidth);
    }
    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  const restrictBoundaries = (index, value) => {
    //min
    let min;
    if (sliderValues.length === 1 || index === 0) {
      min = boundaries[0];
    } else {
      min = sliderValues[index - 1] + minDifference;
    }

    let max;
    //check if single element in sliderValues || if last element in sliderValues
    if (sliderValues.length === 1 || index === sliderValues.length - 1) {
      max = boundaries[1];
    } else {
      max = sliderValues[index + 1] - minDifference;
    }

    if (value <= min) {
      return min;
    }
    if (value >= max) {
      return max;
    }
    return value;
  };

  //function that gets called everytime one of the sliders value changes
  const onChangeHandler = (event, index) => {
    const restricted = restrictBoundaries(index, parseInt(event.target.value));
    update(index, restricted);
  };

  //----------------------------------------------------------------------------------
  return (
    <MultiRangeSliderContainer ref={containerRef} style={{ width }}>
      <SliderWrapper className='flex flex-col gap-y-5'>
        <SliderTrack backgroundColor={backgroundColor} />

        {(sliderValues || []).map((sliderValue, index) => {
          //cater for the width of scrollbar thumbSize
          const extracutoff =
            parseInt(thumbSize) *
            (sliderValues?.length && sliderValues.length - 1);

          const adjustedWidth = containerWidth - extracutoff;

          const configure = {
            step: step,
            index: index,
            onChange: onChangeHandler,
            min: boundaries[0],
            max: boundaries[1],
            width: adjustedWidth + 'px',
            //x position to place the <Slider/>, you cant see this of each individual slider if <Slider className="absolute">. only when className = "" and hideTrack="false"
            offset: parseInt(thumbSize) * index + 'px',
            trackClickable: false, //you want to leave this FALSE for multirange input
            hideTrack: true, //you want to leave this as TRUE for multirange input - <SliderTrack /> replaces this
            thumbSize: thumbSize,
            backgroundColor,
          };

          return (
            <Slider
              className='absolute' //you want to leave this absolute for multirange input so they stack ontop of each other, for testing remove 'absolute class'              key={index}
              key={index}
              savedData={sliderValue}
              index={index}
              configure={configure}
            />
          );
        })}
      </SliderWrapper>
    </MultiRangeSliderContainer>
  );
};
