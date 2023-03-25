import React from 'react';

import styled from 'styled-components';

const IconContainer = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  display: flex;
  > svg{
    width: 100%;
    height: 100%;
  }
`;

const StrokeIcon = styled(IconContainer)`
  > svg{
    stroke: ${({theme, stroke})=> stroke? stroke : theme?.icon?.stroke || 'var()'};
  }
`;
const FillIcon = styled(IconContainer)`
  > svg{
    fill: ${({theme, fill})=> fill? fill : theme?.icon?.fill || 'var()'};
  }
`;
const StrokeAndFillIcon = styled(IconContainer)`
  > svg{
    stroke: ${({theme, stroke})=> stroke? stroke : theme?.icon?.stroke || 'var()'};
    fill: ${({theme, fill})=> fill? fill : theme?.icon?.fill || 'var()'};
  }
`;

export const Icon = ({
  size = '25px',
  variation = "stroke",
  children,
}) => {
  switch(variation){
    case "stroke":
      return <StrokeIcon className="Icon" size={size}>
        {children}
      </StrokeIcon>

    case "fill":
      return <FillIcon className="Icon" size={size}>
        {children}
      </FillIcon>
    
    case "strokefill":
      return <StrokeAndFillIcon className="Icon" size={size}>
        {children}
      </StrokeAndFillIcon>
  }

};
