import {
  VIEWBOX_CENTER_X,
  VIEWBOX_CENTER_Y,
  VIEWBOX_HEIGHT,
  VIEWBOX_HEIGHT_HALF,
  VIEWBOX_WIDTH,
} from './constants';
import { Path } from './path';
import { default as cssStyles } from './styles.module.css';
import { CircularProgressbarDefaultProperties } from './types';

const DEFAULT_PROPERTIES: CircularProgressbarDefaultProperties = {
  background: false,
  backgroundPadding: 0,
  circleRatio: 1,
  className: '',
  classes: {
    background: cssStyles.CircularProgressbarBackground,
    path: cssStyles.CircularProgressbarPath,
    root: cssStyles.CircularProgressbar,
    text: cssStyles.CircularProgressbarText,
    trail: cssStyles.CircularProgressbarTrail,
  },
  counterClockwise: false,
  maxValue: 100,
  minValue: 0,
  strokeWidth: 8,
  styles: {
    background: {},
    path: {},
    root: {},
    text: {},
    trail: {},
  },
  text: '',
};

export function CircularProgressBar({
  classes,
  counterClockwise,
  circleRatio,
  text,
  className,
  background,
  backgroundPadding,
  strokeWidth,
  styles,
  value,
  minValue,
  maxValue,
}: CircularProgressbarDefaultProperties = DEFAULT_PROPERTIES): JSX.Element {
  const getBackgroundPadding = (): number => {
    if (!background) {
      return 0;
    }

    return backgroundPadding;
  };

  const getPathRadius = (): number => {
    return VIEWBOX_HEIGHT_HALF - strokeWidth / 2 - getBackgroundPadding();
  };

  const getPathRatio = (): number => {
    const boundedValue = Math.min(Math.max(value ?? 0, minValue), maxValue);
    return (boundedValue - minValue) / (maxValue - minValue);
  };

  return (
    <svg
      className={`${classes.root} ${className}`}
      style={styles.root}
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
    >
      {background && (
        <circle
          className={classes.background}
          cx={VIEWBOX_CENTER_X}
          cy={VIEWBOX_CENTER_Y}
          r={VIEWBOX_HEIGHT_HALF}
          style={styles.background}
        />
      )}
      <Path
        className={classes.trail}
        counterClockwise={counterClockwise}
        dashRatio={circleRatio}
        pathRadius={getPathRadius()}
        strokeWidth={strokeWidth}
        style={styles.trail}
      />

      <Path
        className={classes.path}
        counterClockwise={counterClockwise}
        dashRatio={getPathRatio() * circleRatio}
        pathRadius={getPathRadius()}
        strokeWidth={strokeWidth}
        style={styles.path}
      />

      {text && (
        <text
          className={classes.text}
          style={styles.text}
          x={VIEWBOX_CENTER_X}
          y={VIEWBOX_CENTER_Y}
        >
          {text}
        </text>
      )}
    </svg>
  );
}
