import React from 'react';
import styled from 'styled-components';

const LayoutSection = styled.section`
  margin: 0 50px 50px 50px;
  box-sizing: border-box;
`;

export const Layout = ({children, variation})=>{
  
  const layoutMap = {
    section:LayoutSection
  }

  const Component = layoutMap[variation];
  if (Component) {
    return <Component className="Layout">
      {children}
    </Component>
  }
  return children;
}