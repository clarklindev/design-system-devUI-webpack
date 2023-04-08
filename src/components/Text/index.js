import React from 'react';
import styled from 'styled-components';

const TextContainer = styled.p`
  color: ${({ theme }) => theme?.Text?.marginBottom || 'var()'};
  margin-bottom: ${({ theme }) => theme?.Text?.marginBottom || 'var()'};
`;

const Text = ({ children, ...rest }) => {
  return <TextContainer {...rest}>{children}</TextContainer>;
};

export default Text;
