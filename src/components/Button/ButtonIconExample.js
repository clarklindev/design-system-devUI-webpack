import React from 'react';
import {Button} from './index';
import { Icon } from '../Icon';
import { ShoppingCartIcon } from '../../icons/ShoppingCartIcon';

export const ButtonIconExample = () =>{
  return (
  <Button
    variation='icon'
    label={
      <Icon size='30px'>
        <ShoppingCartIcon/>
      </Icon>
    }
  />
  );
}
