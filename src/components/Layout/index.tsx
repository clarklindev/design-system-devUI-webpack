import React from 'react';
import styled from 'styled-components';
import ThemeInterface from '../../themes/ThemeInterface';

const LayoutSection = styled.section<{theme:ThemeInterface}>`
  padding: ${({ theme }) => theme?.Layout?.section?.padding || 'var()'};
  box-sizing: border-box;
  border-bottom: 1px solid ${({ theme }) => theme?.Layout?.section?.borderColor};
`;

const LayoutBlock = styled.div<{theme:ThemeInterface}>`
  position: relative;
  padding: ${({ theme }) => theme?.Layout?.block?.padding || 'var()'};
`;

// ------------------------------------------------------------------------------------------------

enum LayoutVariation {
  section = "section",
  block = "block"
}

type LayoutVariationType = keyof typeof LayoutVariation;

interface LayoutProps{
  children: React.ReactNode,
  variation: LayoutVariationType
}

const Layout:React.FC<LayoutProps> = ({ children, variation }) => {

  const layoutMap: Record<LayoutVariationType, any> = {
    section: LayoutSection,
    block: LayoutBlock,
  };

  const Component = layoutMap[variation];
  if (Component) {
    return <Component className='Layout'>{children}</Component>;
  }
  return <>children</>;
};

export default Layout;