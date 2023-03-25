import React from 'react';

import styled from 'styled-components';

const IconContainer = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  display: flex;
  > svg{
    width: 100%;
    height: 100%;
    stroke: ${({theme, stroke})=> stroke ? stroke : theme?.icon?.stroke || 'var()'};
    fill: ${({theme, fill})=> fill? fill : theme?.icon?.fill || 'var()'};
  }
`;

export const Icon = ({
  size = '25px',
  stroke=null,
  fill=null,
  children,
}) => {

  return (
    <IconContainer className="Icon" size={size} stroke={stroke} fill={fill}>
      {children}
    </IconContainer>
  );
};
