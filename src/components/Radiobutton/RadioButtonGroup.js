import React from 'react';
import styled from 'styled-components';

const RadioButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => {
    switch (props.direction) {
      case 'column':
        return 'column';
      case 'column-reverse':
        return 'column-reverse';
      case 'row-reverse':
        return 'row-reverse';
      default:
      case 'row':
        return 'row';
    }
  }};
  > *:not(:last-child) {
  margin-bottom: ${(props) =>
    (props.direction === 'column' || props.direction === 'column-reverse') &&
    props.spacing};
  margin-right: ${(props) =>
    (props.direction === 'row' || props.direction === 'row-reverse') &&
    props.spacing};
`;

export const RadioButtonGroup = ({ configure, children }) => {
  const { direction = 'column', spacing = '0px' } = configure;

  return (
    <RadioButtonGroupContainer
      className={`RadioButtonGroup`}
      direction={direction}
      spacing={spacing}
    >
      {children}
    </RadioButtonGroupContainer>
  );
};
