import React from 'react';

import styled from 'styled-components';
import { useUID } from '../../customhooks';

const SwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 30px;

  &:before {
    border-radius: 50%;
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 5px;
    bottom: 5px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }
  &.${(props) => props.className} {
    input[type='checkbox']:checked + & {
    background-color: ${(props) => props.color};
  }

  &.${(props) => props.className} {
    input[type='checkbox']:checked + &:before {
    -webkit-transform: translateX(30px);
    -ms-transform: translateX(30px);
    transform: translateX(30px);
  }
`;

export const ToggleSwitch = React.memo(
  ({ configure, savedData }) => {
    const { color, onChange } = configure;

    const uniqueClassName = useUID('ToggleSwitch');

    return (
      <SwitchWrapper>
        <SwitchInput
          type='checkbox'
          defaultChecked={savedData}
          onChange={onChange}
        />
        <Slider className={uniqueClassName} color={color} />
      </SwitchWrapper>
    );
  },
  // what will cause this component to re-render - excludes onChange function
  (prev, next) => {
    return prev.savedData === next.savedData && prev.color === next.color;
  }
);
