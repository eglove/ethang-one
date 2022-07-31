import { ButtonHTMLAttributes } from 'react';

import styles from './toggle-button.module.css';

export type ToggleButtonProperties = {
  children: JSX.Element | JSX.Element[];
  color: string;
  delegated?: ButtonHTMLAttributes<HTMLButtonElement>;
  isSelected: boolean;
  label: string;
};

export function ToggleButton({
  label,
  color,
  children,
  isSelected,
  delegated,
}: ToggleButtonProperties): JSX.Element {
  return (
    <button
      type="button"
      {...delegated}
      aria-pressed={isSelected}
      className={styles.ToggleButton}
      style={{ backgroundColor: color }}
    >
      <span className="visually-hidden">{label}</span>
      {children}
    </button>
  );
}
