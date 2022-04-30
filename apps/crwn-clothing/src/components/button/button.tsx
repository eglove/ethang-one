import { ButtonHTMLAttributes } from 'react';

import styles from './button.module.css';

export enum BUTTON_TYPE_CLASSES {
  google = 'GoogleSignIn',
  inverted = 'Inverted',
}

interface ButtonProperties {
  buttonType?: BUTTON_TYPE_CLASSES;
  buttonProperties?: ButtonHTMLAttributes<HTMLButtonElement>;
  children: string | JSX.Element | JSX.Element[];
}

export function Button({
  buttonType,
  buttonProperties,
  children,
}: ButtonProperties): JSX.Element {
  return (
    <button
      type="button"
      className={`${styles['ButtonContainer']} ${
        buttonType ? styles[buttonType] : ''
      }`}
      {...buttonProperties}
    >
      {children}
    </button>
  );
}
