import { isBrowser } from '@ethang/util-typescript';
import { useEffect, useState } from 'react';

export const useWindowSize = (
  initialWidth = Number.POSITIVE_INFINITY,
  initialHeight = Number.POSITIVE_INFINITY
): { width: number; height: number } => {
  const [state, setState] = useState<{ width: number; height: number }>({
    height: isBrowser ? window.innerHeight : initialHeight,
    width: isBrowser ? window.innerWidth : initialWidth,
  });

  useEffect((): (() => void) | void => {
    if (isBrowser) {
      const handler = (): void => {
        setState({
          height: window.innerHeight,
          width: window.innerWidth,
        });
      };

      addEventListener('resize', handler);

      return (): void => {
        removeEventListener('resize', handler);
      };
    }
  }, []);

  return state;
};
