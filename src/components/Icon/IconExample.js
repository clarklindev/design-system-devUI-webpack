import React from 'react';
import { Icon } from './index';
import { Heading } from '../Heading';

import { ShoppingCartIcon } from "../../icons/ShoppingCartIcon";

export const IconExample = () => {

  return (
    <>
      <Heading variation='h6'>Icon Example</Heading>
      <Icon size='30px' stroke="red" fill="red">
        <ShoppingCartIcon/>
      </Icon>
    </>
  );
};
