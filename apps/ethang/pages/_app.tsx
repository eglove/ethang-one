import '../../../styles/global.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { useMemo } from 'react';

import { GlobalContext, GlobalStore } from '../store/global-store';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const globalStore = useMemo(() => {
    return new GlobalStore();
  }, []);

  return (
    <GlobalContext.Provider value={globalStore}>
      <Head>
        <title>EthanG</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </GlobalContext.Provider>
  );
};

export default App;
