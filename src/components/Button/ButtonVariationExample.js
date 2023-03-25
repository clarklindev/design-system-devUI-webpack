import React from 'react';
import { Button } from './index';
import { Heading } from '../Heading';
import { Icon } from '../Icon';
import { ShoppingCartIcon } from '../../svg/ShoppingCartIcon';

import { colors } from '../../themes/colors';

export const ButtonVariationExample = () => {
  const icon = ShoppingCartIcon;

  return (
    <div className='flex flex-col'>
      {/* using status colors */}
      <Heading variation='h6'>Contained Buttons</Heading>
      {/*------------------------------------------------------------------------------------------------------- */}

      <div className='flex flex-row mb-10 gap-x-5'>
        <Button
          label='Contained'
          color={colors.neutral[100]}
          backgroundColor={colors.status.success}
          variation='contained'
        />
        <Button
          label='Contained'
          color={colors.white}
          backgroundColor={colors.status.warning}
          variation='contained'
        />
        <Button
          label='Contained'
          color={colors.white}
          backgroundColor={colors.status.error}
          variation='contained'
        />
        <Button
          label='Contained'
          color={colors.white}
          backgroundColor={colors.status.info}
          variation='contained'
        />
        <Button
          label='Contained'
          color={colors.white}
          backgroundColor='#9d4edd'
          variation='contained'
        />
        <Button
          label='Contained'
          color={colors.black}
          backgroundColor={colors.white}
          variation='contained'
        />
        <Button
          label='Contained'
          color={colors.white}
          backgroundColor={colors.black}
          variation='contained'
        />
      </div>
      {/*------------------------------------------------------------------------------------------------------- */}
      <Heading variation='h6'>Outlined Buttons</Heading>

      <div className='flex flex-row mb-10 gap-x-5'>
        <Button
          label='Outlined'
          borderColor={colors.status.success}
          color={colors.status.success}
          variation='outlined'
        />
        <Button
          label='Outlined'
          borderColor={colors.status.warning}
          color={colors.status.warning}
          variation='outlined'
        />
        <Button
          label='Outlined'
          borderColor={colors.status.error}
          color={colors.status.error}
          variation='outlined'
        />
        <Button
          label='Outlined'
          borderColor={colors.status.info}
          color={colors.status.info}
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
          borderColor="light-gray"
          color="light-gray"
          variation='outlined'
        />
        <Button
          label='Outlined'
          borderColor={colors.black}
          color={colors.black}
          variation='outlined'
        />
      </div>

      {/*------------------------------------------------------------------------------------------------------- */}
      <Heading variation='h6'>Text Buttons</Heading>
       <div className='flex flex-row mb-10 gap-x-5'>
        <Button label='Text' color={colors.status.success} variation='text' />
        <Button label='Text' color={colors.status.warning} variation='text' />
        <Button label='Text' color={colors.status.error} variation='text' />
        <Button label='Text' color={colors.status.info} variation='text' />
        <Button label='Text' color='#9d4edd' variation='text' />
        <Button label='Text' color='light-gray' variation='text' />
        <Button label='Text' color={colors.black} variation='text' />
      </div> 
      {/*------------------------------------------------------------------------------------------------------- */}
 
      <Heading variation='h6'>Icon Buttons</Heading>
      <div className='flex flex-row mb-10 gap-x-5'>
        <Button
          variation='icon'
          label={
            <Icon size='30px' color={colors.status.success}>
              {icon}
            </Icon>
          }
        />
        <Button
          variation='icon'
          label={
            <Icon size='30px' color={colors.status.warning}>
              {icon}
            </Icon>
          }
        />
        <Button
          variation='icon'
          label={
            <Icon size='30px' color={colors.status.error}>
              {icon}
            </Icon>
          }
        />
        <Button
          variation='icon'
          label={
            <Icon size='30px' color={colors.status.info}>
              {icon}
            </Icon>
          }
        />
        <Button
          variation='icon'
          label={
            <Icon size='30px' color='#9d4edd'>
              {icon}
            </Icon>
          }
        />
        <Button
          variation='icon'
          label={
            <Icon size='30px' color='light-gray'>
              {icon}
            </Icon>
          }
        />
        <Button
          variation='icon'
          label={
            <Icon size='30px' color={colors.black}>
              {icon}
            </Icon>
          }
        />
      </div>
    </div> 
  );
};
