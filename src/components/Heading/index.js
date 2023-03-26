import React from 'react';

import styled from 'styled-components';

const HeadingBase = styled.div`
  color: ${({theme})=> theme?.Heading?.color || 'var()'};
  margin: ${({theme})=> theme?.Heading?.margin || 'var()'};
  line-height: ${({theme})=> theme?.Heading?.lineHeight || 'var()'};
  font-weight: ${({theme})=> theme?.Heading?.fontWeight || 'var()'};
  font-family: ${({theme})=> theme?.Heading?.fontFamily || 'var()'};

  border: 1px solid red;
`;

const Heading1 = styled(HeadingBase)`
  font-size: ${({theme})=> theme?.Heading?.fontSize?.h1 || 'var()'};
`;
const Heading2 = styled(HeadingBase)`
  font-size: ${({theme})=> theme?.Heading?.fontSize?.h2 || 'var()'};
`;
const Heading3 = styled(HeadingBase)`
  font-size: ${({theme})=> theme?.Heading?.fontSize?.h3 || 'var()'};
`;
const Heading4 = styled(HeadingBase)`
  font-size: ${({theme})=> theme?.Heading?.fontSize?.h4 || 'var()'};
`;
const Heading5 = styled(HeadingBase)`
  font-size: ${({theme})=> theme?.Heading?.fontSize?.h5 || 'var()'};
`;
const Heading6 = styled(HeadingBase)`
  font-size: ${({theme})=> theme?.Heading?.fontSize?.h6 || 'var()'};
`;

export const Heading = ({ variation, children, ...rest }) => {
  
  const headingMap = {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    h4: Heading4,
    h5: Heading5,
    h6: Heading6,
  };

  const Component = headingMap[variation];
  if (Component) {
    return (
      <Component as={variation} className="Heading" {...rest}>
        {children}
      </Component>
    );
  }
  return children;
};
