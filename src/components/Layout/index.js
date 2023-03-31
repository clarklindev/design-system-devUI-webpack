import React from 'react';
import styled from 'styled-components';

const LayoutSection = styled.section`
  padding: ${({ theme }) => theme?.Layout?.section?.padding || 'var()'};
  box-sizing: border-box;
  border-bottom: 1px solid ${({ theme }) => theme?.Layout?.section?.borderColor};
`;

const LayoutBlock = styled.div`
  position: relative;
  padding: ${({ theme }) => theme?.Layout?.block?.padding || 'var()'};
`;

export const Layout = ({ children, variation }) => {
  const layoutMap = {
    section: LayoutSection,
    block: LayoutBlock,
  };

  const Component = layoutMap[variation];
  if (Component) {
    return <Component className='Layout'>{children}</Component>;
  }
  return children;
};
