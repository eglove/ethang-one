import '../../../styles/global.css';
import '../../../styles/nprogress.css';
import 'react-toastify/dist/ReactToastify.css';
import 'highlight.js/styles/github.css';

import { ApolloProvider, InMemoryCacheConfig } from '@apollo/client';
import { ApolloClientInit } from '@ethang-one/apollo';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';

import { Page } from '../components/common/page/page';

Router.events.on('routeChangeStart', () => {
  return NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  return NProgress.done();
});
Router.events.on('routeChangeError', () => {
  return NProgress.done();
});

export const apolloClientConfig: [string, InMemoryCacheConfig] = [
  process.env.NX_HASURA_URL,
  {
    typePolicies: {
      Query: {
        merge: true,
      },
    },
  },
];

export const apolloClient = new ApolloClientInit(...apolloClientConfig);

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      // @ts-expect-error Added by apollo
      typeof window.__APOLLO_STATE__ !== 'undefined'
    ) {
      apolloClient.cache = apolloClient.cache.restore(
        // @ts-expect-error Added by apollo
        JSON.parse(window.__APOLLO_STATE__)
      );
    }
  }, []);

  return (
    <ApolloProvider client={apolloClient.client}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
};

export default App;
