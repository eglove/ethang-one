import {ToastContainer} from 'react-toastify';

import {PropertiesChildren} from '../../../types/common';
import styles from '../styles/common.module.css';

export const Container = ({children}: PropertiesChildren): JSX.Element => (
  <>
    <ToastContainer/>
    <div className={styles.container}>{children}</div>
  </>
);
