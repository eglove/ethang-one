import Script from 'next/script';

import { PropertiesChildren } from '../../../types/common';
import { Header } from '../header/header';
import { ParticlesContainer } from '../particles/particles';
import styles from '../styles/particles.module.css';

export const Page = ({ children }: PropertiesChildren): JSX.Element => {
  return (
    <div className={styles.ParticleContainer}>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-ZM8N2J2F2Q"
      />
      <Script strategy="afterInteractive" id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZM8N2J2F2Q"');
        `}
      </Script>
      <ParticlesContainer />
      <div className={styles.ContentContainer}>
        <Header />
        {children}
      </div>
    </div>
  );
};
