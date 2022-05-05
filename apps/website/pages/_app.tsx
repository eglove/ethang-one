import 'normalize.css/normalize.css';
import '../../../styles/global.css';
import '../../../styles/nprogress.css';
import 'react-circular-progressbar/dist/styles.css';
import 'highlight.js/styles/github.css';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

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

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default App;
