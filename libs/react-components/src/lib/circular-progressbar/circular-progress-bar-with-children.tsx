import { CircularProgressbarWrapperProperties } from './types';

type CircularProgressbarWithChildrenProperties =
  CircularProgressbarWrapperProperties & {
    children?: JSX.Element | JSX.Element[];
  };

export function CircularProgressBarWithChildren(
  properties: CircularProgressbarWithChildrenProperties
): JSX.Element {
  const { children, ...circularProgressbarProperties } = properties;

  return (
    <div style={{ height: '100%', position: 'relative', width: '100%' }}>
      <CircularProgressBarWithChildren {...circularProgressbarProperties} />
      {children && (
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'center',
            marginTop: '-100%',
            position: 'absolute',
            width: '100%',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
