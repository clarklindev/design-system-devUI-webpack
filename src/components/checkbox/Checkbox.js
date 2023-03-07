import React from 'react';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { CheckIcon } from '../../icons/CheckIcon';
import { MinusSmallIcon } from '../../icons/MinusSmallIcon';

const CheckboxContainer = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  height: auto;
  gap: 1rem;
`;

// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
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

const StyledCheckbox = styled.div`
  position: relative;
  box-sizing: border-box;
  border-radius: ${(props) => props.theme.global.borderRadius};
  border: 1px solid ${(props) => props.theme.checkbox.borderColor};
  width: auto;
  height: auto;
  background-color: ${(props) => props.theme.checkbox.backgroundColor};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Checkbox = ({ savedData, configure }) => {
  const checked = savedData;
  const {
    indeterminate = false,
    onChange,
    iconSize = '30px',
    color = 'darkgrey',
    name = '',
    label = '',
  } = configure;
  return (
    <CheckboxContainer className='Checkbox'>
      <HiddenCheckbox checked={checked} onChange={onChange} name={name} />

      <StyledCheckbox checked={checked}>
        <Icon iconSize={iconSize} color={color}>
          {indeterminate === true ? MinusSmallIcon : checked && CheckIcon}
        </Icon>
      </StyledCheckbox>
      {label}
    </CheckboxContainer>
  );
};
