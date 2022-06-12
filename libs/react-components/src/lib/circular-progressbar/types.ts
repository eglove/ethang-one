import { CSSProperties } from 'react';

export type CircularProgressbarStyles = {
  background?: CSSProperties;
  path?: CSSProperties;
  root?: CSSProperties;
  text?: CSSProperties;
  trail?: CSSProperties;
};

export type CircularProgressbarDefaultProperties = {
  background: boolean;
  backgroundPadding: number;
  circleRatio: number;
  className: string;
  classes: {
    background: string;
    path: string;
    root: string;
    text: string;
    trail: string;
  };
  counterClockwise: boolean;
  maxValue: number;
  minValue: number;
  strokeWidth: number;
  styles: CircularProgressbarStyles;
  text: string;
  value?: number;
};

export type CircularProgressbarWrapperProperties = {
  background?: boolean;
  backgroundPadding?: number;
  circleRatio?: number;
  className?: string;
  classes?: {
    background: string;
    path: string;
    root: string;
    text: string;
    trail: string;
  };
  counterClockwise?: boolean;
  maxValue?: number;
  minValue?: number;
  strokeWidth?: number;
  styles?: CircularProgressbarStyles;
  text?: string;
  value: number;
};
