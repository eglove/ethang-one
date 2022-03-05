import '../../../styles/global.css';
import '../../../styles/nprogress.css';
import 'react-toastify/dist/ReactToastify.css';
import 'highlight.js/styles/github.css';

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

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
};

export default App;
