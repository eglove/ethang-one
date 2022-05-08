import { HTMLAttributes } from 'react';
import { AtSign, ChevronDown, Search } from 'react-feather';

import styles from './icon.module.css';

const icons = {
  'at-sign': AtSign,
  'chevron-down': ChevronDown,
  search: Search,
};

interface IconProperties {
  containerProperties?: HTMLAttributes<HTMLDivElement>;
  id: keyof typeof icons;
  size: number;
  strokeWidth?: number;
}

export function Icon({
  containerProperties,
  id,
  size,
  strokeWidth = 1,
}: IconProperties): JSX.Element {
  const Component = icons[id];
  const containerStyles = {
    height: `${size}px`,
    width: `${size}px`,
  };
  const svgStyles = {
    strokeWidth: `${strokeWidth}px`,
  };

  return (
    <div
      className={styles.IconContainer}
      style={containerStyles}
      {...containerProperties}
    >
      <Component size={size} style={svgStyles} />
    </div>
  );
}
