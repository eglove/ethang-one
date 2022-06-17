import { NextImageContainer } from '@ethang/react-components';

export function StreamingServerRendering(): JSX.Element {
  return (
    <>
      <h1>Streaming Server Rendering</h1>
      <ul>
        <li>Splits HTML into smaller chunks and streams it.</li>
        <li>Only one request to begin streaming data.</li>
        <li>Prevents heavier requests from blocking lighter requests.</li>
        <li>App can stay responsive even in challenging conditions.</li>
        <li>
          TTFB better than SSR, and is more consistent irrespsective of page
          size.
        </li>
        <li>
          Better FP and FCP because the client can start paring HTML as soon as
          it receives it.
        </li>
      </ul>
      <NextImageContainer
        image={{
          altText: 'Progressive Hydration',
          height: 899,
          url: 'https://res.cloudinary.com/eglove/image/upload/v1655479469/hidden/presentation/progressive-hydration.png',
          width: 1831,
        }}
      />
      <NextImageContainer
        image={{
          altText: 'Streaming Server Rendering',
          height: 910,
          url: 'https://res.cloudinary.com/eglove/image/upload/v1655479999/hidden/presentation/streaming-server-rendering.png',
          width: 1831,
        }}
      />
    </>
  );
}
