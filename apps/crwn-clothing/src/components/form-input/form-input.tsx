import { InputHTMLAttributes } from 'react';

import styles from './form-input.module.css';

interface FormInputProperties {
  label: string;
  inputAttributes: InputHTMLAttributes<HTMLInputElement>;
}

export function FormInput({
  label,
  inputAttributes,
}: FormInputProperties): JSX.Element {
  return (
    <div className={styles['Group']}>
      <input className={styles['FormInput']} {...inputAttributes} />
      <label
        htmlFor={inputAttributes?.name}
        className={`${
          typeof inputAttributes.value === 'number' ? '' : 'Shrink'
        } ${styles['FormInputLabel']}`}
      >
        {label}
      </label>
    </div>
  );
}
