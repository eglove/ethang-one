import '../../../styles/global.css';
import 'react-toastify/dist/ReactToastify.css';
import 'highlight.js/styles/github.css';

import { AppProps } from 'next/app';

import { Page } from '../components/common/page/page';

const app = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
};

export default app;
