import React from 'react';
import { Button } from './index';

export const ButtonModifiersExample = () => {
  return (
    <div className="flex flex-row space-x-10">
      <Button
        size='small'
        label='small'
        variation='contained'
        modifiers={['nodimensions, nopadding']}
      />

      <Button
        size='large'
        label='large'
        variation='contained'
        modifiers={['nodimensions, nopadding']}
      />
    </div>
  );
};
