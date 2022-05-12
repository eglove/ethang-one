import { knuthPlassLineBreaks } from '@ethang/util-typescript';
import { useEffect } from 'react';

export const useKnuthPlassLineBreaks = (
  querySelectors: keyof HTMLElementTagNameMap
): void => {
  useEffect(() => {
    knuthPlassLineBreaks(querySelectors);

    addEventListener('resize', () => {
      knuthPlassLineBreaks(querySelectors);
    });

    return (): void => {
      removeEventListener('resize', () => {
        knuthPlassLineBreaks(querySelectors);
      });
    };
  }, [querySelectors]);
};
