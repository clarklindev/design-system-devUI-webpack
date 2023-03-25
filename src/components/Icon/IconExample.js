import React, { useState } from 'react';
import { Icon } from './index';

import { ShoppingCartIcon } from '../../icons/ShoppingCartIcon';

import { Heading } from '../Heading';

import { colors } from '../../themes/colors';

export const IconExample = () => {
  const [savedData, setSavedData] = useState('0');

  return (
    <>
      <Heading variation='h6'>Icon Example</Heading>
      <Icon size='30px' stroke={colors.status.error} fill={colors.status.error}>
        {ShoppingCartIcon}
      </Icon>
    </>
  );
};
