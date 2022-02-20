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

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getServerSideProps(): Promise<Record<string, unknown>> {
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

export default Index;
