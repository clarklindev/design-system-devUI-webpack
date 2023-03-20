import React, { useState } from 'react';
import { Icon } from './Icon';

import { ShoppingCartIcon } from '../../icons/ShoppingCartIcon';

import { Heading } from '../Heading';

import { colors } from '../../utils/colors';

export const IconExample = () => {
  const [savedData, setSavedData] = useState('0');

  return (
    <>
      <Heading variation='h6'>Icon Example</Heading>
      <Icon iconSize='30px' color={colors.status.error}>
        {ShoppingCartIcon}
      </Icon>
    </>
  );
};
