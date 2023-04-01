import React from 'react';

import styled from 'styled-components';

const IconContainer = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  display: flex;
  > svg {
    width: 100%;
    height: 100%;
    stroke: ${({ theme, stroke }) =>
      stroke ? stroke : theme?.Icon?.stroke || 'var()'};
    fill: ${({ theme, fill }) => (fill ? fill : theme?.Icon?.fill || 'var()')};
    fill-opacity: ${({ theme, fillOpacity }) =>
      fillOpacity ? fillOpacity : theme?.Icon?.fillOpacity || 'var()'};
  }
`;

//the problem is if you dont have a config object passed through,
export const Icon = ({
  size = '25px',
  stroke,
  fill,
  fillOpacity,
  children,
  ...rest
}) => {
  return (
    <IconContainer
      className='Icon'
      size={size}
      stroke={stroke}
      fill={fill}
      fillOpacity={fillOpacity}
      {...rest}
    >
      {children}
    </IconContainer>
  );
};
