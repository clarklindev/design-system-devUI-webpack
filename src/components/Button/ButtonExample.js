import { Button } from './Button';
import { Heading } from '../Typography';

export const ButtonExample = () => {
  return (
    <>
      <div className='flex flex-col mb-10'>
        <Heading variation='h6'>Basic button using label attribute</Heading>
        <div className='flex flex-row'>
          <Button label='label' />
        </div>
      </div>
      <div className='flex flex-col mb-10'>
        <Heading variation='h6'>
          Basic button with label passed in as children
        </Heading>
        <div className='flex flex-row'>
          <Button>Label</Button>
        </div>
      </div>
    </>
  );
};
