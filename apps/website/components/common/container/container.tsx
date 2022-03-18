import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ToastContainer } from 'react-toastify';

import styles from '../styles/common.module.css';

interface ContainerProperties {
  children: JSX.Element[] | JSX.Element;
  containerProperties?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
}

export const Container = ({
  children,
  containerProperties,
}: ContainerProperties): JSX.Element => {
  return (
    <div>
      <ToastContainer />
      <div {...containerProperties} className={styles.container}>
        {children}
      </div>
    </div>
  );
};
