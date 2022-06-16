import Script from 'next/script';
import { useEffect, useState } from 'react';

import { PropertiesChildren } from '../../../types/common';
import { Header } from '../header/header';
import styles from '../styles/particles.module.css';

const hideHeaderFor = new Set(['/hidden/render-presentation']);

export function Page({ children }: PropertiesChildren): JSX.Element {
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (hideHeaderFor.has(location.pathname)) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    }
  }, []);

  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-ZM8N2J2F2Q"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZM8N2J2F2Q"');
        `}
      </Script>
      <div className={styles.ContentContainer}>
        {hideHeader ? null : <Header />}
        {children}
      </div>
    </>
  );
}
