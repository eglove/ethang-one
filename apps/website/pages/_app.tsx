import '../../../styles/global.css';
import '../../../styles/nprogress.css';
import 'react-toastify/dist/ReactToastify.css';
import 'highlight.js/styles/github.css';

import { ApolloProvider } from '@apollo/client';
import { ApolloClientInit } from '@ethang/apollo';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import NProgress from 'nprogress';

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

export const apolloClient = new ApolloClientInit(
  'https://api.8base.com/cl0jpamca000d09l9hwznap79',
  {}
);

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ApolloProvider client={apolloClient.client}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  );
};

export default App;
