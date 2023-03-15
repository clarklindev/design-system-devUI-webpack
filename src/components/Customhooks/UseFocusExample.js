import { useFocus } from './useFocus';

export const UseFocusExample = () => {
  const [isFocused, attrs] = useFocus();

  return (
    <div className='relative'>
      <p>useFocus() - see UseFocusExample</p>
      <input {...attrs} />
      {isFocused && <div className='absolute'>hello world</div>}
    </div>
  );
};
