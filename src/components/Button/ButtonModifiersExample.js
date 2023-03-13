import { Button } from './Button';
import { Heading } from '../Typography';

export const ButtonModifiersExample = () => {
  return (
    <div className='flex flex-col'>
      <Heading variation='h6'>Size</Heading>
      <div className='flex flex-row mb-10 gap-x-5 items-end'>
        <Button
          size='small'
          label='small'
          variation='contained'
          modifiers={['nodimensions, nopadding']}
        />
        <Button
          size='normal'
          label='normal'
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
    </div>
  );
};
