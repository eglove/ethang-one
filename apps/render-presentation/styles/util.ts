import { CSSProperties } from 'react';

export const twoColumnGrid = (templateColumns: string): CSSProperties => {
  return {
    display: 'grid',
    gridTemplateColumns: templateColumns,
    placeItems: 'center',
  };
};
