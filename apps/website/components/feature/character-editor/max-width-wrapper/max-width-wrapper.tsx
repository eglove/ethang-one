import { HTMLAttributes } from 'react';

import styles from './max-width-wrapper.module.css';

export type MaxWidthWrapperProperties = {
  children: JSX.Element | JSX.Element[];
  className: string;
  delegated?: HTMLAttributes<HTMLDivElement>;
};

export function MaxWidthWrapper(
  properties: MaxWidthWrapperProperties
): JSX.Element {
  return (
    <div
      className={`${styles.MaxWidthWrapper} ${properties.className}`}
      {...properties.delegated}
    >
      {properties.children}
    </div>
  );
}
