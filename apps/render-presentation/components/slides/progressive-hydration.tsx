import { NextImageContainer } from '@ethang/react-components';

export function ProgressiveHydration(): JSX.Element {
  return (
    <>
      <h1>Progressive Hydration</h1>
      <div>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          controls
          height={400}
          src="https://res.cloudinary.com/ddxwdqwkr/video/upload/v1609056522/patterns.dev/prog-rehy-2.mp4"
          width={800}
        />
      </div>
      <ul>
        <li>SSR gives faster FCP but slower TTI.</li>
        <li>
          Hydration is the process of the framework recreating the DOM nodes and
          attaching event listeners to make the page interactive.
        </li>
        <li>Progressive hydration allows this to happen in smaller chunks.</li>
      </ul>
      <div>
        <NextImageContainer
          image={{
            altText: 'Rehydration',
            height: 904,
            url: 'https://res.cloudinary.com/eglove/image/upload/v1655479469/hidden/presentation/rehydration.png',
            width: 1838,
          }}
        />
        <NextImageContainer
          image={{
            altText: 'Progressive Hydration',
            height: 899,
            url: 'https://res.cloudinary.com/eglove/image/upload/v1655479469/hidden/presentation/progressive-hydration.png',
            width: 1831,
          }}
        />
      </div>
    </>
  );
}
