import React from 'react';

import { Heading } from './index';

export const HeadingExample = () => {
  return (
    <div className='flex flex-col'>
      <Heading variation='h6'>Headings</Heading>
      <div className='flex flex-row gap-x-8 items-end'>
        <Heading variation='h1'>H1 heading</Heading>
        <Heading variation='h2'>H2 heading</Heading>
        <Heading variation='h3'>H3 heading</Heading>
        <Heading variation='h4'>H4 heading</Heading>
        <Heading variation='h5'>H5 heading</Heading>
        <Heading variation='h6'>H6 heading</Heading>
      </div>
    </div>
  );
};
