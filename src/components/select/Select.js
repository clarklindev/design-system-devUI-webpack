import React from 'react';

import styled from 'styled-components';
import { Icon } from '../Icon';
import { ChevronDown } from '../../icons/ChevronDown';

const SelectWrapper = styled.div`
  position: relative;
`;

const SelectContainer = styled.select`
  box-sizing: border-box;
  appearance: none;
  margin: 0;
  max-height: ${(props) => props.theme.global.inputHeight};
  width: 100%;
  height: ${(props) => props.theme.global.inputHeight};
  color: ${(props) => props.theme.select.color};
  border: 1px solid ${(props) => props.theme.select.borderColor};
  background: ${(props) => props.theme.select.backgroundColor};
  padding: 10px ${(props) => props.theme.global.padding};
  border-radius: ${(props) => props.theme.global.borderRadius};
  outline: none;
  cursor: pointer;  
}`;

export const Select = ({ savedData, configure, children }) => {
  const { onChange } = configure;

  const onChangeHandler = (event) => {
    onChange(event);
  };

  return (
    <SelectWrapper>
      <SelectContainer value={savedData} onChange={onChangeHandler}>
        {children
          ? children.map((each) => {
              return each;
            })
          : null}
      </SelectContainer>
      <Icon
        className='absolute right-4 top-2 pointer-events-none'
        iconSize='30px'
        color='white'
      >
        {ChevronDown}
      </Icon>
    </SelectWrapper>
  );
};
