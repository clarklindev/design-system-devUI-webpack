import styled from 'styled-components';

const HeadingBase = styled.div`
  margin: ${(props) => props.theme.typography.header.margin};
  line-height: ${(props) => props.theme.typography.header.lineHeight};
  font-weight: ${(props) => props.theme.typography.header.fontWeight};
  font-family: ${(props) => props.theme.typography.header.fontFamily};
`;

const Heading1 = styled(HeadingBase)`
  font-size: ${(props) => props.theme.typography.h1.fontSize};
`;
const Heading2 = styled(HeadingBase)`
  font-size: ${(props) => props.theme.typography.h2.fontSize};
`;
const Heading3 = styled(HeadingBase)`
  font-size: ${(props) => props.theme.typography.h3.fontSize};
`;
const Heading4 = styled(HeadingBase)`
  font-size: ${(props) => props.theme.typography.h4.fontSize};
`;
const Heading5 = styled(HeadingBase)`
  font-size: ${(props) => props.theme.typography.h5.fontSize};
`;
const Heading6 = styled(HeadingBase)`
  font-size: ${(props) => props.theme.typography.h6.fontSize};
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
      <Component as={variation} {...rest}>
        {children}
      </Component>
    );
  }
  return children;
};
