import { AppProps } from 'next/app';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Render Patterns</title>
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default App;
