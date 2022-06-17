import { Button, NextImageContainer } from '@ethang/react-components';
import { faker } from '@faker-js/faker';
import { useEffect, useState } from 'react';

import styles from '../../styles/render-presentation.module.css';
import { ClientSideRenderRandomLoad } from '../client-side-render-random-load';

const content = Array.from({ length: 6 }).fill(
  faker.lorem.paragraph()
) as string[];

export function ClientSideRendering(): JSX.Element {
  const [isShowingMore, setIsShowingMore] = useState(false);

  useEffect(() => {
    return () => {
      setIsShowingMore(false);
    };
  }, []);

  return (
    <div className={styles.DefaultContainer}>
      <div className={styles.TwoColumnCenter}>
        <div>
          <h2>Client-Side Rendering</h2>
          <ul>
            <li>
              Most of the application logic is executed on the client (usually
              the browser) and interacts with the server through individual API
              calls to fetch or save data.
            </li>
            <li>
              Long initial page load, potential duplicated logic across server
              APIs and frontend code, and pages initially load without data.
              (Leave a need for loading spinner animations.)
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
      <NextImageContainer
        containerProperties={{ style: { marginTop: '32px' } }}
        image={{
          altText: 'GraphQL Gateway',
          height: 741,
          url: 'https://res.cloudinary.com/eglove/image/upload/v1655475098/hidden/presentation/gateway-diagram.png',
          width: 711,
        }}
      />
      <div
        className={styles.DynamicHydrationElements}
        style={{
          border: '1px solid black',
          marginTop: '16px',
          padding: '8px',
        }}
      >
        {content.map(item => {
          return (
            <div key={item}>
              <ClientSideRenderRandomLoad content={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
