import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

const Document = (): JSX.Element => {
  return (
    <Html lang="en-US">
      <Head>
        <meta name="monetization" content="$ilp.uphold.com/XqPZ8mnNyprk" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZM8N2J2F2Q"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZM8N2J2F2Q"');
        `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
