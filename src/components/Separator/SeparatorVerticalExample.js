import React from 'react';
import { Separator } from './index';

export const SeparatorVerticalExample = () => {
  return (
    <div className='flex flex-row items-center h-50'>
      <Separator direction='vertical' margin='0 10px' height='30px' />
    </div>
  );
};
