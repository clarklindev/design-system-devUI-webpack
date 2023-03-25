import React from 'react';
import styled from 'styled-components';

const BlockContainer = styled.section`
  margin: 0 50px 50px 50px;
  box-sizing: border-box;
`;

export const Block = (props)=>{
  const {children} = props
  
  return <BlockContainer className="Block">
    {children}
  </BlockContainer>
}