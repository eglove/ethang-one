import { NextImageContainer } from '@ethang/react-components';

export function Resumability(): JSX.Element {
  return (
    <>
      <h1>Resumability</h1>
      <ul>
        <li>
          There&apos;s a very difficult problem with hydration, which is knowing{' '}
          <strong>what</strong> event handlers the client needs and{' '}
          <strong>where</strong> they need to be attached.
        </li>
        <li>
          With any sort of server-side rendering, the HTML is built on the
          server first, and built again on the client.
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
      <br />
      <NextImageContainer
        image={{
          altText: 'Problem with Hydration',
          height: 905,
          url: 'https://res.cloudinary.com/eglove/image/upload/v1655480592/hidden/presentation/hydration-problem.webp',
          width: 2000,
        }}
      />
      <ul>
        <li>
          QwikJS serializes all required information for the framework to
          reattach event listeners as part of HTML.
        </li>
        <li>
          A small &lt;300b JS file uses a factory function to lazily recover
          event handlers by deserializing that information.
        </li>
      </ul>
      <NextImageContainer
        image={{
          altText: 'Resumable HTML',
          height: 256,
          url: 'https://res.cloudinary.com/eglove/image/upload/v1655480917/hidden/presentation/resumable-html.png',
          width: 794,
        }}
      />
      <br />
      <NextImageContainer
        image={{
          altText: 'Resumability Compared to Hydration',
          height: 902,
          url: 'https://res.cloudinary.com/eglove/image/upload/v1655480654/hidden/presentation/resumability.webp',
          width: 2000,
        }}
      />
    </>
  );
}
