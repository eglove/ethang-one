import { InputHTMLAttributes } from 'react';

import { Icon } from '../icon-component/icon';
import { VisuallyHidden } from '../visually-hidden/visually-hidden';
import styles from './icon-input.module.css';

const SIZES = {
  large: {
    borderThickness: 2,
    fontSize: 18,
    height: 36,
    iconSize: 24,
  },
  small: {
    borderThickness: 1,
    fontSize: 14,
    height: 24,
    iconSize: 16,
  },
};

type IconInputProperties = {
  inputProperties: InputHTMLAttributes<HTMLInputElement>;
  label: string;
  size?: keyof typeof SIZES;
  width?: number;
};

export function IconInput({
  label,
  inputProperties,
  width,
  size = 'small',
}: IconInputProperties): JSX.Element {
  const derivedStyles = SIZES[size];

  return (
    <label className={styles.IconInputContainer} style={{}}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <div
        className={styles.IconContainer}
        style={{ height: `${derivedStyles.iconSize}px` }}
      >
        <Icon id="search" size={derivedStyles.iconSize} />
      </div>
      <input
        className={styles.TextInput}
        style={{
          borderWidth: `${derivedStyles.borderThickness}px`,
          fontSize: `${derivedStyles.fontSize}px`,
          height: `${derivedStyles.height}px`,
          paddingLeft: `${derivedStyles.height}px`,
          width: `${width ?? 250}px`,
        }}
        {...inputProperties}
      />
    </label>
  );
}
