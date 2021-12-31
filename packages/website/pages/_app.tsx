import {AppProps} from 'next/app';
import Head from 'next/head';

const CustomApp = ({Component, pageProps}: AppProps): JSX.Element => (
  <>
    <Head>
      <title>Welcome to website!</title>
    </Head>
    <main className="app">
      <Component {...pageProps}/>
    </main>
  </>
);

export default CustomApp;
