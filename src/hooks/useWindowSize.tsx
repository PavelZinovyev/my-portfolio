import { useEffect, useState } from 'react';

interface SizeProps {
  width?: number;
  height?: number;
}

export const useWindowSize = (): SizeProps => {
  const [size, setSize] = useState<SizeProps>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: innerWidth,
        height: innerHeight,
      });
    };

    if (typeof window !== 'undefined') {
      handleResize();

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return size;
};
