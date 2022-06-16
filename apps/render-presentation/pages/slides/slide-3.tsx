import { Button, NextImageContainer } from '@ethang/react-components';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import {
  PresentationWrapper,
  slideLink,
} from '../../components/presentation-wrapper';
import styles from '../../styles/render-presentation.module.css';

export default function Slide3(): JSX.Element {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isShowingMore, setIsShowingMore] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(true);
    }, 1000);

    return () => {
      setIsLoading(false);
      setIsShowingMore(false);
    };
  }, []);

  useEffect(() => {
    const { showMore } = router.query;
    if (showMore === 'true') {
      setIsShowingMore(true);
    }
  }, [router.query]);

  if (!isLoading) {
    return null;
  }

  return (
    <PresentationWrapper
      containerProperties={{ style: { height: 'initial' } }}
      previousSlide={slideLink(2)}
    >
      <h1>Server-Side Rendering</h1>
      <div className={styles.TwoColumnCenter}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          controls
          height={400}
          src="https://res.cloudinary.com/ddxwdqwkr/video/upload/v1617495417/patterns.dev/serverside-rendering-1.mov"
          width={800}
        />
        <div>
          <p>
            All data for the application is fetched on the server, the server
            builds the HTML and delivers it to the client. This means less
            JavaScript has to run on the client which gives you a quicker FCP
            (First Contentful Paint) and TTI (Time To Interactive). User do not
            have to wait for an element to become interactive.
          </p>
          <p>
            With a faster FCP and TTI, comes slower TTFB (Time To First Byte,
            the time it takes between clicking and the first byte of data coming
            in). Because all the processing happens on the server before the
            client sees anything, everything has to be be loaded in advance. If
            there is excess load on the server, or the user has a slow network,
            this can mean a long wait.
          </p>
          {isShowingMore ? (
            <p>
              Full page loads are also required for new data. Which increases
              the times between user interactions.
            </p>
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
        </div>
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
    </PresentationWrapper>
  );
}
