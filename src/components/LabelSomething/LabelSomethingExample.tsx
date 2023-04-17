import React from 'react';

import LabelSomething from './index';
import Icon from '../Icon';
import SmileyIcon from '../../icons/SmileyIcon';

const LabelSomethingExample = () => {
  const icon = <SmileyIcon />;

  return (
    <div className='flex justify-items-start items-start space-x-10'>
      <LabelSomething
        gap='5px'
        label='left'
        labelDirection='left'
        something={
          <Icon size='25px' stroke='black' fill='yellow'>
            {icon}
          </Icon>
        }
      />
      <LabelSomething
        gap='5px'
        label='right'
        labelDirection='right'
        something={
          <Icon size='25px' stroke='black' fill='yellow'>
            {icon}
          </Icon>
        }
      />
      <LabelSomething
        gap='5px'
        label='top'
        labelDirection='top'
        something={
          <Icon size='25px' stroke='black' fill='yellow'>
            {icon}
          </Icon>
        }
      />
      <LabelSomething
        gap='5px'
        label='bottom'
        labelDirection='bottom'
        something={
          <Icon size='25px' stroke='black' fill='yellow'>
            {icon}
          </Icon>
        }
      />
    </div>
  );
};

export default LabelSomethingExample;
