import React from 'react';
import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { MODIFIERS } from './modifiers';
const CardContainer = styled.div`
  border: ${(props) =>
    props.borderColor
      ? `1px solid ${props.borderColor}`
      : `1px solid ${props.theme.borderColor}`};
  background-color: ${(props) => props.color};
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 15px;
  ${applyStyleModifiers(MODIFIERS)};
`;

export const Card = ({
  color = 'white',
  borderColor = 'black',
  borderRadius = '10px',
  width = '250px',
  height = '300px',
  children,
  modifiers = [],
}) => {
  return (
    <>
      <CardContainer
        color={color}
        borderColor={borderColor}
        borderRadius={borderRadius}
        width={width}
        height={height}
        modifiers={Array.isArray(modifiers) ? [...modifiers] : modifiers}
      >
        {children}
      </CardContainer>
    </>
  );
};
