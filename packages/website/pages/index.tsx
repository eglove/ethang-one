import { addApolloState } from '@ethang-one/apollo';

import { HomeLayout } from '../components/home/home-layout';
import {
  HomePageQuery,
  homePageQuery,
  homePageQueryVariables,
} from '../graphql-queries/technology-logos-query';
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

  return addApolloState(apolloClient.client, {
    props: {},
  });
}
