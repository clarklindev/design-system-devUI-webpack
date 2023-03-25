import React from 'react';

import styled from 'styled-components';

export const IconContainer = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  display: flex;

  > * {
    width: 100%;
    height: 100%;
    stroke: ${({theme, stroke})=> stroke? stroke : theme?.icon?.stroke || 'var()'};
    fill: ${({theme, fill})=> fill? fill : theme?.icon?.fill || 'var()'};
  }
`;

export const Icon = ({
  size = '25px',
  color = '',
  className,
  children,
  fill = null,
  stroke = null,
}) => {
  return (
    <IconContainer
      size={size}
      className={className}
      fill={fill}
      stroke={stroke}
    >
      {children}
    </IconContainer>
  );
};
