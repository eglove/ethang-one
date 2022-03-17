import Head from 'next/head';

import { PropertiesChildren } from '../../../types/common';
import { Header } from '../header/header';
import { ParticlesContainer } from '../particles/particles';
import styles from '../styles/particles.module.css';

export const Page = ({ children }: PropertiesChildren): JSX.Element => {
  return (
    <div className={styles.ParticleContainer}>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ZM8N2J2F2Q"
        />
        <script async id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZM8N2J2F2Q"');
        `}
        </script>
      </Head>
      <ParticlesContainer />
      <div className={styles.ContentContainer}>
        <Header />
        {children}
      </div>
    </div>
  );
};
