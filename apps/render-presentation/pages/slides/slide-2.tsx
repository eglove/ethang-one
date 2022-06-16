import { allImages } from '@ethang/local-database';
import {
  Button,
  NextImageComponent,
  NextImageContainer,
} from '@ethang/react-components';
import { useEffect, useState } from 'react';

import {
  PresentationWrapper,
  slideLink,
} from '../../components/presentation-wrapper';
import styles from '../../styles/render-presentation.module.css';

export default function Slide2(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [isShowingMore, setIsShowingMore] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(true);
    }, 2000);

    return () => {
      setIsLoading(false);
      setIsShowingMore(false);
    };
  }, []);

  if (!isLoading) {
    return (
      <div className={`${styles.DefaultContainer}`}>
        <NextImageComponent image={allImages.rootImages.loading} />
        <h1>Client-Side Rendering</h1>
      </div>
    );
  }

  return (
    <PresentationWrapper
      nextSlide={slideLink(3)}
      previousSlide={slideLink(1)}
      containerProperties={{
        className: `${styles.DefaultContainer}`,
      }}
    >
      <>
        <div className={styles.TwoColumnCenter}>
          <div>
            <h2>Client-Side Rendering</h2>
            <ul>
              <li>
                With React, most of the application logic is executed on the
                client (usually the browser) and interacts with the server
                through individual API calls to fetch or save data.
              </li>
              <li>
                This means a long initial page load, potential duplicated logic
                across server APIs and frontend code, and pages initially load
                without data. (Leave a need for loading spinner animations.)
              </li>
              <li>
                Performance can be improved with preloading important JS, lazy
                loading components, code splitting, and client-side caching.
              </li>
              {isShowingMore ? (
                <li>Page refreshes are not needed when adding data.</li>
              ) : (
                <Button
                  size="small"
                  text="Show More"
                  buttonProperties={{
                    onClick(): void {
                      setIsShowingMore(true);
                    },
                  }}
                />
              )}
            </ul>
          </div>
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
          <div>FP - First Paint (Stuff starts to become visible)</div>
          <div>FCP - First Contentful Paint (Everything is visible)</div>
          <div>
            TTI - Time to Interactive (Event handlers are connected, user can
            interact with the page.
          </div>
        </div>
      </>
    </PresentationWrapper>
  );
}
