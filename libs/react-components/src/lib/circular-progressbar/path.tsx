import { CSSProperties } from 'react';

import { VIEWBOX_CENTER_X, VIEWBOX_CENTER_Y } from './constants';

interface PathProperties {
  className?: string;
  counterClockwise: boolean;
  dashRatio: number;
  pathRadius: number;
  strokeWidth: number;
  style?: CSSProperties;
}

interface GetPathDescriptionProperties {
  pathRadius: number;
  counterClockwise: boolean;
}

interface GetDashStyleProperties {
  counterClockwise: boolean;
  dashRatio: number;
  pathRadius: number;
}

const getPathDescription = ({
  pathRadius,
  counterClockwise,
}: GetPathDescriptionProperties): string => {
  const radius = pathRadius;
  const rotation = counterClockwise ? 1 : 0;

  return `
      M ${VIEWBOX_CENTER_X},${VIEWBOX_CENTER_Y}
      m 0,-${radius}
      a ${radius},${radius} ${rotation} 1 1 0,${2 * radius}
      a ${radius},${radius} ${rotation} 1 1 0,-${2 * radius}
    `;
};

const getDashStyle = ({
  counterClockwise,
  dashRatio,
  pathRadius,
}: GetDashStyleProperties): {
  strokeDasharray: string;
  strokeDashoffset: string;
} => {
  const diameter = Math.PI * 2 * pathRadius;
  const gapLength = (1 - dashRatio) * diameter;

  return {
    strokeDasharray: `${diameter}px ${diameter}px`,
    strokeDashoffset: `${counterClockwise ? -gapLength : gapLength}px`,
  };
};

export function Path({
  className,
  counterClockwise,
  dashRatio,
  pathRadius,
  strokeWidth,
  style,
}: PathProperties): JSX.Element {
  return (
    <path
      className={className}
      fillOpacity={0}
      strokeWidth={strokeWidth}
      d={getPathDescription({
        counterClockwise,
        pathRadius,
      })}
      style={{
        ...style,
        ...getDashStyle({ counterClockwise, dashRatio, pathRadius }),
      }}
    />
  );
}
