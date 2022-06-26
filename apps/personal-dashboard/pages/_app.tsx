import '../styles/global.css';
import 'react-toastify/dist/ReactToastify.css';

import { ApolloProvider } from '@apollo/client';
import { ApolloClientInit } from '@ethang/apollo';
import { AppProps } from 'next/app';
import Head from 'next/head';

import PageWrapper from '../components/page-wrapper/page-wrapper';

// http://localhost:4201/graphql
const apollo = new ApolloClientInit('http://localhost:4201/graphql');

export const apolloClient = apollo.client;

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Personal Dashboard</title>
      </Head>
      <PageWrapper>
        <Component {...pageProps} />
      </PageWrapper>
    </ApolloProvider>
  );
}

export default App;
