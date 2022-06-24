import '../styles/global.css';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { Page } from '../components/page/page';

export const API_ROOT = 'http://localhost:3000';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Blog Demo</title>
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}

export default App;
