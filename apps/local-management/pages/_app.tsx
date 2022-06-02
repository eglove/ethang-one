import '../../../styles/global.css';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { GlobalContextWrapper } from '../context/global/global-context';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <GlobalContextWrapper>
      <Head>
        <title>Local Management</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </GlobalContextWrapper>
  );
}

export default App;
