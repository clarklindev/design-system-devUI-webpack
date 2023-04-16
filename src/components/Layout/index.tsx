import React from 'react';
import styled from 'styled-components';
import { DefaultTheme } from '../../themes/DefaultTheme';

type LayoutSectionProps = { theme: DefaultTheme };
const LayoutSection = styled.section<{ theme?: LayoutSectionProps }>`
  padding: ${({ theme }) => theme?.Layout?.section?.padding};
  box-sizing: border-box;
  border-bottom: 1px solid ${({ theme }) => theme?.Layout?.section?.borderColor};
`;

type LayoutBlockProps = { theme?: DefaultTheme };
const LayoutBlock = styled.div<{ theme: LayoutBlockProps }>`
  position: relative;
  padding: ${({ theme }) => theme?.Layout?.block?.padding || 'var()'};
`;

enum LayoutVariation {
  section = 'section',
  block = 'block',
}

type LayoutVariationType = keyof typeof LayoutVariation;
type LayoutStyledComponentType = typeof LayoutSection | typeof LayoutBlock;

interface LayoutProps {
  variation: LayoutVariationType;
  label?: string;
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  label,
  children,
  variation,
}: LayoutProps) => {
  const layoutMap: Record<LayoutVariationType, LayoutStyledComponentType> = {
    section: LayoutSection,
    block: LayoutBlock,
  };

  const Component = layoutMap[variation];

  return <Component>{label ? label : children}</Component>;
};

export default Layout;
