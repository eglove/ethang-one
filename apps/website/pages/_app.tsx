import 'normalize.css/normalize.css';
import '../../../styles/global.css';
import '../../../styles/nprogress.css';
import 'highlight.js/styles/github.css';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import 'react-toastify/dist/ReactToastify.css';

import { ApolloProvider } from '@apollo/client';
import { ApolloClientInit } from '@ethang/apollo';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

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

// http://localhost:4201/graphql
// https://ethang-one.dev/graphql
const apollo = new ApolloClientInit(`https://ethang-one.dev/graphql`);

export const apolloClient = apollo.client;

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Suspense>
      <ApolloProvider client={apollo.client}>
        <ToastContainer />
        <Page>
          <Component {...pageProps} />
        </Page>
      </ApolloProvider>
    </Suspense>
  );
}

export default App;
