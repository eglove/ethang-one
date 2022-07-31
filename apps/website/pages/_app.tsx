import 'normalize.css/normalize.css';
import '../../../styles/global.css';
import '../../../styles/nprogress.css';
import 'highlight.js/styles/github.css';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import 'react-toastify/dist/ReactToastify.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProps } from 'next/app';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import { Suspense, useEffect } from 'react';
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

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const disqusRecommendations = document.querySelector(
        '#disqus_recommendations'
      );
      disqusRecommendations?.remove();
    }
  }, []);

  return (
    <Suspense>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <Page>
          <Component {...pageProps} />
        </Page>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
