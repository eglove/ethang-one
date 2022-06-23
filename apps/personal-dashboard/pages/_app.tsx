import '../styles/global.css';

import { AppProps } from 'next/app';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Personal Dashboard</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
