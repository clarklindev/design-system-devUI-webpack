import React from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: ${(props) => props.width};
  left: ${(props) => props.offset};
`;

const SliderWrapper = styled.div`
  width: 100%;
  background: orange;
  position: relative;
`;

//you want to show teh SliderTrack if there is only one slider
const SliderTrack = styled.div.attrs((props) => ({
  style: {
    borderRadius: '2px',
    display: props.hideTrack ? 'none' : 'block',
    background:
      props.backgroundColor || props.theme.global.formElementBackground,
  },
}))`
  height: 4px;
  width: 100%;
  top: 6px;
  position: absolute;
`;

const SliderInput = styled.input.attrs((props) => ({
  index: props.index,
  type: 'range',
}))`
  /* Add styles for the input element */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  pointer-events: ${(props) => (props.trackClickable ? 'auto' : 'none')};
  position: absolute;
  top: 0;
  width: 100%;
  border-radius: 2px;
  outline: none;
  background: transparent; //the actual clickable part of scrolltrack
  display: flex;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: ${(props) => props.thumbSize};
    height: ${(props) => props.thumbSize};
    background: #666;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: auto;
  }
  &::-moz-range-thumb {
    -webkit-appearance: none;
    height: ${(props) => props.thumbSize};
    width: ${(props) => props.thumbSize};
    cursor: pointer;
    border-radius: 50%;
    background-color: #3264fe;
    pointer-events: auto;
  }
  &::-ms-thumb {
    appearance: none;
    height: ${(props) => props.thumbSize};
    width: ${(props) => props.thumbSize};
    cursor: pointer;
    border-radius: 50%;
    background-color: #3264fe;
    pointer-events: auto;
  }
`;

export const Slider = ({ savedData, configure, className }) => {
  const {
    onChange = () => {},
    index,
    min = 0,
    max = 100,
    step = 1,
    thumbSize = '16px',
    backgroundColor,
    trackClickable = true,
    hideTrack = false,
    width = '100%',
    offset = '0px',
  } = configure;

  return (
    <SliderContainer width={width} offset={offset} className={className}>
      <SliderWrapper>
        <SliderTrack hideTrack={hideTrack} backgroundColor={backgroundColor} />
        <SliderInput
          type='range'
          trackClickable={trackClickable}
          min={min}
          max={max}
          step={step}
          thumbSize={thumbSize}
          value={savedData}
          onChange={(event) => onChange(event, index)}
        />
      </SliderWrapper>
    </SliderContainer>
  );
};
