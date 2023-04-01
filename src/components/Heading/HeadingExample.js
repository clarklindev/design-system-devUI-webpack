import React from 'react';

import { Heading } from './index';

export const HeadingExample = () => {
  return (
    <>
      <Heading config={{ variation: 'h1' }}>H1 heading</Heading>
      <Heading config={{ variation: 'h2' }}>H2 heading</Heading>
      <Heading config={{ variation: 'h3' }}>H3 heading</Heading>
      <Heading config={{ variation: 'h4' }}>H4 heading</Heading>
      <Heading config={{ variation: 'h5' }}>H5 heading</Heading>
      <Heading config={{ variation: 'h6' }}>H6 heading</Heading>
    </>
  );
};
