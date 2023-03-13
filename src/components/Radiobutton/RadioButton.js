import React from 'react';
import styled from 'styled-components';
import { RadioButtonUnselectedIcon } from '../../icons/RadioButtonUnselectedIcon';
import { RadioButtonSelectedIcon } from '../../icons/RadioButtonSelectedIcon';
import { Icon } from '../Icon';

const RadioButtonContainer = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  height: auto;
  gap: 1rem;
`;

// Hide radioButton visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenRadioButton = styled.input.attrs({ type: 'radio' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledRadioButton = styled.div`
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
`;

export const RadioButton = ({ savedData, configure }) => {
  const checked = savedData;
  const {
    name = '',
    onChange,
    color = 'darkgrey',
    iconSize = '30px',
    label = '',
  } = configure;

  return (
    <RadioButtonContainer>
      <HiddenRadioButton checked={checked} onChange={onChange} name={name} />
      <StyledRadioButton checked={checked}>
        <Icon iconSize={iconSize} color={color}>
          {checked === true
            ? RadioButtonSelectedIcon
            : RadioButtonUnselectedIcon}
        </Icon>
      </StyledRadioButton>
      {label}
    </RadioButtonContainer>
  );
};
