import { DetailedHTMLProps, HTMLAttributes } from 'react';

import styles from '../styles/common.module.css';

interface ContainerProperties {
  children: JSX.Element[] | JSX.Element;
  containerProperties?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
}

export function Container({
  children,
  containerProperties,
}: ContainerProperties): JSX.Element {
  return (
    <div>
      <div {...containerProperties} className={styles.container}>
        {children}
      </div>
    </div>
  );
}
