import React from 'react';

import styled from 'styled-components';

export const IconContainer = styled.div`
  width: ${(props) => props.iconSize};
  height: ${(props) => props.iconSize};
  display: flex;

  > * {
    width: 100%;
    height: 100%;
    stroke: ${({theme,color})=> color ? color : theme?.icon?.stroke || 'var(--icon-stroke)'};
  }
`;

export const Icon = ({
  iconSize = '25px',
  color = '',
  className,
  children,
  fill = null,
  stroke = null,
}) => {
  return (
    <IconContainer
      iconSize={iconSize}
      color={color}
      className={className}
      fill={fill}
      stroke={stroke}
    >
      {children}
    </IconContainer>
  );
};
