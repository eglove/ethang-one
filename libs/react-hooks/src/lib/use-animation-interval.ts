import { animationInterval, IntervalCallback } from '@ethang/util-typescript';
import { useEffect } from 'react';

export const useAnimationInterval = (
  ms: number,
  callback: IntervalCallback
): void => {
  useEffect(() => {
    const controller = new AbortController();

    animationInterval(ms, controller.signal, callback);

    return (): void => {
      controller.abort();
    };
  }, [callback, ms]);
};
