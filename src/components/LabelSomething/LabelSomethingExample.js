import React from 'react';
import { LabelSomething } from './index';
import { Icon } from '../Icon';
import { SmileyIcon } from '../../icons/SmileyIcon';

export const LabelSomethingExample = () => {
  const icon = <SmileyIcon/>;

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-row gap-10'>
        <LabelSomething
          gap='5px'
          label='left'
          labelPosition='left'
          something={
            <Icon iconSize='30px' stroke='black' fill="yellow">
              {icon}
            </Icon>
          }
        />
        <LabelSomething
          gap='5px'
          label='right'
          labelPosition='right'
          something={
            <Icon iconSize='30px' stroke='black' fill="yellow">
              {icon}
            </Icon>
          }
        />
        <LabelSomething
          label='top'
          gap='5px'
          labelPosition='top'
          something={
            <Icon iconSize='30px' stroke='black' fill="yellow">
              {icon}
            </Icon>
          }
        />
        <LabelSomething
          gap='5px'
          label='bottom'
          labelPosition='bottom'
          something={
            <Icon iconSize='30px' stroke='black' fill="yellow">
              {icon}
            </Icon>
          }
        />
      </div>
    </div>
  );
};
