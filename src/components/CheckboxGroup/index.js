import React from 'react';
import styled from 'styled-components';
const CheckboxGroupContainer = styled.div`
  display: inline-flex;
  flex-direction: ${({direction})=> direction};

  > *:not(:last-child) {
    margin-bottom: ${(props) =>
      (props.direction === 'column' || props.direction === 'column-reverse') &&
      props.spacing};
    margin-right: ${(props) =>
      (props.direction === 'row' || props.direction === 'row-reverse') &&
      props.spacing};
  }
`;

export const CheckboxGroup = ({ direction = 'column', spacing = '0px', children }) => {

  return (
    <CheckboxGroupContainer
      className={`RadioButtonGroup`}
      direction={direction}
      spacing={spacing}
    >
      {children}
    </CheckboxGroupContainer>
  );
};
