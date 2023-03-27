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

const HiddenRadioButton = styled.input.attrs({ type: 'radio' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;

const StyledRadioButton = styled.div`
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
`;

export const RadioButton = ({ checked, name, label, onChange, iconSize}) => {

  return (
    <RadioButtonContainer className="RadioButton">
      <HiddenRadioButton checked={checked} onChange={onChange} name={name} />
      <StyledRadioButton checked={checked}>
        <Icon 
          iconSize={iconSize} 
          fill={checked ? 'black': 'lightGray'}
          fillOpacity={checked ? '.9': '1'}
          stroke={checked ? 'transparent' : 'lightGray'}>
          {checked === true
            ? <RadioButtonSelectedIcon/>
            : <RadioButtonUnselectedIcon/>}
        </Icon>
      </StyledRadioButton>
      {label}
    </RadioButtonContainer>
  );
};
