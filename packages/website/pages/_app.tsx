import '../../../styles/global.css';
import 'react-toastify/dist/ReactToastify.css';
import 'highlight.js/styles/github.css';

import {ApolloProvider} from '@apollo/client';
import {ApolloClientInit} from '@ethang-one/apollo';
import {AppProps} from 'next/app';

import {Page} from '../components/common/page/page';
import {reactiveVariableFields} from '../graphql/reactive-variables';

const app = ({Component, pageProps}: AppProps): JSX.Element => {
  const apolloClient = new ApolloClientInit({
    typePolicies: {
      Query: {
        fields: {
          ...reactiveVariableFields,
        },
        merge: true,
      },
    },
  });

  return (
    <ApolloProvider client={apolloClient.client}>
      <Page>
        <Component {...pageProps}/>
      </Page>
    </ApolloProvider>
  );
};

export default app;
