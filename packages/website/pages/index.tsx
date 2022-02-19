import { addApolloSate } from '@ethang-one/apollo';

import { HomeLayout } from '../components/home/home-layout';
import {
  HomePageQuery,
  homePageQuery,
  homePageQueryVariables,
} from '../graphql-queries';
import { apolloClient } from './_app';

const Index = (): JSX.Element => {
  return <HomeLayout />;
};

export default Index;

// eslint-disable-next-line unicorn/prevent-abbreviations,@typescript-eslint/no-unused-vars
async function getServerSideProps(): Promise<Record<string, unknown>> {
  await apolloClient.client.query<{
    TechnologyLogo: HomePageQuery;
  }>({
    query: homePageQuery,
    variables: homePageQueryVariables(),
  });

  return addApolloSate(apolloClient.client, {
    props: {},
  });
}
