import React from 'react';

import styled from 'styled-components';

const HeadingBase = styled.div`
  margin: var(--header-margin);
  line-height: var(--line-height);
  font-weight: var(--font-weight);
  font-family: var(--font-family);
`;

const Heading1 = styled(HeadingBase)`
  font-size: var(--h1);
`;
const Heading2 = styled(HeadingBase)`
  font-size: var(--h2);
`;
const Heading3 = styled(HeadingBase)`
  font-size: var(--h3);
`;
const Heading4 = styled(HeadingBase)`
  font-size: var(--h4);
`;
const Heading5 = styled(HeadingBase)`
  font-size: var(--h5);
`;
const Heading6 = styled(HeadingBase)`
  font-size: var(--h6);
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
