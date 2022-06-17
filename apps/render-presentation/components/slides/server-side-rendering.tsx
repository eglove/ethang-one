import { Button, NextImageContainer } from '@ethang/react-components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styles from '../../styles/render-presentation.module.css';

export function ServerSideRendering(): JSX.Element {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isShowingMore, setIsShowingMore] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      setIsLoading(true);
      setIsShowingMore(false);
    };
  }, []);

  useEffect(() => {
    const { showMore } = router.query;
    if (showMore === 'true') {
      setIsShowingMore(true);
    }
  }, [router.query]);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <h1>Server-Side Rendering</h1>
      <div>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          controls
          height={400}
          src="https://res.cloudinary.com/ddxwdqwkr/video/upload/v1617495417/patterns.dev/serverside-rendering-1.mov"
          width={800}
        />
        <ul>
          <li>All data for application is fetched on the server.</li>
          <li>The server builds the HTML and delivers it to the client.</li>
          <li>This means less JavaScript to run on the client.</li>
          <li>
            Faster FCP (First Contentful Paint) and TTI (Time to Interactive)
          </li>
          <li>
            Slower TTFB (Time to First Byte, the time it takes between clicking
            and the first byte of data coming in.)
          </li>
          <li>
            If there's excess load on the server, or the user has a slow
            network, this can mean a long wait.
          </li>
          {isShowingMore ? (
            <li>
              Full page loads are also required for new data. Which increases
              the times between user interactions.
            </li>
          ) : (
            <Button
              size="small"
              text="Show More"
              buttonProperties={{
                onClick(): void {
                  location.href = '/slides/slide-3?showMore=true';
                },
              }}
            />
          )}
        </ul>
      </div>
      <div className={styles.TwoColumnCenter}>
        <div>
          <h2 style={{ textAlign: 'center' }}>Client-Side Rendering</h2>
          <NextImageContainer
            image={{
              altText: 'Client side rendering',
              height: 770,
              url: 'https://res.cloudinary.com/eglove/image/upload/v1655334117/hidden/presentation/client-side-rendering.png',
              width: 1600,
            }}
          />
        </div>
        <div>
          <h2 style={{ textAlign: 'center' }}>Server-Side Rendering</h2>
          <NextImageContainer
            image={{
              altText: 'Server Side Rendering',
              height: 614 / 1.3,
              url: 'https://res.cloudinary.com/eglove/image/upload/v1655339433/hidden/presentation/server-side-rendering.png',
              width: 994 / 1.3,
            }}
          />
        </div>
      </div>
    </>
  );
}
