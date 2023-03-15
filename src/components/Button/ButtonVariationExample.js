import React from 'react';
import { Button } from './Button';
import { Heading } from '../Typography';
import { Icon } from '../Icon';
import { ShoppingCartIcon } from '../../icons/ShoppingCartIcon';

export const ButtonVariationExample = () => {
  const icon = ShoppingCartIcon;

  return (
    <div className='flex flex-col'>
      {/* using status colors */}
      <Heading variation='h6'>Variation</Heading>
      {/*------------------------------------------------------------------------------------------------------- */}

      <div className='flex flex-row mb-10 gap-x-5'>
        <Button
          label='Contained'
          color='white'
          backgroundColor='success'
          variation='contained'
        />
        <Button
          label='Contained'
          color='white'
          backgroundColor='warning'
          variation='contained'
        />
        <Button
          label='Contained'
          color='white'
          backgroundColor='error'
          variation='contained'
        />
        <Button
          label='Contained'
          color='white'
          backgroundColor='info'
          variation='contained'
        />
        <Button
          label='Contained'
          color='white'
          backgroundColor='#9d4edd'
          variation='contained'
        />
        <Button
          label='Contained'
          color='black'
          backgroundColor='white'
          variation='contained'
        />
        <Button
          label='Contained'
          color='white'
          backgroundColor='black'
          variation='contained'
        />
      </div>
      {/*------------------------------------------------------------------------------------------------------- */}

      <div className='flex flex-row mb-10 gap-x-5'>
        <Button
          label='Outlined'
          borderColor='success'
          color='success'
          variation='outlined'
        />
        <Button
          label='Outlined'
          borderColor='warning'
          color='warning'
          variation='outlined'
        />
        <Button
          label='Outlined'
          borderColor='error'
          color='error'
          variation='outlined'
        />
        <Button
          label='Outlined'
          borderColor='info'
          color='info'
          variation='outlined'
        />
        <Button
          label='Outlined'
          borderColor='#9d4edd'
          color='#9d4edd'
          variation='outlined'
        />
        <Button
          label='Outlined'
          borderColor='white'
          color='white'
          variation='outlined'
        />
        <Button
          label='Outlined'
          borderColor='black'
          color='black'
          variation='outlined'
        />
      </div>

      {/*------------------------------------------------------------------------------------------------------- */}

      <div className='flex flex-row mb-10 gap-x-5'>
        <Button label='Text' color='success' variation='text' />
        <Button label='Text' color='warning' variation='text' />
        <Button label='Text' color='error' variation='text' />
        <Button label='Text' color='info' variation='text' />
        <Button label='Text' color='#9d4edd' variation='text' />
        <Button label='Text' color='white' variation='text' />
        <Button label='Text' color='black' variation='text' />
      </div>
      {/*------------------------------------------------------------------------------------------------------- */}

      <div className='flex flex-row mb-10 gap-x-5'>
        <Button
          variation='icon'
          label={
            <Icon iconSize='30px' color='success'>
              {icon}
            </Icon>
          }
        />
        <Button
          variation='icon'
          label={
            <Icon iconSize='30px' color='warning'>
              {icon}
            </Icon>
          }
        />
        <Button
          variation='icon'
          label={
            <Icon iconSize='30px' color='error'>
              {icon}
            </Icon>
          }
        />
        <Button
          variation='icon'
          label={
            <Icon iconSize='30px' color='info'>
              {icon}
            </Icon>
          }
        />
        <Button
          variation='icon'
          label={
            <Icon iconSize='30px' color='white'>
              {icon}
            </Icon>
          }
        />
        <Button
          variation='icon'
          label={
            <Icon iconSize='30px' color='black'>
              {icon}
            </Icon>
          }
        />
      </div>
    </div>
  );
};
