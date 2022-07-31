import styles from './button-row.module.css';

type ButtonRowProperties = {
  children: JSX.Element | JSX.Element[];
};

export function ButtonRow({ children }: ButtonRowProperties): JSX.Element {
  return <div className={styles.ButtonRow}>{children}</div>;
}
