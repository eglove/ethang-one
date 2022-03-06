import { animationInterval } from '@ethang/util-typescript';
import { useEffect, useState } from 'react';

export const useDebounce = <ValueType>(value: any, delay = 300): any => {
  const [debouncedValue, setDebouncedValue] = useState<ValueType>(value);

  useEffect(() => {
    const controller = new AbortController();

    animationInterval(delay, controller.signal, () => {
      setDebouncedValue(value);
    });

    return (): void => {
      controller.abort();
    };
  }, [delay, value]);

  return debouncedValue;
};
