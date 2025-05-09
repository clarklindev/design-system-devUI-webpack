import React from 'react';

import { useFocus } from '../useFocus';
import Button from '../../components/Button';

const UseFocusExample = () => {
  const [isFocused, attrs] = useFocus();

  return (
    <>
      <Button label='click' {...attrs} />
      {isFocused && <div className='absolute'>hello world</div>}
    </>
  );
};

export default UseFocusExample;
