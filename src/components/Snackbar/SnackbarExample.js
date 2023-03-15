import { useState } from 'react';
import { Snackbar } from './Snackbar';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { CopyIcon } from '../../icons/CopyIcon';

export const SnackbarExample = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const onClickHandler = () => {
    console.log('onClickHandler');
    setShowSnackbar(true);
  };

  return (
    <div>
      {showSnackbar && (
        <Snackbar setShowSnackbar={setShowSnackbar}>
          copied to clipboard
        </Snackbar>
      )}
      <Button
        onClick={onClickHandler}
        variation='icon'
        label={
          <Icon iconSize='30px' color='white'>
            {CopyIcon}
          </Icon>
        }
      />
    </div>
  );
};
