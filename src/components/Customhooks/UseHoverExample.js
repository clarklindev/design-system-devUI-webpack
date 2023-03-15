import { useHover } from './useHover';

export const UseHoverExample = () => {
  const [hovering, attrs] = useHover();

  return (
    <div style={{ position: 'relative' }}>
      <button {...attrs}>useHover() - see UseHoverExample</button>
      {hovering && (
        <div style={{ position: 'absolute', top: 0, right: 0 }}>hello</div>
      )}
    </div>
  );
};
