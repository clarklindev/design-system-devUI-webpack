import React from 'react';
import styled from 'styled-components';
const RadioButtonGroupContainer = styled.div`
  display: inline-flex;
  flex-direction: ${({ direction }) => direction};

  > *:not(:last-child) {
    margin-bottom: ${(props) =>
      (props.direction === 'column' || props.direction === 'column-reverse') &&
      props.spacing};
    margin-right: ${(props) =>
      (props.direction === 'row' || props.direction === 'row-reverse') &&
      props.spacing};
  }
`;

export const RadioButtonGroup = ({
  direction = 'column',
  spacing = '0px',
  children,
}) => {
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
