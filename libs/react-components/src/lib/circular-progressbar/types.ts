import { CSSProperties } from 'react';

export type CircularProgressbarStyles = {
  root?: CSSProperties;
  trail?: CSSProperties;
  path?: CSSProperties;
  text?: CSSProperties;
  background?: CSSProperties;
};

export type CircularProgressbarDefaultProperties = {
  background: boolean;
  backgroundPadding: number;
  circleRatio: number;
  classes: {
    root: string;
    trail: string;
    path: string;
    text: string;
    background: string;
  };
  className: string;
  counterClockwise: boolean;
  maxValue: number;
  minValue: number;
  value?: number;
  strokeWidth: number;
  styles: CircularProgressbarStyles;
  text: string;
};

export type CircularProgressbarWrapperProperties = {
  background?: boolean;
  backgroundPadding?: number;
  circleRatio?: number;
  classes?: {
    root: string;
    trail: string;
    path: string;
    text: string;
    background: string;
  };
  className?: string;
  counterClockwise?: boolean;
  maxValue?: number;
  minValue?: number;
  strokeWidth?: number;
  styles?: CircularProgressbarStyles;
  text?: string;
  value: number;
};
