import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

export const useLocalStorage = <ValueType>(
  key: string,
  defaultValue: ValueType | (() => ValueType),
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
): [ValueType, Dispatch<SetStateAction<ValueType>>] => {
  const [state, setState] = useState<ValueType>(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);

    if (valueInLocalStorage === null) {
      return defaultValue instanceof Function ? defaultValue() : defaultValue;
    }

    return deserialize(valueInLocalStorage) as ValueType;
  });

  const previousKeyReference = useRef(key);

  useEffect(() => {
    const previousKey = previousKeyReference.current;

    if (previousKey !== key) {
      window.localStorage.removeItem(key);
    }

    previousKeyReference.current = key;

    window.localStorage.setItem(key, serialize(key));
  }, [key, serialize, state]);

  return [state, setState];
};
