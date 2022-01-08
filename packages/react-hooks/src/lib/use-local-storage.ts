import { useState } from 'react';

export const useLocalStorage = (
  key: string,
  initialValue: string
): [any, (value: any) => void] => {
  const [storedValue, setStoredValue] = useState<unknown>(() => {
    const item = window.localStorage.getItem(key);

    if (item === null) {
      return initialValue;
    }

    try {
      return JSON.parse(item) as JSON;
    } catch {
      return item;
    }
  });

  const setValue = (value: unknown): void => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
