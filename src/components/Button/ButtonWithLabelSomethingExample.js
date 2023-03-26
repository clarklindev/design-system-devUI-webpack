import React from 'react';

import { Button } from './index';
import { LabelSomething } from '../LabelSomething';
import { Icon } from '../Icon';
import { ThumbsUpIcon } from '../../icons/ThumbsUpIcon';

export const ButtonWithLabelSomethingExample = () => {

  return (
    <Button
      variation='contained'
      backgroundColor='red'
      color='white'
      label={
        <LabelSomething
          gap="10px"
          label='right'
          labelPosition='right'
          something={
            <Icon size='30px' stroke="black">
              <ThumbsUpIcon/>
            </Icon>
          }
        />
      }
    />
  );
};
